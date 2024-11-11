'use client';

import { useContext, createContext, useEffect, useState } from 'react';
import { initialFormikValue } from '../BriefClient/briefData';

interface IContextData {
  [key: string]: string;
}

interface IQuestionContext {
  data: IContextData;
  page: number;
  handleSetPage: (value: number) => void;
  handleChangeData: (name: string, value: string) => void;
}

const QuestionContext = createContext<IQuestionContext>({
  data: initialFormikValue,
  page: 0,
  handleSetPage: () => {},
  handleChangeData: () => {},
});
export const useQuestion = () => useContext(QuestionContext);

export const QuestionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<IContextData>(() => {
    const storageData = localStorage.getItem('questionInfo');
    return storageData ? JSON.parse(storageData) : initialFormikValue;
  });

  const [page, setPage] = useState(() => {
    const storagePage = localStorage.getItem('pageInfo');
    return storagePage ? JSON.parse(storagePage) : 0;
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

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     localStorage.setItem('questionInfo', JSON.stringify(data));
  //   }
  // }, [data]);

  // useEffect(() => {
  //   // if (typeof window !== 'undefined') {
  //   const storageData = localStorage.getItem('questionInfo');
  //   if (storageData) {
  //     setData(JSON.parse(storageData));
  //   } else {
  //     setData(initialFormikValue);
  //   }

  //   // const storagePage = localStorage.getItem('pageInfo');
  //   // if (storagePage) {
  //   //   setPage(JSON.parse(storagePage));
  //   // }
  // }, []);

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
      value={{ page, data, handleSetPage, handleChangeData }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
