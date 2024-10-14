import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredEmployees } from '../../redux/selectors';
import { removeEmployee, toggleEmployeeProp } from '../../redux/actions';

import EmployeesListItem from '../EmployeesListItem/EmployeesListItem';
import EmployeesListEmpty from '../EmployeesListEmpty/EmployeesListEmpty';

import './EmployeesList.scss';

const EmployeesList = () => {

  const employees = useSelector(selectFilteredEmployees);
  const dispatch = useDispatch();

  const onRemove = useCallback((id) => {
    dispatch(removeEmployee(id));
  }, [dispatch]);

  const onToggleProp = useCallback((id, prop) => {
    dispatch(toggleEmployeeProp({ id, prop }));
  }, [dispatch]);

  const elements = employees.map(emp => (
    <EmployeesListItem 
      key={emp.id} 
      {...emp}
      onRemove={onRemove}
      onToggleProp={onToggleProp} />
  ));

  return (
    <ul className="employees-list">
      { employees.length ? elements : <EmployeesListEmpty /> }
    </ul>
  );
}
 
export default EmployeesList;