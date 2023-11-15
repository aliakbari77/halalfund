import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/HomePage";
import AboutUsPage from "./components/AboutUsPage";
import ContactUsPage from "./components/ContactUsPage";
import Users from "./components/Users";

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
		],
	},
]);

export default routes;
