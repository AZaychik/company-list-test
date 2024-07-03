import React from 'react';


import { CompanyTable } from '@features/company/ui';
import './styles.css';

export const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <CompanyTable />
    </div>
  );
};
