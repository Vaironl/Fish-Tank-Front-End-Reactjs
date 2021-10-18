import { Container } from "react-bootstrap";
import { BaseNavbar } from "./components/BaseNavbar";
import { TemperatureCard } from "./components/TemperatureCard";

function App() {
  return (
    <div className="App">
      <BaseNavbar />
      <Container className="my-2">
        <TemperatureCard />
        Camera Light Status
      </Container>
    </div>
  );
}

export default App;
