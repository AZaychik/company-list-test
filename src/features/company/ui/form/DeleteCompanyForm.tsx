import { companyActions, selectCompaniesSelected } from "@entities/company/model";
import { useAppSelector } from "@shared/lib/hooks";
import { useDispatch } from "react-redux";

export const DeleteCompanyForm = () => {
  const dispatch = useDispatch();
  const companiesSelected = useAppSelector(selectCompaniesSelected);

  const handleDelete = () => {
    if (companiesSelected.length > 0) {
      companiesSelected.forEach(company => {
        dispatch(companyActions.removeCompany(company.id));
      });
    }
  };

  return (
    <div className="delete-form">
      <div>
        Выберите компании, <br /> которые хотите удалить
      </div>
      <button className="submit-button" onClick={handleDelete}>
        Удалить компанию
      </button>
    </div>
  );
};
