import NavigationBlog from "../../components/Navigation/NavigationBlog";
import Head from "next/head";
import Script from "next/script";
import BlogLargeCardImage from "../../components/Blog/BlogLargeCardImage.js";
import {
	getBlogCategoriesMenu,
	getBlogFormats,
	getBlogEntries,
	getBlogFeaturedEntries,
	getSingleCaregory,
} from "../../lib/api";
import Footer from "../../components/Footer/Footer";
import BlogFeaturedCard from "../../components/Blog/BlogFeaturedCard";
import BlogLargeCardText from "../../components/Blog/BlogLargeCardText";
import BlogAd from "../../components/Blog/BlogAd";

const resources = (props) => {
	console.log(props.paramss);
	return (
		<>
			<div className="ltr resources blog-body flex">
				<Head>
					<title>Copper CRM</title>
					<link rel="icon" href="/favicon.ico" />
					<link
						rel="stylesheet"
						href="https://assets.sitescdn.net/answers/v1.5/answers.css"
					/>
				</Head>
				<NavigationBlog
					menuCategories={props.menuCategory}
					menuBlogFormats={props.blogFormats}
				></NavigationBlog>
				<Script
					strategy="lazyOnload"
					src="https://assets.sitescdn.net/answers/v1.5/answers.min.js"
				></Script>
				<Script
					strategy="lazyOnload"
					src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"
				></Script>
				<Script
					strategy="lazyOnload"
					src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"
				></Script>
				<Script
					src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
					onLoad={() => {
						$(".blogCTA").on("click", function (e) {
							// Setting UTM for this experiment
							// Cookies.set('utm_content', 'blog_header', { domain:  sndleveldomain });
							return 1;
						});

						var apiKey = "adf8d85d3ee2b2a9c35ed2695353d2d6";
						var experienceKey = "answers";
						var experienceVersion = "PRODUCTION";
						var businessId = "3335022";
						var locale = "en";
						var redirectUrl = "/search";
						var javascriptVersion = "1.7";
						var yextProductionUrl =
							"https://answers-embed.copper.com.pagescdn.com/";
						ANSWERS.init({
							apiKey: apiKey,
							experienceKey: experienceKey,
							businessId: businessId,
							experienceVersion: experienceVersion,
							locale: locale,
							redirectUrl: redirectUrl,
							javascriptVersion: javascriptVersion,
							production_url: yextProductionUrl,
							onReady: function () {
								this.addComponent("SearchBar", {
									container: ".search-bar-container",
									name: "faq-search",
									redirectUrl: redirectUrl,
									placeholdertext: "Search...",
								});
								this.addComponent("SearchBar", {
									container: ".search-bar-container-desktop",
									name: "faq-search-desktop",
									redirectUrl: redirectUrl,
									placeholdertext: "Search...",
								});
								$(".yxt-SearchBar-input").attr("placeholder", "Search...");
								// Make API Call to Options
								var url =
									"https://liveapi-cached.yext.com/v2/accounts/me/answers/autocomplete";
								url += "?v=20190101";
								url += "&api_key=" + apiKey;
								url += "&sessionTrackingEnabled=false";
								url += "&experienceKey=" + experienceKey;
								url += "&input=";
								url += "&version=" + experienceVersion;
								url += "&locale=" + locale;
								axios.get(url).then(function (response) {
									// Get strings from response
									const strings = response.data.response.results.map(function (
										r
									) {
										return r.value;
									});
									// console.log("Response object", response)
									// Set up Typed
									var options = {
										strings: strings,
										showCursor: true,
										cursorChar: "|",
										typeSpeed: 45,
										backSpeed: 20,
										smartBackspace: true,
										loop: true,
										startDelay: 500,
										backDelay: 2000,
										attr: "placeholder",
									};
									var typed = new Typed(".js-yext-query", options);
									$(".Icon--yext_animated_forward").empty();
									$(".Icon--yext_animated_reverse").empty();
								});
							},
						});
						$(".search-free-open").on("click", function () {
							$(".search-bar-menu-delimiter").addClass("show-delimiter");
						});
						$(".search-free-close").on("click", function () {
							$(".search-bar-menu-delimiter").removeClass("show-delimiter");
						});
					}}
				></Script>

				<main id="content" className="c-blog-content no-banner" role="main">
					<div className="c-blog-content__search">
						<div className="yext-searchbar-container blog-style">
							<div
								className="search-bar-menu-delimiter"
								data-cy="resources-search-bar-menu-delimiter-desktop"
							>
								<div className="search-bar-container-desktop"></div>
								<span className="search-free-close"></span>
							</div>
							<span
								className="search-free-open white-search-start"
								style={{ position: "relative", right: "0px" }}
								data-cy="resources-search-free-open-desktop"
							></span>
							<a
								className="c-button sendUTMsToAmplitude blogCTA"
								target="_blank"
								href="/signup"
								style={{ marginLeft: "17px", marginRight: "15px" }}
							>
								Try Copper free
							</a>
						</div>
					</div>
					<div className="c-blog-content__main container c-blog-content__main--index">
						<div>
							<div className="c-copper-chronicles__top  row">
								<div className="c-copper-chronicles__top__new col-xl-6">
									<h3>New</h3>
									<div>
										<BlogLargeCardImage
											imagegradient={props.blogEntries[0].imagegradient}
											url={props.blogEntries[0].url}
											imageUrl={props.blogEntries[0].featuredImage[0].url}
											imageWidth={props.blogEntries[0].featuredImage[0].width}
											imageHeight={props.blogEntries[0].featuredImage[0].height}
											parentCategory={props.blogEntries[0].parentCategory}
											readTime={props.blogEntries[0].readingTime}
											title={props.blogEntries[0].title}
											description={props.blogEntries[0].seoDescription}
											authorPhoto={props.blogEntries[0].author.photo.url}
											authorName={props.blogEntries[0].author.firstName}
											authorLastName={props.blogEntries[0].author.lastName}
											authorTitle={props.blogEntries[0].author.authorTitle}
										></BlogLargeCardImage>
									</div>
									{/* <div v-for="entry in newEntry" :key="entry.id">
                  <large-blog-card v-if="entry.image" :entry="entry"  />
                  <large-blog-card-text  v-else :entry="entry" />
                </div> */}
								</div>
								<div className="c-copper-chronicles__top__featured col-xl-5 offset-xl-1">
									<h3>Featured</h3>
									{props.featuredBlogs.map((item) => {
										return (
											<BlogFeaturedCard
												title={item.title}
												url={item.url}
												image={item.featuredImage[0].url}
												imageWidth={item.featuredImage[0].width}
												imageHeight={item.featuredImage[0].height}
												imagegradient={item.imagegradient}
												readTime={item.readingTime}
											></BlogFeaturedCard>
										);
									})}
									{/* <featured-blog-card v-for="featuredTeaser in featuredEntries" :key="featuredTeaser.id" :entry="featuredTeaser" /> */}
								</div>
							</div>
							<div className="row c-copper-chronicles__title">
								<h3
									className="col-md-12"
									id="topOfPagination"
									style={{ fontSize: "20px", lineHeight: "30px" }}
								>
									Recent Stories
								</h3>
							</div>
							<div className="row">
								{/* <div v-if="entries.length === 0 && !noData" className="c-copper-chronicles__loading c-copper-chronicles__loading--1470">
                <loading/>
              </div>
              <div className="col-md-12" v-if="noData">
                <no-results/>
              </div> */}
								{props.blogEntries.map((item, index) => {
									if (index <= 3) {
										return (
											<div className="col-lg-6 col-xl-4 c-card-col">
												{item.featuredImage[0].url ? (
													<BlogLargeCardImage
														imagegradient={item.imagegradient}
														url={item.url}
														imageUrl={item.featuredImage[0].url}
														imageWidth={item.featuredImage[0].width}
														imageHeight={item.featuredImage[0].height}
														parentCategory={item.parentCategory}
														readTime={item.readingTime}
														title={item.title}
														description={item.seoDescription}
														authorPhoto={item.author.photo.url}
														authorName={item.author.firstName}
														authorLastName={item.author.lastName}
														authorTitle={item.author.authorTitle}
													></BlogLargeCardImage>
												) : (
													<BlogLargeCardText
														imagegradient={item.imagegradient}
														url={item.url}
														parentCategory={item.parentCategory}
														readTime={item.readingTime}
														title={item.title}
														description={item.seoDescription}
														authorPhoto={item.author.photo.url}
														authorName={item.author.firstName}
														authorLastName={item.author.lastName}
														authorTitle={item.author.authorTitle}
													></BlogLargeCardText>
												)}
												{/* <blog-card v-if="entryTeaser.image" :entry="entryTeaser" />
                      <blog-card-text v-else :entry="entryTeaser" /> */}
											</div>
										);
									}
									if (index > 3) {
										return (
											<div class="col-lg-6 col-xl-4 c-card-col order-md-last">
												{item.featuredImage[0].url ? (
													<BlogLargeCardImage
														imagegradient={item.imagegradient}
														url={item.url}
														imageUrl={item.featuredImage[0].url}
														imageWidth={item.featuredImage[0].width}
														imageHeight={item.featuredImage[0].height}
														parentCategory={item.parentCategory}
														readTime={item.readingTime}
														title={item.title}
														description={item.seoDescription}
														authorPhoto={item.author.photo.url}
														authorName={item.author.firstName}
														authorLastName={item.author.lastName}
														authorTitle={item.author.authorTitle}
													></BlogLargeCardImage>
												) : (
													<BlogLargeCardText
														imagegradient={item.imagegradient}
														url={item.url}
														parentCategory={item.parentCategory}
														readTime={item.readingTime}
														title={item.title}
														description={item.seoDescription}
														authorPhoto={item.author.photo.url}
														authorName={item.author.firstName}
														authorLastName={item.author.lastName}
														authorTitle={item.author.authorTitle}
													></BlogLargeCardText>
												)}
												{/* <blog-card v-if="entryTeaser.image" :entry="entryTeaser" />
                      <blog-card-text v-else :entry="entryTeaser" /> */}
											</div>
										);
									}
								})}

								<div className="col-lg-6 col-xl-4 c-card-col">
									<BlogAd></BlogAd>
									{/* <ad :link="adLink" :image="adImage" /> */}
								</div>
							</div>
						</div>
					</div>

					<Footer></Footer>
				</main>
			</div>
		</>
	);
};

export default resources;

export async function getServerSideProps({ params }) {
	let pageNumber = 1;
	const blogInformation = await fetch(`copper.com/api/blog${pageNumber}.json`);
	const menuCategory = await getBlogCategoriesMenu();
	const blogFormats = await getBlogFormats();
	const blogEntries = await getBlogEntries();
	const featuredBlogs = await getBlogFeaturedEntries();
	// const category = await getSingleCaregory(params.blogSlug);

	return {
		props: {
			blogInformation,
			menuCategory,
			blogFormats,
			blogEntries,
			featuredBlogs,
			// category
		}, // will be passed to the page component as props
	};
}
