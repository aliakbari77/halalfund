import React from "react";
import ProgressBar from "./ProgressBar";
import ProjectCardStatus from "./ProjectCardStatus";

const ProjectCard = () => {
	return (
		<div className="card card-compact bg-base-100 shadow-xl">
			<div className="absolute right-0 text-[#0085a1] m-2 py-1 px-3 bg-white rounded-full">
				<span className="text-[0.8rem]">1,400,000,000 ریال</span>
			</div>
			<figure>
				<img
					src="src\assets\image\structure.jpg"
					alt=""
					className="w-[100%] h-[16rem]"
				/>
			</figure>
			<div className="card-body text-center pb-0">
				<ProgressBar percent={40} status="در جریان" />
				<span className="card-title text-[1rem] text-center justify-center">
					تامین سرمایه جهت اجرای قرارداد هتل
				</span>
				<ProjectCardStatus />
				<div className="card-actions justify-end">
					<button className="btn btn-md bg-[#0085a1] w-full text-white hover:text-[#0085a1] hover:bg-white hover:border-1 hover:border-[#0085a1]">
						سرمایه گذاری
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;