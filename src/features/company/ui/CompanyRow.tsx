import React from "react";
import { companyActions } from "@entities/company/model";
import { useAppDispatch } from "@shared/lib/hooks";
import { CompanyWithSelection } from "@entities/company/model/slice";

type CompanyRowProps = {
  company: CompanyWithSelection;
};

export const CompanyRow: React.FC<CompanyRowProps> = ({ company }) => {
  const dispatch = useAppDispatch();

  return (
    <tr className={`company-row ${company.selected ? "selected" : ""}`}>
      <td>
        <input
          type="checkbox"
          checked={company.selected}
          onChange={event =>
            dispatch(companyActions.selectCompanySelection({ id: company.id, toggle: event.target.checked }))
          }
        />
      </td>
      <td>{company.name}</td>
      <td className="company-row__employee-count">{company.employeeIds.length}</td>
      <td>{company.address}</td>
    </tr>
  );
};
