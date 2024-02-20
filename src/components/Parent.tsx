import React, { SetStateAction, createContext, useState } from "react";
import Child from "./Child";

export type ContextType = {
  text: string;
  setText: React.Dispatch<SetStateAction<string>>;
  count: number;
  setCount: React.Dispatch<SetStateAction<number>>;
};

export const AppContext = createContext<ContextType | null>(null);

export default function Parent() {
  const [text, setText] = useState<string>("This is the default value");
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <h1> Parent</h1>
        <p>{text}</p>
        <p>Child button has been clicked {count} times</p>
      </div>

      <div>
        <AppContext.Provider value={{ text, setText, count, setCount }}>
          <Child />
        </AppContext.Provider>
      </div>
    </div>
  );
}
