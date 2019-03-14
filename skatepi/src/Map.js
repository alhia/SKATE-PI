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
      card: [{
        text: ['Skatepark 135 ligger nära Tyresö centrum och omfattar en skateplaza på sjuhundra kvadratmeter. Parken har en streetinriktning och har också play- och miniramp samt kidneypool.'],
         title: ['Tyresö skateplaza'],
         lat: 59.2421847,
         lng: 18.2300861
       }
   ]

    }; 
  }
  static defaultProps = {
    center: {
      lat: 59.24,
      lng: 18.23
    },
    zoom: 15
  }
  /* componentDidMount() {
    fetch('https://api.jsonbin.io/b/5c8a5731e5cf2761bec1f195')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  } */
  
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAF-i-wVVx35JGqRUtymgw7Gl5CblDNuIY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {this.state.card.map((el) => <SkateParkMarker lat={el.lat} lng={el.lng} key={el.lng}/>)}
        {this.state.card.map((el) => <SkateParkCard title={el.title} text={el.text} lat={el.lat} lng={el.lng} key={el.lng}/>)}
          
          
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;