import React from 'react'
import { Route, Routes } from "react-router-dom";
import Main from '../components/mains/main'
import SearchCatalog from '../components/mains/searchCatalog/searchCatalog'

function router() {
  return (
    <>
     <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/SearchCatalog"} element={<SearchCatalog />} />
        
      </Routes>
    </>
  )
}

export default router