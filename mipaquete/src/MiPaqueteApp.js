import React from "react";
import { BrowserRouter, Navigate , Route, Routes } from 'react-router-dom';
import { Registro } from "./components/registro/Registro";


export const MiPaqueteApp = () => {

  return (
<BrowserRouter>
  <Routes>
    <Route path="/registro" element={<Registro />} />
   <Route
        path="/"
        element={<Navigate replace to="/registro" />}
    />
  </Routes>
</BrowserRouter>
  );
};
