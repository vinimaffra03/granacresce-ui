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

        <h1 className="text-center py-5">PROJETO EM DESENVOLVIMENTO ...</h1>

        {/* footer 
        <h1 className="text-center">
          Passo a passo para usar a calculadora de juros compostos
        </h1>
        <h2 className="text-center mx-4 px-4">
          Usar a calculadora de juros compostos para fazer cálculos financeiros
          (grátis e sem anúncios) é fácil de ser utilizada. Confira o passo a
          passo:
        </h2>
        <h3 className="text-start mx-5 px-5">Passo 1</h3>
        <h3 className="text-start mx-5 px-5">Passo 2</h3>
        <h3 className="text-start mx-5 px-5">Passo 3</h3>
        <h3 className="text-start mx-5 px-5">Passo 4</h3>
        <h3 className="text-start mx-5 px-5">Passo 5</h3>*/}
        {/* aside */}
      </div>
    </>
  );
}

export default App;
