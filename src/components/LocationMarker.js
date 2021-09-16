import {useState} from "react";
import {Marker, Popup, useMapEvents} from "react-leaflet";

export default function LocationMarker(props) {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
        locationfound(e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());

            if(props.onUserLocation) {
                props.onUserLocation(e.latlng);
            }
        },
    });

    map.locate();

    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    );
}