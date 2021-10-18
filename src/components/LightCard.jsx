import React from "react";
import { Card } from "react-bootstrap";

export const LightCard = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const lightStatus = () => {
    return hours > 6 && hours < 15 ? (
      <span className="text-primary">On</span>
    ) : (
      <span className="text-danger">Off</span>
    );
  };

  return (
    <Card>
      <Card.Title>Light Status</Card.Title>
      <Card.Body>
        <Card.Text>
          Light's are on between 6:00 and 13:00. It is currently: {hours}:
          {minutes}. Therefore the lights are:
        </Card.Text>
        <Card.Text>{lightStatus()}</Card.Text>
      </Card.Body>
    </Card>
  );
};
