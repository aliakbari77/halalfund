import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div className="flex flex-col justify-between h-[100vh]">
				<NavBar />
				<Outlet />
				<Footer />
			</div>
		</>
	);
}

export default App;
