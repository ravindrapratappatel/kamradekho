import React from "react";
import Navbar from "../Navbar.js/Navbar";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Footer from "../Footer/Footer";

function Contactus() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="pt-5">
        <div className="w-10/12  lg:w-7/12 min-h-screen ml-auto mr-auto">
          <div className="p-5 pl-0">
            <Link to={"/"}>Home</Link>{" "}
            <ArrowForwardIosIcon
              className="mr-4 ml-4"
              style={{ fontSize: "10" }}
            />
            <Link to={""}>Contact Us</Link>
          </div>
          <hr />
          <div className='mt-3 flex flex-col'>
            <div className='mb-1.5'> <p className='text-3xl'>Contact Us</p> </div>
            <div> 
            <h6>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum officia.</h6>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing
             voluptate velit esse cillum dolore eu fugiat nullar sint proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  </div>
        </div>
          <div className='flex flex-col mb-5 mt-5' >
            <div> <p>Touch with us On</p> </div>
            <div className='flex flex-col lg:flex-row mt-2' >
                <div> <p> <EmailIcon className='mr-3' style={{ fontSize: '16'}} /> contact@company.com </p> </div>
                <div className='lg:ml-32' > <p>  <CallIcon className='mr-3' style={{ fontSize: '16'}} /> 012345679 </p> </div>
            </div>
        </div>

          <hr style={{ fontSize: 10 }} />
          <div className="mt-5">
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1">
                Contact Support
              </label>
              <input
                id="email"
                placeholder="Name"
                className="p-1 border rounded-sm mb-4"
              />
              <input
                id="email"
                placeholder="Email"
                className="p-1 border rounded-sm mb-4"
              />
              <textarea
                rows={4}
                placeholder="Comment"
                className="p-1 border rounded-sm mb-4"
              />
              <button className="text-blue-600 w-20 p-1.5 mb-3 rounded-md border text-center border-blue-600 hover:bg-blue-600 hover:text-white ">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Contactus;
