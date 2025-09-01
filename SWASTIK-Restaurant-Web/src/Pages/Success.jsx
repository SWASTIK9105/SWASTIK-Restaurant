import react, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'
const Success=()=>{
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{setLoading(false);},3500);},[]);
  
  return (
    <div className='flex flex-col items-center justify-center h-screen' >
      {loading ?<PropagateLoader color='#be3d2cff'/>: <div> <h2 className='text-3xl font-semibold mb-4 text-center'>Order Was Successfull !</h2>
      <p>Your Order Has Been Successfully Placed</p>
    </div>}
    </div>
  )
}
export default Success