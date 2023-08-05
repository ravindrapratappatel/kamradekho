import React, {useState, memo} from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import bgimg from '../../assets/room.webp'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../../actions/auth'
function Navbar() {
  console.log("navbar")
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(state => state.auth);
  const [nav, setnav] = useState(false);
  const handleclick= ()=> { setnav(!nav)}
  return (
    <div>
        <nav className="flex items-center justify-between flex-wrap bg-[#21b4db] p-5 pt-4 pb-4 -my-0.5" 
       // style={{ backgroundImage: `url(${bgimg})` }}
        >
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <span className="font-semibold text-xl tracking-tight">Kamra dekho</span>
  </div>
  <div className="block lg:hidden">
    <button onClick={handleclick} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
    { nav ?  <CancelIcon /> : <MenuIcon /> }
    </button>
  </div>
  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      
    </div>
    <div className="hidden lg:block text-sm" >
    <Link to={'/'} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </Link>
      <Link to={'/faq'} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        FAQ
      </Link>
      <Link to={'/contactus'} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Contact
      </Link>
     { isLoggedIn ?  <>
      <Link to={'/profile'} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Profile
      </Link>
      <Link to={'/'} onClick={()=>dispatch(logout())} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Logout
      </Link>
      </>
     : <>
      <Link to={'/login'} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Login
      </Link>
      <Link to={'/signup'} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        SignUp
      </Link>
      </>

     }
      
    </div>
    <div className={ !nav ? "hidden" : "block" } >
    <Link to={'/'} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </Link>
      <Link to={'/faq'} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        FAQ
      </Link>
      <Link to={'/contactus'} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Contact
      </Link>
      { isLoggedIn ?  <>
      <Link to={'/profile'} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Profile
      </Link>
      <Link to={'/'} onClick={()=>dispatch(logout())} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Logout
      </Link>
      </>
     : <>
      <Link to={'/login'} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Login
      </Link>
      <Link to={'/signup'} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        SignUp
      </Link>
      </>

     }
    </div>
  </div>
</nav>
    </div>
  )
}

export default memo(Navbar)