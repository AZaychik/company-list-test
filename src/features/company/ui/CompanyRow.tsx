import React from 'react';
import { companyActions } from '@entities/company/model';
import { CompanyWithSelection } from '@entities/company/model/slice';
import { useAppDispatch } from '@shared/lib/hooks';

type CompanyRowProps = {
  company: CompanyWithSelection;
};

export const CompanyRow: React.FC<CompanyRowProps> = ({ company }) => {
  const dispatch = useAppDispatch();

  return (
    <tr className={`company-row ${company.selected ? 'selected' : ''}`}>
      <td>
        <input
          type="checkbox"
          checked={company.selected}
          onChange={() => dispatch(companyActions.selectCompanySelection(company.id))}
        />
      </td>
      <td>{company.name}</td>
      <td>{company.employeeIds.length}</td>
      <td>{company.address}</td>
    </tr>
  );
};
