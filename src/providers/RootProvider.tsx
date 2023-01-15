import { RootContext } from '../contexts/RootContext';
import { FC, ReactNode } from 'react';
import store from '../store/store';

export interface RootProviderProps {
  children: ReactNode;
}

const RootProvider: FC<RootProviderProps> = (props) => {
  const state = store();

  return (
    <RootContext.Provider value={state}>
      {props.children}
    </RootContext.Provider>
  );
};

export default RootProvider;
