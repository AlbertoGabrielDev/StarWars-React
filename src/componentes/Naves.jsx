import React from "react";

function Naves({ dados }) {
    return (
        <>
            {
                dados.map((naves) => {
                    return (
                        <>
                            <section className="conteiner">
                                <div key={1}></div>
                                <div className="card">
                                    <p>Nome: {naves.name}</p>
                                    <p>Modelo: {naves.model} </p>
                                    <p>Passageiros: {naves.passengers}</p>
                                    <p>Fabricante: {naves.manufacturer}</p>
                                </div>
                            </section>
                        </>
                    )
                })



            }
        </>

    )

}

export default Naves;