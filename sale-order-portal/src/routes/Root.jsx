import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const Root = () => {
  return (
    <div className="w-full h-auto min-h-screen flex">
      <Sidebar />
      <div className="w-full h-full p-[30px] bg-[#FAFAFB]">
        <Outlet />
      </div>
    </div>
  );
};
