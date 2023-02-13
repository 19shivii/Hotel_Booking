import React from 'react'
import './FeaturedProp.css'
import Hotel2 from "../../assets/Hotels/Hotel2.jpg"
import Hotel7 from "../../assets/Hotels/Hotel7.jpg"
import Hotel6 from "../../assets/Hotels/Hotel6.jpg"
import Hotel5 from "../../assets/Hotels/Hotel5.jpg"
const featuredProp = () => {
  return (
    <div className="fp">
        <div className="fpItem">
        <img src={Hotel2} className="fpImg" alt="" />
        <span className="fpName">ALL Time Inn</span>
        <span className="fpCity">Jaipur</span>
        <span className="fpPrice">Starting from Rs. 1250</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src={Hotel7}  className="fpImg" alt="" />
        <span className="fpName">Half Time Inn</span>
        <span className="fpCity">Delhi</span>
        <span className="fpPrice">Starting from Rs. 2000</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src={Hotel6} className="fpImg" alt="" />
        <span className="fpName">Quarter Time Inn</span>
        <span className="fpCity">Kerala</span>
        <span className="fpPrice">Starting from Rs. 1900</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
        <div className="fpItem">
        <img src={Hotel5} className="fpImg" alt="" />
        <span className="fpName">Semi Time Inn</span>
        <span className="fpCity">Pune</span>
        <span className="fpPrice">Starting from Rs. 1000</span>
        <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
        </div>
        </div>
    </div>
  )
}

export default featuredProp