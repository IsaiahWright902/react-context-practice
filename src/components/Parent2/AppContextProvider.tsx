import { ReactNode, createContext, useContext, useState } from "react";

type AppContextProps = {
  items: ItemType[];
  addItem: (item: ItemType) => void;
};

export type ItemType = {
  name: string;
  description: string;
  rating: number;
};

const AppContext = createContext<AppContextProps | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

const AppProvider: React.FC<AuthProviderProps> = ({
  children,
}: AuthProviderProps) => {
  const [items, setItems] = useState<ItemType[]>([]);

  const addItem = (item: ItemType) => {
    setItems([...items, item]);
  };

  return (
    <AppContext.Provider value={{ items, addItem }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) return null;

  return context;
};

export default AppProvider;
