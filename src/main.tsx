import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './HomePage/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './MainPage/MainPage.tsx';
import LoginPage from './LoginPage/LoginPage.tsx';
import SignupPage from './SignupPage/SignupPage.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route index element = {<HomePage />} />
        <Route path='main' element={<MainPage/>} />
        <Route path='login' element={<LoginPage/>} />
        <Route path='signup' element={<SignupPage/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
