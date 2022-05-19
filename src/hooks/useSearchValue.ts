import { createContext, useContext } from 'react';
import type { SearchValueHooks } from 'types';

export const SearchValueContext = createContext<SearchValueHooks>({
  value: '',
  setValue: () => {},
});

export const useSearchValue = (): SearchValueHooks => useContext(SearchValueContext);
