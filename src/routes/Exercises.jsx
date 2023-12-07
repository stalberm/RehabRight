import React from "react";
import { SearchBox, Hits, InstantSearch, Configure, Pagination } from "react-instantsearch";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

const API_KEY = "xyz";
const HOST = "localhost";
const PORT = 8108;
const PROTOCOL = "http"

function Hit({ hit }) {
  return (
    <article>
      <img src={hit.image_url} alt={hit.exercise_name} />
      <p>{hit.exercise_name}</p>
      {/* <h1>{hit.name}</h1> */}
      {/* <p>${hit.price}</p> */}
    </article>
  );
}

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: API_KEY, // Be sure to use an API key that only allows search operations
    nodes: [
      {
        host: HOST,
        port: PORT,
        protocol: PROTOCOL,
      },
    ],
    cacheSearchResultsForSeconds: 2 * 60, // Cache search results from server. Defaults to 2 minutes. Set to 0 to disable caching.
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  //  So you can pass any parameters supported by the search endpoint below.
  //  query_by is required.
  additionalSearchParameters: {
    query_by: "exercise_name,description,associated_injuries,associated_muscles",
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;


export default function Exercises() {
  return (
    <InstantSearch indexName="exercises" searchClient={searchClient}>
      <Configure hitsPerPage={20} /> {/* Set the number of hits you want per page */}
      <SearchBox />
      <Hits hitComponent={Hit} />
      <Pagination />
    </InstantSearch>
  );
}