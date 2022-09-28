import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import image from "../Assets/Png/404.png"
import{GoHome} from "react-icons/go"
import{FaSadTear} from "react-icons/fa"
import Aos from 'aos'

function Page404() {
    useEffect(() => {
        Aos.init({ duration: 1800 });
      }, []);
  return (
    // E1512D
    <div className='flex p-4 justify-center items-center flex-col bg-[#FBDA91] h-screen'>
        <div className='w-[40%] opacity-70 hover:scale-110 transition-all duration-700' data-aos="flip-right">
         <img src={image} alt="404" className='inline-block rounded'/>
        </div>
        <div className='flex flex-col items-center' data-aos="fade-down">
        <p className='text-4xl font-bold my-12 text-[#A1512D] font-mono  '>Ooops! Something went wrong  <FaSadTear size={50} className="inline"/></p>
       <Link to="/"> <button className='px-4 py-2 font-semibold text-[#fff] bg-[#FF9861] font-mono text-2xl hover:scale-105 transition-all duration-700 hover:opacity-80 rounded text-center'><GoHome size={30} className="inline"/> <span className='p-2'>Take me home</span></button> </Link>
        </div>
    </div>
  )
}

export default Page404