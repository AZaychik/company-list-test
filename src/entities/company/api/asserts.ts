import { isObject } from "@shared/lib/helpers";
import { Company } from "../model";

/** Утвердить, что value является типом Company. */
export function assertCompany(value: unknown): asserts value is Company {
  if (!isObject(value)) {
    return;
  }
  if (!("id" in value) || typeof value.id !== "string") {
    console.error("value.id не существует или поле не того типа");
  }
  if (!("name" in value) || typeof value.name !== "string") {
    console.error("value.name не существует или поле не того типа");
  }
  if (!("employeeIds" in value) || !Array.isArray(value.employeeIds)) {
    console.error("value.employeeIds не существует или поле не того типа");
  }
  if (!("address" in value) || typeof value.address !== "string") {
    console.error("value.address не существует или поле не того типа");
  }
}
