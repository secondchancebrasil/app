import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  birthDate: yup
    .string()
    .required('Você precisa preencher sua data de nascimento.'),
});
