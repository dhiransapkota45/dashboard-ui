import "./App.css";
import SideNav from "./components/SideNav";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Analytics from "./pages/Analytics";
import Performance from "./pages/Performance";
import Notification from "./pages/Notification";
import Settings from "./pages/Settings";
import { useContext } from "react";
import { ToggleContext } from "./context/context";
import Navbar from "./components/Navbar";
import ProductAdd from "./pages/ProductAdd";
import ProductList from "./pages/ProductList";
import Security from "./pages/Security";

function App() {
  const { toggle } = useContext(ToggleContext);
  return (
    <>
      {/* <Test /> */}
      <div className="flex">
        <div className=" hidden md:block sticky top-0 bg-gray-800  text-white w-60 bottom-0 ">
          <SideNav />
        </div>
        <div
          className={`${
            toggle && "dark "
          }  w-full h-screen overflow-y-auto bg-gray-100`}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/performance" element={<Performance />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/security" element={<Security />} />
            <Route path="/product/*">
              <Route path="add" element={<ProductAdd />} />
              <Route path="list" element={<ProductList />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
