import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Games from "./components/games";
import Streams from "./components/stream";
import GameStream from "./components/gameStream"

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Games />} />
        <Route path="/top_stream" element={<Streams />} />
        <Route path="/streams/:id" element={<GameStream />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
