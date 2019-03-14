import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SkateParkMarker from './SkateParkMarker';
import SkateParkCard from './SkateParkCard'


 
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.24,
      lng: 18.23
    },
    zoom: 15
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAF-i-wVVx35JGqRUtymgw7Gl5CblDNuIY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <SkateParkMarker
            lat={59.2421847}
            lng={18.2300861}
          />
          <SkateParkCard
            lat={59.2421847}
            lng={18.2300861}
          />
          
          
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;