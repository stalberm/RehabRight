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

  const incrememntSets = () => setSets(sets + 1);
  const decrementSets = () => setSets(sets > 0 ? sets - 1 : 0);

  return (
    <div className="card mb-4" style={{ height: '25vh' }}>
      <div className="row g-0 align-items-center h-100">
        <div className="col-md-4 h-100">
          <img
            src={exercise.image_url}
            alt={exercise.exercise_name}
            className="h-100"
          />
        </div>
        <div className="col-md-4 d-flex flex-column align-items-center">
          <button onClick={incrementReps} className="btn btn-primary mb-2" style={{ width: '50px', height: '50px', flex: '1' }}>+</button>
          <div>Reps: {reps}</div>
          <button onClick={decrementReps} className="btn btn-primary" style={{ width: '50px', height: '50px', flex: '1' }}>-</button>
        </div>
        <div className="col-md-4 d-flex flex-column align-items-center">
          <button onClick={incrememntSets} className="btn btn-primary mb-2" style={{ width: '50px', height: '50px', flex: '1' }}>+</button>
          <div>Sets: {sets}</div>
          <button onClick={decrementSets} className="btn btn-primary mb-2" style={{ width: '50px', height: '50px', flex: '1' }}>-</button>
          <button className="btn btn-danger" style={{ width: '100px', height: '50px', flex: '1' }}>Delete</button>
        </div>
      </div>
    </div>
  );
}