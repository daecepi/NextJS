import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DefaultPageBase from "../../components/PageBase/DefaultPageBase";
import { getBlogResultPages } from "../../lib/api";

const ResourcesResultsPage = ({ entry, globals, query, page, subCategory }) => {
	// Request

	const [data, updateData] = useState([]);

	// Effect to get data for the blog
	useEffect(async () => {
		console.log("Running asyncronously");
		const dataEntry = await getBlogResultPages(query);
		updateData(dataEntry || []);
	}, []);

	return (
		<DefaultPageBase entry={entry} globals={globals}>
			<div className="c-blog-content__main container">
				{data.length ? (
					<>
						<div className="row">
							<div className="col-md-12">
								<h2>
									Search results for{" "}
									<span className="t-resource-quotes--hot-pink">{query}</span>
								</h2>
							</div>
						</div>
						{/* Give vue page type and category ID */}
						{/* TODO implement VUeJS code for displaying the results */}
					</>
				) : (
					<div className="row">
						<div className="col-md-12">
							<h2 className="t-resource-period--hot-pink">We're sorry</h2>
							<p>
								We couldn't find any matching results for{" "}
								<span className="t-resource-quotes--hot-pink">{query}</span>
							</p>
						</div>
					</div>
				)}
			</div>
		</DefaultPageBase>
	);
};

export default ResourcesResultsPage;

export async function getServerSideProps(context) {
	return {
		props: {
			entry: {
				handleType: "blogSearchResults",
			},
			globals: [],
			query: context.query.q || undefined,
			page: context.query.pg || undefined,
			subCategory: context.query.sc || undefined,
		}, // will be passed to the page component as props
	};
}
