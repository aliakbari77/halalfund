import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import axios from "axios";

interface Project {
	id: number;
	title: string;
	value: string;
	startTime: string;
	certificate: string;
	contractType: string;
	projectManager: string;
	numberOfInvestors: string;
}

const useProject = (id: number) =>
	useQuery({
		queryKey: ["projects", id],
		queryFn: () =>
			axios
				.get<Project>("http://localhost:3000/api/projects", { params: { id } })
				.then((res) => res.data),
	});

export default useProject;
