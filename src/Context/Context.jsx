import React, { createContext, useReducer } from "react";

export const DetailContext = createContext();

const initialState = {
  tableData: [],
  customTableData: [],
};

const detailReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_TABLE_DATA":
      return {
        ...state,
        tableData: action.payload,
      };
    case "ADD_CUSTOM_DATA":
      return {
        ...state,
        customTableData: [...state.customTableData, action.payload],
      };
    case "REMOVE_CUSTOM_DATA":
      return {
        ...state,
        customTableData: state.customTableData.filter(
          (item, index) => index !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const DetailContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(detailReducer, initialState);

  return (
    <DetailContext.Provider value={{ state, dispatch }}>
      {children}
    </DetailContext.Provider>
  );
};
