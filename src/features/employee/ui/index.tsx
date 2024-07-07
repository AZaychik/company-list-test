import React, { useEffect } from "react";
import { useAppSelector, useActionCreators } from "@shared/lib/hooks";
import { employeeActions } from "@entities/employee/model";
import { selectCompaniesSelected, selectOneCompanySelected } from "@entities/company/model";
import { EmployeeTable } from "./EmployeeTable";

import "./styles.css";

export const EmployeeTableWrapper: React.FC = () => {
  const actions = useActionCreators(employeeActions);
  const selectedCompanies = useAppSelector(selectCompaniesSelected);
  const isAnyCompanySelected = useAppSelector(selectOneCompanySelected);

  useEffect(() => {
    if (selectedCompanies.length > 0) {
      selectedCompanies.forEach(company => {
        actions.selectedEmployees(company);
      });
    }
  }, [selectedCompanies]);

  if (!isAnyCompanySelected || !selectedCompanies.length) {
    return <div>Выберите компанию</div>;
  }

  return (
    <div className="employee-table-wrapper">
      {selectedCompanies.map(company => (
        <div key={company.id} className="employee-table">
          <EmployeeTable company={company} />
        </div>
      ))}
    </div>
  );
};
