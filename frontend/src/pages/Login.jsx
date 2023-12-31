import { useState } from "react";
import { Navigate, useNavigate, useOutletContext } from "react-router-dom";

const colors = {
  primary: "#060606",
  background: "#E0E0E0",
  disabled: "#D9D9D9",
};

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  // const [user, setUser] = useOutletContext();
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await api.post("/auth/login", login);
    if (response.ok) {
      const userResponse = await api.get("/auth/me");
      if (userResponse.ok) {
        const user = await userResponse.json();
        setUser(user);
        navigate("/");
      }
    } else {
      const message = await response.text();
      alert(message);
    }
  };

  if (user) {
    return <Navigate to="/" />;
  } else {
    return (
      <main className="flex grow overflow-y-auto">
        <form
          className="m-auto bg-gray-100 p-8 rounded-3xl w-96 flex flex-col gap-4"
          onSubmit={async (e) => handleLogin}
        >
          <h1 className="text-center text-xl">Login</h1>
          <h1 className="text-center text-lg">Gunakan akun Integer Anda</h1>
          <input
            type="email"
            label="Email"
            className="w-full"
            required
            autoFocus
            onChange={(e) => setLogin({ ...login, email: e.target.value })}
          />
          <input
            type="password"
            label="Kata sandi"
            className="w-full"
            required
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
          <div className="flex justify-between">
            <button type="button">Buat akun</button>
            <button>Login</button>
          </div>
        </form>
      </main>
    );
  }

  // if (user) {
  //   return <Navigate to="/" />;
  // } else {
  //   return (
  //     <div className=" flex items-start py-20 px-20 gap-16 justify-center">
  //       <div className="relative w-1/2 h-full flex flex-col py-28">
  //         <div className="absolute top-[25%] left-[10%] flex flex-col"></div>

  //         <img
  //           src="./undraw_access_account_re_8spm.svg"
  //           className="max-w-[600px]  object-cover"
  //         />
  //       </div>

  //       <div className="w-1/2  bg-[#F5F5F5] rounded-xl flex flex-col p-20 justify-between items-center">
  //         <h1 className="w-full max-w-[500px] mx-auto   text-xl text-[#060606] font-semibold">
  //           NoStudio
  //         </h1>
  //         {/* <div className="w-full flex flex-col  max-w-[500px] "> */}

  //         <div className="w-full flex flex-col mb-2">
  //           <h3 className="text-2xl font-semibold mb-2">Login</h3>
  //           <p className="text-sm mb-2">
  //             Welcome back! Please enter your deatils
  //           </p>
  //         </div>
  //         <form
  //           className="w-full flex flex-col  max-w-[500px] "
  //           onSubmit={handleLogin}
  //         >
  //           <div className="w-full flex flex-col">
  //             <input
  //               type="email"
  //               placeholder="Email"
  //               className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
  //               required
  //               autoFocus
  //               onChange={() => setLogin({ ...login, email: e.target.value })}
  //             />
  //             <input
  //               type="password"
  //               placeholder="Kata Sandi"
  //               className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
  //               required
  //               onChange={(e) =>
  //                 setLogin({ ...login, password: e.target.value })
  //               }
  //             />
  //           </div>

  //           <div className="w-full flex items-center justify-between">
  //             <div className="w-full flex items-start">
  //               <input type="checkbox" className="w-4 h-4 mr-2" />
  //               <p className="text-sm">Remember Me for 30 days</p>
  //             </div>
  //           </div>

  //           <div className="w-full flex flex-col my-4">
  //             <button className="w-full bg-[#171313] font-semibold rounded-md my-2 p-4 text-center flex items-center justify-center text-white cursor-pointer">
  //               Log In
  //             </button>
  //             <button className="w-full text-[#060606] font-semibold bg-white border border-black rounded-md my-2 p-4 text-center flex items-center justify-center cursor-pointer">
  //               Register
  //             </button>
  //           </div>

  //           {/* </div> */}
  //         </form>
  //       </div>
  //     </div>
  //   );
  // }
}
