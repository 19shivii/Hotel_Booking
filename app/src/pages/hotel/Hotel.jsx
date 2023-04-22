import React, { useState } from 'react'
import "./Hotel.css"
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import "./Hotel.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot ,faCircleXmark,faCircleArrowLeft,faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'


const Hotel = () => {
  const[slideNo,setSlideNo]=useState(0);
  const[open,setOpen]=useState(false);
  const photos=[
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    }, 
  ];
  const handleOpen=(i)=>{
    setSlideNo(i);
    setOpen(true);
  }
const handleMove=(direction)=>{
  let newSlideNo;
  if(direction==="l"){
    newSlideNo=slideNo===0?5:slideNo-1;
  }
  else newSlideNo=slideNo===5?0:slideNo+1;
  setSlideNo(newSlideNo);
}
  return (
    <div>
       <Navbar/>
    <Header type="list"/>
    <div className="hotelContainer">
      {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/> 
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/> 
          <div className="sliderWrapper">
            <img src={photos[slideNo].src} className='sliderImg' alt="" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")}/>  

      </div>}
      <div className="hotelWrapper">
       <button className="bookNow">Reserve and Pay Later</button>
        <h1 className="hotelTitle">Grand Hotel</h1>
        <div className="hotelAddress">
          <FontAwesomeIcon icon={faLocationDot}/>
           <span>Elton St 125 New York</span>
        </div>
        <span className="hotelDistance">
          Excellent location - 500m from metro
        </span>
        <span className="hotelPriceHighLight">
          Book a stay over $1114 at this property and get a free airport cab
        </span>
        <div className="hotelImages">
            {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img className="hotelImg" onClick={()=>handleOpen(i)}
                 src={photo.src}/>
              </div>
            ))}
        </div>
        <div className="hotelDetails">
          <div className="hotelDetailsText">
                <h1 className="hotelTitle">Excited to Host You!</h1>
                <p className="hotelDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur nam suscipit, nobis magni nulla dolores similique cum aspernatur quod.
                 Laboriosam vel error nesciunt quas quam! Maxime ex consectetur nam.</p>
          </div>
          <div className="hotelDetailsPrice">
            <h1>Perfect for a week trip!</h1>
            <span>Located in the heart of a city,we serve you like a king here.</span>
            <h2><b>$443(7 days)</b></h2>
            <button >Reserve and Pay Later</button>
          </div>
        </div>
      </div>
      <MailList/>
      <Footer/>
    </div>
    </div>
   
  )
}

export default Hotel