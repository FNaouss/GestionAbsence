import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Emargement from './emargement';
import Creneaux from './creneaux';
import AbsenceTable from './AbsenceTable';
import Formulaire from './Formulaire';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode><BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/emargement" element={<Emargement />} />
    <Route path="/creneaux" element={<Creneaux />} />
    <Route path="/absences" element={<AbsenceTable />} />
    <Route path="/formulaire" element={<Formulaire />} />
  </Routes>
</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
