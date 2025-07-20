import React from "react";

function Home() {
    return (
        <div className="home">
           <div className="intro">
             <h1>STAR WARS</h1>
             <h3>THE RISE OF SKYWALKER</h3>
             <p> "Star Wars: The Rise of Skywalker" concludes the Skywalker saga, with the Resistance,
                 led by Rey, Finn, and Poe Dameron, facing the First Order and the resurrected Emperor Palpatine. The film sees Rey training as a Jedi, 
                 uncovering her past, and confronting Kylo Ren while the fate of the galaxy hangs in the balance. The movie culminates in a final showdown,
                 bringing the conflict between the Jedi and the Sith to a head
                , and offering a definitive end to the Skywalker saga</p>
           </div>
           <div className="up">
                <p>| 2022 | 2 seasons |⭐⭐⭐⭐⭐ 5.6</p>
        
            </div>

           <div className="ratings">
                <h1>Ratings</h1>
                <p>IMDb: 6.4/10</p>
                <p>Rotten Tomatoes: 51%</p>
                <p>Metacritic: 53/100</p>
           </div>

           <div class="button-group">
              <button class="primary-btn">Watch Now ▶️</button>
              <button class="secondary-btn">Trailer 🎬</button>
           </div>


        </div>
    )
};
export default Home;