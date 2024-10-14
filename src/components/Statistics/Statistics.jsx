import { useSelector } from 'react-redux';
import { selectTotalEmployees, selectTotalBonusEmployees } from '../../redux/selectors';

const Statistics = () => {
  
  const totalEmployees = useSelector(selectTotalEmployees);
  const totalBonusEmployees = useSelector(selectTotalBonusEmployees);

  return (
    <>
      <h2 className="title title_h2">Общее число сотрудников: {totalEmployees}</h2>
      <h2 className="title title_h2">Премию получат: {totalBonusEmployees}</h2>
    </>
  );
}
 
export default Statistics;