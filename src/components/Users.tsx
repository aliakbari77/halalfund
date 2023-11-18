import React, { useState } from "react";
import useUsers from "../hooks/useUsers";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

export const Users = () => {
	const { data: users, isLoading } = useUsers();

	if (isLoading) return <h1>Loading</h1>;

	return (
		<div className="overflow-x-auto m-4">
			<div className="flex flex-row gap-2 items-center">
				<button className="btn btn-sm bg-red-600 text-white hover:bg-red-900">
					<MdDelete />
					<span>حذف</span>
				</button>
				<button className="btn btn-sm bg-[#0085a1] hover:bg-[#005466] text-white">
					<FaPlus />
					<span>اضافه کردن</span>
				</button>
			</div>
			<table className="table">
				<thead>
					<tr>
						<th>
							<label>
								<input type="checkbox" className="checkbox" />
							</label>
						</th>
						<th>نام</th>
						<th>فامیل</th>
						<th>ایمیل</th>
						<th>سایت</th>
						<th>شرکت</th>
					</tr>
				</thead>
				<tbody>
					{users?.map((user) => (
						<tr>
							<th>
								<label>
									<input type="checkbox" className="checkbox" />
								</label>
							</th>
							<td>
								<div className="flex items-center gap-3">
									<div>{user.name}</div>
								</div>
							</td>
							<td>{user.username}</td>
							<td>{user.email}</td>
							<td>{user.website}</td>
							<td>{user.company.name}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Users;
