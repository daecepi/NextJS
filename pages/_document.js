import Document, { Html, Head, Main, NextScript } from "next/document";
import { DeferredNextScript } from "../components/Deffer/DeffererScript";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						rel="preload"
						href="/fonts/Graphik-Medium-Web.woff2"
						as="font"
						type="font/woff2"
						crossorigin
					/>
					<link
						rel="preload"
						href="/fonts/Graphik-Regular-Web.woff2"
						as="font"
						type="font/woff2"
						crossorigin
					/>
					<link
						rel="preload"
						href="/fonts/Graphik-Light-Web.woff2"
						as="font"
						type="font/woff2"
						crossorigin
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
