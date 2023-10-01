import './App.css';
import React,{useState,useEffect} from "react"
import Header from './components/Header/Header';
import ShowMapButton from './components/ShowMapButton/ShowMapButton';
import ReactMapboxGl,{Layer,Feature, Marker} from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Cards from './components/Card/Card';
import Grid from '@mui/material/Grid';
import IconBanner from './components/IconBanner/IconBanner';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import { FaMapPin } from 'react-icons/fa';


function App() {
 const [showMap,setShowMap]=useState<boolean>(false);
 const [user,setUser]=useState(null);
 const [pins,setPins]=useState([])

 React.useEffect(() => {
  const fetchRooms = async () => {
    await axios.get("http://localhost:3000/rooms")
      .then((res) => {
        setPins(res.data)
      });
  }
  fetchRooms();
}, []);
 
const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoic2FtdWVsOTI5IiwiYSI6ImNsbWdmaGRxMzE5cTIzZG56bDdqeHkwNXYifQ.LzBtJ_LRp2WRt8bBnk_z9w'
});

const ShowHideMap=()=>{
  setShowMap(!showMap)
}
  return (
    <div className="App">
       <IconBanner/>
       {
         showMap ?(
          <Map
          zoom={[6]}
          style="mapbox://styles/mapbox/streets-v9"
          center={[28.044379492577264,-26.208418213507905]}
          containerStyle={{
            height: '100vh',
            width: '100vw'
          }}
        >
          {
            pins.map((item:any)=>(
              <Marker
              coordinates={[item.longitude, item.latitude]}
              anchor="bottom"
              
           >
             <FaMapPin color='#ff385c' size={30}/>{/* You can customize the marker's content */}
           </Marker>
            ))
          }
        </Map>
         ):
         (
           <>   
         <Cards/>
           </>
         )
       }
      
       <div className='center-map-button'>
       <ShowMapButton showMap={showMap} ShowHideMap={ShowHideMap}/>
       </div>
       <ToastContainer />
    </div>
  );       

}

export default App;
