import React, { createContext, useContext, useState } from 'react';

const PageStyleContext = createContext();

export const PageStyleProvider = ({ children }) => {
  const [pageStyle, setPageStyle] = useState('');

  return (
    <PageStyleContext.Provider value={{ pageStyle, setPageStyle }}>
      {children}
    </PageStyleContext.Provider>
  );
};

export const usePageStyle = () => useContext(PageStyleContext);
