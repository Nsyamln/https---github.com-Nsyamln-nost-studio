import Pagination from "@mui/material/Pagination";
import { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function Catalog() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const user = useOutletContext()[0];

  useEffect(() => {
    api
      .get("/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [user, navigate]);

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

      {products.map((product) => (
        <div key={product.id} className="flex flex-wrap gap-5 m-5">
          <div className="bg-col2 rounded-lg w-fit h-88  ">
            <img
              src={product.image}
              className=" rounded-lg w-68 p-1"
              alt="name"
            />
            <div className="m-2 flex items-center flex-col justify-center">
              <div>{product.name}</div>
              <div>{product.price}</div>
              <button>
                <AiFillEye />
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-center my-4">
        <Pagination count={10} size="large" shape="rounded" />
      </div>
    </div>
  );
}
