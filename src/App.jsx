import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Details from "./Components/Details";
import { DetailContextProvider } from "./Context/Context";

function App() {
  return (
    <>
      <DetailContextProvider>
        <Header />
        <Details />
      </DetailContextProvider>
    </>
  );
}

export default App;
