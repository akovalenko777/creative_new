import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import './../../node_modules/leaflet/dist/leaflet.css'
import MarkerIcon from './../assets/imgs/leaf-green.png'
import MarkerShadow from './../assets/imgs/leaf-shadow.png'

function Map(){
  const coords = [46.97051271601916, 32.004148505696676];

  const customMarker = new L.Icon({
    iconUrl: MarkerIcon,
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: MarkerShadow,
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
  })

  return (
    <div id="map-section">
      <MapContainer center={coords} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
        />
        <Marker position={coords} icon={customMarker}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map;