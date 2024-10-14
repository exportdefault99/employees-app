import EmployeeSearch from '../EmployeeSearch/EmployeeSearch';
import EmployeeFilter from '../EmployeeFilter/EmployeeFilter';

import './SearchPanel.scss';

const SearchPanel = () => {

  return (
    <div className="search-panel">
      <EmployeeSearch />
      <EmployeeFilter />
    </div>
  );
}
 
export default SearchPanel;