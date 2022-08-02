import React from "react";
import "./People.css";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function People({ dados, loading }) {
    return (
        <>
            <section className="conteiner">
                {loading ?
                <Box sx={{ width: '100%' }}>
                     <p className="loading">Buscando Habitantes...</p>
                <LinearProgress className="progress"/>
                </Box> :
                    dados.map((people) => {
                        return (
                            <>
                                <div key={1}></div>
                                <div className="card">
                                    <p>Nome: {people.name}</p>
                                    <p>Peso: {people.mass} KG</p>
                                    <p>Altura: {people.height} Metros</p>
                                    <p>Aniversário: {people.birth_year}</p>
                                </div>
                            </>
                        )
                    })}
            </section>
        </>
    )
}

export default People;