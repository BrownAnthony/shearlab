import React, { Component } from 'react';
import { Fade, Card, CardTitle, CardText, CardBody } from 'reactstrap';


export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { fadeIn: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn,
    });
  }

  render() {
    return (
      <div>
        <button color="info" onClick={this.toggle} className="mx-auto btn btn-info btn-lg" size="lg">Contact Us</button>
        <Fade in={this.state.fadeIn} tag="h5" className="mt-3 Buttontext ">
          <row>
            <Card>
              <CardBody>
                <CardTitle className="text-center">Email & Phone</CardTitle>
              </CardBody>
              <CardBody>
                <CardText className="text-center" >(816)533-4988</CardText>
                <CardText className="text-center">Anthony@shearlab.com</CardText>
                <CardText className="text-center">Bailey@shearlab.com</CardText>
              </CardBody>
            </Card>
          </row>
        </Fade>
      </div>
    );
  }
}
