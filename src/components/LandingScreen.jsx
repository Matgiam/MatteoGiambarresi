

function LandingScreen() {
	return (
		<header>
			<div className="name">
				<h1>Matteo</h1>
			</div>
			<div className="header-text">
				<h2>
					Passionate about Front-end <br /> developping, 3D and music.
				</h2>
				<div className="image">
					<img src="./src/assets/matteo.png" alt="Matteo Giambarresi" />
				</div>
				<nav>
					<ul>
						<li>
							<a href="#about">Projects</a>
						</li>
						<li>
							<a href="#about">About me</a>
						</li>
						<li>
							<a href="#about">Contact</a>
						</li>
					</ul>
					<div className="scroll_down">
						<h1>Scroll down</h1>
						<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 33 33" fill="none">
							<path
								d="M16.5 6.875V26.125M16.5 26.125L26.125 16.5M16.5 26.125L6.875 16.5"
								stroke="white"
								stroke-width="4"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
				</nav>
			</div>
		</header>
	);
}

export default LandingScreen;
