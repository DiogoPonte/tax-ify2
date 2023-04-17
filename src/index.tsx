import React from 'react';
import ReactDOM from 'react-dom';
import { Frontpage } from './components/Frontpage'
import { HashRouter, Route, Routes } from "react-router-dom";
import { PreviewData } from './components/PreviewData'

ReactDOM.render(
  <HashRouter basename={process.env.REACT_APP_URI}>
    <Routes>
      <Route path="/" element={<Frontpage />} />
      <Route path="securities" element={<PreviewData mode="SECURITY" />} />
      <Route path="crypto" element={<PreviewData mode="CRYPTO" />} />
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);
