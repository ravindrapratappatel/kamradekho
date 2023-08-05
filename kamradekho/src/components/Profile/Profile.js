import React from 'react'
import Navbar from '../Navbar.js/Navbar';
import Footer from '../Footer/Footer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useSelector } from "react-redux";
import Cards from '../Cards/Cards';
function Profile() {
  const {user: currentUser} = useSelector((state)=> state.auth)
  const {room} = useSelector((state)=> state.room)
  return (
    <div className='flex flex-col justify-between h-[100%]'>
    <div>
    <Navbar />
    </div>
  
   
    <div>
        <section className="relative block" style={{ height: "300px" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover bg-[#21b4db]"
          >
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={'https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png'}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center mt-24">
                  <h3 className="text-4xl font-semibold leading-normal mt-2 text-gray-800 mb-2">
                    {currentUser.username}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                    Email : {currentUser.email}
                  </div>
                  <div className="mb-2 text-gray-700 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                    User Since 2022
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <h3 className='text-2xl text-blue-800'>Top Rooms</h3>
                  <div className="flex overflow-x-scroll no-scrollbar ">
               { room.map((item)=>{
                 return  <div key={item.RoomID} className='min-h-[90px] min-w-[260px] mx-1'>
                   <Cards item={item} />
                   </div>
               })
               }  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
     

    <div>
    <Footer />
    </div>
    
    </div>
  )
}

export default Profile;