import React from 'react';
import { CompanyRow } from './CompanyRow';
import { CompanyHeader } from './CompanyHeader';

import { useAppSelector } from '@shared/lib/hooks';
import { selectCompanies } from '@entities/company/model';

import './styles.css';

export const CompanyTable: React.FC = () => {
  const companies = useAppSelector(selectCompanies);
  
  return (
    <table className="company-table">
      <CompanyHeader />
      <tbody>
        {companies.map((company) => (
          <CompanyRow key={company.id} company={company} />
        ))}
      </tbody>
    </table>
  );
};
