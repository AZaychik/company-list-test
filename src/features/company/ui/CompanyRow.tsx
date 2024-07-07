import React from "react";
import { companyActions } from "@entities/company/model";
import { useActionCreators } from "@shared/lib/hooks";
import { CompanyWithSelection } from "@entities/company/model/slice";

type CompanyRowProps = {
  company: CompanyWithSelection;
};

export const CompanyRow: React.FC<CompanyRowProps> = ({ company }) => {
  const actions = useActionCreators(companyActions);

  const handleCompanySelectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    actions.selectCompanySelection({ id: company.id, toggle: event.target.checked });
  };

  return (
    <tr className={`company-row ${company.selected ? "selected" : ""}`}>
      <td>
        <input type="checkbox" checked={company.selected} onChange={handleCompanySelectionChange} />
      </td>
      <td>{company.name}</td>
      <td className="company-row__employee-count">{company.employeeIds.length}</td>
      <td>{company.address}</td>
    </tr>
  );
};
