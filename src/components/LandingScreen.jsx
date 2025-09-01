function LandingScreen() {
	return (
		<div className="wrapper">
			<header>
				<div className="name">
					<h1>Matteo</h1>
				</div>
				<div className="header-text">
					<h2>
						Passionate about Front-end <br /> developping, 3D and music.
					</h2>
					<div className="landing_image">
						<img src="./src/assets/matteo.png" alt="Matteo Giambarresi" />
					</div>
					<nav>
						<ul>
							<li>
								<h3>
									<a href="#projects">Projects</a>
								</h3>
							</li>
							<li>
								<h3>
									<a href="/#about">About me</a>
								</h3>
							</li>
							<li>
								<h3>
									<a href="/#contact">Contact</a>
								</h3>
							</li>
						</ul>
						<div className="scroll_down">
							<h3>Scroll down</h3>
							<svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vh" viewBox="0 0 33 33" fill="none">
								<path
									d="M16.5 6.875V26.125M16.5 26.125L26.125 16.5M16.5 26.125L6.875 16.5"
									stroke="white"
									strokeWidth="4"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</nav>
				</div>
			</header>
		</div>
	);
}

export default LandingScreen;
