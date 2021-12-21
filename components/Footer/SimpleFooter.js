import Image from "next/image";
import Link from "next/link";
import FBSvg from "../SVGs/FBSvg";
import IGSvg from "../SVGs/IGSvg";
import LNSvg from "../SVGs/LNSvg";
import TWSvg from "../SVGs/TWSvg";
import YTSvg from "../SVGs/YTSvg";

export default SimpleFooter = () => {
	return (
		<footer
			className={`c-footer--simple ${
				entry?.handleType && entry.handleType == "newEBook"
					? "extra-space-mobile"
					: ""
			} ${
				entry.slug == "demo-request-linkedin" ? "extra-top-margin--x-small" : ""
			}`}
		>
			<div className="container">
				<div className="d-flex row">
					<div className="col-md-2 c-footer--simple__logo">
						<Link href="#">
							<a>
								<Image
									alt="Footer logo"
									src="/imgs/copper-logo-grey.svg"
									width={24}
									height={24}
								/>
							</a>
						</Link>
					</div>
					<div className="col-md-7 c-footer--simple__company-links">
						<a href="/privacy" className="custom-link">
							Privacy Policy
						</a>
						<a href="/terms" className="custom-link">
							Terms &amp; Conditions
						</a>
						<span>® {new Date().getFullYear()} Copper CRM, Inc.</span>
					</div>
					<div className="col-md-3">
						<div className="c-footer--simple__social-links">
							<YTSvg />
							<IGSvg />
							<FBSvg />
							<TWSvg />
							<LNSvg />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
