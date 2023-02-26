import React from 'react';
import{Link} from "react-router-dom";
import BannerImage from '../assets/pizza.jpeg'
import '../styles/home.css'
function Home(props) {
    return (
        <div className = "home" style={{backgroundImage: `url(${BannerImage})`}}>
            <div className =  "headerContainer">
                <h1> Pascal's Pizzeria</h1>
                <p> Pizza to satisfy the craving</p>
                <Link to = "/menu">
                <button> ORDER NOW </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;