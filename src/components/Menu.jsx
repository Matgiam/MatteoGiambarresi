import React, { useState } from "react";

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="mobile-menu">
			{/* Hamburger button */}
			<button className={`hamburger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
				<span></span>
				<span></span>
				<span></span>
			</button>

			{/* Dropdown menu */}
			<nav className={`menu ${isOpen ? "show" : ""}`}>
				<a href="#projects">Projects</a>
				<a href="#about">About</a>
				<a href="#contact">Contact</a>
			</nav>
		</div>
	);
}
