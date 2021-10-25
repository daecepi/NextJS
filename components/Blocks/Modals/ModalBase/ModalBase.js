const ModalBase = ({ template, mainStyles }) => {
	return (
		<div className="row">
			<div data-cy="l-modal-overlay" id="l-modal--overlay">
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
							onClick="closeModal({{ template == 'personalization-base' ? 'true' : 'false' }})"
						>
							<svg
								width="14px"
								height="14px"
								viewbox="0 0 14 14"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
							>
								<defs></defs>
								<g
									id="Page-1"
									stroke="none"
									stroke-width="1"
									fill="none"
									fill-rule="evenodd"
								>
									<g
										id="Request-a-demo-modal---no-logo"
										transform="translate(-233.000000, -225.000000)"
									>
										<g
											id="baseline-close-24px-copy"
											transform="translate(228.000000, 220.000000)"
										>
											<polygon
												id="Shape"
												fill="#FF3465"
												fill-rule="nonzero"
												points="19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12"
											></polygon>
											<polygon
												id="Shape"
												points="0 0 24 0 24 24 0 24"
											></polygon>
										</g>
									</g>
								</g>
							</svg>
						</a>
						<div className="container">{children}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalBase;
