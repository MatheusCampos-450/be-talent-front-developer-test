import { Dispatch, SetStateAction } from 'react';

export type SearchInputProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};
