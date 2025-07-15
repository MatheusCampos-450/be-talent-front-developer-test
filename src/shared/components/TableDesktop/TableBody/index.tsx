import React from 'react';
import { tableCellStyles } from '../styles';

export interface Employee {
  id: string;
  name: string;
  photoUrl: string;
  role: string;
  admissionDate: string;
  phone: string;
}

export const employees: Employee[] = [
  {
    id: '1',
    name: 'Giovana L. Arruda',
    photoUrl: 'https://i.pravatar.cc/100?img=1',
    role: 'Front-end',
    admissionDate: '00/00/0000',
    phone: '+55 (55) 55555-5555',
  },
  {
    id: '2',
    name: 'Vanessa Machado',
    photoUrl: 'https://i.pravatar.cc/100?img=2',
    role: 'Front-end',
    admissionDate: '00/00/0000',
    phone: '+55 (55) 55555-5555',
  },
  // ... outros
];

function TableBody() {
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
              src={emp.photoUrl}
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
            {emp.role}
          </th>

          <th
            className={tableCellStyles({
              className: '',
            })}
          >
            {emp.admissionDate}
          </th>

          <th
            className={tableCellStyles({
              className: 'pr-lg! w-[19rem]',
            })}
          >
            {emp.phone}
          </th>
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
