import Navigation from './Nav/Navigation';
import Main from './Main/Main';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import s from './App.module.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navigation />
      <div className={s.app}>
        <Main />
      </div>
    </BrowserRouter>
  );
};
