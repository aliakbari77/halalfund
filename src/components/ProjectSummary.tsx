import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { FaRegChartBar } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { CgSandClock } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import TabSummary from "./TabSummary";

const ProjectSummary = () => {
	return (
		<div className="flex flex-col gap-2">
			<div className="flex flex-col bg-[#fafafa] rounded-md text-[#1e7385]">
				<header className="bg-[#eeeeee] p-[0.4rem] rounded-md flex flex-row items-center gap-3">
					<GrDocumentText fontSize="1.2rem" />
					<span>مبلغ مورد نیاز</span>
				</header>
				<div className="text-center p-[1rem] font-bold">12,000,000 ریال</div>
			</div>
			<div className="flex flex-col bg-[#fafafa] rounded-md text-[#1e7385]">
				<header className="bg-[#eeeeee] p-[0.4rem] rounded-md flex flex-row items-center gap-3">
					<FaRegCheckCircle fontSize="1.2rem" />
					<span>مبلغ سرمایه‌گذاری‌شده + مبالغ در حال پرداخت</span>
				</header>
				<div className="text-center p-[1rem] font-bold">12,000,000 ریال</div>
			</div>
			<div className="flex flex-col bg-[#fafafa] rounded-md text-[#1e7385]">
				<header className="bg-[#eeeeee] p-[0.4rem] rounded-md flex flex-row items-center gap-3">
					<FaRegChartBar fontSize="1.2rem" />
					<span>پیشرفت پروژه</span>
				</header>
				<div className="text-center p-[1rem] font-bold">
					<div className="flex flex-row justify-center items-center">
						<span>
							<IoMdCheckmarkCircleOutline
								fontSize="5rem"
								className="text-green-500"
							/>
						</span>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-2">
				<div className="flex flex-col bg-[#fafafa] rounded-md text-[#1e7385]">
					<header className="bg-[#eeeeee] p-[0.4rem] rounded-md flex flex-row items-center gap-3">
						<FaRegClock fontSize="1.2rem" />
						<span>زمان شروع</span>
					</header>
					<div className="text-center p-[1rem] font-bold">12,000,000 ریال</div>
				</div>
				<div className="flex flex-col bg-[#fafafa] rounded-md text-[#1e7385]">
					<header className="bg-[#eeeeee] p-[0.4rem] rounded-md flex flex-row items-center gap-3">
						<CgSandClock fontSize="1.2rem" />
						<span>فرصت باقی‌مانده برای سرمایه گذاری</span>
					</header>
					<div className="text-center p-[1rem] font-bold">4 هفته</div>
				</div>
				<div className="flex flex-col bg-[#fafafa] rounded-md text-[#1e7385]">
					<header className="bg-[#eeeeee] p-[0.4rem] rounded-md flex flex-row items-center gap-3">
						<GrDocumentText fontSize="1.2rem" />
						<span>گواهی‌های شراکت (ارزش اسمی)</span>
					</header>
					<div className="text-center p-[1rem] font-bold">6700000 گواهی</div>
				</div>
				<div className="flex flex-col bg-[#fafafa] rounded-md text-[#1e7385]">
					<header className="bg-[#eeeeee] p-[0.4rem] rounded-md flex flex-row items-center gap-3">
						<GrDocumentText fontSize="1.2rem" />
						<span>نوع قرارداد</span>
					</header>
					<div className="text-center p-[1rem] font-bold">مشارکت</div>
				</div>
				<div className="flex flex-col bg-[#fafafa] rounded-md text-[#1e7385]">
					<header className="bg-[#eeeeee] p-[0.4rem] rounded-md flex flex-row items-center gap-3">
						<FiUser fontSize="1.2rem" />
						<span>مدیر پروژه</span>
					</header>
					<div className="text-center p-[1rem] font-bold">
						حساب یاری امین ملل
					</div>
				</div>
				<div className="flex flex-col bg-[#fafafa] rounded-md text-[#1e7385]">
					<header className="bg-[#eeeeee] p-[0.4rem] rounded-md flex flex-row items-center gap-3">
						<FiUser fontSize="1.2rem" />
						<span>تعداد سرمایه‌گذاران</span>
					</header>
					<div className="text-center p-[1rem] font-bold">268 نفر</div>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<header className="p-4 text-center text-[#1e7385]">
					پلن های سرمایه گذاری
				</header>
				<TabSummary />
			</div>
		</div>
	);
};

export default ProjectSummary;
