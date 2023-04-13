import {
  apple,
  dribbblePro,
  google,
  netflix,
  Manulife,
  paypal,
} from "../assets";
import "../Styles/Styles.css";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import Modal from "./Modal";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Features() {
  const [openModal, setOpenModal] = useState(false);
  const [money, setMoney] = useState("$210");
  const notify = () =>
    toast.success("Great! Your Payment is succesfully.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <section
      id="features"
      className="flex md:flex-row flex-col-reverse sm:py-16 py-6 mt-12"
    >
      <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-48 mt-24 relative">
        {/* Last Transaction card */}
        <div>
          <div className=" card-linear text-red-200">
            <div className="py-8 px-6">
              <div>
                <h1 className="text-white font-semibold text-[22px]">
                  Last Transaction
                </h1>
              </div>
              {/* Dribbble table  */}
              <div className="flex justify-between items-center pt-4 pb-2">
                <div className="flex items-center">
                  <div>
                    <img
                      alt=""
                      src={dribbblePro}
                      className="w-[40px] h-[38px]"
                    />
                  </div>
                  <div className="flex flex-col pl-2">
                    <h4 className="text-white font-semibold">Dribbble Pro</h4>
                    <p className="text-xs text-gray-300">15 Days ago</p>
                  </div>
                </div>
                <div className="flex 	">
                  <FaCaretDown className="text-red-500" />
                  <p className="text-sm text-white pl-1">-$250,93</p>
                </div>
              </div>
              {/* Netflix table  */}
              <div className="flex justify-between items-center pt-4 pb-2">
                <div className="flex items-center">
                  <div>
                    <img alt="" src={netflix} className="w-[40px] h-[38px]" />
                  </div>
                  <div className="flex flex-col pl-2">
                    <h4 className="text-white font-semibold">Netflix</h4>
                    <p className="text-xs text-gray-300">4 Days ago</p>
                  </div>
                </div>
                <div className="flex 	">
                  <FaCaretDown className="text-red-500" />
                  <p className="text-sm text-white pl-1">-$250,93</p>
                </div>
              </div>
              {/* Manulife table  */}
              <div className="flex justify-between items-center pt-4">
                <div className="flex items-center">
                  <div>
                    <img alt="" src={Manulife} className="w-[40px] h-[38px]" />
                  </div>
                  <div className="flex flex-col pl-2">
                    <h4 className="text-white font-semibold">Manulife Cash</h4>
                    <p className="text-xs text-gray-300">4 Days ago</p>
                  </div>
                </div>
                <div className="flex 	">
                  <FaCaretUp className="text-green-500" />
                  <p className="text-sm text-white pl-1">-$250,93</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        {/* Paypal card */}
        <div className="absolute right-2  top-[-190px]">
          <div className=" card-linear-paypal  text-red-200">
            <div className="py-8 px-4">
              <div className="flex">
                <img alt="" src={paypal} className="w-[67px] h-[63px]" />
                <div className="pl-7">
                  <h1 className="text-white font-semibold text-[24px]">
                    Paypal
                  </h1>
                  <p className="text-gray-300">Checkout</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 pb-2">
                <div className="">
                  <p className="text-gray-300">Total</p>
                  <h4 className="text-[18px] text-white">{money}</h4>
                </div>
                <div>
                  <button className="border-solid border-2 rounded-lg p-2 border-[#8bfbff]">
                    Change
                  </button>
                </div>
              </div>

              <div className="flex justify-center items-center pt-4 pb-2">
                <button
                  onClick={() => setOpenModal(true)}
                  className="py-2 px-6 font-poppins font-medium text-[18px] text-black bg-blue-gradient rounded-[10px] outline-none"
                >
                  Make Payment
                </button>
              </div>
              <Modal
                open={openModal}
                money={money}
                notify={notify}
                onClose={() => setOpenModal(false)}
              />
              <ToastContainer />
            </div>
          </div>
          <div></div>
        </div>

        {/* gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        {/* gradient end */}
      </div>

      <div className="flex-1 flex justify-center items-start flex-col">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p className="font-poppins font-normal text-slate-300 text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="google_play"
            className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google_play"
            className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
