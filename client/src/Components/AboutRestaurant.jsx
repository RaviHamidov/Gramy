import React from 'react'

function AboutRestaurant() {
  return (
    <>
    
    <aside className='hidden sm:block lg:p-12 p-8 hover:scale-105 transition-all duration-700'>
    <h1 className='font-bold text-2xl'>Restoran məlumatları</h1>

    <h1 className='font-bold text-xl my-4'>Ünvan</h1>
    <span className='font-semibold my-2'>7 Khagani Street, Baku</span>
    <a className='text-[#00ffff] block my-2 font-semibold '>Xəritədə bax</a>

    <h1 className='font-bold text-xl my-4'>Açıq saatlar</h1>
    <span className='font-semibold my-2'>Bazar ertəsi-Bazar günü - 09.00 – 24.00</span>

    <h1 className='font-bold text-xl my-4'>Kateqoriyalar</h1>
    <span className='font-semibold my-2'>Azərbaycan fastfood kabab</span>
   </aside>
   <aside className='block sm:hidden flex flex-col justify-center items-center'>
    <p className=' font-semibold'>Allergiyanız və ya pəhrizlə bağlı məhdudiyyətləriniz varsa, restoran ilə əlaqə saxlayın. Restoran sorğu əsasında yemək ilə bağlı məlumatlar təmin edəcək.</p>
    <div>
    <span className='mx-4 font-semibold  '>Telefon</span>
    <a className='text-[#00ff] font-semibold '>+994 50 643 98 36</a>  
    </div>
   </aside>
   </>
  )
}

export default AboutRestaurant