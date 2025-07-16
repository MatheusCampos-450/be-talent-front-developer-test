'use client';

import React, { useState } from 'react';

import ArrowUpIcon from '../../assets/ArrowUpIcon';
import ArrowDownIcon from '../../assets/ArrowDownIcon';
import { TableMobileProps } from './types';
import { formatPhoneNumber } from '@/shared/utils/format-phone-number';

function TableMobile({ employees }: TableMobileProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="pt-sm w-full rounded-[0.8rem]">
      <div className="px-xs bg-blue-primary flex h-[4.7rem] w-full items-center justify-between rounded-t-[0.8rem]">
        <div className="flex items-center">
          <h2 className="text-md mr-[2.4rem] font-medium text-white">FOTO</h2>

          <h2 className="text-md font-medium text-white">NOME</h2>
        </div>

        <div className="mr-[0.6rem] h-[0.8rem] w-[0.8rem] rounded-full bg-white" />
      </div>

      {employees.map((emp) => {
        const isOpen = expandedId === emp.id;

        return (
          <div key={emp.id} className="shadow-custom-1 px-xs w-full bg-white">
            <button
              className="flex h-[6rem] w-full items-center justify-between"
              onClick={() => toggleCard(emp.id)}
            >
              <div className="flex items-center">
                <img
                  src={emp.image}
                  alt={emp.name}
                  className="mr-[2.4rem] h-[3.4rem] w-[3.4rem] rounded-full"
                />

                <p className="text-md font-regular text-black">{emp.name}</p>
              </div>

              {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </button>

            {isOpen && (
              <div className="flex h-[14rem] w-full flex-col items-center justify-center gap-[1.5rem] leading-7">
                <div className="border-gray10 text-md flex w-full justify-between border-b border-dashed">
                  <span className="font-medium">Cargo: </span> {emp.job}
                </div>
                <div className="border-gray10 text-md flex w-full justify-between border-b border-dashed">
                  <span className="font-medium">Data de admissão: </span>{' '}
                  {new Date(emp.admission_date).toLocaleDateString('pt-BR')}
                </div>
                <div className="border-gray10 text-md flex w-full justify-between border-b border-dashed">
                  <span className="font-medium">Telefone: </span>{' '}
                  {formatPhoneNumber(emp.phone)}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default TableMobile;
