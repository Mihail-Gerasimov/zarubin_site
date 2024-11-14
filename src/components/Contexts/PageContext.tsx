'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface IPageContext {
  page: number;
  handleSetPage: (value: number) => void;
}

const PageContext = createContext<IPageContext>({
  page: 0,
  handleSetPage: () => {},
});

export const usePage = () => useContext(PageContext);

export const PageProvoder = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState(0);

  const handleSetPage = (value: number) => {
    setPage(value);
    localStorage.setItem('pageInfo', JSON.stringify(value));
  };

  useEffect(() => {
    const storageState = localStorage.getItem('pageInfo');
    if (storageState) {
      const pageInfo = JSON.parse(storageState);
      setPage(pageInfo);
    }
    return;
  }, []);

  return (
    <PageContext.Provider value={{ page, handleSetPage }}>
      {children}
    </PageContext.Provider>
  );
};
