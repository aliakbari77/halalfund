import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useState } from "react";
import LoginForm from "./components/LoginForm";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="flex flex-col justify-between">
				<NavBar showLogin={() => setIsOpen(true)} />
				<Outlet />
				<Footer />
			</div>
			{isOpen && <LoginForm onClose={() => setIsOpen(false)} />}
		</>
	);
}

export default App;
