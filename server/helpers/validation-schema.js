const yup = require('yup');

exports.singUpSchema = yup.object().shape({
  username: yup.string().max(254).matches(/^[أ-يA-Za-z0-9\s]*$/).min(3).required(),
  mobile: yup
    .string()
    .min(10)
    .max(16)
    .required(),
});

exports.loginSchema = yup.object().shape({
  mobile: yup
    .string()
    .min(10)
    .max(16)
    .required(),
});


