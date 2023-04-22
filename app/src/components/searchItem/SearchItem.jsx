import React from 'react'
import "./SearchItem.css"
// import Hotel1 from "../../assets/Hotels/Hotel1.jpg"
const SearchItem = ({hotel}) => {
  return (
    <div  className='searchItem' >
        
        <img src={hotel} alt="" className="siImg" />
 
    <div className="siDesc">
    <h1 className="siTitle">High tower Apartments</h1>
        <span className="siDistance">200m from metro</span>
        <span className="siTaxi0p">Free airport cab</span>
        <span className="siSubtitle">Studio Apartment with Air conditioning</span>
        <span className="siFeatures">Entire Studio • 1 bathroom • King size Bed</span>
        <span className="siCancel0p">Free cancellation™</span>
        <span className="siCancel0pSubtitle">You can cancel later,so lock in this great price.</span>
  
    </div>
    <div className="siDetails">
        <div className="siRating">
            <span>Excellent</span>
            <button>9.1</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">$321</span>
            <span className="siTax0p">Include Taxes and fees</span>
            <button className="siCheckButton">See availabilty</button>
        </div>
         </div>
    </div>
  )
}

export default SearchItem