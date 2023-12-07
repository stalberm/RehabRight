import React from 'react';

const Home = () => {
  return (
    <div className="m-4 flex-fill d-flex flex-column">
      <div className="row mx-0 flex-grow-1">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title text-center">Recent Programs</h2>
              <p className="card-text">
                Maybe list of cards of fake programs
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title text-center">Recent Clients</h2>
              <p className="card-text">
                Maybe list of cards of fake clients
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title text-center">Schedule</h2>
              <p className="card-text">
                Put some stuff here about upcoming patients or something
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;