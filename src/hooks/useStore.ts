import { useContext } from 'react';
import { RootContext } from '../contexts/RootContext';
import { StoreType } from '../store/store';

export const useStore = (): StoreType => {
  const rootContext = useContext(RootContext);
  if (!rootContext) {
    throw new Error('No RootContext provider found');
  }
  return rootContext;
};
