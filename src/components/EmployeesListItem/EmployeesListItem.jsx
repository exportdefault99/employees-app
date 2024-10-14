import classNames from 'classnames';

import './EmployeesListItem.scss';

const EmployeesListItem = ({ name, salary, rise, bonus }) => {

  const listItemClasses = classNames('employees-item', { 'star': rise, 'premium': bonus });

  return (
    <li className={listItemClasses}>
      <div className="employees-item__info">
        <span className="employees-item__name" tabIndex="0">{name}</span>
        <div className="employees-item__salary">{salary} ₽</div>
      </div>
      <div className='controls'>
        <button type="button" className="controls__btn controls__btn_cookie">
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="controls__btn controls__btn_trash">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}
 
export default EmployeesListItem;