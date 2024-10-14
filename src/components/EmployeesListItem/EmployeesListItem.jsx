import { memo } from 'react';
import classNames from 'classnames';

import './EmployeesListItem.scss';

const EmployeesListItem = ({ id, name, salary, rise, bonus, onRemove, onToggleProp }) => {

  const listItemClasses = classNames('employees-item', { 
    'star': rise, 
    'premium': bonus 
  });

  return (
    <li className={listItemClasses}>
      <div className="employees-item__info">
        <span 
          className="employees-item__name" 
          tabIndex="0"
          onClick={() => onToggleProp(id, 'rise')}
          onKeyDown={(e) => {
            if (!(e.key === 'Enter' || e.key === ' ')) return;
            e.preventDefault();
            onToggleProp(id, 'rise');
          }}
        >
          {name}
        </span>
        <div className="employees-item__salary">{salary} ₽</div>
      </div>
      <div className='controls'>
        <button onClick={() => onToggleProp(id, 'bonus')} type="button" className="controls__btn controls__btn_cookie">
          <i className="fas fa-cookie"></i>
        </button>
        <button onClick={() => onRemove(id)} type="button" className="controls__btn controls__btn_trash">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}
 
export default memo(EmployeesListItem);