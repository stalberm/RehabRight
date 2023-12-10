import React from "react";
import { Configure, usePagination, useHits, useSearchBox } from "react-instantsearch";
import { Link } from 'react-router-dom';

function Hit({ hit, addExercise }) {
  return (
    <div className="card">
      <img src={hit.image_url} alt={hit.exercise_name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{hit.exercise_name}</h5>
        <p className="card-text">{hit.description}</p>
      </div>
      <div className="card-footer">
        <Link to="/programs/create">
          <button
            className="btn btn-success"
            onClick={() => {
              addExercise(hit);

            }}
          >
            Add exercise
          </button>
        </Link>
      </div>
    </div>
  );
}

function CustomSearchBox() {
  const { query, refine } = useSearchBox();

  return (
    <div className="m-4">
      <input
        type="text"
        value={query}
        onChange={(e) => refine(e.target.value)}
        placeholder="Search Exercises..."
        className="form-control"
      />
    </div>
  );
}

function CustomPagination() {
  const {
    createURL,
    refine,
    currentRefinement,
    nbPages,
    isFirstPage,
    isLastPage,
  } = usePagination();

  const previousPageIndex = currentRefinement - 1;
  const nextPageIndex = currentRefinement + 1;

  return (
    <nav>
      <ul className="pagination">
        <li className={`page-item ${isFirstPage ? 'disabled' : ''}`}>
          <a
            className="page-link"
            href={createURL(previousPageIndex)}
            onClick={(e) => {
              e.preventDefault();
              !isFirstPage && refine(previousPageIndex);
            }}
          >
            Prev
          </a>
        </li>
        <li className="page-item">
          <span className="page-link">
            {currentRefinement + 1} of {nbPages}
          </span>
        </li>
        <li className={`page-item ${isLastPage ? 'disabled' : ''}`}>
          <a
            className="page-link"
            href={createURL(nextPageIndex)}
            onClick={(e) => {
              e.preventDefault();
              !isLastPage && refine(nextPageIndex);
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default function Exercises({ addExercise }) {

  const { hits } = useHits();

  return (
    <div>
      <Configure hitsPerPage={12} />
      <CustomSearchBox />
      <div className="row">
        {hits.map((hit) => (
          <div key={hit.objectID} className="col-md-2 mb-4">
            <Hit hit={hit} addExercise={addExercise} />
          </div>
        ))}
      </div>
      <CustomPagination />
    </div>
  );
}