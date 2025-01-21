'use client';
import React, { useContext } from 'react';
import { AppStateContext } from './Provider';

const Header = () => {
  const providedObject = useContext(AppStateContext);
  const plus = () => {
    providedObject?.setState((prev) => prev + 1);
  };
  return (
    <>
      <h1>{providedObject?.state}</h1>
      <button onClick={plus}>plus</button>;
    </>
  );
};

export default Header;
