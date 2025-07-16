import { EmployeeGateway } from '@/@core/domain/gateways/employee.gateway';
import { Employee } from '@/@core/domain/entities/employee';

export class ListEmployeesUseCase {
  constructor(private productGateway: EmployeeGateway) {}

  async execute(): Promise<Employee[]> {
    return this.productGateway.findAll();
  }
}
