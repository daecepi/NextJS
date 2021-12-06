const NumbersTable = ({ numberBoxes }) => {
	// Trnaforms the data strcuture into the array[pair[],pair[]] as the element structure needs it
	const numberBoxPairDivision = numberBoxes.reduce(
		(previousValue, currentValue, currentIndex) => {
			if (currentIndex === 1) return [[previousValue, currentValue]];
			if (currentIndex % 2 !== 0) {
				const withoutLast = previousValue.filter(
					(value, index) => index !== previousValue.length - 1
				);
				return [
					...withoutLast,
					[...previousValue[previousValue.length - 1], currentValue],
				];
			}
			return [...previousValue, [currentValue]];
		}
	);
	return (
		<>
			{numberBoxPairDivision.map((pair) => {
				return (
					<div className="row">
						{pair?.length
							? pair.map((numberBox, index) => {
									return (
										<div
											className={`c-number col-md-5 ${
												index % 2 !== 0 ? "offset-md-1" : ""
											}`}
										>
											<span className="t-numbers">{numberBox.number}</span>
											<p>{numberBox.subText}</p>
										</div>
									);
							  })
							: ""}
					</div>
				);
			})}
		</>
	);
};

export default NumbersTable;
