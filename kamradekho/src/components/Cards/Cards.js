import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setroom } from '../../actions/room';
function Cards({item}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    
    <div className="bg-white m-4 dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl hover:scale-105  hover:text-white hover:cursor-pointer ">
  <div className=''>
    <img className='relative w-full  rounded-t-md' src={item.url ? item.url : 'https://firebasestorage.googleapis.com/v0/b/kamradekho-b0ede.appspot.com/o/rooms%2Fim1.png?alt=media&token=c329527e-3768-475d-b491-7bddfe7e7d48'} loading="lazy" />
  </div>
  <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Location: {item.location}</h3>
  <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
     Price: {item.price} / Month
  </p>
  <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
     Type : {item.type}
  </p>
  <div className="flex space-x-2 justify-center mt-5">
  <button onClick={()=> {
    dispatch(setroom(item))
    navigate('/room') }} type="button" className="inline-block px-4 py-2 bg-blue-600 text-white font-medium text-[10px] leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View</button>
</div>
</div>
   
  )
}

export default Cards