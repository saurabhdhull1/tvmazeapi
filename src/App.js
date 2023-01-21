import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowList from "./components/ShowList";
import ShowSummary from "./components/ShowSummary";
// import ShowBooking from "./components/ShowBooking";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<ShowList/>} />
        <Route path="/shows/:id" element={<ShowSummary/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
