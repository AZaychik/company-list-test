import { isObject } from "@shared/lib/helpers";
import { Employee } from "./types";

export class EmployeeMapper {
  /**
   * Преобразовать DTO в модель.
   * @param dto Employee dto.
   */
  static fromDto(dto: unknown): Employee {
    assertEmployee(dto);

    return {
      id: dto.id ?? "",
      name: dto.name ?? "",
      surname: dto.surname ?? "",
      position: dto.position ?? "",
    };
  }
}

/** Утвердить, что value является типом Employee. */
function assertEmployee(value: unknown): asserts value is Employee {
  if (!isObject(value)) {
    return;
  }
  if (!("id" in value) || typeof value.id !== "string") {
    console.error("value.id не существует или поле не того типа");
  }
  if (!("name" in value) || typeof value.name !== "string") {
    console.error("value.name не существует или поле не того типа");
  }
  if (!("surname" in value) || typeof value.surname !== "string") {
    console.error("value.surname не существует или поле не того типа");
  }
  if (!("position" in value) || typeof value.position !== "string") {
    console.error("value.position не существует или поле не того типа");
  }
}
