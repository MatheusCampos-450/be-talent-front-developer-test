'use client';

import React from 'react';

import { searchInputContainer, searchInput } from './styles';
import SearchIcon from '../../assets/SearchIcon';
import { SearchInputProps } from './types';

function SearchInput({ search, setSearch }: SearchInputProps) {
  return (
    <div
      className={searchInputContainer({
        hasValue: search.length > 0,
      })}
    >
      <input
        className={searchInput()}
        placeholder="Pesquisar"
        onChange={(e) => setSearch(e.currentTarget.value)}
        value={search}
      />

      <SearchIcon />
    </div>
  );
}

export default SearchInput;
