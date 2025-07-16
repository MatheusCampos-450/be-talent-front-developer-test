'use client';

import { container, Registry } from '@/@core/infra/container-registry';
import { ListEmployeesUseCase } from '@/@core/application/employee/list-employees.use-case';

import { useIsMobile } from '@/shared/hooks/useIsMobile';

import SearchInput from '@/shared/components/SearchInput';

import TableRoot from '@/shared/components/TableDesktop/TableRoot';
import TableHeader from '@/shared/components/TableDesktop/TableHeader';
import TableBody from '@/shared/components/TableDesktop/TableBody';
import TableMobile from '@/shared/components/TableMobile';
import { useEffect, useState } from 'react';
import { EmployeeProps } from '@/@core/domain/entities/employee';

const listEmployeesUseCase = container.get<ListEmployeesUseCase>(
  Registry.ListEmployeesUseCase,
);

export default function Home() {
  const [search, setSearch] = useState<string>('');
  const [employees, setEmployees] = useState<EmployeeProps[]>([]);

  const isMobile = useIsMobile();

  useEffect(() => {
    const getEmployees = async () => {
      const employees = await listEmployeesUseCase.execute();

      setEmployees(employees);
    };

    getEmployees();
  }, []);

  const employeesFiltered = employees.filter(
    (employee) =>
      employee.job.toLowerCase().includes(search.toLowerCase()) ||
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.phone.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="pt-lg px-sm bg-gray00 flex h-full w-full flex-col items-center justify-start">
      <div className="w-full max-w-[96.1rem] flex-col sm:flex sm:flex-row sm:items-center sm:justify-between">
        <h1 className="sm:pb-none pb-[2.4rem] text-lg text-black">
          Funcionários
        </h1>

        <SearchInput search={search} setSearch={setSearch} />
      </div>

      {isMobile ? (
        <TableMobile employees={employeesFiltered} />
      ) : (
        <TableRoot className="mt-lg">
          <TableHeader />
          <TableBody employees={employeesFiltered} />
        </TableRoot>
      )}
    </div>
  );
}
