import { TextField } from "@mui/material";
import { useState } from "react";
import {
  AiFillDelete,
  AiFillEdit,
  AiFillPlusCircle,
  AiFillPlusSquare,
} from "react-icons/ai";
export default function Dashbord() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "MacBook Air 15”",
      image: "/macbook_air_15.jpg",
      price: 26999999,
      category: "Laptop",
    },
    {
      id: 2,
      name: "iPhone 14 Pro",
      image: "/iphone_14_pro.jpg",
      price: 19999999,
      category: "Smartphone",
    },
    {
      id: 3,
      name: "iPhone 14",
      image: "/iphone_14.jpg",
      price: 15999999,
      category: "Smartphone",
    },
    {
      id: 4,
      name: "Apple Vision Pro",
      image: "/apple_vision_pro.jpg",
      price: 66999999,
      category: "Smartphone",
    },
    {
      id: 5,
      name: "Apple Watch Series 8",
      image: "apple_watch_series_8.jpg",
      price: 7999999,
      category: "Watch",
    },
    {
      id: 6,
      name: "iPad Pro",
      image: "/ipad_pro.jpg",
      price: 15999999,
      category: "Tablet",
    },
    {
      id: 7,
      name: "MacBook Air 15”",
      image: "/macbook_air_15.jpg",
      price: 26999999,
      category: "Laptop",
    },
    {
      id: 8,
      name: "iPhone 14 Pro",
      image: "/iphone_14_pro.jpg",
      price: 19999999,
      category: "Smartphone",
    },
    {
      id: 9,
      name: "iPhone 14",
      image: "/iphone_14.jpg",
      price: 15999999,
      category: "Smartphone",
    },
    {
      id: 10,
      name: "Apple Vision Pro",
      image: "/apple_vision_pro.jpg",
      price: 66999999,
      category: "Headset",
    },
    {
      id: 11,
      name: "Apple Watch Series 8",
      image: "apple_watch_series_8.jpg",
      price: 7999999,
      category: "Watch",
    },
    {
      id: 12,
      name: "iPad Pro",
      image: "/ipad_pro.jpg",
      price: 15999999,
      category: "Tablet",
    },
  ]);

  return (
    <div className="px-20 pb-10">
      <form action="" className="py-10 ">
        <div className="flex gap-5 flex-wrap ">
          <TextField
            className="w-96"
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            className="w-96"
            id="outlined-basic"
            label="Link Image"
            variant="outlined"
          />
          <TextField
            className="w-96"
            id="outlined-basic"
            label="Price"
            variant="outlined"
          />
          <TextField
            className="w-96"
            id="outlined-basic"
            label="Completenes"
            variant="outlined"
          />
          <TextField
            className="w-96"
            id="outlined-basic"
            label="Description"
            variant="outlined"
          />
        </div>
      </form>
      <button className=" py-0 pb-4   px-5 ">
        <AiFillPlusSquare size={35} title="Tambah data" />
      </button>

      <table className="max-w-screen-2xl ">
        <thead>
          <tr className="bg-col3">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-t ">
              <td className="px-4 py-2">{p.name}</td>
              <td className="px-4 py-2">{p.image}</td>
              <td className="px-4 py-2">{p.price}</td>
              <td className="px-4 py-2">{p.category}</td>
              <td className="px-4 py-2  ">
                <button className="flex flex-wrap gap-6">
                  <AiFillDelete size={24} />

                  <AiFillEdit size={24} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
