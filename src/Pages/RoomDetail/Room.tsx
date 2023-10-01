import { Divider, Typography } from '@mui/material';
import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import { FaMapPin, FaRestroom, FaShower } from 'react-icons/fa';
import {FiShare } from 'react-icons/fi'
import { MdOutlineBedroomChild } from 'react-icons/md';
import {  useParams } from 'react-router-dom';
import {GrLounge} from 'react-icons/gr'
import { toast } from 'react-toastify';
import ReactMapboxGl,{Layer,Feature, Marker} from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Reserve from '../../components/ReserveRoom/Reserve';
function Room() {
    let { id } =useParams();
    const [rooms,setRooms]=useState<any>(null)
    console.log(rooms)
    useEffect(()=>{

        const fetchRoomDetail = async () => {
            await axios.get(`http://localhost:3000/rooms/${id}`).then((res) => {
              setRooms(res.data);
            });
          };
      
          fetchRoomDetail();
    },[id])

    const Map = ReactMapboxGl({
        accessToken:
          'pk.eyJ1Ijoic2FtdWVsOTI5IiwiYSI6ImNsbWdmaGRxMzE5cTIzZG56bDdqeHkwNXYifQ.LzBtJ_LRp2WRt8bBnk_z9w',
      });

    
  if (rooms === null) {
    return <p>Loading...</p>;
  }
   const img1= rooms?.photos[0];
   const img2= rooms?.photos[1];
   const img3= rooms?.photos[2];
   const img4= rooms?.photos[3];
   const img5= rooms?.photos[4];
  return (
    <div style={{padding:"200px 200px 40px 200px"}}>{
     <>
             <Typography variant="h4" gutterBottom>
           {rooms.location}
          </Typography>
          <div style={{display:"flex",justifyContent:"space-between"}}>
              <div>
               <AiFillStar size={20} style={{position:"relative",top:"4px"}}/>
                <span style={{textDecoration:"underline"}}>{rooms.star_rating} reviews</span>
              </div>
              <div style={{display:"flex"}}>
                  <div style={{marginRight:"15px"}}>
                  <span style={{textDecoration:"underline"}}><FiShare style={{position:"relative",top:"4px",right:"3px"}} size={20}/>Share</span>
                  </div>
                  <div>
                    <span style={{textDecoration:"underline"}}><AiOutlineHeart style={{position:"relative",top:"4px",right:"3px"}} size={20}/>Save</span>
                  </div>
              </div>
          </div>
          <div style={{marginTop:"20px"}}>
              <div style={{display:"flex"}}>
                <div>
                   <img src={img1}  style={{width:"95%",height:"63vh",borderTopLeftRadius:"8px",borderBottomLeftRadius:"8px"}}/>
                </div>
                <div>
                    <div style={{display:"flex"}}>
                     <img src={img2} style={{width:"55%",height:"30vh"}}/>
                     <img src={img3}  style={{width:"55%",height:"30vh",marginLeft:"10px"}}/>
                    </div>
                    <div style={{display:"flex",marginTop:"20px"}}>
                    <img src={img4} style={{width:"55%",height:"30vh"}}/>
                     <img src={img5}  style={{width:"55%",height:"30vh",marginLeft:"10px"}}/>
                    </div>
                </div>
              </div>
          </div>
          <div style={{marginTop:"20px",display:"flex"}}>
            <div>
          <Typography variant="h6" gutterBottom>
           Room in a home owned by {rooms.name}
          </Typography>
          <div style={{display:"flex"}}>
             <div style={{borderRadius:"8px",border:"1px solid #ededed",padding:"30px",margin:"10px 0 10px 10px",width:"130px",display:"flex",justifyContent:"space-between"}}>
                <MdOutlineBedroomChild size={30}/>
                <span style={{position:"relative",top:"5px"}}>1 Single Bed</span>
             </div>
             <div style={{borderRadius:"8px",border:"1px solid #ededed",padding:"30px",margin:"10px 0 10px 10px",width:"130px",display:"flex",justifyContent:"space-between"}}>
                <FaShower size={30}/>
                <span style={{position:"relative",top:"5px"}}>Shower</span>
             </div>
             <div style={{borderRadius:"8px",border:"1px solid #ededed",padding:"30px",margin:"10px 0 10px 10px",width:"130px",display:"flex",justifyContent:"space-between"}}>
                <GrLounge size={30}/>
                <span style={{position:"relative",top:"5px"}}>Bachelor </span>
             </div>
          </div>
          <Divider style={{width:"58%",marginBottom:"20px"}}/>
          <Typography variant="h6" gutterBottom>
           About this place
           <br/>
           {rooms.description}
          </Typography>
          <p style={{width:"58%",fontFamily:"Roboto",lineHeight:"1.5rem"}}>
      
           A one-room bachelor apartment is a compact and versatile living space ideal for a single individual or a couple. This self-contained unit efficiently integrates a bedroom, living area, and kitchen into a single open-concept room. Its design emphasizes functionality and space optimization, often featuring smart storage solutions and multifunctional furniture. With a private bathroom attached, it offers complete autonomy. These apartments are popular in urban environments for their efficiency and affordability. Their minimalist design encourages a clutter-free lifestyle, making them perfect for those who value simplicity and convenience. Overall, a one-room bachelor apartment provides a practical and comfortable living experience in a limited space.
          </p>
          <Divider style={{width:"58%",marginBottom:"20px"}}/>
          <Typography variant="h6" gutterBottom>
           What this Place offers
           
          </Typography>
          {rooms.amenities.map((item:any)=>(
            <div style={{display:"flex",flexWrap:"wrap"}}>
               <p><FaRestroom/> {item}</p>
            </div>
          ))}
          </div>
            <div>
                <Reserve rooms={rooms}/>
            </div>
          </div>
          <div style={{marginTop:"50px"}}>
            
          <Map
          style="mapbox://styles/mapbox/streets-v9"
          center={[rooms.longitude,rooms.latitude]}
          containerStyle={{
            height: '40vh',
            width: '80vw',
            borderRadius:"8px"
          }}
        >
            <Marker
           coordinates={[rooms.longitude, rooms.latitude]}
           anchor="bottom"
           
        >
          <FaMapPin color='#ff385c' size={30}/>{/* You can customize the marker's content */}
        </Marker>

        </Map>
          </div>
          </>
        }</div>
  )
}

export default Room