import { FILTER_BUTTONS } from '../../utils/constants';

import Button from '../Button/Button';

import './EmployeeFilter.scss';

const EmployeeFilter = () => {

  const activeFilter = 'all';

  const buttons = FILTER_BUTTONS.map(({ value, label }) => (
    <Button key={value} type="button" isActive={value === activeFilter}>
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