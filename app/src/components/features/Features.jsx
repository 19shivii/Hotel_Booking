import React ,{ useState, useEffect }from 'react'
import './Features.css'
import India1 from '../../assets/India1.jpg'
import Singapore1 from '../../assets/Singapore1.jpg'
import Paris1 from '../../assets/Paris1.jpg'
import Dubai1 from '../../assets/Dubai1.jpg'

const Features = () => {
    
  return (
    <div className="features">
        <div className="featureItem">
            <img src={India1} alt="" className="featureImg" />
            <div className="featureTitle">
                <h1>India</h1>
                <h2>7542 properties</h2>
            </div>
        </div>
        <div className="featureItem">
            <img src={Dubai1} alt="" className="featureImg" />
            <div className="featureTitle">
                <h1>Dubai</h1>
                <h2>6000 properties</h2>
            </div>
        </div>
        <div className="featureItem">
            <img src={Paris1} alt="" className="featureImg" />
 
            <div className="featureTitle">
                <h1>Paris</h1>
                <h2>3245 propertiess</h2>
            </div>
        </div>
        <div className="featureItem">
            <img src={Singapore1} alt="" className="featureImg" />
            <div className="featureTitle">
                <h1>Singapore</h1>
                <h2>4324 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Features