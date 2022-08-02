import React from "react";
import "./People.css";


function People({ dados }) {
    return (
        <>

            {dados.map((people) => {
                return (
                    <>
                        <section className="conteiner">
                            <div key={1}></div>
                            <div className="card">
                                <p>Nome: {people.name}</p>
                                <p>Peso: {people.mass} KG</p>
                                <p>Altura: {people.height} Metros</p>
                                <p>Aniversário: {people.birth_year}</p>
                            </div>
                        </section>
                    </>

                )
            })}
        </>
    )
}

export default People;