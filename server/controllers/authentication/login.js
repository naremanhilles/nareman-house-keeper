const { sign } = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { checkEmail } = require('../../database/queries/authentication/checkMobile');

const { loginSchema } = require('../../helpers/validation-schema');

module.exports = (req, res, next) => {

  const memberInfo = { ...req.body };
  loginSchema
    .validate(memberInfo)
    .then(() => {
      checkEmail(memberInfo.mobile)
        .then(({ rows: member }) => {
          if (member[0]) {

            const { id, username } = { ...member[0] };
            const payload = { id, username };
            const token = sign(payload, process.env.SECRET);
            res.cookie('jwt', token, { maxAge: 1000 * 60 * 60 * 24 * 1 }, { httpOnly: true });
            res.status(200).send({ error: null, data: payload });

          } else next({ code: 400, msg: 'Username does not exist ' });
        })
        .catch(err => next(err));
    })
    .catch((err) => {
      next({ code: 400, msg: 'Ensure you enter validly data ' });
    });
};
