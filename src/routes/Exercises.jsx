import React from "react";
import { SearchBox, Hits, InstantSearch } from "react-instantsearch";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";

const API_KEY = "xyz";
const HOST = "localhost";
const PORT = 8108;
const PROTOCOL = "http"

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
    query_by: "exercise_name,description,associated_injury,associated_muscle",
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

export default function Exercises() {
  return (
    <InstantSearch indexName="exercises" searchClient={searchClient}>
      <SearchBox />
      <Hits />
    </InstantSearch>
  );
}