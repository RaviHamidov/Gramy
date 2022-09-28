import React from 'react';
import{MdDeliveryDining} from "react-icons/md";

function DeliveryHead() {
  return (
    <header className="sm:block  hidden fixed p-2 w-full z-50 flex justify-center bg-[#fff] top-0">
    <MdDeliveryDining size={40} className="inline m-2"/>
     <span className="p-4 mx-2">Ortalama çatdırıma vaxtı 20-35 dəqiqə</span>
     <span className="p-4 mx-2">Bu gün açıqdır 08:00-00:00</span>
    </header>
  )
}

export default DeliveryHead