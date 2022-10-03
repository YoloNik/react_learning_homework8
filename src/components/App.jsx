import Navigation from './Nav/Navigation';
import Main from './Main/Main';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Navigation />
      <div
        style={{
          //width: '80%',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: 10,
          backgroundColor: '#fff',
          //borderRadius: 6,
          borderBottom: '1px solid #dee2e6',
          borderLeft: '1px solid #dee2e6',
          borderRight: '1px solid #dee2e6',
          //borderColor: '#dee2e6',
        }}
      >
        <Main />
      </div>
    </BrowserRouter>
  );
};
