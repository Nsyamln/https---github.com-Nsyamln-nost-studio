import Pagination from "@mui/material/Pagination";
import {} from "react-icons/bi";

export default function Catalog() {
  return (
    <div className="">
      <div className="bg-col3 h-16 flex flex-row rounded-lg gap-5 items-center m-4">
        <label className="m-5 ">
          Cari :
          <input />
        </label>
        <label>
          Harga Minimal :
          <input />
        </label>
        <label>
          Harga Maximal :
          <input />
        </label>
        <label>
          Asc/Desc:
          <select>
            <option>Naik</option>
            <option>Turun</option>
          </select>
        </label>
      </div>

      <div className="flex flex-wrap gap-5 m-5">
        <div className="bg-col2 rounded-lg w-fit h-88  ">
          <img
            src="./remocon.jpg"
            className=" rounded-lg w-68 p-1"
            alt="name"
          />
          <div className="m-2">
            <div>Remocon</div>
            <div>Rp.300000</div>
          </div>
        </div>

        <div className="bg-col2 rounded-lg w-fit h-88  ">
          <img
            src="./remocon.jpg"
            className=" rounded-lg w-68 p-1"
            alt="name"
          />
          <div className="m-2">
            <div>Remocon</div>
            <div>Rp.300000</div>
          </div>
        </div>

        <div className="bg-col2 rounded-lg w-fit h-88  ">
          <img
            src="./remocon.jpg"
            className=" rounded-lg w-68 p-1"
            alt="name"
          />
          <div className="m-2">
            <div>Remocon</div>
            <div>Rp.300000</div>
          </div>
        </div>
        <div className="bg-col2 rounded-lg w-fit h-88  ">
          <img
            src="./remocon.jpg"
            className=" rounded-lg w-68 p-1"
            alt="name"
          />
          <div className="m-2">
            <div>Remocon</div>
            <div>Rp.300000</div>
          </div>
        </div>
        <div className="bg-col2 rounded-lg w-fit h-88  ">
          <img
            src="./remocon.jpg"
            className=" rounded-lg w-68 p-1"
            alt="name"
          />
          <div className="m-2 flex items-center flex-col justify-center">
            <div>Remocon</div>
            <div>Rp.300000</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Pagination count={10} size="large" shape="rounded" />
      </div>
    </div>
  );
}
