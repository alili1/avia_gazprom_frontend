import * as React from 'react'
import {useState} from "react";
import {Route, Routes, Navigate, useNavigate, useLocation} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/MainPage';
import { history } from './helpers/history';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  history.navigate = useNavigate();
  history.location = useLocation();
  const [appState, setAppState] = useState({
       loading: false,
       repos: null,
  });

  return (
    <Routes>
        <Route exact path="/" element={<MainLayout/>}>
          <Route index element={<MainPage/>}/>
        </Route> 
        <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  );
}

export default App;

