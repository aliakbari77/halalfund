import React from "react";
import { NavLink } from "react-router-dom";

interface UsefulLink {
	title: string;
	path: string;
}

interface Props {
	links: UsefulLink[];
}

const UsefulLinks = ({ links }: Props) => {
	return (
		<div className="grid grid-cols-2 gap-4 text-gray-300">
			{links.map((link) => (
				<NavLink className=" hover:text-gray-100" to={link.path}>
					{link.title}
				</NavLink>
			))}
		</div>
	);
};

export default UsefulLinks;
