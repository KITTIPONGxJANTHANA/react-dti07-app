import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dtipage01 from './pages/DTIPages01'
import Dtipage02 from './pages/DTIPages02'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Dtipage01" element={<Dtipage01 />}/>
          <Route path="/Dtipage02" element={<Dtipage02 />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
