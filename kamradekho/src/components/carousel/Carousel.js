import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getroomsbylocation } from "../../actions/room";
import { getlocation } from "../../actions/data";
import validator from "validator";
function Carousel() {
  const dispatch = useDispatch();
  const [location, setlocation] = useState();
  const {locations} = useSelector((auth)=> auth.data);
   
  const searchwithlocation=(arg)=>{
   const trimed_search = validator.trim(arg)
   dispatch(getroomsbylocation(trimed_search))
  }

  useEffect(()=>{
   dispatch(getlocation())
  }, [])

  return (
    <div className=" h-auto w-full pt-16  ">
      <div className="flex flex-col justify-center items-center">
        <span className="font-semibold text-3xl tracking-tight text-white text-center ">
          Welcome To Kamra Dekho
        </span>
        <span className="text-xl mt-3  tracking-tight text-white text-center ">
          Browse our recommendations to find a wide range of rooms in Prayagraj.
        </span>
      </div>

      <div className="flex justify-center mt-16">
        <input
          rows={4}
          className="w-3/4 lg:w-1/2 h-8 rounded-md pl-5 rounded-r-none text-center justify-start"
          placeholder="Search by location"
          onChange={(e)=> {setlocation(e.target.value)}}
          onKeyDown={(e)=>{ if(e.key=== 'Enter' && location.length>=5) searchwithlocation(location)  }}
        />
        <button onClick={()=>{searchwithlocation(location)}} className="bg-blue-900 text-white w-auto h-8 rounded rounded-l-none ml-1 p-1 ">
          Search
        </button>
      </div>

      <div className="flex flex-row justify-center mt-10 pb-5">
        <div className="flex flex-row justify-start flex-wrap">
          <span className="font-semibold text-xl tracking-tight text-white text-center self-center">
          Top Search:
          </span>
          {locations.map((item, index) => {
            return (
              <button
                onClick={()=> {
                dispatch(getroomsbylocation(item.Location))
                }}
                className="text-white m-1 p-[3px] rounded-sm border text-center hover:bg-slate-50 hover:text-blue-600 "
                key={item.LocationID}
              >
                {item.Location}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
