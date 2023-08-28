import React, { useState } from "react";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

function MyProfile() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center items-center w-96">
        <h1>Halo, Maulina!</h1>
        <img
          src="./undraw_female_avatar_efig.svg"
          className="w-64 rounded-full "
          alt=""
        />
        <h1>Maulina Inas Nasya</h1>
        <h1>maulinainasnasyaa@gmail.com</h1>
        <div>
          <button className="flex flex-row text-2xl  items-center">
            <MdOutlinePlace size={45} />
            My Address
          </button>
          {/* <button className="flex flex-row text-2xl  items-center">
            <BiWallet size={45} />
            Nost Pay
          </button> */}
          <button
            className="flex flex-row text-2xl  items-center"
            onClick={() => alert("Coming Soon :)")}
          >
            <AiOutlineFileDone size={45} />
            History
          </button>
          {/* <button className="flex flex-row text-2xl  items-center">
            <LiaShippingFastSolid size={45} />
            My Order
          </button> */}
          <button className="flex flex-row text-2xl  items-center">
            <FiLogOut size={45} />
            LogOut
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
