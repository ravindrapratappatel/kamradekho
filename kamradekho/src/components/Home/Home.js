import React, { useEffect, useState } from "react";
import Navbar from "../Navbar.js/Navbar";
import Carousel from "../carousel/Carousel";
import Cards from "../Cards/Cards";
import Footer from "../Footer/Footer";
import RelatedSearch from "../RelatedSearch/Index";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getrooms, getroomsbylocation } from "../../actions/room";

function Home() {
  const dispatch = useDispatch();
  const { room, loading } = useSelector((state) => state.room);
  const [roomlocation, setroomlocation] = useState();
  const getrooms1 = async () => {
    dispatch(getrooms());
  };

  useEffect(() => {
    getrooms1();
  }, []);

  return (
    <>
      <div className="top-0 h-fit">
        <Navbar />
      </div>
      <div className="h-auto -top-1 lg:h-auto bg-[#21b4db] ">
        <Carousel />
      </div>
     <div className=" flex w-full justify-center">
      <div className="flex lg:w-3/4 relative self-center flex-col min-h-[50vh] justify-center flex-wrap md:flex-row lg:flex-row">
        {loading ? (
          <CircularProgress className="flex self-center" />
        ) : ( room.length>=1 ?
          room.map((item) => {
            return (  <div key={item.roomid} className='m-0 sm:w-1/3'>
              <Cards
                key={item.roomid}
                item ={item}
              />
              </div>
            );
          }) : <h4 className="self-center">No room found</h4>
        )}
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
