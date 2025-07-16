import { AxiosInstance } from 'axios';
import { Employee } from '@/@core/domain/entities/employee';
import { EmployeeGateway } from '@/@core/domain/gateways/employee.gateway';

export class EmployeeHttpGateway implements EmployeeGateway {
  constructor(private http: AxiosInstance) {}

  findAll(): Promise<Employee[]> {
    return this.http.get<Employee[]>('employees').then((res) =>
      res.data.map(
        (data) =>
          new Employee({
            id: data.id,
            name: data.name,
            admission_date: data.admission_date,
            image: data.image,
            job: data.job,
            phone: data.phone,
          }),
      ),
    );
  }
}
