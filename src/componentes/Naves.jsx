import React from "react";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
function Naves({ dados,loading }) {
    return (
        <>
                <section className="conteiner">
            { loading ? <Box sx={{ width: '100%' }}>
                     <p className="loading">Buscando Naves...</p>
                <LinearProgress className="progress"/>
                </Box> :
                dados.map((naves) => {
                    return (
                        <>
                                <div key={1}></div>
                                <div className="card">
                                    <p>Nome: {naves.name}</p>
                                    <p>Modelo: {naves.model} </p>
                                    <p>Passageiros: {naves.passengers}</p>
                                    <p>Fabricante: {naves.manufacturer}</p>
                                </div>
                        </>
                    )
                })

            }
            </section>
        </>

    )

}

export default Naves;