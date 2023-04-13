import React from "react";
// import nft from './nft.jpg';
import "../Styles/Styles.css";

const Modal = ({ open, onClose, money, notify }) => {
  if (!open) return null;

  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modal">
          <section class="row-start-5 row-end-7 col-start-4 col-end-9 bg-gray-200">
            <article class="p-10 flex justify-between items-center h-full">
              <div class="space-y-5">
                <h2 class="text-3xl max-w-xs">Paypal payment procedure</h2>
                <h3 class="text-xl">{money}</h3>

                <div className="flex justify-between">
                  <button
                    onClick={onClose}
                    class=" py-4 mb-5 px-6 border-solid border-2 rounded-lg p-2 border-[#8bfbff]"
                  >
                    Cancel
                  </button>
                  <button
                    // onClick={onClose}
                    onClick={() => {
                      onClose();
                      notify();
                    }}
                    class="py-4 mb-5 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none"
                  >
                    Add to card
                  </button>
                </div>
              </div>
              <div>
                <img
                  class="h-auto w-full ml-10 -mt-5"
                  src="https://www.pasls.com/blog/wp-content/uploads/2020/12/5fecb2cda9654-750x410.jpg"
                  alt=""
                />
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Modal;
