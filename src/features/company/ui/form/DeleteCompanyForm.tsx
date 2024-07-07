import { companyActions, selectCompaniesSelected } from "@entities/company/model";
import { useActionCreators, useAppSelector } from "@shared/lib/hooks";

export const DeleteCompanyForm = () => {
  const actions = useActionCreators(companyActions);
  const companiesSelected = useAppSelector(selectCompaniesSelected);

  const handleDelete = () => {
    if (companiesSelected.length > 0) {
      companiesSelected.forEach(company => {
        actions.removeCompany(company.id);
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
