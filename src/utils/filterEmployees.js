export const countBonusEmployees = employees => employees.filter(emp => emp.bonus).length;

export const filteredEmployeesBySearch = (employees, term) => {
  return term.length ? employees.filter(emp => emp.name.toLowerCase().includes(term)) : employees;
};

export const filteredEmployeesByActiveFilter = (employees, filter) => {
  switch (filter) {
    case 'rise':
      return employees.filter(emp => emp.rise);
    case 'moreThan25000':
      return employees.filter(emp => emp.salary >= 25000);
    default:
      return employees;
  }
};

export const filteredEmployeesByAll = (filteredEmployeesBySearch, filteredEmployeesByActiveFilter) => {
  return filteredEmployeesBySearch.filter(emp => filteredEmployeesByActiveFilter.includes(emp));
}