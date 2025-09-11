import { motion } from "motion/react";
function Contact() {
	return (
		<div className="wrapper contact">
			<header id="contact">
				<div className="project_text contact_text">
					<motion.h1
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: false, amount: 0.2 }}
					>
						Contact
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: false, amount: 0.2 }}
					>
						If you'd like to get in touch, feel free to reach out!
					</motion.p>
				</div>

				<div>
					<form className="contact_form">
						<motion.input
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3 }}
							type="text"
							placeholder="name"
							required
						></motion.input>{" "}
						<br /> <br />
						<motion.input
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.35 }}
							type="email"
							placeholder="email"
							required
						></motion.input>{" "}
						<br /> <br />
						<motion.input
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.4 }}
							type="text"
							placeholder="topic"
							required
						></motion.input>{" "}
						<br /> <br />
						<motion.textarea
							initial={{ opacity: 0, scale: 0.5 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.45 }}
							rows={10}
							placeholder="message"
							required
						></motion.textarea>{" "}
						<br /> <br />
						<motion.button
							type="submit"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
							viewport={{ once: false, amount: 0.5 }}
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 1.0 }}
							style={{ marginTop: "1vw", cursor: "pointer" }}
						>
							Send
						</motion.button>
					</form>
				</div>
			</header>
		</div>
	);
}
export default Contact;
