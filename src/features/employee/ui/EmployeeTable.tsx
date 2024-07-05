import { CompanyWithSelection } from "@entities/company/model/slice";
import { selectSelectedEmployees } from "@entities/employee/model";
import { useAppSelector } from "@shared/lib/hooks";

type EmployeeTableProps = {
  company: CompanyWithSelection;
};

export const EmployeeTable: React.FC<EmployeeTableProps> = ({ company }) => {
  const selectedEmployees = useAppSelector(selectSelectedEmployees);
  const currentCompany = selectedEmployees[company.id];

  if (!currentCompany) {
    return <div>Компания не выбрана</div>;
  }

  if (!selectedEmployees) {
    return <div>У компании не найдено сотрудников! -_-</div>;
  }

  return (
    <div className="employee-table">
      <h2>{company.name}</h2>
      <p>Количество сотрудников: {company.employeeIds.length}</p>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Позиция</th>
          </tr>
        </thead>
        <tbody>
          {currentCompany.map(employee => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>{employee.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
