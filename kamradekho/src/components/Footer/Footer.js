import React,{memo} from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  console.log("footer")
  const date= new Date();
  const year= date.getFullYear();
  return (
    <div className='flex flex-col lg:flex-row justify-between pl-5 pr-5 items-center bg-[#e1e9eb] h-auto lg:h-12'>
    <div>
    <span className= " text-black text-center" >
    Copyright © {year} Kamra dekho All Rights Reserved
     </span>
    </div>
    <div>
    <span className="text-black text-center self-center ml-2 mr-2 " >Contact Support</span>
    <span className="text-black text-center self-center  ml-2 mr-2"> <FacebookIcon style={{fontSize: 18}} /> </span>
    <span className="text-black text-center self-center  ml-2 mr-2"> <TwitterIcon style={{fontSize: 18}}  /> </span>
    <span className="text-black text-center self-center  ml-2 mr-2"> <InstagramIcon style={{fontSize: 18}}  /> </span>
    </div>
 
    </div>
  )
}

export default memo(Footer)