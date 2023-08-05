import {useState} from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar.js/Navbar'
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate  } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import {login} from '../../actions/auth'
import {clearMessage} from '../../actions/message'
function Signin() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState();
  const { isLoggedIn, loading } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);
  function handleclick()
  {
    dispatch(clearMessage(''))
    if(username=="") seterror("Enter username")
    else if(password==="") seterror("Enter password")
    else{
    seterror("")
    console.log(username, password);
    dispatch(login(username, password))
    .then(() => {
      navigate("/profile");
      window.location.reload();
    })
    .catch(() => {
     
    });
  }
  }

  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className=' min-h-screen bg-gradient-to-b from-[#001978] via-[#0085c9] to-[#4ae7df]'>
    <div>
    <Navbar />
    </div>
    <div className='min-h-[90vh]'>
    <div className='flex justify-center m-7 mt-14'> 
    <div className='bg-white w-full lg:w-1/3 h-auto rounded-md'>
    <h2 className='text-center text-2xl mt-5 mb-5'>Login into your account</h2>
    {error && <h3 className='text-[red] text-center'> {error} </h3>}
    <div className='flex flex-col mr-10 ml-10'>
        <label htmlFor='email'>Username</label>
        <input 
        id='email' 
        placeholder='name@gmail.com'
        onChange={(e)=> setUsername(e.target.value)}
        value={username}
        className='p-1 border rounded-sm mb-3' />

        <label htmlFor='password'>Password</label>
        <input id='password' 
        placeholder='Password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        className='p-1 border rounded-sm mb-3 ' />
       { loading ? <CircularProgress /> :
        <button
        onClick={handleclick}
        className="text-blue-600 p-2 mb-3 rounded-sm border text-center border-blue-600 hover:bg-blue-600 hover:text-white "> Login</button>
        }
    </div>
    <div>
    {message && <h3 className='text-[red] text-center'>{message}</h3>}
    </div>
  
    <div className='flex flex-col m-10 mt-0' >
        <div className='m-2'>
            <a href='#' className='underline hover:text-blue-700'>Forgot Password?</a>
        </div>
        <div className='m-2'>
            <h3>New to Kamra dekho  <Link to={'/signup'} className='text-blue-700 underline '>Sign up</Link> </h3>
        </div>
    </div>
    </div>
    </div>
    </div>
    <div>
     <Footer />
     </div>
    </div>
  )
}

export default Signin