function ScrollingText({ content }) {
	return (
		<div className="container">
			<div className="scroll-left">
				<div className="marquee">
					<span>{content}</span>
				</div>
			</div>

			<div className="scroll-left">
				<div className="marquee">
					<span>{content}</span>
					<span>{content}</span>
				</div>
			</div>

			<div className="scroll-left">
				<div className="marquee">
					<span>{content}</span>
					<span>{content}</span>
				</div>
			</div>
		</div>
	);
}

export default ScrollingText;
