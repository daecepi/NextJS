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
					<link
						href="https://fonts.googleapis.com/icon?family=Material+Icons&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,500,700&display=swap"
						rel="stylesheet"
					/>
					<link href="https://rsms.me/inter/inter.css" rel="stylesheet" />
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
