import { FaUsers } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";

const ProjectCardStatus = () => {
	return (
		<div className="flex flex-row gap-8 items-center justify-center mt-8">
			<div className="flex flex-col justify-center items-center gap-1 text-[#0085a1]">
				<MdDateRange fontSize={"1.5rem"} />
				<span className="text-[0.6rem]">1,400,000,000</span>
				<span className="text-[0.6rem]">ریال سرمایه گذاری شده</span>
			</div>
			<div className="flex flex-col justify-center items-center gap-1 text-[#0085a1]">
				<MdDateRange fontSize={"1.5rem"} />
				<span className="text-[0.6rem]">4 هفته</span>
				<span className="text-[0.6rem]">باقی مانده</span>
			</div>
			<div className="flex flex-col justify-center items-center gap-1 text-[#0085a1]">
				<FaUsers fontSize={"1.5rem"} />
				<span className="text-[0.6rem]">126</span>
				<span className="text-[0.6rem]">نفر سرمایه گذاری کرده اند</span>
			</div>
		</div>
	);
};

export default ProjectCardStatus;
