import { Outlet } from "react-router-dom";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
export default function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />

        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
