import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

export const TemperatureCard = () => {
  const [temp, setTemp] = useState(0);

  const setRandomTemperature = () => {
    setTemp(Math.random() * 2 + 1);
  };

  return (
    <Card>
      <Card.Title>Aquarium Temperature</Card.Title>
      <Card.Body>
        <Card.Text>
          The current temperature is: {JSON.stringify(temp)}°F
        </Card.Text>

        <Button className="" onClick={setRandomTemperature}>
          Random Temperature
        </Button>
      </Card.Body>
    </Card>
  );
};
