import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import MovieInfo from "./components/movie-info/MovieInfo";
import About from "./components/about/About";
import Videos from "./components/videos/Videos";
import Featured from "./components/featured/Featured";
import Gallery from "./components/gallery/Gallery";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <MovieInfo />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
