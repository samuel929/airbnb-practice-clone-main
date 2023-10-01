import { Divider } from "@mui/material";
import React, { Children } from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import DatePicker, { Calendar } from "react-multi-date-picker";
import { CiLocationOn } from "react-icons/ci";



function SearchRoom() {
  const [value, setValue] = React.useState(new Date());
  const [openCalendar, setOpenCalendar] = React.useState(false);
  const [openGuest, setOpenGeust] = React.useState(false);
  const [location, setLocation] = React.useState(false);
  const [Adults,setAdults]=React.useState(0);
  const [children,setChildren]=React.useState(0);
  const [infants,setInfants]=React.useState(0);
  return (
    <div
      
      style={{
        width: "55vw",
        background: "#ebebeb",
        height: "70px",
        borderRadius: "50px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{ width: "200px", cursor: "pointer" }}
        onClick={() => {
          setOpenCalendar(false);
          setOpenGeust(false);
          setLocation(!location);
        }}
      >
        <div style={{ position: "relative", top: "15px" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "700",
              fontFamily: "Roboto",
            }}
          >
            Where
          </span>
          <br />
          <span style={{ fontFamily: "Roboto", color: "#a0a0a0" }}>
            <input
              placeholder="Search Room"
              style={{
                background: "transparent",
                border: "transparent",
                textAlign: "center",
              }}
            />
          </span>
        </div>
      </div>
      {location && (
        <div
          style={{
            position: "absolute",
            boxShadow: "0 0 5px #8798ad",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            top: "110px",
            left: "250px",
            zIndex: 99,
            background: "white",
            height: "250%",
            padding: "20px 0 40px 20px",
            width: "300px",
            borderRadius: "30px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <div>
              <CiLocationOn
                style={{ position: "relative", top: "3px" }}
                size={20}
              />
              <span style={{ position: "relative", left: "3px" }}>
                Randburg
              </span>
            </div>
          </div>
        </div>
      )}

      <Divider orientation="vertical" variant="middle" flexItem />
      <div
        style={{ width: "100px", cursor: "pointer" }}
        onClick={() => {
          setOpenGeust(false);
          setLocation(false);
          setOpenCalendar(!openCalendar);
        }}
      >
        <div style={{ position: "relative", top: "15px" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "700",
              fontFamily: "Roboto",
            }}
          >
            Checkin
          </span>
          <br />
          <span style={{ fontFamily: "Roboto", color: "#a0a0a0" }}>
            Add dates
          </span>
        </div>
      </div>
      <Divider orientation="vertical" variant="middle" flexItem />
      <div style={{ width: "100px" }}>
        <div style={{ position: "relative", top: "15px" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "700",
              fontFamily: "Roboto",
            }}
          >
            Checkout
          </span>
          <br />
          <span style={{ fontFamily: "Roboto", color: "#a0a0a0" }}>
            Add dates
          </span>
        </div>
      </div>
      {openCalendar && (
        <div style={{ position: "absolute", top: "100px", left: "390px" }}>
          <Calendar
            value={value}
            className=""
            range
            numberOfMonths={2}
            showOtherDays
          />
        </div>
      )}

      <Divider orientation="vertical" variant="middle" flexItem />
      <div
        style={{ width: "100px", cursor: "pointer" }}
        onClick={() => {
          setLocation(false);
          setOpenCalendar(false);
          setOpenGeust(!openGuest);
        }}
      >
        <div style={{ position: "relative", top: "15px" }}>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "700",
              fontFamily: "Roboto",
            }}
          >
            Who
          </span>
          <br />
          <span style={{ fontFamily: "Roboto", color: "#a0a0a0" }}>
            Add Guests
          </span>
        </div>
      </div>

      {openGuest && (
        <div
        tabIndex={0} 
        onBlur={()=> setOpenGeust(false)}
          style={{
            position: "absolute",
            boxShadow: "0 0 5px #8798ad",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            top: "110px",
            right: "290px",
            zIndex: 99,
            background: "white",
            height: "250%",
            padding: "20px 0 40px 0",
            width: "400px",
            borderRadius: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 20px 0 20px",
              position: "relative",
              top: "20px",
            }}
          >
            <div>
              <span style={{ float: "left" }}>Adults</span>
              <br />
              <span
                style={{ position: "relative", top: "5px", color: "#d1385c" }}
              >
                Ages 13 or Above
              </span>
            </div>
            <div
              style={{
                display: "flex",
                width: "70px",
                justifyContent: "space-between",
                position: "relative",
                top: "10px",
              }}
            >
              <div>
                <AiOutlineMinusCircle
                  color="#eeeeee"
                  size={25}
                  style={{ cursor: "pointer" }}
                  onClick={()=>{
                    const minus = Adults - 1;
                    if(minus === -1){
                        setAdults(0)
                    }else{
                        setAdults(minus)
                    }
                  }}
                />
              </div>
              <div style={{ position: "relative", top: "3px" }}>{Adults}</div>
              <div>
                <BsPlusCircle
                  size={21}
                  style={{
                    position: "relative",
                    top: "2px",
                    cursor: "pointer",
                  }}
                  onClick={()=>{
                    const add = Adults + 1;
                    setAdults(add)
                  }}
                />
              </div>
            </div>
          </div>
          <Divider variant="middle" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 20px 0 20px",
              position: "relative",
              top: "20px",
            }}
          >
            <div>
              <span style={{ float: "left" }}>Children</span>
              <br />
              <span
                style={{ position: "relative", top: "5px", color: "#d1385c" }}
              >
                Ages 2-12
              </span>
            </div>
            <div
              style={{
                display: "flex",
                width: "70px",
                justifyContent: "space-between",
                position: "relative",
                top: "10px",
              }}
            >
              <div>
                <AiOutlineMinusCircle
                  color="#eeeeee"
                  size={25}
                  style={{ cursor: "pointer" }}
                  onClick={()=>{
                    const minus = children - 1;
                    if(minus === -1){
                        setChildren(0)
                    }else{
                        setChildren(minus)
                    }
                  }}
                />
              </div>
              <div style={{ position: "relative", top: "3px" }}>{children}</div>
              <div>
                <BsPlusCircle
                  size={21}
                  style={{
                    position: "relative",
                    top: "2px",
                    cursor: "pointer",
                  }}
                  onClick={()=>{
                    const add = children + 1;
                    setChildren(add);
                  }}
                />
              </div>
            </div>
          </div>
          <Divider variant="middle" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0px 20px 0 20px",
            }}
          >
            <div>
              <span style={{ float: "left" }}>Infants</span>
              <br />
              <span
                style={{ position: "relative", top: "5px", color: "#d1385c" }}
              >
                Under 2
              </span>
            </div>
            <div
              style={{
                display: "flex",
                width: "70px",
                justifyContent: "space-between",
                position: "relative",
                top: "10px",
              }}
            >
              <div>
                <AiOutlineMinusCircle
                  color="#eeeeee"
                  size={25}
                  style={{ cursor: "pointer" }}
                  onClick={()=>{
                    const minus = infants - 1;
                    if(minus === -1){
                        setInfants(0)
                    }else{
                        setInfants(minus)
                    }
                  }}
                />
              </div>
              <div style={{ position: "relative", top: "3px" }}>{infants}</div>
              <div>
                <BsPlusCircle
                  size={21}
                  style={{
                    position: "relative",
                    top: "2px",
                    cursor: "pointer",
                  }}
                  onClick={()=>{
                    const add = infants + 1;
                    setInfants(add);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <Divider orientation="vertical" variant="middle" flexItem />
      <div style={{ width: "100px" }}>
        <div style={{ position: "relative", top: "10px", right: "10px" }}>
          <button
            style={{
              borderRadius: "40px",
              padding: "10px",
              height: "50px",
              width: "100px",
              color: "white",
              background: "#d1385c",
              border: "1px solid #d1385c",
              cursor: "pointer",
            }}
          >
            <GoSearch
              size={15}
              style={{ position: "relative", right: "5px", top: "2px" }}
            />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchRoom;
