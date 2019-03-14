import React, { Component } from 'react';
import Card from  'react-bootstrap/Card';


class SkateParkCard extends Component {
  render() {
    return(<Card style={{ width: '18rem', 
                          display:'none'}}
                  id='card'>
    <Card.Img variant="top" src="https://myskatespots.com/wp-content/uploads/2015/08/Tyres%C3%B6-img6.jpg" />
    <Card.Body>
      <Card.Title>Tyresö Skateplaza</Card.Title>
      <Card.Text>
      Skatepark 135 ligger nära Tyresö centrum och omfattar en skateplaza på sjuhundra kvadratmeter. Parken har en streetinriktning och har också play- och miniramp samt kidneypool.
      </Card.Text>
    </Card.Body>
  </Card>)
  }
}

export default SkateParkCard;