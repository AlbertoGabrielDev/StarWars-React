import React from "react";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
function Planet({ dados,loading }) {
    return (
        <>
            <section className="conteiner">
                
                { loading ? <Box sx={{ width: '100%' }}>
                     <p className="loading">Buscando Planetas...</p>
                <LinearProgress className="progress"/>
                </Box> :
                dados.map((planet) => {
                return (
                    <>
                        <div key={1}></div>
                        <div className="card">
                            <p>Nome: {planet.name}</p>
                            <p>Rotação: {planet.rotation_period}</p>
                            <p>Clima: {planet.climate}</p>
                            <p>Populção: {planet.population}</p>
                        </div>
                    </>
)
                })}
            </section>
        </>
    )

}

export default Planet;