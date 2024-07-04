import React, { useEffect } from 'react';
import { fetchedEmployees } from '@entities/employee/model';
import { fetchedCompanies } from '@entities/company/model';
import { CompanyTable } from '@features/company/ui';
import { EmployeeTableWrapper } from '@features/employee/ui';


import { useAppDispatch } from '@shared/lib/hooks';
import './styles.css';

export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchedCompanies());
    dispatch(fetchedEmployees());
  }, []);

  return (
    <div className="main-page">
      <CompanyTable />
      <EmployeeTableWrapper />
    </div>
  );
};
