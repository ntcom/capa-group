import { useState } from "react";
import { Link } from "react-router-dom";
// import { Icons } from "../Icons/Icons";

const navs = [
  {
    id: 1,
    name: "Hồ sơ của tôi",
    icon: "src/assets/svgs/info.svg",
    iconActive: "src/assets/svgs/info-active.svg",
    link: '/order/delivery-service'
  },
  {
    id: 2,
    name: "Đổi mật khẩu",
    icon: "src/assets/svgs/password.svg",
    iconActive: "src/assets/svgs/password-active.svg",
  },
  {
    id: 3,
    name: "Ví",
    icon: "src/assets/svgs/wallet.svg",
    iconActive: "src/assets/svgs/wallet-active.svg",
    children: [
      {
        id: 11,
        name: "Lịch sử giao dịch",
      },
      {
        id: 12,
        name: "Nạp tiền",
      },
      {
        id: 13,
        name: "Rút tiền",
      },
    ],
  },
  {
    id: 4,
    name: "Đơn hàng ký gửi",
    icon: "src/assets/svgs/contract.svg",
    iconActive: "src/assets/svgs/contract-active.svg",
  },
  {
    id: 5,
    name: "Đơn hàng mua hộ",
    icon: "src/assets/svgs/get.svg",
    iconActive: "src/assets/svgs/get-active.svg",
  },
];

export const Sidebar = () => {
  const [navActive, setNavActive] = useState(1);

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
        {navs.map((nav) => {
          return (
            <Link
              to={"/"}
              className="block py-[15px] hover:bg-[linear-gradient(90deg,rgba(66,133,244,.2)_0%,rgba(66,133,244,0.00)_30.98%)]"
              style={{
                background:
                  navActive === nav.id &&
                  "linear-gradient(90deg, rgba(66, 133, 244, .2) 0%, rgba(66, 133, 244, 0.00) 30.98%)",
              }}
              key={nav.id}
              onClick={() => setNavActive(nav.id)}
            >
              <div className="px-[30px] flex items-center gap-4">
                <img
                  src={navActive === nav.id ? nav.iconActive : nav.icon}
                  alt=""
                  className="shrink-0 w-5 h-5"
                />
                <p
                  className={`text-base ${
                    navActive === nav.id ? "text-[#4285F4]" : "text-[#03022980]"
                  } font-bold whitespace-nowrap`}
                >
                  {nav.name}
                </p>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
