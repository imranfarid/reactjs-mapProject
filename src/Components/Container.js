import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Markerpoints from '../Components/Markers';

const style = {
    width: '100%',
    height: '100%'
}

const data = {markerPoints: [{
    "title": "The marker`s title will appear as a tooltip.",
    "name":"SOMA",
    "position":{"lat": 23.787844, "lng": 90.415269}
},{
    "title": "The marker`s title will appear as a tooltip.",
    "name":"SOMA",
    "position":{"lat": 23.789557, "lng": 90.416578}
},
{
    "title": "The marker`s title will appear as a tooltip.",
    "name":"SOMA",
    "position":{"lat": 23.793730, "lng": 90.414196}
},
{
    "title": "The marker`s title will appear as a tooltip.",
    "name":"SOMA",
    "position":{"lat": 23.793278, "lng": 90.412211}
},
]};

export class MapContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        }
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
    }

    onMarkerClick(props, marker, e){
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    }

    onMapClicked(props){
        if(this.state.showingInfoWindow){
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    }

    render(){
        return(
            <Map 
            google={this.props.google} 
            style={style}
            initialCenter={{
                lat: 23.786818,
                lng: 90.415280
            }}
            onClick={this.onMapClicked}
            zoom={15} 
            >
                {
                    data.markerPoints.map((x)=>(<Marker {...x} />))
                }

                <Markerpoints lat="23.789557" lng="90.416578" name="Some name" />
                
                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: '',
    version: '3'
})(MapContainer)