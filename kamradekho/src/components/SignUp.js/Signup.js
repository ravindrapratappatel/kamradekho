import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar.js/Navbar";
import { Link } from "react-router-dom";
import {register} from '../../actions/auth'
import { clearMessage } from "../../actions/message";
import {useDispatch, useSelector} from 'react-redux'
import { CircularProgress } from "@mui/material";
import validator from "validator";
function SignUp() {
  const dispatch = useDispatch();
  const {message} = useSelector((state)=> state.message);
  const {loading} = useSelector((state)=> state.auth);
  const [username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setCpassword] = useState("");
  const [error, seterror] = useState();
  function handleclick()
  { dispatch(clearMessage());
    if(!username) {
      seterror("Please Enter an username")
    } else if(!validator.isEmail(email))
    {
      seterror("Please Enter a valid email")
    }
    else if(!password || password.length<6)
    {
      seterror("6 digit password required")
    }
   else if(password!=c_password)
    {
      seterror("Password didn't match")
    }
    else{
      seterror('');
      dispatch(register(username, email, password)).then((r)=>
      {
       console.log(message);
      }).catch((err)=>{
        console.log(message);
      })
    }
  }

  return (
    <div className="bg-gradient-to-b from-[#001978] via-[#0085c9] to-[#4ae7df] min-h-screen">
      <div>
        <Navbar />
      </div>
      <div className="min-h-[90vh]">
      <div className="flex  justify-center m-7">
        <div className="bg-white w-full lg:w-1/3 h-auto rounded-md">
          <h2 className="text-center text-xl ml-auto mr-auto mt-5">
            Get Started with Kamra dekho
          </h2>
          <div className="flex flex-col mr-10 mt-5 ml-10">
            <label htmlFor="email">UserName</label>
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter name"
              className="p-1 border rounded-sm mb-3"
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="name@gmail.com"
              className="p-1 border rounded-sm mb-3"
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="p-1 border rounded-sm mb-3 "
            />

            <label htmlFor="c_password">Confirm Password</label>
            <input
              id="c_password"
              value={c_password}
              type={password}
              onChange={(e) => setCpassword(e.target.value)}
              placeholder="Confirm Password"
              className="p-1 border rounded-sm mb-3 "
              
            />
            { loading ? <div className="self-center"> <CircularProgress /> </div> :
            <button onClick={handleclick} className="text-blue-600 p-2 mb-3 rounded-sm border text-center border-blue-600 hover:bg-blue-600 hover:text-white ">
              Get Started
            </button>
            }
          </div>
          <div>
    {error && <h3 className='text-[red] text-center'> {error} </h3>}      
    {message && <h3 className='text-[red] text-center'>{message}</h3>}
    </div>
          <div className="flex flex-col m-10 mt-0">
            <div className="m-2">
              <h3>
                Already signed up?{" "}
                <Link to={"/login"} className="text-blue-700 underline ">
                  {" "}
                  Login
                </Link>{" "}
              </h3>
            </div>
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

export default SignUp;
