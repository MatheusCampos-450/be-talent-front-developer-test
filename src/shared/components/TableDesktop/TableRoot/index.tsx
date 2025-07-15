import React from 'react';

import { TableRootProps } from './types';

import { tableContainerStyles } from '../styles';

function TableRoot({ children, className }: TableRootProps) {
  return (
    <table
      className={tableContainerStyles({
        className,
      })}
    >
      {children}
    </table>
  );
}

export default TableRoot;
