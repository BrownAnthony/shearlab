import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Contact } from '../Page/Contact';


export function Pricing() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Simple Prices</h1>
        <hr className="my-2" />
        <p className="lead">Shears</p>
        <ul>
          <li>$25</li>
        </ul>
        <p>
        Includes all shear types. Additional charges may apply for correcting
        set or re-establishing rideline.
        </p>
        <hr className="my-2" />
        <p className="lead">Clipper Blades</p>
        <ul>
          <li>$9</li>
        </ul>
        <p>Includes all standard size blades.</p>
        <p>
        *please note for now ShearLab is only operational
        in the greater Kansas City area*
        </p>
      </Jumbotron>
      <div className="row">
        <div className="col text-center">
          <Contact />
        </div>
      </div>
    </div>
  );
}
