import react from 'react'
import { useDispatch } from 'react-redux';
import { setSearch } from '../Redux/Slices/searchSlice';
import { FaTelegram } from "react-icons/fa";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className='flex flex-col lg:flex-row justify-between mx-6 py-3 mb-12'>
      <div>
        <h3 className='text-xl font-bold text-gray-600'>
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className='text-2xl font-bold'>
          SWASTIK Restaurants
        </h1>
        <a 
          href="https://t.me/SWASTIK_tripathibot" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 mt-2 text-red-600 hover:underline"
        >
          <FaTelegram className="text-2xl" />
          <span className="font-medium">Order Quickly With Our Telegram Bot</span>
        </a>
      </div>

      <div>
        <input
          onChange={(e) => dispatch(setSearch(e.target.value))}
          type="search"
          placeholder='Search Here'
          autoComplete='off'
          className='p-3 border border-grey-400 text-sm rounded-lg outline-none w-full lg:w-[75vh]'
        />
      </div>
    </nav>
  )
}

export default Navbar;
