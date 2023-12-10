import React from 'react';
import { Link } from 'react-router-dom';

export default function Programs() {
  return (
    <>
      <h1>Programs Page</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto">
            <Link to="create" className="btn btn-primary w-100">Create new plan</Link>
          </div>
        </div>
      </div>
    </>
  );
}