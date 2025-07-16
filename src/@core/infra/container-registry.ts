import 'reflect-metadata';

import { Container } from 'inversify';
import { http } from './http';
import { EmployeeHttpGateway } from './gateways/employee-http.gateway';
import { ListEmployeesUseCase } from '../application/employee/list-employees.use-case';

export const Registry = {
  AxiosAdapter: Symbol.for('AxiosAdapter'),

  EmployeeGateway: Symbol.for('EmployeeGateway'),

  ListEmployeesUseCase: Symbol.for('ListEmployeesUseCase'),
};

export const container = new Container();

container.bind(Registry.AxiosAdapter).toConstantValue(http);

container.bind(Registry.EmployeeGateway).toDynamicValue((context) => {
  return new EmployeeHttpGateway(context.get(Registry.AxiosAdapter));
});

container.bind(Registry.ListEmployeesUseCase).toDynamicValue((context) => {
  return new ListEmployeesUseCase(context.get(Registry.EmployeeGateway));
});
