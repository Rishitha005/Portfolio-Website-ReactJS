import React from "react";
import Home from "./pages/Home";
import ViewAll from "./components/ViewAll";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<ViewAll />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
