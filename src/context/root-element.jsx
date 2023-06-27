import React from 'react';
import { AppProvider } from './context';

const RootElement = ({ children }) => {
  return <AppProvider>{children}</AppProvider>;
};

export default RootElement;