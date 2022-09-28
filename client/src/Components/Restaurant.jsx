import React from 'react'
import Search from './Search';
import { ParallaxBanner } from 'react-scroll-parallax';
import { useEffect } from 'react';
async function fetch()
{
  const data=await fetch("http://localhost:5000/product/all");
  const json=await data.json();
  console.log(json)
}

function Restaurant() {
 useEffect(()=>{fetch},[])
  return (
    <section className=" w-full relative flex flex-col">
    
      <ParallaxBanner
      layers={[
        { image: 'https://imageproxy.wolt.com/venue/5d654a7615fed1056fde7387/08ad2202-4c23-11ec-8821-7ad0600e7b3f_mc_group.jpg', speed: -25 },
        {
          speed: -8,
          children: (
            <div className="h-[200px] absolute inset-0 sm:h-screen items-start p-12 justify-end sm:justify-center flex flex-col">
              <h1 className="font-bold sm:text-6xl text-4xl text-[#fff] hover:scale-110 transition-all duration-700">McDonald's</h1>
              <p className="font-semobold sm:text-4xl text-2xl text-[#fff] hover:scale-110 transition-all duration-700">İndi sizə daha yaxın</p>
            </div>
          ),
        },
        { image: '/static/banner-foreground.png', speed: -10 },
      ]}
      className="aspect-[2/1]"
    />  
    <Search/>
  </section>
  )
}

export default Restaurant