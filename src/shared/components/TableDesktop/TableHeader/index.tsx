import React from 'react';

import { tableHeaderStyles, tableHeaderCellStyles } from '../styles';

function TableHeader() {
  return (
    <thead className={tableHeaderStyles()}>
      <tr className="shadow-custom-1 w-full rounded-t-[0.8rem]">
        <th
          className={tableHeaderCellStyles({
            className: 'pl-lg w-[10rem] rounded-tl-[0.8rem] text-white',
          })}
        >
          FOTO
        </th>

        <th
          className={tableHeaderCellStyles({
            className: 'text-white',
          })}
        >
          NOME
        </th>

        <th
          className={tableHeaderCellStyles({
            className: 'text-white',
          })}
        >
          CARGO
        </th>

        <th
          className={tableHeaderCellStyles({
            className: 'text-white',
          })}
        >
          DATA DE ADMISSÃO
        </th>

        <th
          className={tableHeaderCellStyles({
            className: 'pr-lg! w-[19rem] rounded-tr-[0.8rem] text-white',
          })}
        >
          TELEFONE
        </th>
      </tr>
    </thead>
  );
}

export default TableHeader;
