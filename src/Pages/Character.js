import { useParams } from "react-router-dom";
import { useCharacter } from "../Hooks/UseCharacter";
import "./Character.css";

export default function Character() {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);

  if (error) return <div>Something went wrong</div>;
  if (loading) return <div>Waiting for response...</div>;

  return (
    <div className="Character">
      <img
        src={data.character.image}
        width={750}
        height={750}
        alt={data.character.name}
      />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} - {episode.episode}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
