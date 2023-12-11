import React,  { useState } from 'react';
import { Link } from 'react-router-dom';


export default function CreateProgram({ selectedExercises }) {
  return (
    <>
      <h1>Create Program</h1>
      <div className="container">
        {selectedExercises.map((exercise, index) => (
          <div key={index} className="card mb-4" style={{ height: '25vh' }}>
            <ExerciseEntry exercise={exercise} />
          </div>
        ))}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <Link to="/exercises" className="btn btn-success w-100">Add exercise</Link>
          </div>
        </div>
      </div>
    </>
  );
}

function ExerciseEntry({ exercise }) {
  const [reps, setReps] = useState(0);
  const [sets, setSets] = useState(0);

  const incrementReps = () => setReps(reps + 1);
  const decrementReps = () => setReps(reps > 0 ? reps -1 : 0);

  const incrementSets = () => setSets(sets + 1);
  const decrementSets = () => setSets(sets > 0 ? sets - 1 : 0);

  return (
    <div className="card mb-4" style={{ height: '25vh' }}>
      <div className="row g-0 align-items-center h-100">
        <div className="col-md-4 h-100">
          <img src={exercise.image_url} alt={exercise.exercise_name} className="h-100" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{exercise.exercise_name}</h5>
            <p className="card-text">{exercise.description}</p>
            <div className="d-flex justify-content-between">
              <div>
                <button onClick={incrementReps} className="btn btn-primary">+</button>
                <span> Reps: {reps} </span>
                <button onClick={decrementReps} className="btn btn-primary">-</button>
              </div>
              <div>
                <button onClick={incrementSets} className="btn btn-primary">+</button>
                <span> Sets: {sets} </span>
                <button onClick={decrementSets} className="btn btn-primary">-</button>
              </div>
              <button className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}