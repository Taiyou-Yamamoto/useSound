'use client';
import React, { useContext } from 'react';
import { AppStateContext } from '../Provider';

const Page = () => {
  const providedObject = useContext(AppStateContext);
  const plus = () => {
    providedObject?.setState((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Aのページ</h1>
      <h1>{providedObject?.state}</h1>
      <button onClick={plus}>plus</button>;
    </div>
  );
};

export default Page;
