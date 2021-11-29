
const WebinarIndex = () => {

  return ()
}

export default WebinarIndex

export async function getServerSideProps({ params }) {
	// const blogInformation = await fetch(`copper.com/api/blog${pageNumber}.json`);
	const entry = await getEntryByType("blogIndex", "blog-index");
	const menuCategory = await getBlogCategoriesMenu();
	const blogFormats = await getBlogFormats();
	const blogEntries = await getBlogEntries();
	const featuredBlogs = await getBlogFeaturedEntries();
	// const category = await getSingleCaregory(params.blogSlug);

	return {
		props: {
			entry: entry.entry || {},
			globals: entry.globalSets || {},
			menuCategory,
			blogFormats,
			blogEntries,
			featuredBlogs,
			// category
		}, // will be passed to the page component as props
	};
}