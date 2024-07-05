import { Company } from "./types";

export class CompanyMapper {
  /**
   * Преобразовать DTO в модель.
   * @param dto Company dto.
   */
  static fromDto(dto: Company): Company {
    return {
      id: dto.id ?? "",
      name: dto.name ?? "",
      employeeIds: dto.employeeIds ?? [],
      address: dto.address ?? "",
    };
  }
}
