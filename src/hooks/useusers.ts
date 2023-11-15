import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	website: string;
	company: {
		name: string;
	};
}

const apiClient = new APIClient<User>("/users");

const useUsers = () =>
	useQuery({
		queryKey: ["users"],
		queryFn: apiClient.getAll,
	});

export default useUsers;
