import Link from "next/link";
import Footer from "../Footer/Footer";
const Content404Page = () => {
	return (
		<>
			<style type="text/css" jsx global>
				{`
					section.white {
						padding-top: 100px;
						text-align: center;
					}
					h1 {
						line-height: 14px;
						font-size: 14px;
						text-transform: uppercase;
						margin-bottom: 26px;
					}
					img {
						display: inline-block;
						margin: 0 auto;
					}
					.c-error-number {
						font-size: 76px;
						font-weight: 100;
						line-height: 90px;
						display: block;
					}
					.c-error-dialog {
						min-width: 280px;
						margin: 150px auto;
						position: relative;
						text-align: center;
					}

					.c-error-button:last-child {
						margin-right: 0;
					}
					@media (max-width: 400px) {
						.c-error-button {
							margin-right: 0;
							width: 65%;
						}
					}
				`}
			</style>
			<section className="white">
				<div className="c-error-dialog">
					<h1>
						<span className="c-error-number">404</span>Page Not Found
					</h1>
					<div className="c-error-button__container">
						<Link href="/">
							<a
								className="c-button c-button--hot-pink"
								style={{
									marginTop: "20px",
									display: "inline-block",
									marginRight: "0",
									position: "relative",
								}}
							>
								Return Home
							</a>
						</Link>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};
export default Content404Page;
