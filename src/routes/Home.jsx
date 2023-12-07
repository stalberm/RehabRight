import React from 'react';

const Home = () => {
  return (
    <div className="m-4 flex-fill d-flex flex-column">
      {/* Single row with three cards */}
      <div className="row mx-0 flex-grow-1">
        {/* Card 1: Rehabilitation Programs */}
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title text-center">Recent Programs</h2>
              <p className="card-text">
                Explore and create customized rehabilitation programs for your
                patients. Include exercises, set goals, and track progress to
                optimize their recovery.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Client Management */}
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title text-center">Recent Clients</h2>
              <p className="card-text">
                Efficiently manage your clients' information. Keep track of
                personal details, medical history, and assessment results to
                provide personalized and effective care.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Schedule */}
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title text-center">Schedule</h2>
              <p className="card-text">
                Efficiently manage your clients' information. Keep track of
                personal details, medical history, and assessment results to
                provide personalized and effective care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;