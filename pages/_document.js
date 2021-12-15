import Document, { Html, Head, Main } from "next/document";
import { DeferredNextScript } from "../components/Deffer/DeffererScript";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<DeferredNextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
