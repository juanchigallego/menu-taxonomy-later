import React, { ReactNode, createContext, useContext, useState } from "react";
import defaultData from "../../lib/storeData.json";

type DataType = {
  name: string;
  email: string;
  logo: boolean;
  isNext: boolean;
  selectedFont: string;
};

type DataContextType = {
  data: DataType;
  updateData: (newData: Partial<DataType>) => void;
  resetData: () => void;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC = ({
  children
}: {
  children?: ReactNode;
}) => {
  const [data, setData] = useState<DataType>({
    ...defaultData,
    logo: !!defaultData.logo,
    isNext: !!defaultData.isNext,
    selectedFont: "geist"
  });

  const updateData = (newData: Partial<DataType>) => {
    setData({ ...data, ...newData });
  };

  const resetData = () => {
    setData({
      ...defaultData,
      logo: !!defaultData.logo,
      isNext: !!defaultData.isNext,
      selectedFont: "geist"
    });
  };

  return (
    <DataContext.Provider value={{ data, updateData, resetData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
