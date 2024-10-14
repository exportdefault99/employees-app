import Form from '../Form/Form';

import './EmployeeAddForm.scss';

const EmployeeAddForm = () => {

  return (
    <div className="add-form">
      <h3 className="title title_h3">Добавьте нового сотрудника</h3>
      <Form />
    </div>
  );
}
 
export default EmployeeAddForm;