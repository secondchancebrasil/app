import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required('Você precisa digitar uma senha')
    .min(8, 'Deve ter no mínimo 8 caracteres'),
  passwordConfirmation: yup
    .string()
    .required('Você precisa digitar novamente a senha!')
    .min(8, 'Deve ter no mínimo 8 caracteres')
    .oneOf([yup.ref('password'), null], 'As senhas não são iguais.'),
});
