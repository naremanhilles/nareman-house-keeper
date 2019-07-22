import * as yup from 'yup';

const signupValidation = yup.object().shape({
  mobile: yup
    .string()
    .min(10)
    .max(16)
    .required(),
  username: yup
    .string()
    .max(254)
    .min(3)
    .matches(/^[أ-يA-Za-z0-9\s]*$/)
    .required(),
});
export default signupValidation;
