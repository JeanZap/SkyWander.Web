import mainAxios from "axios";
import "./App.css";

function App() {
  const axios = mainAxios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  return (
    <>
      <h1>SkyWander</h1>

      <div className="card">
        <select
          onChange={({ target }) =>
            target.value && axios.post("/apontar", { name: target.value })
          }
        >
          <option value="">Selecione</option>

          <option value="Mars">Marte</option>
        </select>

        <button onClick={() => axios.post("/desligar")}>Desligar</button>
      </div>
    </>
  );
}

export default App;
