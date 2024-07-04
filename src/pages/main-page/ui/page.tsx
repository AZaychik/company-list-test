import React, { useEffect } from 'react';
import { fetchedCompanies } from '@entities/company/model';
import { CompanyTable } from '@features/company/ui';
import { useAppDispatch } from '@shared/lib/hooks';
import './styles.css';


export const MainPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchedCompanies());
  }, []);

  return (
    <div className="main-page">
      <CompanyTable />
    </div>
  );
};
