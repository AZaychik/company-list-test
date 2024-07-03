import { CompanyMapper } from "../model/mapper";
import { Company } from "../model/types";

export class CompanyService {

  /** Извлечь компании. */
  static async fetchCompanies(): Promise<Company[]> {
    const response = await fetch('/data/company.json');
    if (!response.ok) {
      throw new Error('Ошибка при получении списка компаний');
    }
    const data = await response.json();
    return data.map((dto: unknown) => CompanyMapper.fromDto(dto));
  }
}