import { useSelector } from 'react-redux';
import { selectTotalEmployees } from '../../redux/selectors';

import './EmployeesListEmpty.scss';

const EmployeesListEmpty = () => {

  const totalEmployees = useSelector(selectTotalEmployees);

  return (
    <li className="list-empty">
      { totalEmployees ? 'По выбранным критериям сотрудники не найдены' : 'В компании отсутствуют сотрудники' }
    </li>
  );
}
 
export default EmployeesListEmpty;