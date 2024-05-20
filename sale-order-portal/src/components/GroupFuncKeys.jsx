/* eslint-disable react/prop-types */
import filterIcon from "../assets/svgs/filter.svg";
import arrowDownUp from "../assets/svgs/arrow-down-up.svg";
import tick from "../assets/svgs/tick.svg";

const GroupFuncKeys = ({
  openFilter,
  setOpenFilter,
  filterSelect,
  setFilterSelect,
  soft,
  setSoft,
}) => {
  return (
    <div className="shrink-0 bg-[#fff] p-[6px_18px] rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] flex gap-4 relative">
      <button
        onClick={() => {
          if (openFilter) {
            setOpenFilter(false);
          } else {
            setOpenFilter(true);
          }
        }}
        className="shrink-0 p-1 rounded hover:bg-[#f5f6f8] transition-all"
      >
        <img src={filterIcon} alt="" />
      </button>
      <button
        onClick={() => {
          if (soft === "new") {
            setSoft("old");
          } else {
            setSoft("new");
          }
          setOpenFilter(false);
        }}
        className="shrink-0 p-1 rounded hover:bg-[#f5f6f8] transition-all"
      >
        <img src={arrowDownUp} alt="" />
      </button>

      <div
        className={`absolute top-[112%] left-0 z-[998] overflow-hidden ${
          openFilter
            ? "w-[150px] max-h-[160px] opacity-100 p-[12px_12px]"
            : "w-0 max-h-0 opacity-0"
        } bg-[#fff] rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.10)] transition-all`}
      >
        <button
          onClick={() => {
            if (filterSelect !== "sale") {
              setFilterSelect("sale");
            } else {
              setFilterSelect("all");
            }
            setTimeout(() => {
              setOpenFilter(false);
            }, 150);
          }}
          className="flex justify-between items-center w-full p-3 rounded-md hover:bg-[#f5f6f8] transition-all"
        >
          Sale{" "}
          {filterSelect === "sale" && <img src={tick} alt="" className="w-4" />}
        </button>
        <button
          onClick={() => {
            if (filterSelect !== "draft") {
              setFilterSelect("draft");
            } else {
              setFilterSelect("all");
            }
            setTimeout(() => {
              setOpenFilter(false);
            }, 150);
          }}
          className="flex justify-between items-center w-full p-3 rounded-md hover:bg-[#f5f6f8] transition-all"
        >
          Draft{" "}
          {filterSelect === "draft" && (
            <img src={tick} alt="" className="w-3" />
          )}
        </button>
      </div>
    </div>
  );
};

export default GroupFuncKeys;
