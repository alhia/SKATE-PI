import React, { Component } from 'react';



class SkateParkMarker extends Component {
  constructor(props) {
    super(props);
    this.showCard = this.showCard.bind(this);
  }
  showCard(){
    const card = document.getElementById('card');
    
    card.style.display = '';
  }
  render() {
    return(
      <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/17942-200.png" alt="Skatepark Icon" height="40" width="40" onClick={this.showCard}/>
 
    )
  }
}

export default SkateParkMarker;