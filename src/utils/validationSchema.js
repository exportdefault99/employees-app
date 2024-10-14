import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, 'Имя должно содержать не менее 4 символов')
    .max(17, 'Имя должно содержать не более 17 символов')
    .required('Пожалуйста, введите имя'),
  salary: yup
    .number()
    .typeError('Пожалуйста, укажите зарплату')
    .min(15000, 'Минимальная зарплата - 15000 ₽')
    .max(60000, 'Максимальная зарплата - 60000 ₽')
});