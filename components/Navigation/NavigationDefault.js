import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Pills from "../CTAS/Pills";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { LoneAnonymousOperationRule } from "graphql";

const NavigationDefault = ({ buttons }) => {
	const { query } = useRouter();
	const [active, setActive] = useState("");

	const col1 = [];
	const col2 = [];
	const col3 = [];

	const toggleMenu = (name) => {
		if (name != active) {
			setActive(name);
		} else {
			setActive("nomenu");
		}
	};

	const handleHamburgerIcon = (event) => {
		const hamburger = document.getElementById("nav-icon2");
		const body = document.querySelector("body");
		const navMobileOverlay = document.getElementsByClassName(
			"c-nav--mobile__overlay"
		);
		hamburger.classList.toggle("open");
		body.classList.toggle("body--stop-scrolling");
		navMobileOverlay[0].classList.toggle("open");
		const hamburgerSpans = [...hamburger.children];
		hamburgerSpans.forEach((span) => {
			span.classList.remove("white");
		});
		const navMobile = document.getElementById("navMobile");
		const navDropdown = [...document.getElementsByClassName("c-nav__dropdown")];
		const jsDropdownNav = [
			...document.getElementsByClassName("js-dropdown-nav"),
		];
		navMobile.classList.remove("z-index");
		navDropdown.forEach((dropdown) => {
			dropdown.classList.remove("active");
		});
		jsDropdownNav.forEach((dropdown) => {
			dropdown.classList.remove("active");
		});
	};

	const handleMobileSubMenu = (event) => {
		const dropdownType = event.target.getAttribute("dropdown-type");
		const nav = document.getElementById(dropdownType);
		if (event.target.classList.contains("active")) {
			event.target.classList.remove("active");
			nav.classList.remove("active");
		} else {
			const navDropdown = [
				...document.getElementsByClassName("c-nav__dropdown"),
			];
			const jsDropdownNav = [
				...document.getElementsByClassName("js-dropdown-nav"),
			];
			navDropdown.forEach((dropdown) => {
				dropdown.classList.remove("active");
			});
			jsDropdownNav.forEach((dropdown) => {
				dropdown.classList.remove("active");
			});
			event.target.classList.add("active");
			nav.classList.add("active");
			const hamburger = document.getElementById("nav-icon2");
			const hamburgerSpans = [...hamburger.children];
			hamburgerSpans.forEach((span) => {
				span.classList.add("white");
			});
			const navMobile = document.getElementById("navMobile");
			navMobile.classList.add("z-index");
		}
	};

	const handleSubMenuBack = (event) => {
		const navDropdown = [...document.getElementsByClassName("c-nav__dropdown")];
		const jsDropdownNav = [
			...document.getElementsByClassName("js-dropdown-nav"),
		];
		navDropdown.forEach((dropdown) => {
			dropdown.classList.remove("active");
		});
		jsDropdownNav.forEach((dropdown) => {
			dropdown.classList.remove("active");
		});
		const hamburger = document.getElementById("nav-icon2");
		const hamburgerSpans = [...hamburger.children];
		hamburgerSpans.forEach((span) => {
			span.classList.remove("white");
		});
		const navMobile = document.getElementById("navMobile");
		navMobile.classList.remove("z-index");
	};

	const menu = [
		{
			whyCopper: {
				key: "why",
				render: true,
				tag: "whyCopper",
				name: "Why Copper",
				dropdowntype: "product-nav",
				url: "",
				navAd: "Product",
				dropdown: [
					{
						key: "orgContacts",
						name: "Organize Contacts",
						icon: "/imgs/icons/Productivity-2x.png",
						iconWidth: 35,
						iconHeight: 28,
						description: "Keep all your relationships in one central place",
						url: "/manage-contacts",
						tag: "",
						colPos: 1,
					},
					{
						key: "automateTasks",
						name: "Automate Tasks",
						icon: "/imgs/icons/icon-product-implementation@2x.png",
						iconWidth: 35,
						iconHeight: 29,
						description: "Create recurring tasks and notifications",
						url: "/automate-sales",
						tag: "",
						colPos: 1,
					},
					{
						key: "secAndPrivacy",
						name: "Security and Privacy",
						icon: "/imgs/icons/icon-product-security@2x.png",
						iconWidth: 35,
						iconHeight: 29,
						description: "Learn how Copper keeps your data safe",
						url: "/security",
						tag: "",
						colPos: 1,
					},
					{
						key: "trackDeals",
						name: "Track Deals",
						icon: "/imgs/icons/Insights-2x.png",
						iconWidth: 35,
						iconHeight: 24,
						description: "Set up the pipeline that works for you",
						url: "/track-leads",
						tag: "",
						colPos: 2,
					},
					{
						key: "getReports",
						name: "Get Reports",
						icon: "/imgs/icons/Collaboration-2x.png",
						iconWidth: 35,
						iconHeight: 33,
						description: "See how your business is doing with custom reports",
						url: "/sales-reporting",
						tag: "",
						colPos: 2,
					},
					{
						key: "googleWrokspace",
						name: "Google Workspace CRM",
						icon: "https://copper.objects.frb.io/imgs/icons/icon_Google Workspace.png",
						iconWidth: 35,
						iconHeight: 23,
						description:
							"Manage your contacts, deals, emails and more in one place",
						url: "/google-workspace-crm",
						tag: "UPDATED",
						colPos: 2,
					},
					{
						key: "manageContacts",
						name: "Manage Projects",
						icon: "/imgs/icons/menu-icon_projects@2x.png",
						iconWidth: 35,
						iconHeight: 35,
						description: "Manage your team???s work after the deal is closed",
						url: "/project-management-crm",
						tag: "",
						colPos: 3,
					},
					{
						key: "integrations",
						name: "Integrations",
						icon: "/imgs/icons/Integration-2x.png",
						iconWidth: 35,
						iconHeight: 23,
						description:
							"Save time by connecting Copper to popular apps and tools",
						url: "/integrations",
						tag: "",
						colPos: 3,
					},
				],
			},
		},
		{
			industry: {
				key: "industry",
				render: true,
				name: "Industry",
				tag: "industry",
				dropdowntype: "industries-nav",
				url: "",
				navAd: "Product",
				dropdown: [
					{
						key: "agencies",
						name: "Agencies",
						icon: "/imgs/icons/Media-2x.png",
						iconWidth: 35,
						iconHeight: 28,
						description:
							"Better client relations for advertising and media agencies.",
						url: "/industries/agency-crm",
						tag: "",
						colPos: 1,
					},
					{
						key: "consulting",
						name: "Consulting",
						icon: "/imgs/icons/Business-2x.png",
						iconWidth: 35,
						iconHeight: 28,
						description: "Manage clients and deals from one central place.",
						url: "/industries/consulting-crm",
						tag: "",
						colPos: 1,
					},
					{
						key: "technology",
						name: "Technology",
						icon: "/imgs/icons/Software-2x.png",
						iconWidth: 35,
						iconHeight: 28,
						description: "Innovate and scale faster with less crm busy work.",
						url: "/industries/software-technology-crm",
						tag: "",
						colPos: 3,
					},
					{
						key: "realEstate",
						name: "Real Estate",
						icon: "/imgs/icons/RealState-2x.png",
						iconWidth: 35,
						iconHeight: 28,
						description:
							"Real estate professionals manage more listings with Copper.",
						url: "/industries/real-estate-crm",
						tag: "",
						colPos: 2,
					},
					{
						key: "corporateDevelopment",
						name: "Corporate Development",
						icon: "/imgs/icons/Corp-2x.png",
						iconWidth: 35,
						iconHeight: 28,
						description: "Track and manage deals in one place with Copper.",
						url: "/industries/corporate-development-crm",
						tag: "",
						colPos: 2,
					},
				],
			},
		},
		{
			pricing: {
				key: "pricing",
				render: true,
				name: "Pricing",
				dropdowntype: "",
				url: "/pricing",
			},
		},
		{
			demos: {
				key: "demos",
				render: true,
				name: "Demos",
				dropdowntype: "",
				url: "/demos",
			},
		},
		{
			resources: {
				key: "resources",
				render: true,
				name: "Resources",
				tag: "resources",
				dropdowntype: "resources-nav",
				url: "",
				navAd: "Resources",
				dropdown: [
					{
						key: "library",
						name: "Library",
						icon: "/imgs/icons/icon-resources-events.png",
						iconWidth: 35,
						iconHeight: 28,
						description:
							"Books, guides, videos and tools for growing your small business.",
						url: "/resources",
						tag: "",
						colPos: 1,
					},
					{
						key: "productUpdates",
						name: "Product Updates",
						icon: "/imgs/icons/icon-resources-updates.png",
						iconWidth: 35,
						iconHeight: 28,
						description: "Get updates on our product, best practices and tips.",
						url: "/blog-categories/copper?sc=743",
						tag: "",
						colPos: 1,
					},
					{
						key: "blog",
						name: "Blog",
						icon: "/imgs/icons/icon-resources-blog.png",
						iconWidth: 35,
						iconHeight: 28,
						description:
							"News, stories and latest thinking on sales, marketing and more.",
						url: "/resources",
						tag: "",
						colPos: 3,
					},
					{
						key: "developers",
						name: "Developers",
						icon: "/imgs/icons/icon-resources-developers.png",
						iconWidth: 35,
						iconHeight: 28,
						description: "Use our API to integrate Copper with other apps.",
						url: "https://developer.copper.com/",
						tag: "",
						colPos: 2,
					},
					{
						key: "helpCenter",
						name: "Help Center",
						icon: "/imgs/icons/icon-resources-help.png",
						iconWidth: 35,
						iconHeight: 28,
						description: "Browse our knowledge base to find answers.",
						url: "https://support.copper.com",
						tag: "",
						colPos: 2,
					},
					{
						key: "webinars",
						name: "Webinars",
						icon: "/imgs/icons/icon-resources-webinars.png",
						iconWidth: 35,
						iconHeight: 28,
						description:
							"Check our schedule and sign up for our online events.",
						url: "/webinars",
						tag: "",
						colPos: 3,
					},
				],
			},
		},
		{
			company: {
				key: "company",
				render: false,
				name: "Company",
				tag: "company",
				dropdowntype: "company-nav",
				url: "",
				navAd: "Company",
				dropdown: [
					{
						key: "about",
						name: "About",
						icon: "/imgs/icons/About.png",
						iconWidth: 35,
						iconHeight: 28,
						description: "Learn about our company.",
						url: "/about",
						tag: "",
						colPos: 1,
					},
					{
						key: "contactUs",
						name: "Contact Us",
						icon: "/imgs/icons/contact.png",
						iconWidth: 35,
						iconHeight: 28,
						description: "Get in touch with the team.",
						url: "/contact",
						tag: "",
						colPos: 1,
					},
					{
						key: "careers",
						name: "Careers",
						icon: "/imgs/icons/careers.png",
						iconWidth: 35,
						iconHeight: 28,
						description: "Search our latest job openings",
						url: "/about#careers",
						tag: "",
						colPos: 2,
					},
					{
						key: "partners",
						name: "Partners",
						icon: "/imgs/icons/Partners.png",
						iconWidth: 35,
						iconHeight: 28,
						description: "Learn about our partners and how \n to become one.",
						url: "/partners",
						tag: "",
						colPos: 2,
					},
					{
						key: "press",
						name: "Press",
						icon: "/imgs/icons/Press.png",
						iconWidth: 35,
						iconHeight: 28,
						description: "Check out all the Copper press and news.",
						url: "/press",
						tag: "",
						colPos: 3,
					},
				],
			},
		},
	];

	return (
		<>
			<nav
				className="c-nav--mobile"
				style={{ height: "fit-content" }}
				id="navMobile"
			>
				<div style={{ position: "relative", height: "60px", zIndex: "99999" }}>
					<Link href="/">
						<a className="c-nav__logo">
							<svg
								width="137px"
								height="27px"
								viewBox="0 0 137 27"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
							>
								<defs></defs>
								<g
									id="Symbols"
									stroke="none"
									strokeWidth="1"
									fill="none"
									fillRule="evenodd"
								>
									<g id="Nav" transform="translate(-70.000000, -37.000000)">
										<g id="nav">
											<g id="logo" transform="translate(70.000000, 37.000000)">
												<path
													d="M22.5269072,20.0350286 C21.1427093,20.0350286 19.8715175,19.7987143 18.7125649,19.3268571 C17.553868,18.8547429 16.5493402,18.1959429 15.7000041,17.3509714 C14.8496454,16.506 14.1874598,15.5052 13.7124247,14.3493429 C13.2376454,13.1934857 13.0001278,11.9201143 13.0001278,10.5279429 C13.0001278,9.11134286 13.2655134,7.78757143 13.7970515,6.5574 C14.328334,5.32697143 15.0633856,4.25854286 16.0027175,3.35108571 C16.9415381,2.44414286 18.0416866,1.72954286 19.3018845,1.20728571 C20.5623381,0.685285714 21.9209691,0.424542857 23.379567,0.424542857 C24.4666763,0.424542857 25.4862887,0.579857143 26.4378928,0.890228571 C27.3887299,1.20137143 28.217101,1.63028571 28.9212165,2.17671429 C29.6255876,2.7234 30.1819258,3.37602857 30.5894639,4.13382857 C30.9972577,4.89265714 31.2010268,5.69391429 31.2010268,6.53862857 C31.2010268,7.48362857 30.9047052,8.27228571 30.3118062,8.90614286 C29.7183959,9.54025714 28.9892247,9.8568 28.1245485,9.8568 C27.2345608,9.8568 26.4933732,9.54642857 25.9004742,8.92491429 C25.3070639,8.30365714 25.0107423,7.52091429 25.0107423,6.57591429 C25.0107423,6.30308571 25.041167,6.04182857 25.1032948,5.79317143 C25.1646557,5.54477143 25.2574639,5.18425714 25.3809526,4.71162857 C25.5046969,4.28965714 25.585233,3.9726 25.6223052,3.76122857 C25.6591216,3.55037143 25.6777856,3.32022857 25.6777856,3.07131429 C25.6777856,2.42537143 25.4686474,1.89694286 25.0519052,1.48705714 C24.6343959,1.07691429 24.1082268,0.871714286 23.4744206,0.871714286 C22.9132247,0.871714286 22.3947258,1.053 21.9199464,1.41428571 C21.4444,1.77531429 21.0297031,2.26774286 20.676367,2.89028571 C20.3225196,3.51385714 20.0420495,4.25442857 19.834701,5.11457143 C19.6276082,5.97445714 19.5240619,6.89014286 19.5240619,7.86162857 C19.5240619,10.1296286 20.0924165,11.9301429 21.2293814,13.2631714 C22.3658351,14.5964571 23.8985773,15.2627143 25.8260742,15.2627143 C26.9134392,15.2627143 27.9018598,15.0577714 28.7918474,14.6478857 C29.681068,14.2377429 30.546,13.5979714 31.3866433,12.7278 L31.8312536,12.9512571 C29.7304124,17.6742 26.6288784,20.0350286 22.5269072,20.0350286"
													id="Fill-1"
													fill="#3C3F40"
												></path>
												<path
													d="M45.9856874,6.03768857 C45.8734482,4.81497429 45.7172338,3.82934571 45.5170441,3.08028857 C45.3168544,2.38163143 45.0046812,1.83906 44.5795019,1.45206 C44.1540668,1.06531714 43.6409369,0.871945714 43.0411348,0.871945714 C42.4152544,0.871945714 41.8842276,1.06531714 41.4465204,1.45206 C41.0088132,1.83906 40.7022647,2.38163143 40.5271307,3.08028857 C40.3266854,3.87897429 40.1771184,4.88311714 40.077407,6.09348857 C39.9771843,7.30411714 39.9273287,8.68266 39.9273287,10.2298886 C39.9273287,11.7771171 39.9771843,13.1620886 40.077407,14.3848029 C40.1771184,15.6075171 40.3266854,16.6057457 40.5271307,17.3794886 C40.7022647,18.0781457 41.0088132,18.6207171 41.4465204,19.0077171 C41.8842276,19.3942029 42.4152544,19.5878314 43.0411348,19.5878314 C43.6409369,19.5878314 44.1599472,19.3942029 44.5981658,19.0077171 C45.035106,18.6207171 45.3416544,18.0781457 45.5170441,17.3794886 C45.9422235,15.7574314 46.154941,13.3744886 46.154941,10.2298886 C46.154941,8.65823143 46.0981823,7.26040286 45.9856874,6.03768857 M52.4763843,14.1070886 C51.9458689,15.3002314 51.2246235,16.3383171 50.3118812,17.2203171 C49.3988833,18.1025743 48.3199555,18.7927457 47.0740751,19.2895457 C45.8281946,19.7863457 44.4900173,20.0350029 43.0597988,20.0350029 C41.6037575,20.0350029 40.2530524,19.7863457 39.0076833,19.2895457 C37.7618029,18.7927457 36.6823637,18.1025743 35.7698771,17.2203171 C34.8568792,16.3383171 34.1358895,15.3002314 33.605374,14.1070886 C33.0746029,12.9142029 32.8099843,11.62206 32.8099843,10.2298886 C32.8099843,8.83797429 33.0746029,7.54531714 33.605374,6.35243143 C34.1358895,5.15928857 34.8568792,4.12171714 35.7698771,3.23920286 C36.6823637,2.35720286 37.7618029,1.66754571 39.0076833,1.16997429 C40.2530524,0.673174286 41.6037575,0.424517143 43.0597988,0.424517143 C44.4900173,0.424517143 45.8281946,0.673174286 47.0740751,1.16997429 C48.3199555,1.66754571 49.3988833,2.35720286 50.3118812,3.23920286 C51.2246235,4.12171714 51.9458689,5.15928857 52.4763843,6.35243143 C53.0068998,7.54531714 53.2720297,8.83797429 53.2720297,10.2298886 C53.2720297,11.62206 53.0068998,12.9142029 52.4763843,14.1070886"
													id="Fill-3"
													fill="#3C3F40"
												></path>
												<path
													d="M130.343833,3.28065429 C130.343833,5.09248286 131.804221,6.56128286 133.605673,6.56128286 C135.407124,6.56128286 136.867512,5.09248286 136.867512,3.28065429 C136.867512,1.46882571 135.407124,2.57142856e-05 133.605673,2.57142856e-05 C131.804221,2.57142856e-05 130.343833,1.46882571 130.343833,3.28065429"
													id="Fill-5"
													fill="#3C3F40"
												></path>
												<path
													d="M0.343833402,5.28065429 C0.343833402,7.09248286 1.80422103,8.56128286 3.60567258,8.56128286 C5.40712412,8.56128286 6.86751175,7.09248286 6.86751175,5.28065429 C6.86751175,3.46882571 5.40712412,2.00002571 3.60567258,2.00002571 C1.80422103,2.00002571 0.343833402,3.46882571 0.343833402,5.28065429"
													id="Fill-5-Copy"
													fill="#FF3465"
												></path>
												<path
													d="M0.343833402,15.2806543 C0.343833402,17.0924829 1.80422103,18.5612829 3.60567258,18.5612829 C5.40712412,18.5612829 6.86751175,17.0924829 6.86751175,15.2806543 C6.86751175,13.4688257 5.40712412,12.0000257 3.60567258,12.0000257 C1.80422103,12.0000257 0.343833402,13.4688257 0.343833402,15.2806543"
													id="Fill-5-Copy-2"
													fill="#FF3465"
												></path>
												<path
													d="M67.3655629,16.7168057 C66.7184619,18.1838057 65.8103216,18.9166629 64.6408866,18.9166629 C63.9692412,18.9166629 63.3597237,18.6435771 62.812334,18.0963771 L62.812334,3.40683429 C63.3597237,3.05917714 63.7826021,2.82337714 64.0814804,2.69866286 C64.3798474,2.57446286 64.6779588,2.51223429 64.9770928,2.51223429 C66.0217608,2.51223429 66.8424619,3.22709143 67.4394515,4.65577714 C68.0369526,6.08549143 68.3355753,8.05520571 68.3355753,10.5654343 C68.3355753,13.2003771 68.0118969,15.2505771 67.3655629,16.7168057 M74.7656784,5.70003429 C74.4307505,4.61900571 73.9600619,3.68660571 73.353101,2.90360571 C72.7453732,2.12086286 72.0200371,1.51194857 71.1776041,1.07686286 C70.3344041,0.642034286 69.4055546,0.424491429 68.3897773,0.424491429 C67.4471216,0.424491429 66.5361691,0.610662857 65.6561526,0.98352 C64.7766474,1.35663429 63.828367,1.97814857 62.812334,2.84780571 L62.812334,1.27100571 L62.812334,0.424491429 L53.6636907,3.16460571 L53.6636907,3.33612 L53.6636907,3.71874857 C54.0581897,3.77712 54.3857031,3.86146286 54.6388165,3.97512 C54.9967546,4.13557714 55.3114845,4.38989143 55.5837732,4.73677714 C55.7323175,4.93529143 55.8494144,5.14614857 55.9360866,5.36909143 C56.0222474,5.59229143 56.0902557,5.85277714 56.1398557,6.14977714 C56.1892,6.44729143 56.2262722,6.80009143 56.2510722,7.20946286 C56.2753608,7.61832 56.2881443,8.09557714 56.2881443,8.64046286 L56.2881443,20.42532 L56.2881443,21.9491486 C56.2881443,22.3706057 56.2820082,22.7177486 56.2697361,22.99032 C56.2569526,23.2628914 56.2385443,23.4981771 56.2142557,23.6969486 C56.1892,23.8944343 56.1521278,24.0932057 56.1027835,24.2919771 C56.0288948,24.7625486 55.8678227,25.1343771 55.6208454,25.4069486 C55.3488124,25.7540914 55.0279464,25.9955486 54.6572247,26.1320914 C54.4859258,26.1950914 54.2619588,26.2508914 53.9904371,26.3007771 L53.9904371,26.8952914 L65.1062062,26.8952914 L65.1062062,26.3619771 C64.7740907,26.3195486 64.499501,26.2691486 64.2952206,26.2082057 C63.9242433,26.0968629 63.6279216,25.9070914 63.4057443,25.6368343 C63.2817443,25.4894914 63.1830557,25.3300629 63.109167,25.1580343 C63.034767,24.9854914 62.9731505,24.7646057 62.9238062,24.4946057 C62.8736948,24.2240914 62.8432701,23.8985486 62.8309979,23.5182343 C62.8182144,23.1363771 62.812334,22.6640057 62.812334,22.0990629 L62.812334,18.6926914 C63.456367,19.19052 64.0456866,19.5381771 64.5782474,19.7369486 C65.1113196,19.9354629 65.7366887,20.0349771 66.4561443,20.0349771 C67.6951216,20.0349771 68.8476825,19.7613771 69.9135711,19.2149486 C70.9792041,18.6682629 71.9088206,17.9099486 72.7024206,16.94052 C73.4955093,15.9713486 74.121134,14.8340057 74.5795505,13.5292629 C75.0384784,12.2242629 75.2675588,10.8140914 75.2675588,9.29797714 C75.2675588,7.98037714 75.1003505,6.78106286 74.7656784,5.70003429"
													id="Fill-8"
													fill="#3C3F40"
												></path>
												<path
													d="M90.3593814,16.7168057 C89.7122804,18.1838057 88.8041402,18.9166629 87.6347052,18.9166629 C86.9630598,18.9166629 86.3535423,18.6435771 85.8061526,18.0963771 L85.8061526,3.40683429 C86.3535423,3.05917714 86.7764206,2.82337714 87.075299,2.69866286 C87.373666,2.57446286 87.6717773,2.51223429 87.9709113,2.51223429 C89.0155794,2.51223429 89.8362804,3.22709143 90.4332701,4.65577714 C91.0307711,6.08549143 91.3293938,8.05520571 91.3293938,10.5654343 C91.3293938,13.2003771 91.0057155,15.2505771 90.3593814,16.7168057 M97.7594969,5.70003429 C97.4245691,4.61900571 96.9538804,3.68660571 96.3469196,2.90360571 C95.7391918,2.12086286 95.0138557,1.51194857 94.1714227,1.07686286 C93.3282227,0.642034286 92.3993732,0.424491429 91.3833402,0.424491429 C90.4409402,0.424491429 89.5299876,0.610662857 88.6499711,0.98352 C87.770466,1.35663429 86.8221856,1.97814857 85.8061526,2.84780571 L85.8061526,1.27100571 L85.8061526,0.424491429 L76.6575093,3.16460571 L76.6575093,3.33612 L76.6575093,3.71874857 C77.0520082,3.77712 77.3795216,3.86146286 77.6326351,3.97512 C77.9905732,4.13557714 78.3053031,4.38989143 78.5775918,4.73677714 C78.7261361,4.93529143 78.843233,5.14614857 78.9299052,5.36909143 C79.016066,5.59229143 79.0840742,5.85277714 79.1336742,6.14977714 C79.1830186,6.44729143 79.2200907,6.80009143 79.2448907,7.20946286 C79.2691794,7.61832 79.2819629,8.09557714 79.2819629,8.64046286 L79.2819629,20.42532 L79.2819629,21.9491486 C79.2819629,22.3706057 79.2758268,22.7177486 79.2635546,22.99032 C79.2507711,23.2628914 79.2323629,23.4981771 79.2080742,23.6969486 C79.1830186,23.8944343 79.1459464,24.0932057 79.0966021,24.2919771 C79.0227134,24.7625486 78.8616412,25.1343771 78.6146639,25.4069486 C78.3426309,25.7540914 78.0217649,25.9955486 77.6510433,26.1320914 C77.4797443,26.1950914 77.2557773,26.2508914 76.9842557,26.3007771 L76.9842557,26.8952914 L88.1000247,26.8952914 L88.1000247,26.3619771 C87.7679093,26.3195486 87.4933196,26.2691486 87.2890392,26.2082057 C86.9180619,26.0968629 86.6217402,25.9070914 86.3995629,25.6368343 C86.2755629,25.4894914 86.1768742,25.3300629 86.1029856,25.1580343 C86.0285856,24.9854914 85.9669691,24.7646057 85.9176247,24.4946057 C85.8675134,24.2240914 85.8370887,23.8985486 85.8248165,23.5182343 C85.812033,23.1363771 85.8061526,22.6640057 85.8061526,22.0990629 L85.8061526,18.6926914 C86.4501856,19.19052 87.0395052,19.5381771 87.5723216,19.7369486 C88.1051381,19.9354629 88.7305072,20.0349771 89.4499629,20.0349771 C90.6889402,20.0349771 91.841501,19.7613771 92.9073897,19.2149486 C93.9730227,18.6682629 94.9026392,17.9099486 95.6962392,16.94052 C96.4890722,15.9713486 97.1149526,14.8340057 97.5733691,13.5292629 C98.0322969,12.2242629 98.2613773,10.8140914 98.2613773,9.29797714 C98.2613773,7.98037714 98.0941691,6.78106286 97.7594969,5.70003429"
													id="Fill-10"
													fill="#3C3F40"
												></path>
												<path
													d="M130.351836,18.8626114 C130.005659,18.7512686 129.733881,18.5596971 129.536248,18.28764 C129.412248,18.1397829 129.319951,17.9795829 129.258335,17.8062686 C129.196463,17.6332114 129.140982,17.4172114 129.091638,17.1574971 C129.042038,16.89804 129.011102,16.5706971 128.99883,16.1759829 C128.986046,15.7807543 128.980421,15.2983543 128.980421,14.7300686 L128.980421,12.3316971 L128.980421,10.0981543 L128.980421,0.367868571 L119.725675,3.14038286 L119.725675,3.69915429 C120.169263,3.75701143 120.531036,3.84726857 120.806648,3.97095429 C121.164331,4.13166857 121.479828,4.38572571 121.751861,4.73184 C121.900149,4.92958286 122.017246,5.14044 122.103918,5.36312571 C122.190335,5.58632571 122.258087,5.84604 122.308199,6.14304 C122.357032,6.44029714 122.394104,6.79309714 122.41916,7.20169714 C122.443448,7.61004 122.455976,8.08652571 122.455976,8.63115429 L122.455976,14.7213257 C122.455976,15.8851543 122.41916,16.7082686 122.34476,17.1906686 C122.270871,17.6735829 122.134854,18.0387257 121.937221,18.2860971 C121.714788,18.5589257 121.430483,18.7504971 121.084562,18.86184 C120.835028,18.9423257 120.486038,19.0060971 120.044751,19.0539257 L120.044751,19.5504686 L131.265601,19.5504686 L131.265601,19.03824 C130.885931,18.9922114 130.575803,18.9346114 130.351836,18.8626114"
													id="Fill-12"
													fill="#3C3F40"
												></path>
												<path
													d="M109.66002,0.871842857 C110.401719,0.871842857 110.969562,1.1799 111.365339,1.79524286 C111.76035,2.41007143 112.007583,3.39647143 112.106527,4.7529 C112.130816,5.00438571 112.149735,5.23041429 112.162007,5.43098571 C112.174535,5.63181429 112.186296,5.85115714 112.199335,6.0903 C112.211352,6.32918571 112.217999,6.59892857 112.217999,6.90004286 L112.217999,7.61001429 L106.514766,7.61001429 C106.543146,5.48987143 106.804952,3.84852857 107.306065,2.6991 C107.837348,1.48127143 108.621999,0.871842857 109.66002,0.871842857 Z M118.593645,12.1311 C118.223179,12.7035 117.913818,13.1319 117.667096,13.4173286 C117.419863,13.7035286 117.086214,13.9830429 116.666148,14.2561286 C115.578271,15.0270429 114.256713,15.4119857 112.699937,15.4119857 C108.597966,15.4119857 106.533941,13.0887 106.509141,8.44238571 L118.158238,8.44238571 L118.158238,8.44032857 L118.779005,8.44032857 C118.630717,7.22275714 118.302948,6.11652857 117.796721,5.1219 C117.289983,4.1283 116.641092,3.28281429 115.85056,2.58672857 C115.059261,1.89115714 114.145496,1.35655714 113.107475,0.9837 C112.069455,0.610585714 110.932746,0.424671429 109.697092,0.424671429 C108.288605,0.424671429 106.972416,0.685414286 105.749034,1.20741429 C104.525908,1.72941429 103.456696,2.44427143 102.542931,3.35095714 C101.628399,4.25841429 100.911756,5.32118571 100.392746,6.53875714 C99.8737353,7.75684286 99.6139744,9.06184286 99.6139744,10.4535 C99.6139744,11.8207286 99.8609518,13.0881857 100.355673,14.2561286 C100.849628,15.4248429 101.535847,16.4374714 102.413051,17.2947857 C103.289999,18.1523571 104.327764,18.8235 105.526857,19.3079571 C106.725438,19.7926714 108.016572,20.0351571 109.40077,20.0351571 C110.858346,20.0351571 112.192944,19.7556429 113.404053,19.1963571 C114.614651,18.6368143 115.652671,17.8355571 116.517859,16.7915571 C116.789636,16.4436429 117.030478,16.1204143 117.240638,15.8221286 C117.450288,15.5241 117.642296,15.2132143 117.815129,14.8902429 C117.988218,14.5672714 118.161051,14.2003286 118.334139,13.7904429 C118.506717,13.3800429 118.705117,12.8768143 118.92755,12.2802429 L118.593645,12.1311 Z"
													id="Fill-14"
													fill="#3C3F40"
												></path>
											</g>
										</g>
									</g>
								</g>
							</svg>
						</a>
					</Link>

					<div className="c-back js-sub-back" onClick={handleSubMenuBack}>
						<svg
							width="16px"
							height="8px"
							viewBox="0 0 16 8"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
						>
							<defs></defs>
							<g
								id="Page-1"
								stroke="none"
								strokeWidth="1"
								fill="none"
								fillRule="evenodd"
							>
								<g
									id="baseline-arrow_right_alt-24px"
									transform="translate(-4.000000, -8.000000)"
								>
									<polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
									<polygon
										id="Shape"
										fill="#FFFFFF"
										fillRule="nonzero"
										transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "
										points="16.01 11 4 11 4 13 16.01 13 16.01 16 20 12 16.01 8"
									></polygon>
								</g>
							</g>
						</svg>
					</div>
					<div className="search-bar-menu-delimiter" style={{ right: "55px" }}>
						<div className="search-bar-container"></div>
						<span className="search-free-close"></span>
					</div>

					<div className="c-nav--mobile__burger">
						<div id="nav-icon2" onClick={handleHamburgerIcon}>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
				<div
					className="c-nav--mobile__overlay"
					style={{ overflow: "hidden", top: "0px" }}
				>
					<div className="c-nav--mobile__links" style={{ paddingTop: "160px" }}>
						<ul>
							{menu.map((mobileItems) => {
								const itemKey = Object.keys(mobileItems);
								const mobileItem = mobileItems[itemKey];
								return (
									<>
										{mobileItem.render == true ? (
											<>
												{mobileItem.dropdowntype != "" ? (
													<li
														className="js-dropdown-nav"
														dropdown-type={`${mobileItem.dropdowntype}-mobile`}
														key={mobileItem.key}
														onClick={handleMobileSubMenu}
													>
														{mobileItem.name}
														<svg
															width="16px"
															height="8px"
															viewBox="0 0 16 8"
															version="1.1"
															xmlns="http://www.w3.org/2000/svg"
															xmlnsXlink="http://www.w3.org/1999/xlink"
															style={{ display: "inline" }}
														>
															<defs></defs>
															<g
																id="Page-1"
																stroke="none"
																strokeWidth="1"
																fill="none"
																fillRule="evenodd"
															>
																<g
																	id="baseline-arrow_right_alt-24px"
																	transform="translate(-4.000000, -8.000000)"
																>
																	<polygon
																		id="Shape"
																		points="0 0 24 0 24 24 0 24"
																	></polygon>
																	<polygon
																		id="Shape"
																		fill="#FF3465"
																		fillRule="nonzero"
																		transform="translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "
																		points="16.01 11 4 11 4 13 16.01 13 16.01 16 20 12 16.01 8"
																	></polygon>
																</g>
															</g>
														</svg>
													</li>
												) : (
													<li key={mobileItem.key}>
														<Link href={mobileItem?.url ? mobileItem.url : "#"}>
															<a
																target={
																	mobileItem?.target != ""
																		? mobileItem.target
																		: null
																}
															>
																{mobileItem.name}
															</a>
														</Link>
													</li>
												)}
											</>
										) : null}
									</>
								);
							})}
							<li>
								<Link href={buttons?.option?.url || "/signup"}>
									<a
										className="c-button "
										style={{ color: "white", marginTop: "32px" }}
										data-cy="general-menu-CTA--mobile"
									>
										{buttons?.option?.text || "Try Free"}
									</a>
								</Link>
								<Link
									href={
										buttons?.login?.url ||
										"https://app.copper.com/users/sign_in"
									}
								>
									<a
										className="c-button c-button--outline "
										style={{ color: "#FF3465", marginTop: "32px" }}
										data-cy="general-menu-CTA--mobile"
									>
										{buttons?.login?.text || "Login"}
									</a>
								</Link>
							</li>
						</ul>
					</div>
					<div className="c-nav--mobile__sub">
						{menu.map((mobileItems) => {
							const itemKey = Object.keys(mobileItems);
							const mobileItem = mobileItems[itemKey];
							return (
								<>
									{mobileItem.render === true && (
										<>
											{mobileItem.dropdown?.length > 0 && (
												<div
													className="c-nav__dropdown"
													id={`${mobileItem.dropdowntype}-mobile`}
													key={mobileItem.key}
												>
													<ul>
														<span className="c-nav__dropdown__title">
															{mobileItem.name}
														</span>
														{mobileItem.dropdown.map((submenu) => (
															<Link href={submenu.url}>
																<a
																	className="c-nav__dropdown__item"
																	href={submenu.url}
																	key={submenu.key}
																>
																	<li>{submenu.name}</li>
																</a>
															</Link>
														))}
													</ul>
												</div>
											)}
										</>
									)}
								</>
							);
						})}
					</div>
				</div>
			</nav>

			{/* EDN MOBILE  */}

			{/* DESKTOP START */}

			<nav
				className="c-nav c-new-nav"
				style={{ flexWrap: "wrap", height: "fit-content" }}
			>
				<div className="c-nav__container">
					<div className="container" style={{ flexWrap: "wrap" }}>
						<div
							style={{ width: "100%", display: "flex", position: "relative" }}
						>
							<div className="c-nav__logo">
								<Link href="/">
									<a style={{ height: "27px" }}>
										<svg
											width="137px"
											height="27px"
											viewBox="0 0 137 27"
											version="1.1"
											xmlns="http://www.w3.org/2000/svg"
											xmlnsXlink="http://www.w3.org/1999/xlink"
										>
											<defs></defs>
											<g
												id="Symbols"
												stroke="none"
												strokeWidth="1"
												fill="none"
												fillRule="evenodd"
											>
												<g
													id="Nav"
													transform="translate(-70.000000, -37.000000)"
												>
													<g id="nav">
														<g
															id="logo"
															transform="translate(70.000000, 37.000000)"
														>
															<path
																d="M22.5269072,20.0350286 C21.1427093,20.0350286 19.8715175,19.7987143 18.7125649,19.3268571 C17.553868,18.8547429 16.5493402,18.1959429 15.7000041,17.3509714 C14.8496454,16.506 14.1874598,15.5052 13.7124247,14.3493429 C13.2376454,13.1934857 13.0001278,11.9201143 13.0001278,10.5279429 C13.0001278,9.11134286 13.2655134,7.78757143 13.7970515,6.5574 C14.328334,5.32697143 15.0633856,4.25854286 16.0027175,3.35108571 C16.9415381,2.44414286 18.0416866,1.72954286 19.3018845,1.20728571 C20.5623381,0.685285714 21.9209691,0.424542857 23.379567,0.424542857 C24.4666763,0.424542857 25.4862887,0.579857143 26.4378928,0.890228571 C27.3887299,1.20137143 28.217101,1.63028571 28.9212165,2.17671429 C29.6255876,2.7234 30.1819258,3.37602857 30.5894639,4.13382857 C30.9972577,4.89265714 31.2010268,5.69391429 31.2010268,6.53862857 C31.2010268,7.48362857 30.9047052,8.27228571 30.3118062,8.90614286 C29.7183959,9.54025714 28.9892247,9.8568 28.1245485,9.8568 C27.2345608,9.8568 26.4933732,9.54642857 25.9004742,8.92491429 C25.3070639,8.30365714 25.0107423,7.52091429 25.0107423,6.57591429 C25.0107423,6.30308571 25.041167,6.04182857 25.1032948,5.79317143 C25.1646557,5.54477143 25.2574639,5.18425714 25.3809526,4.71162857 C25.5046969,4.28965714 25.585233,3.9726 25.6223052,3.76122857 C25.6591216,3.55037143 25.6777856,3.32022857 25.6777856,3.07131429 C25.6777856,2.42537143 25.4686474,1.89694286 25.0519052,1.48705714 C24.6343959,1.07691429 24.1082268,0.871714286 23.4744206,0.871714286 C22.9132247,0.871714286 22.3947258,1.053 21.9199464,1.41428571 C21.4444,1.77531429 21.0297031,2.26774286 20.676367,2.89028571 C20.3225196,3.51385714 20.0420495,4.25442857 19.834701,5.11457143 C19.6276082,5.97445714 19.5240619,6.89014286 19.5240619,7.86162857 C19.5240619,10.1296286 20.0924165,11.9301429 21.2293814,13.2631714 C22.3658351,14.5964571 23.8985773,15.2627143 25.8260742,15.2627143 C26.9134392,15.2627143 27.9018598,15.0577714 28.7918474,14.6478857 C29.681068,14.2377429 30.546,13.5979714 31.3866433,12.7278 L31.8312536,12.9512571 C29.7304124,17.6742 26.6288784,20.0350286 22.5269072,20.0350286"
																id="Fill-1"
																fill="#3C3F40"
															></path>
															<path
																d="M45.9856874,6.03768857 C45.8734482,4.81497429 45.7172338,3.82934571 45.5170441,3.08028857 C45.3168544,2.38163143 45.0046812,1.83906 44.5795019,1.45206 C44.1540668,1.06531714 43.6409369,0.871945714 43.0411348,0.871945714 C42.4152544,0.871945714 41.8842276,1.06531714 41.4465204,1.45206 C41.0088132,1.83906 40.7022647,2.38163143 40.5271307,3.08028857 C40.3266854,3.87897429 40.1771184,4.88311714 40.077407,6.09348857 C39.9771843,7.30411714 39.9273287,8.68266 39.9273287,10.2298886 C39.9273287,11.7771171 39.9771843,13.1620886 40.077407,14.3848029 C40.1771184,15.6075171 40.3266854,16.6057457 40.5271307,17.3794886 C40.7022647,18.0781457 41.0088132,18.6207171 41.4465204,19.0077171 C41.8842276,19.3942029 42.4152544,19.5878314 43.0411348,19.5878314 C43.6409369,19.5878314 44.1599472,19.3942029 44.5981658,19.0077171 C45.035106,18.6207171 45.3416544,18.0781457 45.5170441,17.3794886 C45.9422235,15.7574314 46.154941,13.3744886 46.154941,10.2298886 C46.154941,8.65823143 46.0981823,7.26040286 45.9856874,6.03768857 M52.4763843,14.1070886 C51.9458689,15.3002314 51.2246235,16.3383171 50.3118812,17.2203171 C49.3988833,18.1025743 48.3199555,18.7927457 47.0740751,19.2895457 C45.8281946,19.7863457 44.4900173,20.0350029 43.0597988,20.0350029 C41.6037575,20.0350029 40.2530524,19.7863457 39.0076833,19.2895457 C37.7618029,18.7927457 36.6823637,18.1025743 35.7698771,17.2203171 C34.8568792,16.3383171 34.1358895,15.3002314 33.605374,14.1070886 C33.0746029,12.9142029 32.8099843,11.62206 32.8099843,10.2298886 C32.8099843,8.83797429 33.0746029,7.54531714 33.605374,6.35243143 C34.1358895,5.15928857 34.8568792,4.12171714 35.7698771,3.23920286 C36.6823637,2.35720286 37.7618029,1.66754571 39.0076833,1.16997429 C40.2530524,0.673174286 41.6037575,0.424517143 43.0597988,0.424517143 C44.4900173,0.424517143 45.8281946,0.673174286 47.0740751,1.16997429 C48.3199555,1.66754571 49.3988833,2.35720286 50.3118812,3.23920286 C51.2246235,4.12171714 51.9458689,5.15928857 52.4763843,6.35243143 C53.0068998,7.54531714 53.2720297,8.83797429 53.2720297,10.2298886 C53.2720297,11.62206 53.0068998,12.9142029 52.4763843,14.1070886"
																id="Fill-3"
																fill="#3C3F40"
															></path>
															<path
																d="M130.343833,3.28065429 C130.343833,5.09248286 131.804221,6.56128286 133.605673,6.56128286 C135.407124,6.56128286 136.867512,5.09248286 136.867512,3.28065429 C136.867512,1.46882571 135.407124,2.57142856e-05 133.605673,2.57142856e-05 C131.804221,2.57142856e-05 130.343833,1.46882571 130.343833,3.28065429"
																id="Fill-5"
																fill="#3C3F40"
															></path>
															<path
																d="M0.343833402,5.28065429 C0.343833402,7.09248286 1.80422103,8.56128286 3.60567258,8.56128286 C5.40712412,8.56128286 6.86751175,7.09248286 6.86751175,5.28065429 C6.86751175,3.46882571 5.40712412,2.00002571 3.60567258,2.00002571 C1.80422103,2.00002571 0.343833402,3.46882571 0.343833402,5.28065429"
																id="Fill-5-Copy"
																fill="#FF3465"
															></path>
															<path
																d="M0.343833402,15.2806543 C0.343833402,17.0924829 1.80422103,18.5612829 3.60567258,18.5612829 C5.40712412,18.5612829 6.86751175,17.0924829 6.86751175,15.2806543 C6.86751175,13.4688257 5.40712412,12.0000257 3.60567258,12.0000257 C1.80422103,12.0000257 0.343833402,13.4688257 0.343833402,15.2806543"
																id="Fill-5-Copy-2"
																fill="#FF3465"
															></path>
															<path
																d="M67.3655629,16.7168057 C66.7184619,18.1838057 65.8103216,18.9166629 64.6408866,18.9166629 C63.9692412,18.9166629 63.3597237,18.6435771 62.812334,18.0963771 L62.812334,3.40683429 C63.3597237,3.05917714 63.7826021,2.82337714 64.0814804,2.69866286 C64.3798474,2.57446286 64.6779588,2.51223429 64.9770928,2.51223429 C66.0217608,2.51223429 66.8424619,3.22709143 67.4394515,4.65577714 C68.0369526,6.08549143 68.3355753,8.05520571 68.3355753,10.5654343 C68.3355753,13.2003771 68.0118969,15.2505771 67.3655629,16.7168057 M74.7656784,5.70003429 C74.4307505,4.61900571 73.9600619,3.68660571 73.353101,2.90360571 C72.7453732,2.12086286 72.0200371,1.51194857 71.1776041,1.07686286 C70.3344041,0.642034286 69.4055546,0.424491429 68.3897773,0.424491429 C67.4471216,0.424491429 66.5361691,0.610662857 65.6561526,0.98352 C64.7766474,1.35663429 63.828367,1.97814857 62.812334,2.84780571 L62.812334,1.27100571 L62.812334,0.424491429 L53.6636907,3.16460571 L53.6636907,3.33612 L53.6636907,3.71874857 C54.0581897,3.77712 54.3857031,3.86146286 54.6388165,3.97512 C54.9967546,4.13557714 55.3114845,4.38989143 55.5837732,4.73677714 C55.7323175,4.93529143 55.8494144,5.14614857 55.9360866,5.36909143 C56.0222474,5.59229143 56.0902557,5.85277714 56.1398557,6.14977714 C56.1892,6.44729143 56.2262722,6.80009143 56.2510722,7.20946286 C56.2753608,7.61832 56.2881443,8.09557714 56.2881443,8.64046286 L56.2881443,20.42532 L56.2881443,21.9491486 C56.2881443,22.3706057 56.2820082,22.7177486 56.2697361,22.99032 C56.2569526,23.2628914 56.2385443,23.4981771 56.2142557,23.6969486 C56.1892,23.8944343 56.1521278,24.0932057 56.1027835,24.2919771 C56.0288948,24.7625486 55.8678227,25.1343771 55.6208454,25.4069486 C55.3488124,25.7540914 55.0279464,25.9955486 54.6572247,26.1320914 C54.4859258,26.1950914 54.2619588,26.2508914 53.9904371,26.3007771 L53.9904371,26.8952914 L65.1062062,26.8952914 L65.1062062,26.3619771 C64.7740907,26.3195486 64.499501,26.2691486 64.2952206,26.2082057 C63.9242433,26.0968629 63.6279216,25.9070914 63.4057443,25.6368343 C63.2817443,25.4894914 63.1830557,25.3300629 63.109167,25.1580343 C63.034767,24.9854914 62.9731505,24.7646057 62.9238062,24.4946057 C62.8736948,24.2240914 62.8432701,23.8985486 62.8309979,23.5182343 C62.8182144,23.1363771 62.812334,22.6640057 62.812334,22.0990629 L62.812334,18.6926914 C63.456367,19.19052 64.0456866,19.5381771 64.5782474,19.7369486 C65.1113196,19.9354629 65.7366887,20.0349771 66.4561443,20.0349771 C67.6951216,20.0349771 68.8476825,19.7613771 69.9135711,19.2149486 C70.9792041,18.6682629 71.9088206,17.9099486 72.7024206,16.94052 C73.4955093,15.9713486 74.121134,14.8340057 74.5795505,13.5292629 C75.0384784,12.2242629 75.2675588,10.8140914 75.2675588,9.29797714 C75.2675588,7.98037714 75.1003505,6.78106286 74.7656784,5.70003429"
																id="Fill-8"
																fill="#3C3F40"
															></path>
															<path
																d="M90.3593814,16.7168057 C89.7122804,18.1838057 88.8041402,18.9166629 87.6347052,18.9166629 C86.9630598,18.9166629 86.3535423,18.6435771 85.8061526,18.0963771 L85.8061526,3.40683429 C86.3535423,3.05917714 86.7764206,2.82337714 87.075299,2.69866286 C87.373666,2.57446286 87.6717773,2.51223429 87.9709113,2.51223429 C89.0155794,2.51223429 89.8362804,3.22709143 90.4332701,4.65577714 C91.0307711,6.08549143 91.3293938,8.05520571 91.3293938,10.5654343 C91.3293938,13.2003771 91.0057155,15.2505771 90.3593814,16.7168057 M97.7594969,5.70003429 C97.4245691,4.61900571 96.9538804,3.68660571 96.3469196,2.90360571 C95.7391918,2.12086286 95.0138557,1.51194857 94.1714227,1.07686286 C93.3282227,0.642034286 92.3993732,0.424491429 91.3833402,0.424491429 C90.4409402,0.424491429 89.5299876,0.610662857 88.6499711,0.98352 C87.770466,1.35663429 86.8221856,1.97814857 85.8061526,2.84780571 L85.8061526,1.27100571 L85.8061526,0.424491429 L76.6575093,3.16460571 L76.6575093,3.33612 L76.6575093,3.71874857 C77.0520082,3.77712 77.3795216,3.86146286 77.6326351,3.97512 C77.9905732,4.13557714 78.3053031,4.38989143 78.5775918,4.73677714 C78.7261361,4.93529143 78.843233,5.14614857 78.9299052,5.36909143 C79.016066,5.59229143 79.0840742,5.85277714 79.1336742,6.14977714 C79.1830186,6.44729143 79.2200907,6.80009143 79.2448907,7.20946286 C79.2691794,7.61832 79.2819629,8.09557714 79.2819629,8.64046286 L79.2819629,20.42532 L79.2819629,21.9491486 C79.2819629,22.3706057 79.2758268,22.7177486 79.2635546,22.99032 C79.2507711,23.2628914 79.2323629,23.4981771 79.2080742,23.6969486 C79.1830186,23.8944343 79.1459464,24.0932057 79.0966021,24.2919771 C79.0227134,24.7625486 78.8616412,25.1343771 78.6146639,25.4069486 C78.3426309,25.7540914 78.0217649,25.9955486 77.6510433,26.1320914 C77.4797443,26.1950914 77.2557773,26.2508914 76.9842557,26.3007771 L76.9842557,26.8952914 L88.1000247,26.8952914 L88.1000247,26.3619771 C87.7679093,26.3195486 87.4933196,26.2691486 87.2890392,26.2082057 C86.9180619,26.0968629 86.6217402,25.9070914 86.3995629,25.6368343 C86.2755629,25.4894914 86.1768742,25.3300629 86.1029856,25.1580343 C86.0285856,24.9854914 85.9669691,24.7646057 85.9176247,24.4946057 C85.8675134,24.2240914 85.8370887,23.8985486 85.8248165,23.5182343 C85.812033,23.1363771 85.8061526,22.6640057 85.8061526,22.0990629 L85.8061526,18.6926914 C86.4501856,19.19052 87.0395052,19.5381771 87.5723216,19.7369486 C88.1051381,19.9354629 88.7305072,20.0349771 89.4499629,20.0349771 C90.6889402,20.0349771 91.841501,19.7613771 92.9073897,19.2149486 C93.9730227,18.6682629 94.9026392,17.9099486 95.6962392,16.94052 C96.4890722,15.9713486 97.1149526,14.8340057 97.5733691,13.5292629 C98.0322969,12.2242629 98.2613773,10.8140914 98.2613773,9.29797714 C98.2613773,7.98037714 98.0941691,6.78106286 97.7594969,5.70003429"
																id="Fill-10"
																fill="#3C3F40"
															></path>
															<path
																d="M130.351836,18.8626114 C130.005659,18.7512686 129.733881,18.5596971 129.536248,18.28764 C129.412248,18.1397829 129.319951,17.9795829 129.258335,17.8062686 C129.196463,17.6332114 129.140982,17.4172114 129.091638,17.1574971 C129.042038,16.89804 129.011102,16.5706971 128.99883,16.1759829 C128.986046,15.7807543 128.980421,15.2983543 128.980421,14.7300686 L128.980421,12.3316971 L128.980421,10.0981543 L128.980421,0.367868571 L119.725675,3.14038286 L119.725675,3.69915429 C120.169263,3.75701143 120.531036,3.84726857 120.806648,3.97095429 C121.164331,4.13166857 121.479828,4.38572571 121.751861,4.73184 C121.900149,4.92958286 122.017246,5.14044 122.103918,5.36312571 C122.190335,5.58632571 122.258087,5.84604 122.308199,6.14304 C122.357032,6.44029714 122.394104,6.79309714 122.41916,7.20169714 C122.443448,7.61004 122.455976,8.08652571 122.455976,8.63115429 L122.455976,14.7213257 C122.455976,15.8851543 122.41916,16.7082686 122.34476,17.1906686 C122.270871,17.6735829 122.134854,18.0387257 121.937221,18.2860971 C121.714788,18.5589257 121.430483,18.7504971 121.084562,18.86184 C120.835028,18.9423257 120.486038,19.0060971 120.044751,19.0539257 L120.044751,19.5504686 L131.265601,19.5504686 L131.265601,19.03824 C130.885931,18.9922114 130.575803,18.9346114 130.351836,18.8626114"
																id="Fill-12"
																fill="#3C3F40"
															></path>
															<path
																d="M109.66002,0.871842857 C110.401719,0.871842857 110.969562,1.1799 111.365339,1.79524286 C111.76035,2.41007143 112.007583,3.39647143 112.106527,4.7529 C112.130816,5.00438571 112.149735,5.23041429 112.162007,5.43098571 C112.174535,5.63181429 112.186296,5.85115714 112.199335,6.0903 C112.211352,6.32918571 112.217999,6.59892857 112.217999,6.90004286 L112.217999,7.61001429 L106.514766,7.61001429 C106.543146,5.48987143 106.804952,3.84852857 107.306065,2.6991 C107.837348,1.48127143 108.621999,0.871842857 109.66002,0.871842857 Z M118.593645,12.1311 C118.223179,12.7035 117.913818,13.1319 117.667096,13.4173286 C117.419863,13.7035286 117.086214,13.9830429 116.666148,14.2561286 C115.578271,15.0270429 114.256713,15.4119857 112.699937,15.4119857 C108.597966,15.4119857 106.533941,13.0887 106.509141,8.44238571 L118.158238,8.44238571 L118.158238,8.44032857 L118.779005,8.44032857 C118.630717,7.22275714 118.302948,6.11652857 117.796721,5.1219 C117.289983,4.1283 116.641092,3.28281429 115.85056,2.58672857 C115.059261,1.89115714 114.145496,1.35655714 113.107475,0.9837 C112.069455,0.610585714 110.932746,0.424671429 109.697092,0.424671429 C108.288605,0.424671429 106.972416,0.685414286 105.749034,1.20741429 C104.525908,1.72941429 103.456696,2.44427143 102.542931,3.35095714 C101.628399,4.25841429 100.911756,5.32118571 100.392746,6.53875714 C99.8737353,7.75684286 99.6139744,9.06184286 99.6139744,10.4535 C99.6139744,11.8207286 99.8609518,13.0881857 100.355673,14.2561286 C100.849628,15.4248429 101.535847,16.4374714 102.413051,17.2947857 C103.289999,18.1523571 104.327764,18.8235 105.526857,19.3079571 C106.725438,19.7926714 108.016572,20.0351571 109.40077,20.0351571 C110.858346,20.0351571 112.192944,19.7556429 113.404053,19.1963571 C114.614651,18.6368143 115.652671,17.8355571 116.517859,16.7915571 C116.789636,16.4436429 117.030478,16.1204143 117.240638,15.8221286 C117.450288,15.5241 117.642296,15.2132143 117.815129,14.8902429 C117.988218,14.5672714 118.161051,14.2003286 118.334139,13.7904429 C118.506717,13.3800429 118.705117,12.8768143 118.92755,12.2802429 L118.593645,12.1311 Z"
																id="Fill-14"
																fill="#3C3F40"
															></path>
														</g>
													</g>
												</g>
											</g>
										</svg>
									</a>
								</Link>
							</div>
							<ul className="c-nav__links">
								{menu.map((item) => {
									const itemKey = Object.keys(item);
									return (
										<>
											{item[itemKey].render == true ? (
												<>
													{item[itemKey].dropdowntype != "" ? (
														<li
															key={item.key}
															onClick={() => toggleMenu(item[itemKey].tag)}
															className={`h-dropdown js-dropdown-nav ${
																active == item[itemKey].tag ? "active" : null
															}`}
															data-cy={
																item[itemKey].dataCy
																	? item[itemKey].dataCy
																	: null
															}
															dropdowntype={item[itemKey].dropdowntype}
														>
															{item[itemKey].name}
															<span
																className="carrot"
																style={{ marginLeft: "0.23rem" }}
															>
																<svg
																	width="6px"
																	height="4px"
																	viewBox="0 0 6 4"
																	version="1.1"
																	xmlns="http://www.w3.org/2000/svg"
																	xmlnsXlink="http://www.w3.org/1999/xlink"
																>
																	<defs></defs>
																	<g
																		id="Website"
																		stroke="none"
																		strokeWidth="1"
																		fill="none"
																		fillRule="evenodd"
																	>
																		<g
																			id="Dropdown-Nav"
																			transform="translate(-514.000000, -812.000000)"
																			fill="#FF3465"
																		>
																			<g
																				id="::-Industries-v1"
																				transform="translate(0.000000, 764.000000)"
																			>
																				<g
																					id="dropdown-nav"
																					transform="translate(113.000000, 0.000000)"
																				>
																					<g
																						id="pages"
																						transform="translate(345.000000, 37.000000)"
																					>
																						<g id="product">
																							<polygon
																								id="dropdown"
																								transform="translate(59.000000, 13.000000) rotate(-270.000000) translate(-59.000000, -13.000000) "
																								points="57 10 61 13 57 16"
																							></polygon>
																						</g>
																					</g>
																				</g>
																			</g>
																		</g>
																	</g>
																</svg>
															</span>
														</li>
													) : (
														<Link href={item[itemKey].url}>
															<a
																target={
																	item[itemKey].target
																		? item[itemKey].target
																		: null
																}
																target={item[itemKey].target}
															>
																<li>{item[itemKey].name}</li>
															</a>
														</Link>
													)}
												</>
											) : null}
										</>
									);
								})}
							</ul>

							<div className="search-bar-menu-delimiter">
								<div
									className="search-bar-container-desktop"
									data-cy="search-bar-container-desktop-resources"
								></div>
								<span className="search-free-close"></span>
							</div>
							<ul className="c-nav__utility">
								<Link
									href={buttons?.option?.url || "https://www.copper.com/signup"}
								>
									<a
										id="desktop-nav-main-CTA"
										className="c-button "
										data-cy="general-menu-CTA"
									>
										<li>{buttons?.option?.text || "Try Free"}</li>
									</a>
								</Link>
								<Link
									href={
										buttons?.login?.url ||
										"https://app.copper.com/users/sign_in"
									}
								>
									<a
										id="desktop-nav-main-CTA"
										className="c-nav__login "
										data-cy="general-menu-CTA"
									>
										<li>{buttons?.login?.text || "Login"}</li>
									</a>
								</Link>
							</ul>
						</div>
						<div style={{ position: "relative", width: "100%" }}>
							{menu.map((desktopSecondLevel) => {
								const dropdownItems = Object.keys(desktopSecondLevel);
								return (
									<>
										{desktopSecondLevel[dropdownItems].render == true ? (
											<>
												{desktopSecondLevel[dropdownItems].dropdowntype !=
												"" ? (
													<div
														className={`c-nav__dropdown ${
															active == desktopSecondLevel[dropdownItems].tag
																? "active"
																: null
														}`}
														data-cy="general-nav-dropdown"
														id={desktopSecondLevel[dropdownItems].dropdowntype}
														style={{ top: "0px", left: "0px", width: "100vw" }}
													>
														<ul>
															{desktopSecondLevel[dropdownItems].dropdown.map(
																(ditem) => {
																	if (ditem.colPos == 1) {
																		return (
																			<Link href={ditem.url}>
																				<a
																					className="c-nav__dropdown__item"
																					target={
																						ditem.target ? dditem.target : null
																					}
																					key={ditem.key}
																				>
																					<div className="c-nav__icon">
																						<Image
																							alt={
																								ditem.altText
																									? ditem.altText
																									: "Icon"
																							}
																							src={ditem.icon}
																							width={ditem.iconWidth}
																							height={ditem.iconHeight}
																							layout="fixed"
																						/>
																					</div>
																					<div>
																						<li key={ditem.key}>
																							{ditem.name}{" "}
																						</li>
																						<span className="c-nav__dropdown__detail">
																							{ditem.description}
																						</span>
																						{ditem.tag ? (
																							<div className="tag-container">
																								<span className="tag--new">
																									{ditem.tag}
																								</span>
																							</div>
																						) : null}
																					</div>
																				</a>
																			</Link>
																		);
																	}
																}
															)}
														</ul>
														<ul>
															{desktopSecondLevel[dropdownItems].dropdown.map(
																(ditem) => {
																	if (ditem.colPos == 2) {
																		return (
																			<Link href={ditem.url}>
																				<a
																					className="c-nav__dropdown__item"
																					target={
																						ditem.target ? dditem.target : null
																					}
																					key={ditem.key}
																				>
																					<div className="c-nav__icon">
																						<Image
																							alt={
																								ditem.altText
																									? ditem.altText
																									: "Icon"
																							}
																							src={ditem.icon}
																							width={ditem.iconWidth}
																							height={ditem.iconHeight}
																							layout="fixed"
																						/>
																					</div>
																					<div>
																						<li key={ditem.key}>
																							{ditem.name}{" "}
																						</li>
																						<span className="c-nav__dropdown__detail">
																							{ditem.description}
																						</span>
																						{ditem.tag ? (
																							<div className="tag-container">
																								<span className="tag--new">
																									{ditem.tag}
																								</span>
																							</div>
																						) : null}
																					</div>
																				</a>
																			</Link>
																		);
																	}
																}
															)}
														</ul>
														<ul>
															{desktopSecondLevel[dropdownItems].dropdown.map(
																(ditem) => {
																	if (ditem.colPos == 3) {
																		return (
																			<Link href={ditem.url}>
																				<a
																					className="c-nav__dropdown__item"
																					target={
																						ditem.target ? dditem.target : null
																					}
																					key={ditem.key}
																				>
																					<div className="c-nav__icon">
																						<Image
																							alt={
																								ditem.altText
																									? ditem.altText
																									: "Icon"
																							}
																							src={ditem.icon}
																							width={ditem.iconWidth}
																							height={ditem.iconHeight}
																							layout="fixed"
																						/>
																					</div>
																					<div>
																						<li key={ditem.key}>
																							{ditem.name}{" "}
																						</li>
																						<span className="c-nav__dropdown__detail">
																							{ditem.description}
																						</span>
																						{ditem.tag ? (
																							<div className="tag-container">
																								<span className="tag--new">
																									{ditem.tag}
																								</span>
																							</div>
																						) : null}
																					</div>
																				</a>
																			</Link>
																		);
																	}
																}
															)}
														</ul>
													</div>
												) : null}
											</>
										) : null}
									</>
								);
							})}
						</div>
					</div>
				</div>
			</nav>
			<Script
				src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
				strategy="afterInteractive"
				onLoad={() => {
					console.log("ESTO PRINTEA");
					// Desktop Nav Toggle
					$(".js-dropdown-nav").click(function () {
						var nav = $(this).attr("dropdown-type");
						if ($(this).hasClass("active")) {
							$(this).removeClass("active");
							$("#" + nav).removeClass("active");
						} else {
							$(".js-dropdown-nav").removeClass("active");
							$(".c-nav__dropdown").removeClass("active");
							$(this).addClass("active");
							$("#" + nav).addClass("active");
							$("#nav-icon2 span").addClass("white");
							$(".c-nav--mobile").addClass("z-index");
						}
					});

					$("main").click(function () {
						var nav = $(".js-dropdown-nav").attr("dropdown-type");
						if ($(".js-dropdown-nav").hasClass("active")) {
							$(".js-dropdown-nav").removeClass("active");
							$("#" + nav).removeClass("active");
							$(".c-nav__dropdown").removeClass("active");
						}
					});

					// Mobile Nav Toggle
					// Mobile Footer control
					$("span.footer__title").click(function () {
						$(this).parent().parent(".footer__links").toggleClass("open");
					});
				}}
			/>
		</>
	);
};

export default NavigationDefault;
