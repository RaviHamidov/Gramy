import React from "react";
import { AiOutlineClose, AiOutlineApple, AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import Modal from "react-modal";
// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

function Header() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000";
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="flex py-2 justify-between w-[95%] mx-auto">
      <h1 className="md:w-1/3 xl:w-1/3 text-4xl font-semibold">Gramy</h1>

      <div className="w-[25%]">
        <button onClick={openModal} className="p-2 font-semibold">
          Daxil olun
        </button>
        <button
          onClick={openModal}
          className="bg-[#00aaff] hover:bg-opacity-80 transition-all duration-700 text-white font-bold p-4 m-2 rounded"
        >
          Qeydiyyatdan Keçin
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2
            ref={(_subtitle) => (subtitle = _subtitle)}
            className="text-center text-2xl font-bold"
          >
            Qeydiyyatdan Keçin
          </h2>
          <button className="absolute top-4 right-4" onClick={closeModal}>
            <AiOutlineClose size={25} />
          </button>
          <p className="text-center my-2 text-xl font-semibold">
            Aşağıda daxil olun və ya yeni Wolt hesabı yaradın.
          </p>
          <form className="flex flex-col justify-center items-center">
            <button className="block p-4 bg-[#ccd] my-2 text-[#444] rounded w-[70%] text-center font-semibold">
              <FcGoogle className="inline mx-2" size={30} /> Google ilə davam et
            </button>
            <button className="block p-4 bg-[#111] my-2 rounded w-[70%] text-center text-white font-semibold">
              {" "}
              <AiOutlineApple size={30} className="inline mx-2" /> Apple ilə
              davam et
            </button>
            <p className="font-semibold">Facebook ilə daxil olmaq üçün</p>
            <button className="block p-4 bg-[#46ff] my-2 text-white rounded w-[70%] text-center font-semibold">
              <AiFillFacebook size={30} className="fill-white inline mx-2" />{" "}
              Facebook ilə davam et
            </button>
            <p className="font-semibold">və ya e-poçt ilə daxil olun</p>
            <input
              className="block p-4 bg-[#ccc] my-2 rounded w-[70%] "
              placeholder="E-poçt"
            />
            <button className="block p-4 bg-[#08ff] text-[#fff] text-xl font-semibold my-2 rounded w-[70%] text-center">
              Növbəti
            </button>
          </form>
        </Modal>
      </div>
    </div>
  );
}
const customStyles = {
  content: {
    width: "40%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default Header;
