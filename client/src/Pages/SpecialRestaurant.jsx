import React, { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Modal from "react-modal";
import RestaurantMeal from "../Components/RestaurantMeal";
import Aos from "aos";
import "aos/dist/aos.css";
import Categories from "../Components/Categories";
import AboutRestaurant from "../Components/AboutRestaurant";
import DeliveryHead from "../Components/DeliveryHead";
import Restaurant from "../Components/Restaurant";
const customStyles = {
  content: {
    width: "50%",
    height: "500px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById("root"));
function SpecialRestaurant() {
  const [amount, setAmount] = useState(0);
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function increaseAmount() {
    setAmount(amount + 1);
  }
  function decreaseAmount() {
    if (amount === 0) return 0;
    setAmount(amount - 1);
  }
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#555";
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    Aos.init({ duration: 2200 });
  }, []);
  return (
    <div className="relative">
      <div data-aos="fade-up">
        <DeliveryHead />
        <Restaurant />
      </div>

      <main className="p-4">
        <content
          data-aos="fade-right"
          className="flex lg:flex-row flex-col   justify-between my-24"
        >
          <Categories />
          <div
            ata-aos="fade-right"
            className="flex justify-between lg:flex-row  flex-col w-[80%] justify-center items-start"
          >
            <main className="flex flex-col md:w-[80%]  w-full">
              <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >
                <div data-aos="fade-down">
                  <button
                    onClick={closeModal}
                    className="right-4 top-4 absolute"
                  >
                    <AiOutlineClose size={30} />
                  </button>
                  <div id="mymodal" className="h-96 p-2 mx-auto w-[90%]">
                    <img
                      className="rounded h-[85%] mx-auto"
                      src="https://imageproxy.wolt.com/menu/menu-images/5f22c21ce9e34a7168463571/1eb04e44-c707-11ec-8cf9-9a93740d83a6_baki_corek_toyuq.jpeg"
                      alt="modal-pic"
                    />
                    <content className="flex flex-col">
                      <h1 className="text-3xl font-bold my-2">Çörəhhh dönər</h1>
                      <span className="text-xl font-semibold text-[#40ff] my-2">
                        5 AZN
                      </span>
                      <p className="text-[17px] my-2">Toyuq, turshu , kahi</p>
                      <div className="flex justify-between">
                        <div className="my-4">
                          <button
                            onClick={decreaseAmount}
                            className="p-[6px] text-white mx-2 font-bold text-xl bg-[#08ff] rounded-xl"
                          >
                            -
                          </button>
                          <span className="font-semibold text-xl">
                            {amount}
                          </span>
                          <button
                            onClick={increaseAmount}
                            className="p-[6px] text-white text-xl font-bold mx-2 bg-[#08ff] rounded-xl"
                          >
                            +
                          </button>
                        </div>
                        <button className="bg-[#09ff] text-[17px] font-semibold w-1/2 p-2 rounded-xl text-[#fff]">
                          Sifarishi elave et <span>total amount</span>
                        </button>
                      </div>
                    </content>
                  </div>
                </div>
              </Modal>
              <button onClick={openModal}>
                <RestaurantMeal />
              </button>
              <button onClick={openModal}>
                <RestaurantMeal />
              </button>
              <button onClick={openModal}>
                <RestaurantMeal />
              </button>
              <button onClick={openModal}>
                <RestaurantMeal />
              </button>
              <button onClick={openModal}>
                <RestaurantMeal />
              </button>
            </main>
            <AboutRestaurant />
          </div>
        </content>
      </main>
    </div>
  );
}
export default SpecialRestaurant;
