import EmployeesListItem from '../EmployeesListItem/EmployeesListItem';
import EmployeesListEmpty from '../EmployeesListEmpty/EmployeesListEmpty';

import './EmployeesList.scss';

const EmployeesList = () => {

  const employees = [
    { id: 1, name: 'Первый', salary: 55000, rise: false, bonus: false },
    { id: 2, name: 'Второй', salary: 17000, rise: true, bonus: false },
    { id: 3, name: 'Третий', salary: 32000, rise: false, bonus: true }
  ];

  const elements = employees.map(emp => <EmployeesListItem key={emp.id} {...emp} />);

  return (
    <ul className="employees-list">
      { employees.length ? elements : <EmployeesListEmpty /> }
    </ul>
  );
}
 
export default EmployeesList;