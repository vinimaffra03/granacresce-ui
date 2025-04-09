import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Alert,
} from "react-bootstrap";

function SimuladorJurosCompostosBootstrap() {
  const [valorInicial, setValorInicial] = useState("");
  const [valorMensal, setValorMensal] = useState("");
  const [taxaJuros, setTaxaJuros] = useState("");
  const [periodo, setPeriodo] = useState("");
  const [resultado, setResultado] = useState<string | null>(null);
  const [erro, setErro] = useState("");
  //const periodoSelectRef = useRef<HTMLSelectElement>(null);

  const calcularJurosCompostos = () => {
    const P = parseFloat(valorInicial) || 0;
    const PMT = parseFloat(valorMensal) || 0;
    const rAnual = parseFloat(taxaJuros) / 100 || 0;
    const tAnos = parseFloat(periodo) || 0;
    //const tipoPeriodo = periodoSelectRef.current?.value;

    if (isNaN(P) || isNaN(PMT) || isNaN(rAnual) || isNaN(tAnos)) {
      setErro("Por favor, preencha todos os campos com valores numéricos.");
      setResultado(null);
      return;
    }

    setErro("");
    const rMensal = rAnual / 12;
    const nMeses = tAnos * 12;

    // Valor futuro do investimento inicial
    const vfInicial = P * Math.pow(1 + rMensal, nMeses);

    // Valor futuro da série de aportes (anuidade futura)
    let vfAportes = 0;
    if (rMensal !== 0) {
      vfAportes = (PMT * (Math.pow(1 + rMensal, nMeses) - 1)) / rMensal;
    } else {
      vfAportes = PMT * nMeses; // Se a taxa for 0, é apenas o valor dos aportes
    }

    const A = vfInicial + vfAportes;
    setResultado(`R$ ${A.toFixed(2)}`);
  };

  const handleCalcular = () => {
    calcularJurosCompostos();
  };

  const handleLimpar = () => {
    setValorInicial("");
    setValorMensal("");
    setTaxaJuros("");
    setPeriodo("");
    setResultado(null);
    setErro("");
  };

  return (
    <Container className=" mt-5 mb-5 p-4 px-5 border rounded shadow-sm bg-light">
      <h2 className="mb-4">Simulador de Juros Compostos</h2>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="valorInicial">
            <Form.Label>Valor Inicial</Form.Label>
            <InputGroup>
              <InputGroup.Text>R$</InputGroup.Text>
              <Form.Control
                type="number"
                value={valorInicial}
                onChange={(e) => setValorInicial(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="valorMensal">
            <Form.Label>Valor Mensal</Form.Label>
            <InputGroup>
              <InputGroup.Text>R$</InputGroup.Text>
              <Form.Control
                type="number"
                value={valorMensal}
                onChange={(e) => setValorMensal(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="taxaJuros">
            <Form.Label>Taxa de Juros</Form.Label>
            <InputGroup>
              <Form.Control
                type="number"
                value={taxaJuros}
                onChange={(e) => setTaxaJuros(e.target.value)}
              />
              <InputGroup.Text>%</InputGroup.Text>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="periodo">
            <Form.Label>Período</Form.Label>
            <InputGroup>
              <Form.Control
                type="number"
                value={periodo}
                onChange={(e) => setPeriodo(e.target.value)}
              />
              <InputGroup.Text>ano(s)</InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row>
          <Col md="4">
            <Button
              variant="primary"
              onClick={handleCalcular}
              style={{
                backgroundColor: "#9FA91F",
                borderColor: "#9FA91F",
                fontWeight: 700,
              }}
            >
              Calcular
            </Button>
          </Col>
          <Col className="m-0" md={{ span: 4, offset: 4 }}>
            <Button
              variant="primary"
              onClick={handleLimpar}
              style={{
                backgroundColor: "#9FA91F",
                borderColor: "#9FA91F",
                fontWeight: 700,
              }}
            >
              Limpar
            </Button>
          </Col>
        </Row>

        {erro && (
          <Alert variant="danger" className="mt-3">
            {erro}
          </Alert>
        )}
        {resultado !== null && !erro && (
          <Alert variant="success" className="mt-3 w-50">
            O valor final do seu investimento será: R$ {resultado}
          </Alert>
        )}
      </Form>
    </Container>
  );
}

export default SimuladorJurosCompostosBootstrap;
