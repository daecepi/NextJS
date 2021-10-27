import Head from "next/head";

const DefaultHead = () => {
	return (
		<Head>
			<title>Copper CRM</title>
			<link rel="icon" href="/favicon.ico" />
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"
			/>
		</Head>
	);
};

export default DefaultHead;
