import { Employee } from '../entities/employee';

export interface EmployeeGateway {
  findAll(): Promise<Employee[]>;
}
