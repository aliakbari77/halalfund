import React from "react";

interface Props {
	percent: number;
	status: string;
}

const ProgressBar = ({ percent, status }: Props) => {
	return (
		<div className="relative pt-1">
			<div className="flex mb-2 items-center justify-between">
				<div>
					<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#0085a1] bg-[#badee6]">
						{status}
					</span>
				</div>
				<div className="text-right">
					<span className="text-xs font-semibold inline-block text-[#0085a1]">
						{percent}%
					</span>
				</div>
			</div>
			<div className="flex h-2 mb-4 overflow-hidden text-xs bg-[#badee6]">
				<div
					style={{ width: `${percent}%` }}
					className="flex flex-col justify-center text-center text-white bg-[#0085a1] shadow-none whitespace-nowrap"
				></div>
			</div>
		</div>
	);
};

export default ProgressBar;
