import Info from '../Info/Info';
import SearchPanel from '../SearchPanel/SearchPanel';
import EmployeesList from '../EmployeesList/EmployeesList';
import EmployeeAddForm from '../EmployeeAddForm/EmployeeAddForm';

import './App.scss';

const App = () => {
  
  return (
    <div className="app">
      <Info />
      <SearchPanel />
      <EmployeesList />
      <EmployeeAddForm />
    </div>
  );
}
 
export default App;