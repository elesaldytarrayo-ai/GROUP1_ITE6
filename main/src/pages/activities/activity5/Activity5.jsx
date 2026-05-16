import { useState, useEffect, useRef } from "react";
import "./Activity5.css";
import Player from "../../../components/player-songlist/Player";
import SongList from "../../../components/player-songlist/SongList";

export default function Activity5() {
  const [songs, setSongs] = useState([]);
  const [current, setCurrent] = useState(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const getSongs = async (term) => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://itunes.apple.com/search?term=${term}&entity=song&limit=24`
      );

      const data = await res.json();
      setSongs(data.results || []);
    } catch (err) {
      console.log("Error fetching songs:", err);
      setSongs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSongs("top hits 2024");
  }, []);

  const searchSongs = () => {
    const term = inputRef.current.value;
    if (term?.trim()) getSongs(term);
  };

  return (
    <div className="app">
      <h1 className="title">🎵 Trending Music Player</h1>

      <div className="search">
        <input ref={inputRef} placeholder="Search song or artist..." />
        <button onClick={searchSongs}>Search</button>
      </div>

      {loading && <div className="loader"></div>}

      <Player song={current} />

      <SongList songs={songs} onSelect={setCurrent} />
    </div>
  );
}