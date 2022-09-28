import React from 'react'

function RestaurantMeal() {
  return (
    <div className=" hover:scale-105 transition-all lg:w-[90%] w-full duration-700  flex justify-between m-4 p-4 bg-[#fee] hover:bg-[#fef] rounded-2xl shadow-lg shadow-[#777]">
          <div className="px-2 " >
          <h1 className="sm:text-2xl text-md font-bold my-4">Name</h1>
          <span className="block sm:text-md text-sm font-semibold  my-4">ingridients</span>
          <span className="sm:text-xl text-sm font-semibold text-[#00ffff] my-4 ">5 AZN</span>
          </div>
          <img className="inline-block rounded-xl w-[40%]" src="https://imageproxy.wolt.com/menu/menu-images/5fe5a60e0f0388c7007b6b05/08e9edc4-d5b0-11ec-a5ca-4e6b0d82e776_______________________46_.jpeg?w=300" alt="menu"/>
    </div>
  )
}

export default RestaurantMeal