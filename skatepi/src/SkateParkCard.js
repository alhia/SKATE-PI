import React, { Component } from 'react';
import Card from  'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class SkateParkCard extends Component {
  constructor(props) {
    super(props);
    
  this.state = {
    title: this.props.title,
    text: this.props.text,
  }
} 
  render() {
    return(<Card style={{ width: '30rem', 
                          display:'none'}}
                  id='card'>
    <Button variant="outline-danger" id="remove">X</Button>

    <Card.Img variant="top" src="https://myskatespots.com/wp-content/uploads/2015/08/Tyres%C3%B6-img6.jpg" >
    </Card.Img>
    <Card.Body>
      <Card.Title>{this.props.title}</Card.Title>
      <Card.Text>
      {this.props.text}
      </Card.Text>
    </Card.Body>
  </Card>)
  }
}

export default SkateParkCard;