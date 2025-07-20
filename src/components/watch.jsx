import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Adam from "../assets/adam.png";
import Alien from "../assets/alien.png";
import Avater from "../assets/avater.png";
import Avengers from "../assets/avengers.png";
import Black from "../assets/black.png";
import Bob from "../assets/bob.png";
import Book from "../assets/book.png";
import Corn from "../assets/corn.png";
import Craft from "../assets/craft.png";
import Damsel from "../assets/damsel.jpeg";
import Dora from "../assets/dora.jpeg";
import Dragon from "../assets/dragon.jpeg";
import Fight from "../assets/fight.jpeg";
import Hod from "../assets/hod.jpeg";
import Kingdom from "../assets/kingdom.jpeg";
import Kraven from "../assets/kraven.jpeg";
import Lion from "../assets/lion.jpeg";
import Man from "../assets/man.jpeg";
import Omen from "../assets/omen.jpeg";
import Park from "../assets/park.jpeg";
import Rise from "../assets/Rise-of-Skywalker.jpg";
import Robot from "../assets/robot.jpeg";
import Shazam from "../assets/shazam.jpeg";
import Shot from "../assets/shot.jpeg";
import Smile from "../assets/smile.jpeg";
import Spider from "../assets/spider.jpeg";
import Starwars from "../assets/starwars.jpeg";
import Stich from "../assets/stich.jpeg";
import Superman from "../assets/superman.png";
import Weapons from "../assets/weapons.png";
import White from "../assets/white.png";
import Zoo from "../assets/zoo.png";

const movies = [
  { title: " The Adam Project", image: Adam },
  { title: "Alien: Romulus", image: Alien },
  { title: "Avatar: The Way of Water", image: Avater },
  { title: "Thunderbolts*", image: Avengers },
  { title: "Black Panther: Wakanda Forever", image: Black },
  { title: " SpongeBob SquarePants", image: Bob },
  { title: " The Jungle Book", image: Book },
  { title: " Children Of The Corn", image: Corn },
  { title: "A Minecraft Movie", image: Craft },
  { title: "Damsel", image: Damsel },
  { title: "Dora and the Lost City of Gold", image: Dora },
  { title: "How to Train Your Dragon", image: Dragon },
  { title: "Karate Kid: Legends", image: Fight },
  { title: "House Of The  Dragons", image: Hod },
  { title: "Kingdom", image: Kingdom },
  { title: "Kraven the Hunter", image: Kraven },
  { title: "Mufasa: The Lion King", image: Lion },
  { title: "The Amazing Spider-Man", image: Man },
  { title: "The First Omen", image: Omen },
  { title: "Jurassic World Rebirth", image: Park },
  { title: "Rise of Skywalker", image: Rise },
  { title: "The Wild Robot", image: Robot },
  { title: "Shazam! Fury of the Gods", image: Shazam },
  { title: "Bloodsh⚪t", image: Shot },
  { title: "Smile 2", image: Smile },
  { title: "Spider-Man: No Way Home", image: Spider },
  { title: "Star Wars", image: Starwars },
  { title: "Lilo & Stitch", image: Stich },
  { title: "Superman", image: Superman },
  { title: "Weapons", image: Weapons },
  { title: "Snow White", image: White },
  { title: "Zootopia 2", image: Zoo }
];

function Watch() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="watch-section">
        
      <h2 className="watch-title">🎬 Watch Now</h2>
      <p>
        Discover the latest movies and shows available for streaming. From action-packed blockbusters to heartwarming dramas, we have something for everyone.
        </p> 
        
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div key={index} className="watch-slide">
            <div className="watch-card">
              <img src={movie.image} alt={movie.title} className="watch-image" />
              <div className="watch-overlay">
                <h3>{movie.title}</h3>
                <button>Watch Now</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Watch;
