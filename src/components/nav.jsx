import React from "react";

function Nav() {
    return(
        <div className="nav">
            <div className="left">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">Release</a></li>
                    <li><a href="">About US</a></li>
                </ul>
            </div>
            <div className="middle">
                <h2>Movies</h2>
            </div>
            <div className="right">
                <input className="search-bar" type="search" placeholder="Search for movies..." />
                <button className="search-btn" type="button">Search</button>
            </div>
        </div>
    )
}


export default Nav;