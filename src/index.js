import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/navbar';
import Home from './routes/Home';
import Programs from './routes/Programs';
import Clients from './routes/Clients';
import Exercises from './routes/Exercises';

const App = () => {
  return (
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/exercises" element={<Exercises />} />
          </Routes>
        </div>
      </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);