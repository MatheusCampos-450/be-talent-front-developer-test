'use client';

import React from 'react';

import { searchInputContainer, searchInput } from './styles';
import SearchIcon from '../SearchIcon';

function SearchInput() {
  return (
    <div
      className={searchInputContainer({
        hasValue: true,
      })}
    >
      <input className={searchInput()} placeholder="Pesquisar" />

      <SearchIcon />
    </div>
  );
}

export default SearchInput;
