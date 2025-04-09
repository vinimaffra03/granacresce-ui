import SimuladorJurosCompostosBootstrap from "./components/calc";
import BasicExample from "./components/navbar";

function App() {
  return (
    <>
      <div>
        {/* header */}
        {/* criar cabecalho com icone e barra de links para apps de financas */}
        <BasicExample />

        {/* calculator */}

        <SimuladorJurosCompostosBootstrap />

        {/* footer */}

        {/* aside */}
      </div>
    </>
  );
}

export default App;
