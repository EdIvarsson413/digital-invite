'use client'

import { Icon, LatLng } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { useEffect, useState } from 'react'

export default function Mapa() {
    const [coord, setCoord] = useState([51.505, -0.09])

    useEffect(() => {
        const success = (pos: any) => {
            const crd = pos.coords;
            setCoord([crd.latitude, crd.longitude]);
        };

        const error = () => {
            console.log('Error getting user location');
        };
        navigator.geolocation.getCurrentPosition(success, error);
    }, [])

    const MyIcon = new Icon({
        iconUrl: '/icon-marker/marker-icon.png',
        iconRetinaUrl: '/icon-marker/marker-icon-2x.png',
        iconSize: [25, 41],
        iconAnchor: [12.5, 41],
        popupAnchor: [0, -41],
        shadowUrl: '/icon-marker/marker-shadow.png',
        shadowSize: [41, 41],
        shadowAnchor: [12, 41]
    });

    return (
        <div>
            <MapContainer className="w-96 h-96" center={new LatLng( coord[0], coord[1] )} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://www.openstreetmap.org/#map=18/25.53889/-103.43390"
                />

                <Marker position={new LatLng( coord[0], coord[1] )} icon={MyIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}