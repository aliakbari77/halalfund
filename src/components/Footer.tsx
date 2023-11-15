import React from "react";
import UsefulLinks from "./UsefulLinks";
import SocialMedia from "./SocialMedia";
import Information from "./Information";

const Footer = () => {
	const useFulLinks = [
		{
			title: "خانه",
			path: "/",
		},
		{
			title: "پروفایل",
			path: "/",
		},
		{
			title: "قوانین و مقررات",
			path: "/",
		},
		{
			title: "تماس با ما",
			path: "/",
		},
		{
			title: "سوالات متداول",
			path: "/",
		},
		{
			title: "درباره ما",
			path: "/",
		},
		{
			title: "اخبار",
			path: "/",
		},
	];

	return (
		<div className="bg-[#0085a1] fles flex-col">
			<div className="flex flex-row justify-between px-8 py-4 text-white">
				<div>
					<UsefulLinks links={useFulLinks} />
				</div>
				<div>
					<SocialMedia />
				</div>
				<div>
					<img src="src\assets\1.svg" alt="" />
				</div>
			</div>
			<div className="flex flex-col justify-center items-center my-4">
				<img
					src="src\assets\image\daneshbonyan.png"
					alt=""
					className="rounded rounded-lg w-[16rem]"
				/>
			</div>
			<div className="flex flex-col justify-center items-center mt-4">
				<Information />
			</div>
		</div>
	);
};

export default Footer;
