import './App.css';
import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet'
import {Component, useEffect, useState} from "react";
import data from "./attractions.csv"
import * as d3 from "d3"

import LocationMarker from "./components/LocationMarker";
import Navbar from "./components/Navbar";

import filter from "./Filter/Filter"


const App = () => {

    const [state, setState] = useState({
        data: [],
        userLocation: [],
    });

    useEffect(() => {
        d3.csv(data).then(function(data) {
            setState({...state, data: data});
        });
    }, []);




    return (
        <div>

            <Navbar/>

            <MapContainer center={[38.20842814139659, -91.16052229681911]}
                          zoom={12}
                          scrollWheelZoom={true}
                          ref={(m) => setState({...state, map: m})}>

                <TileLayer
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'

                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />

                {state.data.map(function (d) {
                    console.log(d);



                    return (
                        <Marker key={d.name + d.latitude} position={[d.latitude, d.longitude]}>
                            <Popup>
                                {d.name}
                            </Popup>
                        </Marker>
                    );
                })}

                <LocationMarker onUserLocation={(loc) => setState({...state, userLocation: loc})}/>

            </MapContainer>
        </div>
    );
}

export default App;
