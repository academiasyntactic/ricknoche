import { useState } from "react";

const App = () => {
  const [nombre, setNombre] = useState(null);
  const [datos, setDatos] = useState(null);

  const solicitarMesero = async () => {
    const respuesta = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${nombre}`
    );
    const datos = await respuesta.json();
    setDatos(datos);
  };

  return (
    <div>
      <input
        onChange={(e) => setNombre(e.target.value)}
        type="text"
        placeholder="Busque su personaje aqui"
        className="border border-black px-3 py-2 rounded-3xl"
      />
      <button onClick={solicitarMesero} className="bg-red-400">
        Buscar
      </button>

      {datos && datos.results.map(
        (elemento)=>{
          return(
            <div>
              <img className="rounded-full" src={elemento.image} alt="" />
              <h1>{elemento.name}</h1>
              <h2>{elemento.gender}</h2>
            </div>
          )
        }
      )}
    </div>
  );
};

export default App;
