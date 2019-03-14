import React, { Component } from 'react';
import Card from  'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class SkateParkCard extends Component {
  hideCard(){
    const card = document.getElementById(this.props.uniqueId);
    
    card.style.display = 'none';
  }
  render() {
    return(<Card style={{ width: '30rem', 
                          display:'none'}}
                  id={this.props.uniqueId}>
    <Button variant="outline-danger" id={'remove-' + this.props.uniqueId} onClick={this.hideCard}>X</Button>
    <Card.Img variant="top" src={this.props.src}/>
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