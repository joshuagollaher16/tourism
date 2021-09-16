import './App.css';
import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet'
import {Component, useState} from "react";
import data from "./attractions.csv"
import * as d3 from "d3"

import LocationMarker from "./components/LocationMarker";
import Navbar from "./components/Navbar";




class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            userLocation: [],
            map: null
        };


    }

    componentDidMount() {
        d3.csv(data).then(function(data) {
            this.setState({data: data});
        }.bind(this));



    }

    render() {
        return (
            <div>

                <Navbar />

                <MapContainer center={[38.20842814139659, -91.16052229681911]}
                              zoom={12}
                              scrollWheelZoom={true}
                              ref={(m) => this.setState({map: m})}>

                    <TileLayer
                        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'

                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                    />

                    {this.state.data.map(function (d) {
                        console.log(d);
                        return (
                            <Marker key={d.name + d.latitude} position={[d.latitude, d.longitude]}>
                                <Popup>
                                    {d.name}
                                </Popup>
                            </Marker>
                        );
                    })}

                    <LocationMarker onUserLocation={(loc) => this.setState({userLocation: loc})}/>

                </MapContainer>
            </div>
        );
    };
}

export default App;
