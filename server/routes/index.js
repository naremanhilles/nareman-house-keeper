const router = require('express').Router();

const {
  authentication,
  member,
  erros,
} = require('../controllers');

router.post('/login', authentication.login);

router.post('/members', member.addMember);

router.use(authentication.authentication);

router.get('/isAuthenticated', authentication.isAuthenticated);

router.get('/logout', authentication.logout);

router.use(erros.notFound);
router.use(erros.serverError);
module.exports = router;
