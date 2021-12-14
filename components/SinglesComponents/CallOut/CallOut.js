import Link from "next/link";
const CallOut = (props) => {
	return (
		<section className="c-single-column">
			<div className="container">
				<div className="col-md-10 offset-md-1 c-single-column__container h-hairline">
					{/* <h2>Create something awesome, together.</h2> */}
					{props.smallTitle ? <h3>{props.title}</h3> : <h2>{props.title}</h2>}
					<div className="c-single-column__buttons">
						<Link href="https://www.copper.com/signup">
							<a className="c-button sendUTMsToAmplitude">Try Free</a>
						</Link>
						<Link href="/demos">
							<a className="c-button c-button--outline">Request Demo</a>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CallOut;
