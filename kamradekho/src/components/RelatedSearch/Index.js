import React, {useState} from 'react'

function Index() {
  const [seemore, setseemore] = useState(false);
  const _search= ['Allahpur', 'Salori', 'Daraganj', 'Alopi Bagh'];
  const _more=  ['Allahpur', 'Salori', 'Daraganj', 'Alopi Bagh', 'Civil Lines', 'Katra'];
  return (
    <div className=' m-3 mt-8 lg:right-0'>
             <div className='flex flex-col justify-start flex-wrap'> 
        <span className="font-semibold text-xl tracking-tight text-black text-center self-center" >Related Searches</span>
         {
         (seemore ? _more : _search).map((item, index)=>
         {
           return  <button className="text-black w-full m-1 p-2 rounded-sm border text-center bg-neutral-200 hover:bg-white hover:text-blue-600  " key={index}> {item} </button> 
         })
         }
         
         <button className="text-black w-full flex justify-start m-1 p-1 hover:bg-white hover:text-blue-600 hover:underline" onClick={()=> {setseemore(!seemore)}} > {seemore ? "See Less.." : "See More..."} </button> 
</div>
    </div>
  )
}

export default Index