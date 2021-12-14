import Link from "next/link";
import { useRecoilValue } from "recoil";
import { SyncedAtom } from "../../contexts/SyncContext";

const BlogFinalPlea = () => {
	const syncedAtomInformation = useRecoilValue(SyncedAtom);
	return (
		<section className="c-hero--split background--leavebehind leavebehind-blog h-blog">
			<div className="c-image">
				<picture>
					<source
						type="image/webp"
						srcset="/imgs/leave-behind-scaled.webp"
						alt="Leave behind scaled image"
					/>
					<source
						type="image/png"
						srcset="/imgs/leave-behind-scaled.jpg"
						alt="Leave behind scaled image"
					/>
					<img
						src="/imgs/leave-behind-scaled.jpg"
						alt="Leave behind scaled image"
					/>
				</picture>
			</div>
			<div className="container container--footer">
				<div className="row">
					<div className="col-md-6 c-valign--middle">
						<h2 className="t-white">Try Copper free!</h2>
						<p style={{ maxWidth: "420px" }}>
							No credit card required. Start your 14-day free trial today.
						</p>
						<div className="c-hero__buttons">
							<Link href="/demos">
								<a className="c-button">Request Demo</a>
							</Link>
							<Link href={syncedAtomInformation.generalSignupUrl}>
								<a className="c-button c-button--outline sendUTMsToAmplitude">
									Try Free
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogFinalPlea;
