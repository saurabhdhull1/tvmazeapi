import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowList from "./components/ShowList";
import ShowSummary from "./components/ShowSummary";
// import ShowBooking from "./components/ShowBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowList/>} />
        <Route path="/shows/:id" element={<ShowSummary/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
