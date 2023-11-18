import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/HomePage";
import AboutUsPage from "./components/AboutUsPage";
import ContactUsPage from "./components/ContactUsPage";
import Users from "./components/Users";
import Products from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "about-us",
				element: <AboutUsPage />,
			},
			{
				path: "contact-us",
				element: <ContactUsPage />,
			},
			{
				path: "users",
				element: <Users />,
			},
			{
				path: "projects",
				element: <Products />,
			},
			{
				path: "projectDetails/:id",
				element: <ProjectDetails />,
			},
		],
	},
]);

export default routes;
