import { isObject } from "@shared/lib/helpers";
import { Company } from "./types";

export class CompanyMapper {
  /**
   * Преобразовать DTO в модель.
   * @param dto Company dto.
   */
  static fromDto(dto: unknown): Company {
    assertCompany(dto)

    return {
      id: dto.id ?? "",
      name: dto.name ?? "",
      employeeIds: dto.employeeIds ?? [],
      address: dto.address ?? "",
    };
  }
}

/** Утвердить, что value является типом Company. */
function assertCompany(value: unknown): asserts value is Company {
  if (!isObject(value)) {
    return;
  }
  if (!("id" in value) || typeof value.id !== 'string') {
    console.error('value.id не существует или поле не того типа');
  }
  if (!("name" in value) || typeof value.name !== 'string') {
    console.error('value.name не существует или поле не того типа');
  }
  if (!("employeeIds" in value) || !Array.isArray(value.employeeIds)) {
    console.error('value.employeeIds не существует или поле не того типа');
  }
  if (!("address" in value) || typeof value.address !== 'string') {
    console.error('value.address не существует или поле не того типа');
  }
}

