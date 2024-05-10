import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="shrink-0 w-[218px] 2xl:w-[300px] h-full bg-[#fff]">
      <div className="flex items-center justify-center gap-[15px] p-[50px_20px]">
        <Link to={"/"} className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <img src="src/assets/svgs/logo.svg" alt="" />
        </Link>
        <Link to={"/"} className="text-[#4285F4] text-2xl font-semibold">
          Capa
        </Link>
      </div>

      <nav>
        <Link to={" "} className="">
          <div className="px-[30px] flex items-center gap-4">
            <img src="src/assets/svgs/contract.svg " alt="" className="shrink-0 w-5"/>
            <p className="text-base text-[#03022980] font-semibold">Đơn hàng ký gửi</p>
          </div>
        </Link>
      </nav>
    </aside>
  );
};
