import { EmployeeMapper } from "../model/mapper";
import { Employee } from "../model/types";

export class EmployeeService {
  /** Извлечь сотрудников. */
  static async fetchEmployees(): Promise<Employee[]> {
    const response = await fetch("/data/employees.json");
    if (!response.ok) {
      throw new Error("Ошибка при получении списка сотрудников");
    }
    const data = await response.json();
    return data.map((dto: unknown) => EmployeeMapper.fromDto(dto));
  }
}
