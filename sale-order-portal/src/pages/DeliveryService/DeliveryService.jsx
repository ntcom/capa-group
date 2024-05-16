import search from "../../assets/svgs/search.svg";
import plus from "../../assets/svgs/plus.svg";
import arrowDown from "../../assets/svgs/arrow-down.svg";
import calendar from "../../assets/svgs/calendar.svg";
import { Link } from "react-router-dom";

const dataTable = [
  {
    stt: 1,
    code: "S00924",
    date: "15/05/2024",
    time: "10:10:44",
    tracking: "",
    quantity: 0,
    mass: 0,
    totalPrice: 0,
    status: "Sale",
  },
  {
    stt: 2,
    code: "S00923",
    date: "15/05/2024",
    time: "10:09:34",
    tracking: "",
    quantity: 0,
    mass: 0,
    totalPrice: 0,
    status: "Sale",
  },
  {
    stt: 3,
    code: "S00911",
    date: "14/05/2024",
    time: "17:29:22",
    tracking: "",
    quantity: 0,
    mass: 0,
    totalPrice: 0,
    status: "Sale",
  },
  {
    stt: 4,
    code: "S00910",
    date: "14/05/2024",
    time: "17:26:33",
    tracking: "",
    quantity: 0,
    mass: 0,
    totalPrice: 0,
    status: "Draft",
  },
  {
    stt: 5,
    code: "S00902",
    date: "14/05/2024",
    time: "15:43:19",
    tracking: "AD019",
    quantity: 0,
    mass: 0,
    totalPrice: 0,
    status: "Draft",
  },
  {
    stt: 6,
    code: "S00894",
    date: "13/05/2024",
    time: "14:08:12",
    tracking: "TRACk1",
    quantity: 1,
    mass: 0,
    totalPrice: 3984000,
    status: "Sale",
  },
  {
    stt: 7,
    code: "S00892",
    date: "13/05/2024",
    time: "14:00:34",
    tracking: "TRACK2",
    quantity: 1,
    mass: 8,
    totalPrice: 1593600,
    status: "Sale",
  },
  {
    stt: 8,
    code: "S00890",
    date: "13/05/2024",
    time: "13:58:24",
    tracking: "TRACK1",
    quantity: 1,
    mass: 8,
    totalPrice: 1593600,
    status: "Sale",
  },
  {
    stt: 9,
    code: "S00889",
    date: "13/05/2024",
    time: "13:55:37",
    tracking: "",
    quantity: 0,
    mass: 0,
    totalPrice: 0,
    status: "Draft",
  },
  {
    stt: 10,
    code: "S00888",
    date: "13/05/2024",
    time: "13:47:19",
    tracking: "TRACK0",
    quantity: 1,
    mass: 10,
    totalPrice: 1992000,
    status: "Sale",
  },
];

export const DeliveryService = () => {
  const renderDataTable = () => {
    return dataTable.map((line) => {
      return (
        <tr
          key={line.stt}
          className="relative flex items-center py-[17.5px] bg-[#fff] rounded-[10px] hover:shadow-[1px_17px_44px_0px_rgba(3,2,41,0.07)] hover:z-10 cursor-pointer transition-all mb-[10px] pr-5"
        >
          <th className="w-full max-w-[6.98%] text-[#030229] text-xs text-center font-normal">
            {line.stt}
          </th>
          <th className="w-full max-w-[10.38%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            <Link
              to={`/order/delivery_service/${line.code}`}
              className="text-[#4285F4] hover:underline"
            >
              {line.code}
            </Link>
          </th>
          <th className="w-full max-w-[17.17%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            <img src={calendar} alt="" className="block shrink-0 w-[12.6px]" />
            {line.date}
          </th>
          <th className="w-full max-w-[21.7%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            {line.tracking}
          </th>
          <th className="w-full max-w-[10%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            {line.quantity}
          </th>
          <th className="w-full max-w-[10%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            {line.mass}
          </th>
          <th className="w-full max-w-[15.85%] flex items-center gap-[10px] text-[#030229] text-sm font-semibold whitespace-nowrap">
            {line.totalPrice}
          </th>
          <th
            className={`flex items-center justify-center shrink-0 w-[80px] h-[35px] ${
              line.status === "Sale"
                ? "bg-[rgba(58,151,76,0.1)]"
                : "bg-[rgba(242,147,57,0.1)]"
            } rounded-[22px]`}
          >
            <p
              className={`text-sm font-bold leading-[14px] ${
                line.status === "Sale" ? "text-[#3A974C]" : "text-[#F29339]"
              }`}
            >
              {line.status}
            </p>
          </th>
        </tr>
      );
    });
  };

  return (
    <div>
      <div className="w-full flex justify-end gap-4">
        <div className="relative inline-flex items-center">
          <input
            type="text"
            className="shrink-0 w-full max-w-[230px] h-10 p-[12px_35px_12px_16px] rounded-[10px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)] outline-none"
            placeholder="Search"
          />
          <div className="shrink-0 w-3 h-3 absolute right-[23px]">
            <img src={search} alt="" />
          </div>
        </div>

        <button className="shink-0 w-full max-w-[122px] h-10 flex items-center justify-center gap-[10px] bg-[#4285F4] rounded-[10px]">
          <div className="shrink-0">
            <img src={plus} alt="" />
          </div>
          <p className="text-[#fff] text-sm font-semibold leading-[18px]">
            Tạo mới
          </p>
        </button>
      </div>

      <table className="block xl:table w-full mt-8 overflow-x-scroll">
        <thead>
          <tr className="flex items-center py-5 pr-5">
            <th className="w-[74px] xl:w-full xl:max-w-[6.98%] text-[#030229] text-xs font-normal">
              STT
            </th>
            <th className="w-[110px] xl:w-full xl:max-w-[10.38%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Mã{" "}
              <img
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[6px] h-[5px]"
              />
            </th>
            <th className="w-[182px] xl:w-full xl:max-w-[17.17%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Ngày đặt hàng{" "}
              <img
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[6px] h-[5px]"
              />
            </th>
            <th className="w-[230px] xl:w-full xl:max-w-[21.7%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Mã tracking{" "}
              <img
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[6px] h-[5px]"
              />
            </th>
            <th className="w-[110px] xl:w-full xl:max-w-[10%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Số gói hàng{" "}
              <img
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[6px] h-[5px]"
              />
            </th>
            <th className="w-[110px] xl:w-full xl:max-w-[10%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Khối lượng{" "}
              <img
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[6px] h-[5px]"
              />
            </th>
            <th className="w-[168px] xl:w-full xl:max-w-[15.85%] flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Tổng số tiền{" "}
              <img
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[6px] h-[5px]"
              />
            </th>
            <th className="w-[90px] xl:w-auto flex items-center gap-3 text-[#030229] text-xs font-normal whitespace-nowrap">
              Trạng thái{" "}
              <img
                src={arrowDown}
                alt=""
                className="block shrink-0 w-[6px] h-[5px]"
              />
            </th>
          </tr>
        </thead>

        <tbody>{renderDataTable()}</tbody>
      </table>
    </div>
  );
};
