import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = props => {
  const [data, setData] = useState([
    {
      name: "Arfandy",
      age: 18
    },
    {
      name: "Rati",
      age: 32
    },
    {
      name: "Rachmat Nimmubin",
      age: 5
    }
  ]);
  return (
    <DataContext.Provider value={"Hello"}>
      {props.children}
    </DataContext.Provider>
  );
};
