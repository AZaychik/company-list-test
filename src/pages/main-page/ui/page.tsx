import React, { useEffect } from "react";
import { fetchedEmployees } from "@entities/employee/model";
import { fetchedCompanies, selectCompanies } from "@entities/company/model";
import { CompanyTable } from "@features/company/ui";
import { EmployeeTableWrapper } from "@features/employee/ui";
import { AddCompanyForm, DeleteCompanyForm } from "@features/company/ui/form";

import { useAppDispatch, useAppSelector } from "@shared/lib/hooks";
import "./styles.css";

export const MAX_COUNT_COMPANY_PER_PAGE = 25;

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const companies = useAppSelector(selectCompanies);
  const lastCompany = companies[companies.length - 1] || null;

  useEffect(() => {
    dispatch(fetchedCompanies({ countOfEntities: MAX_COUNT_COMPANY_PER_PAGE, lastVisibleEntity: lastCompany }));
    dispatch(fetchedEmployees());
  }, []);

  return (
    <div className="main-page">
      <div className="form">
        <AddCompanyForm />
        <DeleteCompanyForm />
      </div>

      <CompanyTable />
      <EmployeeTableWrapper />
    </div>
  );
};
