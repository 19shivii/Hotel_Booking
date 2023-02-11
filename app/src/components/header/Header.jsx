import React ,{type,useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import "./Header.css"
import { DateRange } from 'react-date-range';
import {format} from "date-fns"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBed, faPlane,faCar,faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
const Header = ({type}) => {
  const[openDate,setopenDate]=useState(false)
const[openOptions,setOpenOptions]=useState(false);
const[options,setOptions]=useState({
  adult:1, 
  children:0,
  room:1
})
const handleOption=(name,operation)=>{
  setOptions((prev)=>{
    return{
      ...prev,
      [name]:operation==="i"?options[name]+1:options[name]-1,
    };
  });
};

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date,
      key: 'selection'
    }
  ]);

  return (
    <div className="header">
      <div className={type==="list"?"headerContainer listMode":"headerContainer"}>
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed}/>
            <span>Stays</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane}/>
            <span>Flights</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCar}/>
            <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed}/>
            <span>Attractions</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi}/>
            <span>Taxi</span>
            </div>
        </div>
      { type !=="list"&&
        <>  <h1 className="headerTitle">
          A lifetime of discount? It's Genius.
        </h1>
        <p className="headerDesc">
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free BOOK YOUR DREAM account.
        </p>
        <button className="headerBtn">Sign in/ Register </button>
       <div className="headerSearch">
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed} className="headerIcon"/>
          <input type="text" placeholder='Where are you going?' className='headerSearchInput' />
        </div>
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
          <span onClick={()=>setopenDate(!openDate)} className='headerSearchText '>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")} `}</span>
          {openDate && <DateRange
  editableDateInputs={true}
  onChange={item => setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
  className="date"
/>}
        </div> 
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
          <span onClick={()=>setOpenOptions(!openOptions)} className='headerSearchText ' >{`${options.adult}adult , ${options.children}children , ${options.room}room`}</span>
           { openOptions &&  <div className="options">
                <div className="optionItem">
                <span className="optionsText">Adult</span>
                <div className="optionCounter">
                <button className="optionCounterButton" 
                 disabled={options.adult<=1}
                  onClick={()=>handleOption("adult","d")}>-</button>
             <span className="optionCounterNumber">{`${options.adult}`}</span>
             <button className="optionCounterButton"  onClick={()=>handleOption("adult","i")}>+</button>
                </div>
            
                </div>
            
                <div className="optionItem">
                <span className="optionsText">Children</span>
                <div className="optionCounter">
              <button className="optionCounterButton" disabled={options.children<=0} onClick={()=>handleOption("children","d")}>-</button>
             <span className="optionCounterNumber">{`${options.children}`}</span>
             <button className="optionCounterButton"  onClick={()=>handleOption("children","i")}>+</button>
                </div>
                </div>
               <div className="optionItem">
                <span className="optionsText">Rooms</span>
                <div className="optionCounter">
              <button className="optionCounterButton" disabled={options.room<=1} onClick={()=>handleOption("room","d")}>-</button>
             <span className="optionCounterNumber">{`${options.room}`}</span>
             <button className="optionCounterButton"  onClick={()=>handleOption("room","i")}>+</button>
                </div>
                </div>
            </div>}
                <div className="headerSearchItem">
                  <button className="headerBtn">Search</button>
                  </div>
       </div>
        </div></>}
    </div>
    </div>
  )
}

export default Header