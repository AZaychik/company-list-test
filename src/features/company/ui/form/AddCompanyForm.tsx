import { companyActions } from "@entities/company/model";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

type FormData = {
  id: string;
  name: string;
  employeeIds: string[];
  address: string;
};

const ininitialFormData = {
  id: "",
  name: "",
  employeeIds: [],
  address: "",
};

export const AddCompanyForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FormData>(ininitialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prevForm => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.name.trim()) {
      dispatch(
        companyActions.addCompany({
          id: uuidv4(),
          name: formData.name.trim(),
          employeeIds: [],
          address: formData.address.trim(),
          selected: false,
        })
      );
      setFormData(ininitialFormData);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="company-name" className="label">
        Название компании:
      </label>
      <input
        type="text"
        id="company-name"
        name="name"
        placeholder="Название компании"
        value={formData.name}
        onChange={handleChange}
        className="input-field"
      />
      <input
        type="text"
        id="company-address"
        name="address"
        placeholder="Адрес компании"
        value={formData.address}
        onChange={handleChange}
        className="input-field"
      />
      <button type="submit" className="submit-button">
        Добавить компанию
      </button>
    </form>
  );
};
