import Input from '../Input/Input';
import Button from '../Button/Button';

import './Form.scss';

const Form = () => {

  const errors = { name: null, salary: 'Обязательное поле' };

  return (
    <form className="form">
      <div className="form__input-wrapper">
        { errors.name && <span className="form__errors">{errors.name}</span> }
        <Input
          type="text"
          placeholder="Как его зовут?"
          name="name" />
      </div>
      <div className="form__input-wrapper">
        { errors.salary && <span className="form__errors">{errors.salary}</span> }
        <Input
          type="number"
          placeholder="З/П в ₽?"
          name="salary" />
      </div>
      <Button type="submit">Добавить</Button>
    </form>
  );
}
 
export default Form;