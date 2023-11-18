import { GrDocumentText } from "react-icons/gr";
import ProjectSummary from "./ProjectSummary";

const ProjectDetails = () => {
	return (
		<div>
			<header className="p-[1.5rem] text-center bg-gradient-to-r from-[#0086a181] via-[#0086a136] to-[#0086a181]">
				<h1 className="font-bold text-[2rem]">
					تامین بخشی از سرمایه مورد نیاز جهت اجرای قرارداد اسکلت بتنی مجتمع
					مسکونی فردوسی
				</h1>
			</header>
			<div className="grid grid-cols-2 p-[1.5rem] gap-4">
				<ProjectSummary />
				<div>اطلاعات قرارداد</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
