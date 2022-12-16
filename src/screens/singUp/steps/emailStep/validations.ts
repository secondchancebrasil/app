import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required('Você precisa digitar seu email')
    .email('Digite um email válido'),
});
