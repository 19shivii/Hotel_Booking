import React from 'react'
import './PropertyList.css'
import Hotel1 from "../../assets/Hotels/Hotel1.jpg"
import Resort1 from "../../assets/Resorts/Resort1.jpg" 
import Cabin1 from "../../assets/Cabins/Cabin1.jpg"
import Apart1 from "../../assets/Apartments/Apart1.jpg"  
import Villa1 from "../../assets/Villas/Villa1.jpg" 
const PropertyList = () => {
  return (
    <div className="plist">
        <div className="plistItem">
                <img src={Hotel1} className="plistImg" alt="" />
                <div className="plistTitle">
                    <h1>Hotels</h1>
                    <h2>434 Hotels</h2>
                </div>
        </div>
        <div className="plistItem">
                <img src={Resort1} className="plistImg" alt="" />
                <div className="plistTitle">
                    <h1>Resorts</h1>
                    <h2>434 Hotels</h2>
                </div>
        </div>
        <div className="plistItem">
                <img src={Apart1} className="plistImg" alt="" />
                <div className="plistTitle">
                    <h1>Apartments</h1>
                    <h2>434 Hotels</h2>
                </div>
        </div>
        <div className="plistItem">
                <img src={Villa1} className="plistImg" alt="" />
                <div className="plistTitle">
                    <h1>Villas</h1>
                    <h2>434 Hotels</h2>
                </div>
        </div>
        <div className="plistItem">
                <img src={Cabin1} className="plistImg" alt="" />
                <div className="plistTitle">
                    <h1>Cabins</h1>
                    <h2>434 Hotels</h2>
                </div>
        </div>
    </div>
  )
}

export default PropertyList