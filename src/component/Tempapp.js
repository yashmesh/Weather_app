import React, { useEffect, useState } from "react";
import "./Css/style.css";
const Tempapp =()=>{
    const [city, setCity] = useState("Nagpur");
    //const [first, setfirst] = useState(second)
    const [search,setSearch]=useState("Nagpur");
    useEffect(() => {
        
      const fetchApi=async ()=>{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=eb79bd889f915e988382b459216420f1`
        const response=await fetch(url);
        const resJson = await response.json();
        setCity(resJson.main);
      } ;
      fetchApi();
     
    },[search])
    
     return(
        <>
           <div className="box">
               <div className="inputData">
                    <input 
                    type="search"
                    value={search}
                    className="inputField" 
                    onChange={(event)=>{setSearch(event.target.value)}} />
               </div>

               {
                !city ? (
                  <p>No Data Found</p>
                ):(
                  <div>
                       <div className="info">
                          <h2 className="location">
                          <i className="fa-solid fa-street-view"></i>
                          {search}
                          </h2>
                          <h1 className="temp">
                            {city.temp} cel
                          </h1>
                          <h3 className="tempmin_max">
                              Min :{city.temp_min}cel | Max : {city.temp_max}cel
                          </h3>
                        </div>
                            <div className="wave -one"></div>
                            <div className="wave -two"></div>
                            <div className="wave -three"></div>

                  </div>
                )
                }    
               
            </div>
        </>
     )
}
export default Tempapp;