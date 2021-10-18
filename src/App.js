import { Col, Container, Row } from "react-bootstrap";
import { BaseNavbar } from "./components/BaseNavbar";
import { LightCard } from "./components/LightCard";
import { TemperatureCard } from "./components/TemperatureCard";

function App() {
  return (
    <div className="App">
      <BaseNavbar />
      <Container>
        <Row className="mb-2">
          <Col>
            <TemperatureCard />
          </Col>
        </Row>
        <Row>
          <Col>
            <LightCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
