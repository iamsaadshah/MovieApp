import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import MovieDetails from "./MovieDetails"; // Corrected typo
import Navbar from "./Navbar"; // Import the Navbar component

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home isLoading={isLoading} setIsLoading={setIsLoading} />} />
          <Route path="/movie/:id" element={<MovieDetails isLoading={isLoading} setIsLoading={setIsLoading} />} />
        </Routes>
      </main>

    </div>
  );
};

export default App;
