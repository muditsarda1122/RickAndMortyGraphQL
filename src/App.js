import "./App.css";
import Character from "./Pages/Character";
import CharactersList from "./Pages/CharactersList";
import { Routes, Route } from "react-router-dom";
import Search from "./Pages/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
