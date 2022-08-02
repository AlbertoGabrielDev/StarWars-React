import React from "react";

function Planet({ dados }) {
    return (
        <>

            {dados.map((planet) => {
                return (
                    <>
                        <section className="conteiner">
                            <div key={1}></div>
                            <div className="card">
                                <p>Nome: {planet.name}</p>
                                <p>Rotação: {planet.rotation_period}</p>
                                <p>Clima: {planet.climate}</p>
                                <p>Populção: {planet.population}</p>

                            </div>
                        </section>
                    </>

                )
            })}
        </>
    )

}

export default Planet;