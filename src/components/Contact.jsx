function Contact() {
	return (
		<header id="contact">
			<div className="project_text contact_text">
				<h1>Contact</h1>
				<p>If you'd like to get in touch, feel free to reach out!</p>
			</div>

			<div>
				<form className="contact_form">
					<input type="text" placeholder="name" required></input> <br /> <br />
					<input type="email" placeholder="email" required></input> <br /> <br />
					<input type="text" placeholder="topic" required></input> <br /> <br />
					<textarea rows={4} placeholder="message" required></textarea> <br /> <br />
					<button type="submit">Send</button>
				</form>
			</div>
		</header>
	);
}
export default Contact;
