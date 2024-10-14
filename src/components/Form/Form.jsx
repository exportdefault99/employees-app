import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../redux/actions';
import { validationSchema } from '../../utils/validationSchema';

import Input from '../Input/Input';
import Button from '../Button/Button';

import './Form.scss';

const Form = () => {

  const [employeeData, setEmployeeData] = useState({ name: '', salary: '' });
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  const onValueChange = (e) => {
    setEmployeeData(employeeData => ({
      ...employeeData,
      [e.target.name]: e.target.value
    }));
  }

  const onAdd = (data) => {
    dispatch(addEmployee(data));
    setEmployeeData({ name: '', salary: '' });
    setErrors({});
  }

  const onError = (error) => {
    const errors = error.inner.reduce((errorObj, { path, message }) => ({ ...errorObj, [path]: message }), {});
    setErrors(errors);
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();

    validationSchema
      .validate(employeeData, { abortEarly: false })
      .then(onAdd)
      .catch(onError);
  }

  return (
    <form onSubmit={onHandleSubmit} className="form">
      <div className="form__input-wrapper">
        { errors.name && <span className="form__errors">{errors.name}</span> }
        <Input
          type="text"
          placeholder="Как его зовут?"
          name="name"
          value={employeeData.name}
          onChange={onValueChange} />
      </div>
      <div className="form__input-wrapper">
        { errors.salary && <span className="form__errors">{errors.salary}</span> }
        <Input
          type="number"
          placeholder="З/П в ₽?"
          name="salary"
          value={employeeData.salary}
          onChange={onValueChange} />
      </div>
      <Button type="submit">Добавить</Button>
    </form>
  );
}

export default Form;