import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup.string().required('Você precisa digitar seu nome'),
});
