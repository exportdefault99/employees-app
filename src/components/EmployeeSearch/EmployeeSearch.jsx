import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSearchTerm } from '../../redux/selectors';
import { changeFilters } from '../../redux/actions';

import Input from '../Input/Input';

const EmployeeSearch = () => {
  
  const [value, setValue] = useState('');
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  useEffect(() => {
    // Осторожно, костыль
    const newValue = value.trim().toLowerCase();

    if (newValue === searchTerm) return;

    if (!newValue.length && searchTerm.length) {
      dispatch(changeFilters({ filterType: 'searchTerm', value: newValue }));
      return;
    }

    const timerId = setTimeout(() => {
      dispatch(changeFilters({ filterType: 'searchTerm', value: newValue }));
    }, 1500);

    return () => clearTimeout(timerId);
    // eslint-disable-next-line
  }, [dispatch, value]);

  return (
    <Input
      type="text"
      placeholder="Найти сотрудника"
      value={value}
      onChange={(e) => setValue(e.target.value)} />
  );
}
 
export default EmployeeSearch;