import RootElement from './src/context/root-element';
import './src/styles/global.css'

import React from 'react';


export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>;
};