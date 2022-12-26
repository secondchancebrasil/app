import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Você precisa digitar seu email')
    .email('Digite um email válido'),
  password: yup
    .string()
    .required('Você precisa digitar uma senha')
    .min(8, 'Deve ter no mínimo 8 caracteres'),
});
