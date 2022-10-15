import React from 'react'
import Navigation from './Nav/Navigation';
import Main from './Main/Main';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
      <Navigation />
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: 10,
          backgroundColor: '#fff',
          borderBottom: '1px solid #dee2e6',
          borderLeft: '1px solid #dee2e6',
          borderRight: '1px solid #dee2e6',
        }}
      >
        <Main />
      </div>
    </BrowserRouter>
  );
};
