import React from "react";
import Black from "../assets/black.png";
import Adam from "../assets/adam.png";
import Spider from "../assets/spider.jpeg";
import Zoo from "../assets/zoo.png";
import Blacke from "../assets/blacke.png";
import White from "../assets/white.png";
import Weapons from "../assets/weapons.png";
import Superman from "../assets/superman.png";
import Stich from "../assets/stich.jpeg";
import Starwars from "../assets/starwars.jpeg";
import Smile from "../assets/smile.jpeg";
import Shot from "../assets/shot.jpeg";
import Shazam from "../assets/shazam.jpeg";
import Robot from "../assets/robot.jpeg";
import Park from "../assets/park.jpeg";
import Omen from "../assets/omen.jpeg";
import Man from "../assets/man.jpeg";
import Lion from "../assets/lion.jpeg";
import Kraven from "../assets/kraven.jpeg";
import Kingdom from "../assets/kingdom.jpeg";

const movieData = [
  { image: Black, title: "Black" },
  { image: Adam, title: "The Adam Project" },
  { image: Blacke, title: "Black Panther" },
  { image: Zoo, title: "ZOOTOPIA" },
  { image: Spider, title: "Spider-Man" },
  { image: White, title: "White" },
  { image: Weapons, title: "Weapons" },
  { image: Superman, title: "Superman" },
  { image: Stich, title: "Lilo & Stitch" },
  { image: Starwars, title: "Star Wars" },
  { image: Smile, title: "Smile" },
  { image: Shot, title: "BLOODSHOT" },
  { image: Shazam, title: "Shazam" },
  { image: Robot, title: "Robot" },
  { image: Park, title: "Jurassic Park" },
  { image: Omen, title: "The Omen" },
  { image: Man, title: "Spider Man" },
  { image: Lion, title: "The Lion King" },
  { image: Kraven, title: "Kraven" },
  { image: Kingdom, title: "The Kingdom" },
];

function Movies() {
  return (
        <div className="movie">
            <div className="text">
                <h1>Movies</h1>
                <p>Explore our collection of movies, from action-packed blockbusters to heartwarming dramas. 
                   Discover the latest releases and timeless classics that will keep you entertained for hours.</p>
            </div>
            <div className="movies">
               {movieData.map((movie, index) => (
               <div className="movie-item" key={index}>
               <img src={movie.image} alt={movie.title} />
             <div className="movie-overlay">
                <p>{movie.title}</p>
                <button className="movie-button">Watch Now</button>
             </div>
             </div>
              ))}
            </div>
        </div>
    
    
  );
}

export default Movies;
