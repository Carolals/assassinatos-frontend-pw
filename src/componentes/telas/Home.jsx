import React from 'react';
import './Home.css';
import crimeSceneImage from '../imagens/home.png';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Seja bem-vindo ao Sistema de Registro de Assassinatos</h1>
            <img src={crimeSceneImage} alt="Cena do crime" className="crime-image"/>
            <p>Nosso sistema permite que você registre e investigue assassinatos com eficiência e precisão.</p>
        </div>
    );
};

export default Home;
