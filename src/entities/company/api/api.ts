import { InfinityScroll } from "@shared/lib/types";
import { CompanyMapper } from "../model/mapper";
import { Company, CompanyQueryOptionsForInfinityScroll } from "../model/types";
import { assertCompany } from "./asserts";
import { delay } from "@shared/lib/helpers";

export class CompanyService {
  /** Извлечь компании. */
  static async fetchCompanies(options: CompanyQueryOptionsForInfinityScroll): Promise<InfinityScroll<Company>> {
    const { lastVisibleEntity, countOfEntities } = options;
    const response = await fetch("/data/company.json");

    await delay(1000);

    if (!response.ok) {
      throw new Error("Ошибка при получении списка компаний");
    }

    const data = await response.json();

    const companies: Company[] = data.map((dto: unknown) => {
      assertCompany(dto);
      return CompanyMapper.fromDto(dto);
    });

    const startPosition = lastVisibleEntity
      ? companies.findIndex(company => company.id === lastVisibleEntity.id) + 1
      : 0;

    const isLastVisibleEntityLastInList = startPosition === companies.length;

    return {
      entities: companies.slice(0, startPosition + countOfEntities),
      hasNext: companies.length !== 0 && !isLastVisibleEntityLastInList,
    };
  }
}
