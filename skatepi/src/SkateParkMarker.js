import React, { Component } from 'react';



class SkateParkMarker extends Component {
  constructor(props) {
    super(props);
    this.showCard = this.showCard.bind(this);
  }
  showCard(){
    const card = document.getElementById(this.props.uniqueId);
    
    card.style.display = '';
  }
  render() {
    return(
      <img src={this.props.icon} alt="Skatepark Icon" height="40" width="40" onClick={this.showCard}/>
 
    )
  }
}

export default SkateParkMarker;