import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SkateParkMarker from './SkateParkMarker';
import SkateParkCard from './SkateParkCard';

/* const getData =  () => {
  return new Promise((resolve, reject)=> {
    fetch("https://api.jsonbin.io/b/5c8a5731e5cf2761bec1f195")
    .then(response => response.json())
    .then(res => JSON.stringify(res))
    .then(data => resolve(data))
    .catch(err => reject(err));
  })
  
}; */
class Map extends Component { 
  constructor(props) {
    super(props);
    
    this.state = {
      error: null,
      isLoaded: false,
      card: []

    }; 
  }
  static defaultProps = {
    center: {
      lat: 59.24,
      lng: 18.23
    },
    zoom: 8
  }
  componentDidMount() {
    fetch("https://api.jsonbin.io/b/5c8a5731e5cf2761bec1f195/10")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            card: result.cards
          });
        },
       
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  
  generateUniqueKey(el) {
    return `${el.lat}${el.lng}`;
  }
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAF-i-wVVx35JGqRUtymgw7Gl5CblDNuIY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {this.state.card.map((el) => <SkateParkMarker lat={el.lat} lng={el.lng} key={this.generateUniqueKey(el)} uniqueId={this.generateUniqueKey(el)} icon={el.icon}/>)}
        {this.state.card.map((el) => <SkateParkCard title={el.title} text={el.text} lat={el.lat} lng={el.lng} key={this.generateUniqueKey(el)} uniqueId={this.generateUniqueKey(el)} src={el.imgSrc}/>)}
          
          
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;