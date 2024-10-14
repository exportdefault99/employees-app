import { useSelector, useDispatch } from 'react-redux';
import { selectActiveFilter } from '../../redux/selectors';
import { changeFilters } from '../../redux/actions';
import { FILTER_BUTTONS } from '../../utils/constants';

import Button from '../Button/Button';

import './EmployeeFilter.scss';

const EmployeeFilter = () => {

  const activeFilter = useSelector(selectActiveFilter);
  const dispatch = useDispatch();

  const buttons = FILTER_BUTTONS.map(({ value, label }) => (
    <Button 
      key={value} 
      type="button" 
      isActive={value === activeFilter}
      onClick={() => dispatch(changeFilters({ filterType: 'activeFilter', value }))}
    >
      {label}
    </Button>
  ));

  return (
    <div className="filter">
      {buttons}
    </div>
  );
}
 
export default EmployeeFilter;