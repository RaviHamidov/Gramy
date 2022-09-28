import React from 'react';
import{BsFillHeartFill} from "react-icons/bs";
import{AiOutlineSearch} from "react-icons/ai";

function Search() {
  return (
    <div className="w-full sm:w-[70%] flex lg:flex-row flex-col hover:scale-105 transition-all duration-700 hover:bg-[#f9fefe] p-2 sm:bottom-0 sm:absolute bg-[#F9F9F9] z-10 sm:left-56 flex shadow-lg shadow-[#777] justify-between rounded-xl">
      <div className="p-4">
      <span className="mx-4">9.5</span>
      <span className="mx-4">10-dan</span>
      <button className="border-solid border-[#666] rounded-xl border-[1px] p-2"> <BsFillHeartFill className="inline" size={20}/> Sevimli</button>
      </div>
      
     <form className='sm:w-[36%] w-full my-4 '>
      <AiOutlineSearch size={30} className="inline"/>
      <input className="bg-[#fff]  border-solid border-[1px] border-[#999] rounded py-2 px-4" placeholder={`Axtarış`}/>
     </form>
    </div>
  )
}

export default Search