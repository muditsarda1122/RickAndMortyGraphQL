import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharatcterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState("");
  const [getLocations, { error, data, loading, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: { name },
    }
  );

  console.log({ error, data, loading, called });

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <div>Loading...</div>}
      {error && <div>Something went wrong...</div>}
      {data && (
        <ul>
          {data.characters.results.map((result) => {
            return <li>{result.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
