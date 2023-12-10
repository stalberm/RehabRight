import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/navbar';
import Home from './routes/Home';
import Programs from './routes/Programs';
import Clients from './routes/Clients';
import Exercises from './routes/Exercises';
import CreateProgram from './routes/CreateProgram';
import { InstantSearch } from 'react-instantsearch';
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";



const API_KEY = "xyz";
const HOST = "localhost";
const PORT = 8108;
const PROTOCOL = "http"

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: API_KEY,
    nodes: [
      {
        host: HOST,
        port: PORT,
        protocol: PROTOCOL,
      },
    ],
    cacheSearchResultsForSeconds: 2 * 60,
  },

  additionalSearchParameters: {
    query_by: "exercise_name,description,associated_injuries,associated_muscles",
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

const App = () => {

  const [selectedExercises, setSelectedExercises] = useState([]);
  const addExercise = (exercise) => {
    setSelectedExercises((prevExercises) => {
      const newExercises = [...prevExercises, exercise];
      return newExercises;
    });
  };
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <InstantSearch indexName="exercises" searchClient={searchClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs">
              <Route index={true} element={<Programs />}></Route>
              <Route path="create" element={<CreateProgram selectedExercises={selectedExercises} />} />
            </Route>
            <Route path="/clients" element={<Clients />} />
            <Route path="/exercises" element={<Exercises addExercise={addExercise} />} />
          </Routes>
        </InstantSearch>
      </div>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);