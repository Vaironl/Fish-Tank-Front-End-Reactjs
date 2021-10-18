import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";

export const TemperatureCard = () => {
  const [temp, setTemp] = useState(0);

  const setRandomTemperature = () => {
    setTemp(Math.random()* 2 + 1);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Title>Aquarium Temperature</Card.Title>
      <Card.Body>The current temperature is: {JSON.stringify(temp)}</Card.Body>
      <Button onClick={setRandomTemperature}>Random Temperature</Button>
    </Card>
  );
};
