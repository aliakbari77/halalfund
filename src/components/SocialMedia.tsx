import React from "react";
import { FaTelegram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";

const SocialMedia = () => {
	return (
		<div className="flex flex-row gap-6 text-gray-300">
			<FaTelegram fontSize="2rem" className="hover:text-gray-100" />
			<FaSquareInstagram fontSize="2rem" className="hover:text-gray-100" />
			<RiWhatsappFill fontSize="2rem" className="hover:text-gray-100" />
		</div>
	);
};

export default SocialMedia;
