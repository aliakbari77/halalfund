import React, { useState } from "react";

const TabSummary = () => {
	const [activeTab, setActiveTab] = useState(1);
	return (
		<div className="w-full border-b border-b-1 border-b-gray-400">
			<div className="flex flex-row">
				<button
					onClick={() => setActiveTab(1)}
					className={activeTab === 1 ? "btn-sm bg-red-500" : "btn-sm"}
				>
					پلن 12 ماهه
				</button>
				<button
					onClick={() => setActiveTab(2)}
					className={activeTab === 2 ? "btn-sm bg-red-500" : "btn-sm"}
				>
					پلن 6 ماهه
				</button>
			</div>
		</div>
	);
};

export default TabSummary;
