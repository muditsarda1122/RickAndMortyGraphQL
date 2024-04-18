import "./CharacterList.css";
import { useCharacters } from "../Hooks/UseCharacters";
import { Link } from "react-router-dom";

export default function CharactersList() {
  const { error, data, loading } = useCharacters();
  if (loading) return <div>Waiting for response...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <Link to={`/${character.id}`}>
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
          </Link>
        );
      })}
    </div>
  );
}
