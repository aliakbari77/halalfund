import React from "react";
import ProjectCard from "./ProjectCard";

const Products = () => {
	return (
		<div>
			<div className="text-center m-8">
				<h1 className="font-bold text-[#0085a1] text-[2rem]">فرصت های سرمایه گذاری</h1>
			</div>
			<div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center text-center gap-16">
				<div>
					<ProjectCard />
				</div>
				<div>project</div>
				<div>project</div>
				<div>project</div>
				<div>project</div>
			</div>
		</div>
	);
};

export default Products;
