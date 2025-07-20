import React from "react";


import Netflix from "../assets/netflix.png";
import Hulu from "../assets/hulu.png";
import Disney from "../assets/disney.png";
import Prime from "../assets/prime.png";
import HBO from "../assets/hbo.png";
import Apple from "../assets/apple.png";

const brands = [
  { name: "Netflix", logo: Netflix, url: "https://www.netflix.com" },
  { name: "Hulu", logo: Hulu, url: "https://www.hulu.com" },
  { name: "Disney+", logo: Disney, url: "https://www.disneyplus.com" },
  { name: "Amazon Prime", logo: Prime, url: "https://www.primevideo.com" },
  { name: "HBO Max", logo: HBO, url: "https://www.max.com" },
  { name: "Apple TV+", logo: Apple, url: "https://tv.apple.com" }
];

function List() {
  return (
    <div className="brand-section">
      <h2 className="brand-title">🔥 Top Streaming Platforms</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <a
            href={brand.url}
            key={index}
            className="brand-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={brand.logo} alt={brand.name} className="brand-logo" />
            <div className="brand-overlay">
              <span> Check Out {brand.name}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default List;
