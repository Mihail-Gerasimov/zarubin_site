'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { initialFormikValue } from '../BriefClient/briefData';

interface IContextData {
  [key: string]: string;
}

interface IQuestionContext {
  data: IContextData;
  page: number;
  handleSetPage: (value: number) => void;
  handleChangeData: (name: string, value: string) => void;
  handleClearData: () => void;
  handleClearPage: () => void;
}

const QuestionContext = createContext<IQuestionContext>({
  data: initialFormikValue,
  page: 0,
  handleSetPage: () => {},
  handleChangeData: () => {},
  handleClearData: () => {},
  handleClearPage: () => {},
});
export const useQuestion = () => useContext(QuestionContext);

export const QuestionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<IContextData>(() => {
    if (typeof window !== 'undefined') {
      const storageData = localStorage.getItem('questionInfo');
      return storageData ? JSON.parse(storageData) : initialFormikValue;
    }
  });

  const [page, setPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const storagePage = localStorage.getItem('pageInfo');
      return storagePage ? JSON.parse(storagePage) : 0;
    }
  });

  const handleSetPage = (value: number) => {
    setPage(value);
    if (typeof window !== 'undefined') {
      localStorage.setItem('pageInfo', JSON.stringify(value));
    }
  };

  const handleChangeData = (name: string, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClearData = () => {
    localStorage.removeItem('questionInfo');
  };

  const handleClearPage = () => {
    localStorage.removeItem('pageInfo');
  };

  useEffect(() => {
    localStorage.setItem('questionInfo', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    const storageState = localStorage.getItem('pageInfo');
    if (!storageState) return;

    const pageInfo = JSON.parse(storageState);
    setPage(pageInfo);
  }, []);

  return (
    <QuestionContext.Provider
      value={{
        page,
        data,
        handleSetPage,
        handleChangeData,
        handleClearData,
        handleClearPage,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
