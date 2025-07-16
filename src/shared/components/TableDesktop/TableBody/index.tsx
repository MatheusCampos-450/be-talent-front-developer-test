import React from 'react';
import { tableCellStyles } from '../styles';
import { TableBodyProps } from './types';
import { formatPhoneNumber } from '@/shared/utils/format-phone-number';

function TableBody({ employees }: TableBodyProps) {
  return (
    <tbody>
      {employees.map((emp) => (
        <tr key={emp.id} className="shadow-custom-1 h-[4.9rem] w-full bg-white">
          <th
            className={tableCellStyles({
              className: 'pl-lg w-[10rem]',
            })}
          >
            <img
              src={emp.image}
              alt={emp.name}
              className="h-[3.4rem] w-[3.4rem] rounded-full"
            />
          </th>

          <th
            className={tableCellStyles({
              className: '',
            })}
          >
            {emp.name}
          </th>

          <th
            className={tableCellStyles({
              className: '',
            })}
          >
            {emp.job}
          </th>

          <th
            className={tableCellStyles({
              className: '',
            })}
          >
            {new Date(emp.admission_date).toLocaleDateString('pt-BR')}
          </th>

          <th
            className={tableCellStyles({
              className: 'pr-lg! w-[19rem]',
            })}
          >
            {formatPhoneNumber(emp.phone)}
          </th>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
