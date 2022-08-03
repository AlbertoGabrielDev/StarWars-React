
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import People from './People';
import { Route, Routes } from 'react-router-dom';
import Planets from './Planets';
import Naves from './Naves';


const StarWars = () => {
  const [url, setUrl] = useState("https://swapi.dev/api/people/")
  const [urlPlaneta, setUrlPlaneta] = useState("https://swapi.dev/api/planets/")
  const [urlNave, setUrlNave] = useState("https://swapi.dev/api/starships/")
  const [people, setPeople] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [naves, setNaves] = useState([]);
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [procurar, setProcurar] = useState(true);

  useEffect(() => {
    peoples()
    planetas()
    nave()
    proximaPagina()
    paginaAnterior()
  }, [url], [urlPlaneta], [urlNave]);

  async function proximaPagina() {
    const res = await axios.get(url)
    setNextUrl(res.data.next)
    console.log(nextUrl, "-")
  }

  async function paginaAnterior() {
    const res = await axios.get(url)
    setPrevUrl(res.data.previous)
  }

  const peoples = async () => {
    setProcurar(true)
    const res = await axios.get(url)
    setPeople(res.data.results)
    setProcurar(false)
  }

  async function planetas() {
    setProcurar(true)
    const res = await axios.get(urlPlaneta)
    setPlanet(res.data.results)
    setProcurar(false)
  }

  async function nave() {
    setProcurar(true)
    const res = await axios.get(urlNave)
    setNaves(res.data.results)
    setProcurar(false)
  }

  return (
    <>
      <main>
        <Routes>

          <Route path='/people' element={<People dados={people} loading={procurar} />}> </Route>

          <Route path='/planets' element={<Planets dados={planet} loading={procurar} />}></Route>

          <Route path='/starships' element={<Naves dados={naves} loading={procurar} />}></Route>
        </Routes>

        <div className="botao">
          {<button onClick={() => {
            setNaves([])
            setPeople([])
            setPlanet([])
            setUrl(prevUrl)
            setUrlNave(prevUrl)
            setPlanet(prevUrl)
          }}>Pagina Anterior</button>}

          {<button onClick={() => {
            setNaves([])
            setPeople([])
            setPlanet([])
            setUrl(nextUrl)
            setUrlPlaneta(nextUrl)
            setUrlNave(nextUrl)
          }}>Proxima Pagina</button>}



        </div>

      </main>

    </>
  )


}



export default StarWars; 