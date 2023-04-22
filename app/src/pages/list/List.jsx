import React, { useState } from 'react'
import { useLocation} from "react-router-dom";
import { DateRange } from 'react-date-range';
import {format} from "date-fns"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './List.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import SearchItem from '../../components/searchItem/SearchItem';
import Hotel1 from "../../assets/Hotels/Hotel1.jpg"
import Hotel2 from "../../assets/Hotels/Hotel2.jpg"
import Hotel3 from "../../assets/Hotels/Hotel3.jpg"
import Hotel4 from "../../assets/Hotels/Hotel4.jpg"

const List = () => {
  const location=useLocation()
  console.log(location)
  const[destination,setDestination]=useState(location.state.destination)
  const[date,setDate]=useState(location.state.date)
  const[openDate,setOpenDate]=useState(false)
  const[options,setOptions]=useState(location.state.options)
  return (
    <><Navbar />
    <Header type="list" />
    <div className="listContainer">
      <div className='listWrapper'>
          <div className="listSearch">
            <h1 className="lsTitle">
Search
            </h1>
            <div className="lsItem">
              <label htmlFor="">Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label htmlFor="">Check -in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>
                {`${format(date[0].startDate,"mm/dd/yyyy")} 
                to ${format(date[0].endDate,"mm/dd/yyyy")} `}</span>
                {openDate && < DateRange onChange={item=>setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
    />}
            </div>
            <div className="lsItem">
         
              <label htmlFor="">Options</label>
              <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Min Price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Max Price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Adults
                </span>
                <input type="number" min={1}  placeholder={options.adult} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Children
                </span>
                <input type="number" min={0} placeholder={options.children} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">
                  Rooms
                </span>
                <input type="number" min={1} placeholder={options.room} className="lsOptionInput" />
              </div>
            </div>
            </div>
        <button className=''>Search</button>
          </div>
            <div className="listResult">
               <SearchItem hotel={Hotel1}/>
               <SearchItem hotel={Hotel2}/>
               <SearchItem hotel={Hotel3}/>
               <SearchItem hotel={Hotel4}/>
            
          </div>
      </div>

    </div>
    </>
  )
}

export default List