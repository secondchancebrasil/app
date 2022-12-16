import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  cellphone: yup
    .string()
    .required('Você precisa digitar o numero do seu celular.')
    .min(15, 'Você precisa digitar o numero do seu celular.'),
});
