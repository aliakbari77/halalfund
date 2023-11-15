import React from "react";
import { info } from "../config/Constants";

const Information = () => {
	return (
		<div className="flex flex-col text-center justify-center items-center bg-white w-[50%] rounded-t-lg p-2 gap-4">
			<div>
				<p className="text-sm text-[#0085a1]">
					© 2023 All Rights Reserved for HalalFund
				</p>
			</div>
			<div>{info.address}</div>
			<div>{info.phone}</div>
		</div>
	);
};

export default Information;
