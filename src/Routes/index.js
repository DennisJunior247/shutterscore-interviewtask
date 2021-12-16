import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Dashboard/Home";

const Error = () => {
  return <p>404 page</p>;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
