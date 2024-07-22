import React, { useEffect, useState } from 'react';
import './estatisticas.css';

const Estatisticas = () => {
    const [data, setData] = useState({
        totalAssassinatos: 0,
        vitimasMulheres: 0,
        vitimasHomens: 0,
        suspeitosMulheres: 0,
        suspeitosHomens: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/estatisticas`);
                const result = await response.json();

                setData({
                    totalAssassinatos: result.totalAssassinatos,
                    vitimasMulheres: result.vitimasMulheres,
                    vitimasHomens: result.vitimasHomens,
                    suspeitosMulheres: result.suspeitosMulheres,
                    suspeitosHomens: result.suspeitosHomens,
                });
            } catch (error) {
                console.error('Erro ao buscar dados da API', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="statistics-container">
            <h1>Estatísticas</h1>
            <div className="stats-grid">
                <div className="stat-item">
                    <h2>Total de Assassinatos</h2>
                    <p>{data.totalAssassinatos}</p>
                </div>
                <div className="stat-item">
                    <h2>Vítimas Mulheres</h2>
                    <p>{data.vitimasMulheres}</p>
                </div>
                <div className="stat-item">
                    <h2>Vítimas Homens</h2>
                    <p>{data.vitimasHomens}</p>
                </div>
                <div className="stat-item">
                    <h2>Suspeitos Mulheres</h2>
                    <p>{data.suspeitosMulheres}</p>
                </div>
                <div className="stat-item">
                    <h2>Suspeitos Homens</h2>
                    <p>{data.suspeitosHomens}</p>
                </div>
            </div>
        </div>
    );
};
export default Estatisticas;
