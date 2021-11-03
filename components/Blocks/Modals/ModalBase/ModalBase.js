import Image from "next/image";

const ModalBase = ({
	display,
	template,
	mainStyles,
	closeSignal,
	children,
}) => {
	const displayToUse = display ? "flex" : "none";

	return (
		<div className="row">
			<div
				data-cy="l-modal-overlay"
				id="l-modal--overlay"
				style={{ display: displayToUse }}
			>
				<div className="l-modal--content " id={`${template}-Modal`}>
					<div
						data-cy="l-modal-content"
						className="modal-content"
						style={{ ...mainStyles }}
					>
						<a
							className="modal-close"
							data-dismiss="modal"
							aria-label="Close"
							onClick={() => {
								closeSignal();
							}}
							style={{ color: "#646567" }}
						>
							<Image
								src="https://copper.objects.frb.io/imgs/about/highlights/close-modal-2.svg"
								width="14px"
								height="14px"
								style={{ color: "#3C3F40 !important" }}
							/>
						</a>
						<div className="container">{children}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalBase;
