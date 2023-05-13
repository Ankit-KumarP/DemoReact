import React from "react";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import Rothersection from "./routes/Rothersection";
import Rsecondsection from "./routes/Rsecondsection";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/othersection" element={<Rothersection />} />
        <Route path="/secondsection" element={<Rsecondsection />} />
      </Routes>

    </>
  );
}

export default App;
