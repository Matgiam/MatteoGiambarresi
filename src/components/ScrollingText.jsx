
function ScrollingText({ content, direction = "left" }) {
	return (
		<div className="margin-bottom">
			<div className="container">
				<div className={direction === "left" ? "scroll-left" : "scroll-right"}>
					<div className="marquee">
						<span>{content}</span>
						<span>{content}</span>
						<span>{content}</span>
						<span>{content}</span>
					</div>
				</div>

				<div className={direction === "left" ? "scroll-left" : "scroll-right"}>
					<div className="marquee">
						<span>{content}</span>
						<span>{content}</span>
						<span>{content}</span>
						<span>{content}</span>
					</div>
				</div>

				<div className={direction === "left" ? "scroll-left" : "scroll-right"}>
					<div className="marquee">
						<span>{content}</span>
						<span>{content}</span>
						<span>{content}</span>
						<span>{content}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ScrollingText;
