import { Link, NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const NavBar = () => {
	return (
		<div className="justify-start">
			<header className="flex flex-row items-center justify-between px-6 py-4 shadow-sm">
				<div>
					<img
						src="src\assets\image\logo-halalfund.ir.png"
						alt=""
						className="w-[2rem]"
					/>
				</div>
				<div className="flex flex-row items-center gap-8 justify-center">
					<NavLink
						to="about-us"
						className={({ isActive }) =>
							isActive
								? "text-[#0085a1] flex flex-row gap-4 items-center h-full"
								: "flex flex-row gap-4 items-center"
						}
					>
						<FaUser />
						<span>درباره ما</span>
					</NavLink>
					<NavLink
						to="contact-us"
						className={({ isActive }) =>
							isActive
								? "text-[#0085a1] flex flex-row gap-4 items-center h-full"
								: "flex flex-row gap-4 items-center"
						}
					>
						<MdContactPhone />
						<span>ارتباط با ما</span>
					</NavLink>
					<NavLink
						to="users"
						className={({ isActive }) =>
							isActive
								? "text-[#0085a1] flex flex-row gap-4 items-center h-full"
								: "flex flex-row gap-4 items-center"
						}
					>
						<FaUsers />
						<span>کاربران</span>
					</NavLink>
					<NavLink
						to="projects"
						className={({ isActive }) =>
							isActive
								? "text-[#0085a1] flex flex-row gap-4 items-center h-full"
								: "flex flex-row gap-4 items-center"
						}
					>
						<FaUsers />
						<span>پروژه ها</span>
					</NavLink>

				</div>
				<div>
					<button className="btn bg-[#0085a1] text-white flex flex-col gap-2 py-2">
						<FaRegUser className="text-[1.2rem]" />
						<span>ورود | ثبت نام</span>
					</button>
				</div>
			</header>
		</div>
	);
};

export default NavBar;
