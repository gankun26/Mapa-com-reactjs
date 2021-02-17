import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
//importando imagem pro Marker
import foto from '../Components/Icones/iconemap.png'
import livro from '../Components/Icones/livro.png'




//imagem do Marker e tamanho dele
const MarkerIcon = new L.icon({
     iconUrl: foto,
     iconSize: [50, 50],  
});

const MarkerIcon2 = new L.icon({
  iconUrl: livro,
  iconSize: [50, 50],
})


//Marker é onde renderiza o marcador do mapa, localização e afins, sendo possivel adicionar nos popups imagens e informações
const MapView = ()=> {
   return(
  <>
     
       <div style={{backgroundColor:'cyan'}}>
         <h1 style={{textAlign:'center'}}>Ola eu sou um mapa!</h1>
         <MapContainer className="Mapview" center={[-22.9049548,-43.2080995]} zoom={13} scrollWheelZoom={true} style={{margin:"0 auto", height: "90vh", width:"95vw" }}>
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              <Marker position={[-22.9049548,-43.2080995]}  icon={MarkerIcon}> 
                 <Popup >
                       Oi
                       <img src={livro} />
                 </Popup>
                 <Tooltip>
                     sou apenas um marcador de mapa
                 </Tooltip>
              </Marker>

              <Marker position={[-22.9149558,-43.2180985]}  icon={MarkerIcon2}> 
                 <Popup >
                       olá sou uma imagem
                       <img src={foto} />
                 </Popup>
                 <Tooltip>
                     Ola
                 </Tooltip>
              </Marker>

          </MapContainer>
         </div> 
  </>
   )
}



export default MapView;