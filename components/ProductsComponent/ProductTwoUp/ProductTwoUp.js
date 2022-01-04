const ProductTwoUp = ({
	children,
	fullSectionClass = "product-page",
	containerClass = "",
	showHiddenH2 = false,
	addContainerToEachChild = false,
}) => {
	const sectionStyle = `c-cols c-cols-alternate${
		fullSectionClass ? " " + fullSectionClass : ""
	}`;
	const containerStyle = `container${
		containerClass ? " " + containerClass : ""
	}`;
	return (
		<section className={sectionStyle}>
			{addContainerToEachChild ? (
				children.map((child) => (
					<div className={containerStyle}>
						{showHiddenH2 && (
							<h2
								class="extra-bottom-margin--x-small"
								style={{ textAlign: "center" }}
							></h2>
						)}
						{child}
					</div>
				))
			) : (
				<>
					{showHiddenH2 && (
						<h2
							class="extra-bottom-margin--x-small"
							style={{ textAlign: "center" }}
						></h2>
					)}
					<div className={containerStyle}>{children}</div>
				</>
			)}
		</section>
	);
};

export default ProductTwoUp;
