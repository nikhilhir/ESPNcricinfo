import React from "react";
import { Route, Routes } from "react-router-dom";

import News from "./News";
import SingleNews from "./SingleNews";

const MainRouter = () => {
  return (
    <Routes>
    
      <Route path="/" element={<News/>}/>
      <Route path="/singlenews/:id" element={<SingleNews/>}/>
    </Routes>
  );
};

export default MainRouter;
