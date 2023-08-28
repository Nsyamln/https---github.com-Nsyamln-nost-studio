import React, { useState } from "react";
import { AiFillEdit, AiOutlineFileDone } from "react-icons/ai";
import { MdOutlinePlace } from "react-icons/md";
import { BiEdit, BiLogOut } from "react-icons/bi";

function MyProfile() {
  return (
    <div className="flex justify-center my-5">
      <div className="flex flex-col justify-center items-center w-96">
        <h1 className="text-3xl">Halo, Maulina!</h1>
        <img
          src="./undraw_female_avatar_efig.svg"
          className="w-64 rounded-full "
          alt=""
        />
        <div className="flex flex-row">
          <h1 className="text-2xl">Maulina Inas Nasya</h1>
          <button>
            <AiFillEdit size={25} />
          </button>
        </div>
        <h1>maulinainasnasyaa@gmail.com</h1>
        <div className="text-xl">
          <div className="flex flex-row items-center">
            <MdOutlinePlace size={30} />
            <p>alamat</p>
          </div>
          <hr className="my-2 text-col3" />
          <div className="flex flex-row gap-6">
            <button
              className="flex w-16 rounded-lg flex-row bg-col3 justify-center h-9 items-center"
              onClick={() => alert("Coming Soon :)")}
            >
              <AiOutlineFileDone size={30} />
            </button>

            <button className="flex w-16 rounded-lg flex-row bg-col3 justify-center h-9  items-center">
              <BiLogOut size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
