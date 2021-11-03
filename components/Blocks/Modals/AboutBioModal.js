import Image from "next/image";

import ModalBase from "./ModalBase/ModalBase";

const AboutBioModal = ({ leaderId, containerStyles, closeSignal }) => {
	const leaderInformation = {
		CEO: {
			profileImage: "/imgs/about/dennis-ceo-1.jpg",
			leaderName: "Dennis Fois",
			leaderBio:
				"Dennis is enjoying a broad international career spanning over 25 years in various countries across Europe and the US. During this time, he’s had the privilege of developing and leading high-performing multicultural teams at both startups and public companies in the technology and financial services sector. (It’s a good thing he loves traveling.)\
                            <br><br>Most recently, Dennis was the CEO At Newvoicemedia where he led the company to accelerate international growth and ultimately an acquisition by Vonage. Before Newvoicemedia, Dennis was the CEO at Rant & Rave. He’s also held senior leadership positions at eGain, Barclays, Solera and ADP.\
                            <br><br>Dennis advises and mentors a number of technology startups and VC teams at various stages of growth and scale.\
                            <br><br>In his free-ish time, Dennis enjoys spending time with his family, keeping fit, and reading—he has developed a keen interest in (read: slight obsession with) anything that relates to leadership and behavioral science, so send any book recos his way!",
			leaderTitle: "CEO",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/dennisfois",
				twitter: "https://twitter.com/dennisfois?lang=en",
			},
		},
		CFO: {
			profileImage: "/imgs/about/MG.jpg",
			leaderName: "M.G. Thibaut",
			leaderBio:
				"After spending her formative years in banking, M.G. devoted 6 years to Yahoo in business operations and strategy. She then moved over to the startup world, where she’s been ever since – leading Finance & Operations teams at Revision3 (acquired by Discovery Communications), Strava, and Ruby Ribbon.\
                            <br><br>M.G. obtained her BA from Stanford, and went on to receive an MBA from Tuck School of Business at Dartmouth. She now resides in Burlingame with her husband, her 2 girls, and a dog named Roux. While numbers may be her game at work, she’s also a pro in the kitchen - she did a brief stint in culinary school, and loves to try out new recipes on her family.",
			leaderTitle: "Chief Financial Officer",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/mgthibaut/",
				twitter: "",
			},
		},
		counsel: {
			profileImage: "/imgs/about/ben.jpg",
			leaderName: "Ben Hance",
			leaderBio:
				"Ben has represented industry-leading companies for over 15 years.  He has worked on a wide range of corporate transactions, including numerous private and public fundraisings, corporate acquisitions and partnerships.  Ben also advises on data privacy and legal compliance initiatives at Copper.  Before moving to the San Francisco Bay Area, Ben worked at leading law firms in New York, London and Houston.  Ben holds a JD from Yale Law School and a BA from St. John’s College in Santa Fe.",
			leaderTitle: "General Counsel",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/ben-hance-b838a254/",
				twitter: "",
			},
		},
		CTO: {
			profileImage: "/imgs/about/Kelly.jpg",
			leaderName: "Kelly Cheng",
			leaderBio:
				"As CTO and co-founder of Copper, Kelly Cheng guides infrastructure and feature development. Kelly started his career in 2002 after receiving his EECS degree from UC Berkeley. He then joined eBay where he made contributions on the search front-end team and internal tools team for 6 years. Kelly also worked at 23andMe as a full-stack developer before joining Jon at DNA Games as their first server engineer.\
        <br><br>\
        Kelly lives in the South Bay with his wife and two kids. He is an avid knitter and prefers cooked vegetables over raw.",
			leaderTitle: "CTO and Co-founder",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/chriskcheng/",
				twitter: "",
			},
		},
		CPO: {
			profileImage: "/imgs/about/jon-CPO.jpeg",
			leaderName: "Jon Aniano",
			leaderBio:
				"As CPO, Jon is responsible for the Product Management and UX teams at Copper. Jon brings over 15 years of experience building SaaS products in both startups and large software companies. Before joining Copper, Jon spent 7 years leading various product and UX teams at Salesforce, most recently running the Product Management team for the Service Cloud.\
                            <br><br>Jon lives in San Mateo with his family. He enjoys great food, karaoke, retro gaming, classic sci-fi and is a connoisseur of fine enterprise software.",
			leaderTitle: "Chief Product Officer",
			socialLinks: {
				linkedin: "",
				twitter: "",
			},
		},
		CPPLO: {
			profileImage: "/imgs/about/Charles.jpg",
			leaderName: "Charles Ashworth",
			leaderBio:
				"Charles is the Chief People Officer at Copper, leading the Human Resources organization. With over 25 years as a technology executive in prominent people-oriented companies like Riverbed, PeopleSoft, FinancialForce, and eBay, Charles brings thought provoking views in areas of driving innovative, high performance cultures designed to encourage employee success.\
                          <br><br>In his spare time, Charles is active in the transformation of human resources in business, publishing and speaking on the changing landscape of the profession. He also spends his time working with non profit organizations focused on creating a better life for developmentally disabled adults.",
			leaderTitle: "Chief People Officer",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/charlesashworth/",
				twitter: "https://twitter.com/CIAshworth",
			},
		},
		VPP: {
			profileImage: "https://copper.objects.frb.io/imgs/about/Derek_bio.jpg",
			leaderName: "Derek Skaletsky",
			leaderBio:
				"Derek came to Copper via an acquisition of his startup, <a href='https://www.sherlockscore.com/' target='_blank'>Sherlock</a>. As a product-oriented founder, he brings over 10 years of varied SaaS experience to Copper. He is a strong believer and though-leader in the Product-Led movement and is passionate about building products that not only delight users, but help drive revenue.\
                          <br><br>Derek started his career in Hollywood before transitioning to the world of software startups (and can talk at length about the similarities!). He is a Boston ex-pat living in San Francisco. He may have left the snow behind, but not his love for his Boston sports teams!",
			leaderTitle: "VP Product",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/dskaletsky/",
			},
		},
		VPG: {
			profileImage: "/imgs/about/Olga_Bio.jpg",
			leaderName: "Olga Lykova",
			leaderBio:
				"She spent 7+ years in the Salesforce ecosystem focusing on growing partnerships across Salesforce, GSIs, RSIs and ISVs. Then, at Apttus, she focused on working on key enterprise accounts with Salesforce, Deloitte and Accenture. At NewVoiceMedia, Olga tackled enterprise and focused on growing mid-market and general business accounts. Most recently, she's joined Copper to focus on the SMB space where innovation happens much more quickly.\
                          <br><br>Before tech, Olga was in the world of finance working at Morgan Stanley. Olga has an MBA in Finance and Marketing from Quinlan School of Business, Loyola University. This was in Chicago, where she could only spend one winter—before speeding up her graduation date due to Chiberia weather conditions. During her MBA program, she participated in Google's Global Challenge, where a team of MBA students collaborated with a local small business to help them grow by using a tech stack and Google AdWords, so being at Copper now is 100% full circle.\
                          <br><br>In her spare time, Olga launched a Women in Industries network in 2015, which is now an annual C-level panel hosted in San Francisco where the network is exposed to multiple non-profits including Breast Cancer Fund, San Francisco Fire Department, La Casa De las Madres and more. Coming from a big Ukrainian family, Olga loves to cook and have guests over—she is constantly experimenting with new recipes. A random fact about Olga: she's a professional badminton player.",
			leaderTitle: "VP Global Alliances",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/olgalykova/",
			},
		},
		VPCS: {
			profileImage:
				"https://copper.objects.frb.io/imgs/about/ken-aponte-copper-vp-success1.png",
			leaderName: "Ken Aponte",
			leaderBio:
				"As VP of Customer Success at Copper, Ken upholds the company's charter in making sure that each and every customer has a first-class experience with the company thereby driving retention and revenue growth.\
                          <br><br>\
                          Prior to joining Copper, Ken served in several client-facing roles. As Vice President of Customer Success at Shopgate, he led the success and growth of ecommerce companies in the omnichannel space. \
                          <br><br>\
                          As a Senior Director at Personify, Ken led the professional services team on the Small World Community product line. Ken was a Management Consultant with Diamond Management and Technology Consultants (now the advisory arm of PricewaterhouseCoopers) working with clients to identify their largest and most complex business challenges and developing and executing programs to address those challenges through investments in people, process or technology. Prior to that, Ken was a Design Engineer for Nvidia and Motorola where he participated in large semiconductor chip development programs.\
                          <br><br>\
                          Ken is also a combat veteran of the US Army having served tours in Central America. \
                          <br><br>\
                          Ken holds a MBA from Carnegie Mellon University where he held the Walter Jones Fellowship and served as class President. He also has an MS in Computer Engineering with a focus on chip architecture from The University of Texas and a BS in Electrical Engineering from Rochester Institute of Technology.",
			leaderTitle: "VP of Customer Success",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/kaponte/",
			},
		},
		VPS: {
			profileImage: "https://copper.objects.frb.io/imgs/about/Sam_bio.jpg",
			leaderName: "Sam Moorhead",
			leaderBio:
				"Sam Moorhead is a high-performance sales leader with over 13 years of SaaS experience. Prior to joining Copper, he spent ten years developing himself and other sales professionals at HubSpot in various leadership roles in North America and Europe.\
													<br><br>He started his career executing on sales and marketing at Sonian, an archiving business that grew from 12 to 45 employees during his tenure. At HubSpot, Sam joined as their 180th employee and contributed to growing the organization to 4000+ employees. He helped build their North America small business engine and then supported tripling the size of the UK & Ireland Mid-Market segment within two years from Dublin, Ireland. He developed highly targeted sales and marketing campaigns and supported successful roll out of product-led growth strategies. He is known for the “Moorhead Matrix” playbook on inbound selling with a fit vs. intent engagement matrix. Sam is most passionate, though, about developing sales people into leaders within an organization.\
													<br><br>He is married to a middle school teacher and new father of a baby boy. He’s a Stoic reader, an avid golfer, traveler, skier, cyclist, surfer, and fitness enthusiast.",
			leaderTitle: "VP Sales",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/sammoorhead/",
			},
		},
		VCS: {
			profileImage: "/imgs/about/emilia.jpg",
			leaderName: "Emilia D’Anzica",
			leaderBio:
				"Emilia D’Anzica has dedicated the past 20 years to customer experience. Before joining Copper as Chief Customer Officer, she was a Partner at a Silicon Valley Management Consulting firm, Winning by Design. She also led customer success and customer marketing teams as VP of Customer Engagement at WalkMe and as Director of Customer Operations at BrightEdge. As the 9th employee and first full-time Customer Success hire for Jobvite she was critical to growing the customer base from 5 to 1500 over the course of six years. She has worked for global companies in Denmark, Canada, France, Italy, and the USA. She has been named one of the topmost influential leaders in Customer Success.\
                          <br><br>\
                          Emilia obtained her BA from The University of British Columbia and went on to receive an MBA from St. Mary's College of California. She also holds PMP and Scrum certification. She now resides in Sonoma County with her husband, her three children, and a rescue dog named Bear.",
			leaderTitle: "Chief Customer Officer",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/emiliadanzica/",
			},
		},
		VPE: {
			profileImage: "/imgs/about/cory.jpg",
			leaderName: "Cory Thomas",
			leaderBio:
				"Cory has spent over 20 years building SaaS applications and engineering teams; well before “SaaS” was a well-known term. He’s worked across many verticals including enterprise information management, custom web applications, health care, edtech, and digital product design. As well as various sized organizations ranging from scrappy startups to large-scale multinationals.\
                          <br><br>\
                          Before Copper, he was Director of Engineering at InVision where he led teams delivering InVision’s Cloud, Freehand, DSM and Studio products along with partner integrations. Prior to that, Cory held the VP Engineering role at Xello growing the team four-fold while shaping engineering culture and best practices.\
                          <br><br>\
                          Beyond the office, Cory volunteers his time mentoring current and future engineering leaders. He also loves spending time doing outdoor activities. Anything from snowboarding to long, relaxing walks listening to an audiobook.",
			leaderTitle: "VP Engineering",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/corythomas",
			},
		},
		CMO: {
			profileImage: "/imgs/about/cs.png",
			leaderName: "Carrie Shaw",
			leaderBio:
				"Carrie is a seasoned marketing executive with deep roots in product management. Most recently she was CMO of Quandl, a fintech startup acquired by Nasdaq in 2018. Prior to that she helped the venture capital arm of Rogers Communications incubate several startups in Canada. She began her career as a product manager at Microsoft, where she helped build and launch such classics as Encarta Encyclopedia, Microsoft Money, and MSN services for some of the earliest mobile devices. Before transitioning into marketing, she consulted for several organizations as a product manager, including Sony, This Tech (acquired by Comcast), Digitas, and Time Warner Cable.\
                          <br><br>\
                          Carrie is a long-time volunteer for Progress Place, a non-profit organization providing support to people with severe and persistent mental illness. She currently serves as board chair.\
                          <br><br>\
                          She holds an undergraduate degree from the University of Waterloo, and a Masters from Rensselaer Polytechnic Institute.\
                          <br><br>\
                          Carrie lives in Toronto with her husband, her daughter, and their two dogs. She is a golfer (working on it), a runner (getting slower, but still loves it), and a water skier (when the water is warm).",
			leaderTitle: "CMO",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/carriepascal",
			},
		},
		VPOP: {
			profileImage: "/imgs/about/LD.png",
			leaderName: "Lorraine Dorrow",
			leaderBio:
				"Lorraine has worked in Human Resources for over 15 years and her expertise was honed by working in industries ranging from Media to Venture Capital to Fitness.  She has helped high growth startups starting with anywhere from 15-200 employees scale fast to obtain their business goals. Additionally, she has been a part of larger companies such as Equinox and Time Inc. Lorraine obtained her SHRM-SCP certification from the Society of Human Resource Management and holds a BA in Psychology from University of Michigan (Go Blue!).\
                          <br><br>\
                          Lorraine has lived in Washington DC, New York City, London and now San Francisco. And SF wins as the best city for nature (not weather though). Outside of work you'll find her hiking and reading books on anything people - how to new build habits, leadership, and motivation.\
                          ",
			leaderTitle: "VP of People",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/lorrainedorrow",
			},
		},
		VPRO: {
			profileImage: "/imgs/about/Wyndham_Bio.jpg",
			leaderName: "Wyndham Hudson",
			leaderBio:
				"Wyndham has spent over 10 years in Product Management, creating software that has been used by thousands of people around the world. Throughout this journey, Wyndham has had the opportunity to interact with hundreds of different customers across marketing, sales, and customer success. At Copper, he leverages this background to head our Revenue Operations team. This team’s goal is to build flawless cross-functional processes for a friction-free experience that will ultimately delight our customers and help them succeed.\
                          <br><br>A UK native, he's relocated to San Francisco and in his spare time loves to be outdoors: cycling, hiking, snowboarding or learning another hobby he's recently picked up.",
			leaderTitle: "VP Revenue Operations",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/wyndhamhudson/",
			},
		},
		VPF: {
			profileImage: "https://copper.objects.frb.io/imgs/about/Rick_bio.jpg",
			leaderName: "Rick Smith",
			leaderBio:
				"Over the last 10+ years, Rick has served in various finance roles for a number of growing technology companies ranging from small, VC backed start-ups to large, multinational, publicly-traded corporations in the San Francisco Bay Area. With a strong background in FP&A, he is passionate about leveraging technology to position the finance organization as a strategic partner to the businesses. He has helped finance teams work through fundraising, multiple M&A activities and divestitures over the course of his career.  Prior to joining the Copper team, Rick led the finance and accounting team at Engine Yard, a leading platform as a service company.\
												<br><br>He earned an undergraduate degree in Philosophy as well as a Masters in Business Administration with a concentration in finance from the University of New Hampshire.\
												<br><br>When he is not in front of spreadsheets and the like, Rick enjoys cooking culinary delights for his wife and two children while simply exploring all that the Bay Area has to offer.",
			leaderTitle: "VP Finance",
			socialLinks: {
				linkedin: "https://www.linkedin.com/in/frederick-rick-smith-5503a84/",
			},
		},
	};

	// Social media destructuring
	const linkedingUrl = leaderInformation[leaderId]?.socialLinks?.linkedin || "";
	const linkedinDisplay = linkedingUrl !== "" ? "block" : "none";

	const twitterUrl = leaderInformation[leaderId]?.socialLinks?.twitter || "";
	const twitterDisplay = twitterUrl !== "" ? "block" : "none";

	console.log("Gotten", leaderInformation[leaderId]);

	return (
		<ModalBase
			display={leaderInformation[leaderId] ? true : false}
			template="about-bio"
			specialStyle={{}}
			closeSignal={closeSignal}
		>
			<div className="title row">
				<div className="col-md-5 ">
					<div className="">
						<div className="leader-img">
							<img
								width="100%"
								src={
									leaderInformation[leaderId]?.profileImage ||
									"/imgs/about/dennis-ceo-1.jpg"
								}
								alt="Dennis CEO image"
								id="leader-image"
							/>
						</div>
						<div className="social-links">
							<a
								href={linkedingUrl}
								className="s-linkedin"
								style={{ display: linkedinDisplay }}
							>
								<Image
									src="https://copper.objects.frb.io/imgs/about/highlights/linkedin-modal.svg"
									width="15px"
									height="15px"
								/>
							</a>
							<a
								href={twitterUrl}
								className="s-twitter"
								style={{ display: twitterDisplay }}
							>
								<Image
									src="https://copper.objects.frb.io/imgs/about/highlights/twitter-modal.svg"
									width="18px"
									height="15px"
								/>
							</a>
						</div>
					</div>
				</div>
				<div className="col-md-7 leader-titles">
					<p id="leader-name">
						{leaderInformation[leaderId]?.leaderName || ""}
					</p>
					<p id="leader-title" className="sm putty">
						{leaderInformation[leaderId]?.leaderTitle || ""}
					</p>
					<p
						id="leader-bio"
						className="p-sm"
						dangerouslySetInnerHTML={{
							__html: leaderInformation[leaderId]?.leaderBio || "",
						}}
					></p>
				</div>
			</div>
		</ModalBase>
	);
};

export default AboutBioModal;
