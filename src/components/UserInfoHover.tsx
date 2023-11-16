import { LuUserCircle } from "react-icons/lu";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { IoMdLogOut } from "react-icons/io";

const UserInfoHover = () => {
  return (
    <div className="absolute top-0 left-4 w-[16rem]">
      <div className="bg-white border border-gray-300 rounded-lg shadow mt-[4rem] p-4 flex flex-col gap-[0.5rem] items-center justify-center">
        <LuUserCircle fontSize={"4rem"} />
        <h2>نام کاربری</h2>
        <button className="w-full flex justify-between bg-[#0085a1] p-2 rounded-lg text-white items-center">
          <span>پنل کاربری</span>
          <LuLayoutPanelLeft fontSize="1.2rem" />
        </button>
        <button className="w-full flex justify-between bg-red-400 p-2 rounded-lg text-white items-center">
          <span>خروج</span>
          <IoMdLogOut fontSize="1.2rem" />
        </button>
      </div>
    </div>
  );
};

export default UserInfoHover;
