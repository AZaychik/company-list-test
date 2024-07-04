import React from 'react';
import { CompanyRow } from './CompanyRow';

import './styles.css';
import { CompanyHeader } from './CompanyHeader';
import { useAppSelector } from '@shared/lib/hooks';
import { selectCompanies } from '@entities/company/model';

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
