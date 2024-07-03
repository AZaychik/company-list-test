import { CompanyWithSelection } from '@entities/company/model/slice';
import React from 'react';

type CompanyRowProps = {
  company: CompanyWithSelection;
};

export const CompanyRow: React.FC<CompanyRowProps> = ({ company }) => {

  return (
    <tr className={`company-row ${company.selected ? 'selected' : ''}`}>
      <td>
        <input
          type="checkbox"
          checked={company.selected}
        />
      </td>
      <td>{company.name}</td>
      <td>{company.employeeIds.length}</td>
      <td>{company.address}</td>
    </tr>
  );
};
