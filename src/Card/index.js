import React from 'react';
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardGroup,
} from 'reactstrap';
import './index.css';


export function Cards() {
  return (
    <CardGroup>
      <Card>
        <div className="CardImg" style={{ backgroundImage: 'url("/Images/scissors.jpg")' }} />
        <CardBody>
          <CardTitle>Professional</CardTitle>
          <CardText>At ShearLab care and precision is being poured into every tool.</CardText>
        </CardBody>
      </Card>
      <Card>
        <div className="CardImg" style={{ backgroundImage: 'url("/Images/Clipper.jpg")' }} />
        <CardBody>
          <CardTitle>Shears and Clippers</CardTitle>
          <CardText>
            There are wide varieties and styles of shears or clippers
            all of which we can precisely sharpen.
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <div className="CardImg" style={{ backgroundImage: 'url("/Images/Grinder.jpg")' }} />
        <CardBody>
          <CardTitle>Diamond Tooling</CardTitle>
          <CardText>
          At ShearLab we spare no expense and all sharpening wheels are diamond
          inlayed to reduce heat and extend the life of shears and clippers.
          </CardText>
        </CardBody>
      </Card>
    </CardGroup>
  );
}
