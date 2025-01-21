'use client';
import React, { createContext, ReactNode, useState } from 'react';

export const AppStateContext = createContext<ProviderContext | undefined>(
  undefined
);

type ProviderContext = {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
};

export function Provider({ children }: { children: ReactNode }) {
  const [state, setState] = useState(0);

  const stateObject = {
    state,
    setState,
  };

  return (
    <AppStateContext.Provider value={stateObject}>
      {children}
    </AppStateContext.Provider>
  );
}
export default Provider;
