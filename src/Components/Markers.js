import React from 'react';
import {Marker} from 'google-maps-react';

class Markerpoints extends React.Component{
    constructor(props){
        super(props);
        this.setState = {
            name: this.props.name,
            lat: this.props.lat,
            lng: this.props.lng,
            
        }
        
    }

    render(){
        
        return(
            
                <Marker
                name={'Dolores Park'}
                position={{lat: 23.789557, lng: 90.416578}} />
            
        );
    }
}

export default Markerpoints;