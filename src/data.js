// Portfolio content adapted from prahnu/portfolio-main

const PUBLIC_URL = process.env.PUBLIC_URL || '';
const asset = (p) => (typeof p === 'string' && p.startsWith('/') ? PUBLIC_URL + p : p);

export const profile = {
	name: 'Prahnu Bordoloi',
	shortName: 'PRAHNU',
	tagline: 'Design. Develop. Deliver.',
	role: 'Creative Designer & Developer',
	location: 'Bangalore, India',
	email: 'prahnu07@gmail.com',
	phone: '+91 7892213682',
	birthday: '7 January, 1995',
	age: '30+',
	degree: 'Bachelor in Computer Science',
	city: 'Bangalore, India',
	address: 'Kodathi Gate, Sarjapur, Bangalore, India',
	linkedin: 'https://www.linkedin.com/in/prahnu/',
	bio: "Hi, I'm Prahnu Bordoloi, a curious and driven Associate based in Bengaluru. I enjoy turning ideas into impactful solutions, collaborating across teams, and continuously learning to grow in the tech space.",
	about: [
		'I specialize in blending design thinking with technical execution to build intuitive and engaging digital experiences. With a background in computer science and a passion for creativity, I aim to craft solutions that are both functional and visually compelling.',
		"I thrive in environments that challenge me to think differently and push boundaries. Whether it's solving complex problems or designing seamless user interfaces, I bring energy, precision, and a collaborative spirit to every project. I believe in continuous growth, and I'm always exploring new tools, technologies, and ideas to stay ahead.",
	],
};

export const skills = [
	{ name: 'HTML', value: 100 },
	{ name: 'CSS', value: 90 },
	{ name: 'JavaScript', value: 75 },
	{ name: 'React', value: 40 },
	{ name: 'After Effects', value: 30 },
	{ name: 'Figma', value: 90 },
	{ name: 'SharePoint, SPFx', value: 80 },
	{ name: 'Photoshop', value: 55 },
	{ name: 'Illustrator', value: 50 },
	{ name: 'Premiere Pro', value: 40 },
];

export const services = [
	{
		title: 'UI/UX Design',
		icon: 'FiLayout',
		color: '#22d3ee',
		description:
			'I design intuitive and engaging user interfaces, focusing on user experience, accessibility, and responsive layouts across platforms.',
	},
	{
		title: 'Graphic Design',
		icon: 'FiPenTool',
		color: '#fb923c',
		description:
			'From branding to visual storytelling, I create compelling graphics that elevate digital and print experiences.',
	},
	{
		title: 'Front-end Web Development',
		icon: 'FiCode',
		color: '#14b8a6',
		description:
			'I build clean, responsive websites using HTML, CSS, JavaScript, and React, ensuring performance and cross-browser compatibility.',
	},
	{
		title: 'SharePoint / SPFx Development',
		icon: 'FiGrid',
		color: '#ef4444',
		description:
			'I develop and customize SharePoint solutions using SPFx, enhancing collaboration and workflow efficiency for enterprise teams.',
	},
	{
		title: 'Video Editing',
		icon: 'FiVideo',
		color: '#6366f1',
		description:
			'I edit and produce videos for campaigns, learning modules, and presentations using tools like Premiere Pro and After Effects.',
	},
	{
		title: 'Sound Design',
		icon: 'FiMusic',
		color: '#ec4899',
		description:
			'I create and refine audio elements that complement visual content, enhancing the overall impact of multimedia projects.',
	},
];

export const education = [
	{
		title: 'Bachelor of Computer Science and Engineering',
		period: '2014 - 2020',
		institution: 'Punjab Technical University, BIS Group of Institution',
		description:
			'Completed a comprehensive program focused on software development, data structures, algorithms, and system design. Gained hands-on experience through academic projects and collaborative learning, laying a strong foundation for a career in tech and design.',
	},
];

export const experience = [
	{
		title: 'Senior Associate, Digital Producer',
		period: '2026 - Present',
		institution: 'EY GDS, Bangalore, India',
		points: [
			'Lead the design and development of interactive SharePoint sites to improve usability and engagement',
			'Develop dashboards to present data in a clear, insightful, and user-friendly manner',
			'Create infographics to enhance communication and overall digital experience',
		],
	},
	{
		title: 'Associate, Digital Producer',
		period: '2022 - 2026',
		institution: 'EY GDS, Bangalore, India',
		points: [
			'Design and develop user-centric digital experiences, including prototypes and gamified interfaces.',
			'Collaborate across teams to deliver high-impact knowledge assets and campaign solutions.',
			'Adapt quickly to evolving requirements, ensuring quality and responsiveness in every project.',
		],
	},
	{
		title: 'Customer Service Representative',
		period: '2018 - 2022',
		institution: 'No Broker, Bangalore, India',
		points: [
			'Managed customer interactions and provided real-time support for property listings and rental services.',
			'Collaborated with sales and operations teams to streamline onboarding and improve client satisfaction.',
			'Demonstrated adaptability and focus in handling high-volume queries and delivering timely solutions.',
		],
	},
];

const projectsData = [
	{
		id: 'asset-development-intake-process',
		title: 'Asset Development Intake Process',
		subtitle: 'Microsoft Power App',
		category: 'app',
		description: 'Multi-view Power App UI for asset request intake.',
		gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
		image: '/project-images/asset-development-intake-process.png',
		gallery: [
			'/project-images/details/asset-dev-1.png',
			'/project-images/details/asset-dev-2.png',
			'/project-images/details/asset-dev-3.png',
			'/project-images/details/asset-dev-4.png',
		],
		client: 'EY GDS',
		role: 'UX/UI Designer & Developer',
		year: '2024',
		tools: ['Microsoft Power Apps', 'Figma', 'SharePoint Lists', 'Power Automate'],
		overview:
			'A streamlined Power App designed to capture, route, and track asset development requests across the GDS Markets team. Replaces a fragmented intake process spread across email and spreadsheets with a single, role-based workflow.',
		challenge:
			'Stakeholders submitted asset requests through inconsistent channels, leading to missed SLAs, duplicated work, and limited visibility for leadership. The team needed a single source of truth that worked for requesters, reviewers, and producers alike.',
		solution:
			'Designed a multi-view Power App with tailored screens for each persona. Requesters use a guided form, reviewers triage and assign work, and producers manage their queue. Power Automate handles notifications and approval routing while SharePoint stores the data.',
		features: [
			'Persona-based dashboards (Requester, Reviewer, Producer, Leadership)',
			'Guided multi-step intake form with conditional fields',
			'Automated approval and notification flows via Power Automate',
			'Live status tracking and SLA indicators',
			'Reporting view with filters by team, region, and status',
		],
	},
	{
		id: 'project-management-incubator',
		title: 'Project Management Incubator',
		subtitle: 'Web Application',
		category: 'app',
		description: 'Role-based project creation interface for streamlined intake, assignment, and tracking in the app.',
		gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
		image: '/project-images/project-management-incubator.png',
		gallery: [
			'/project-images/details/pmi-1.png',
			'/project-images/details/pmi-2.png',
			'/project-images/details/pmi-3.png',
			'/project-images/details/pmi-4.png',
		],
		client: 'EY GDS Markets',
		role: 'UX Designer & Front-end Developer',
		year: '2024',
		tools: ['Figma', 'SharePoint', 'SPFx', 'React', 'TypeScript'],
		overview:
			'A central hub where project managers can incubate ideas, scope work, assemble teams, and track progress through every phase of delivery — from kickoff to closure.',
		challenge:
			'Project intake was scattered across decks, email threads, and trackers. There was no single place to see project status, owners, or upcoming milestones, which slowed handoffs and obscured accountability.',
		solution:
			'Built a SPFx-powered SharePoint experience with role-based screens. PMs create and scope projects in a guided flow, assign owners, and watch progress update in real time. Stakeholders get a clean dashboard tailored to their role.',
		features: [
			'Role-based access (PM, Lead, Contributor, Stakeholder)',
			'Step-by-step project creation wizard',
			'Live project board with status, owner, and milestones',
			'Embedded FAQ and process documentation',
			'Filterable portfolio view for leadership',
		],
	},
	{
		id: 'module-library',
		title: 'Module Library',
		subtitle: 'Figma + SharePoint',
		category: 'app',
		description:
			'Collaborative Figma and SharePoint-based Module Library for easy asset discovery, filtering, and download across global teams.',
		gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
		image: '/project-images/module-library.png',
		gallery: ['/project-images/details/module-1.png', '/project-images/details/module-2.png'],
		client: 'EY Markets CoP',
		role: 'UX Designer & SPFx Developer',
		year: '2024',
		tools: ['Figma', 'SharePoint', 'SPFx', 'React'],
		overview:
			'A reusable design and content module library that lets global teams find, preview, and download approved assets without recreating work or hunting through legacy folders.',
		challenge:
			'Teams across regions were recreating similar modules because there was no easy way to discover existing, on-brand assets. This wasted time and led to inconsistent visual language across deliverables.',
		solution:
			'Designed a Figma-backed taxonomy and surfaced it through a SharePoint front-end built with SPFx. Users can search, filter by category, preview thumbnails, and download in one click — with usage analytics for the team.',
		features: [
			'Searchable, filterable asset grid',
			'Live preview cards with metadata',
			'One-click download with versioning',
			'Tag-based taxonomy synced with Figma',
			'Lightweight usage analytics for owners',
		],
	},
	{
		id: 'workflow-graphic-design',
		title: 'Workflow Graphic Design',
		subtitle: 'Adobe Illustrator',
		category: 'graphic',
		description:
			'A seven-step project workflow graphic, designed in Adobe Illustrator, using bold icons and clear text for streamlined process visualization.',
		gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
		image: '/project-images/workflow-graphic-design.png',
		client: 'Internal Process Team',
		role: 'Graphic Designer',
		year: '2023',
		tools: ['Adobe Illustrator', 'Photoshop'],
		overview:
			'A bold, scannable seven-step workflow illustration created to help new joiners and stakeholders understand the team’s delivery process at a glance.',
		challenge:
			'The existing process documentation was text-heavy and rarely read. The team needed something visual that could live in onboarding decks, intranet pages, and printed posters.',
		solution:
			'Crafted a clean horizontal timeline with custom iconography, balanced typography, and a flexible color palette. Delivered in vector format so it can be resized or repurposed without quality loss.',
		features: [
			'Custom-built icon set for each step',
			'Modular layout that adapts to portrait or landscape',
			'Print- and screen-ready exports',
			'Variant versions for different audiences',
		],
	},
	{
		id: 'demand-generation-playbook',
		title: 'Demand Generation Playbook',
		subtitle: 'SharePoint Site',
		category: 'web',
		description:
			'Figma-designed, SPFx-developed SharePoint playbook for demand generation, tailored for multi-sector use across EY.',
		gradient: 'linear-gradient(135deg, #30cfd0, #330867)',
		image: '/project-images/demand-generation-playbook.png',
		gallery: [
			'/project-images/details/demand-gen-1.png',
			'/project-images/details/demand-gen-2.png',
			'/project-images/details/demand-gen-3.png',
		],
		client: 'EY Markets',
		role: 'UX Designer & SPFx Developer',
		year: '2024',
		tools: ['Figma', 'SharePoint', 'SPFx', 'React', 'TypeScript'],
		overview:
			'A multi-sector playbook that walks demand-gen teams through strategy, assets, case studies, and measurement — all from one navigable SharePoint home.',
		challenge:
			'Demand-generation content was fragmented across sites and folders, making it hard for sector teams to apply a consistent playbook. Stakeholders wanted a single, on-brand destination.',
		solution:
			'Designed a clean information architecture in Figma, then implemented a SPFx-based SharePoint site with reusable web parts. Sector-specific filters and curated journeys help users find what they need fast.',
		features: [
			'Sector-aware navigation and filtering',
			'Reusable SPFx web parts for cards, hero, and CTA',
			'Embedded case studies with rich media',
			'Author-friendly editing within SharePoint',
			'Responsive layout for desktop and mobile',
		],
	},
	{
		id: 'ew-win-stories',
		title: 'EW Win Stories',
		subtitle: 'Single Page App',
		category: 'app',
		description:
			'Single-page Win Stories app, designed in Figma and Photoshop, developed with HTML, CSS, and JavaScript for interactive story discovery and filtering.',
		gradient: 'linear-gradient(135deg, #a8edea, #fed6e3)',
		image: '/project-images/ew-win-stories.png',
		gallery: ['/project-images/details/ew-win-1.png', '/project-images/details/ew-win-2.png'],
		client: 'EY Markets',
		role: 'Designer & Front-end Developer',
		year: '2023',
		tools: ['Figma', 'Photoshop', 'HTML', 'CSS', 'JavaScript'],
		overview:
			'An interactive single-page experience showcasing client win stories that sellers and pursuit teams can explore by sector, service line, or geography.',
		challenge:
			'Win stories lived in static PDFs and PowerPoint decks. Sellers couldn’t quickly find relevant stories to bring into pursuits, and the format lacked engagement.',
		solution:
			'Designed a story-led single-page layout and built it as a lightweight SPA. Users filter by tag, scan teaser cards, and dive into rich details without page reloads.',
		features: [
			'Instant client-side filtering by sector and service',
			'Animated transitions between story cards',
			'Story detail modal with images and metrics',
			'Search across titles, clients, and keywords',
			'Sharable deep links to specific stories',
		],
	},
	{
		id: 'onboarding-compass-diagram',
		title: 'Onboarding Compass Diagram',
		subtitle: 'Interactive Graphic',
		category: 'graphic',
		description:
			'An engaging compass-style diagram that lets users explore different stages of onboarding and learning by clicking on segments, with dynamic content and arrow movement guiding the journey.',
		gradient: 'linear-gradient(135deg, #ff9a9e, #fad0c4)',
		image: '/project-images/onboarding-compass-diagram.png',
		client: 'Learning & Development',
		role: 'Interaction Designer & Developer',
		year: '2024',
		tools: ['Figma', 'Illustrator', 'HTML', 'CSS', 'JavaScript'],
		overview:
			'A compass-style interactive that turns the onboarding journey into a visual map. Clicking a segment reveals stage-specific content while a rotating arrow guides users to the next step.',
		challenge:
			'New joiners struggled to see the “big picture” of their onboarding journey. A traditional list of links felt overwhelming and lacked motivation.',
		solution:
			'Designed a circular compass metaphor with eight segments. Built the interactive in vanilla JS with smooth SVG animations so it loads quickly and works inside the corporate intranet.',
		features: [
			'Clickable SVG segments with hover states',
			'Animated compass arrow that points to active stage',
			'Stage-specific content panel with links and media',
			'Progress saved per user via local storage',
			'Fully responsive on tablet and desktop',
		],
	},
	{
		id: 'gds-dei-web-page',
		title: 'GDS DE&I Web Page',
		subtitle: 'Web Design',
		category: 'web',
		description:
			'A modern, inclusive site that empowers users to explore, learn, and engage with Diversity, Equity, and Inclusion initiatives across the organization.',
		gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
		image: '/project-images/gds-dei-web-page.png',
		gallery: [
			'/project-images/details/dei-1.png',
			'/project-images/details/dei-2.png',
			'/project-images/details/dei-3.png',
			'/project-images/details/dei-4.png',
			'/project-images/details/dei-5.png',
		],
		client: 'EY GDS DE&I Council',
		role: 'UX Designer & Front-end Developer',
		year: '2024',
		tools: ['Figma', 'SharePoint', 'SPFx', 'React'],
		overview:
			'A welcoming, content-rich home for the DE&I program — making initiatives, events, and resources discoverable to everyone in the organization.',
		challenge:
			'DE&I content was buried across multiple intranet pages with inconsistent branding. The council wanted a single, accessible destination that reflected the program’s values.',
		solution:
			'Co-created an inclusive design system with the council, then built a SharePoint front-end emphasizing accessible color, typography, and motion. Modular sections make it easy to keep content fresh.',
		features: [
			'WCAG-conscious color and typography choices',
			'Event calendar with RSVP integration',
			'Story spotlight with rotating featured voices',
			'Resource hub organized by pillar',
			'Editor-friendly CMS-style components',
		],
	},
	{
		id: 'markets-content-harvesting-tracker',
		title: 'Markets Content Harvesting Tracker',
		subtitle: 'Web Application',
		category: 'app',
		description:
			'A centralized tracker that streamlines content nomination and management for win stories and credentials, enhancing collaboration and knowledge sharing across Markets.',
		gradient: 'linear-gradient(135deg, #ffecd2, #fcb69f)',
		image: '/project-images/markets-content-harvesting-tracker.png',
		gallery: ['/project-images/details/mcht-1.png', '/project-images/details/mcht-2.png'],
		client: 'EY Markets',
		role: 'UX Designer & SPFx Developer',
		year: '2024',
		tools: ['Figma', 'SharePoint', 'SPFx', 'React', 'Power Automate'],
		overview:
			'A purpose-built tracker that captures, reviews, and publishes win stories and credentials — turning scattered nominations into an organized, reusable knowledge base.',
		challenge:
			'Nominated content was lost in email threads. There was no review pipeline, no status visibility, and no easy way to find approved stories later.',
		solution:
			'Designed a nomination form, review queue, and library view. Power Automate handles routing while React-based web parts give each role a tailored view of the same data.',
		features: [
			'Structured nomination form with rich-text fields',
			'Reviewer queue with approve / request-changes / decline',
			'Searchable published library with tags',
			'Automated email notifications at each step',
			'Audit trail for every status change',
		],
	},
	{
		id: 'community-lifecycle-diagram',
		title: 'Community Lifecycle Diagram',
		subtitle: 'Graphic Design',
		category: 'graphic',
		description:
			'A clear, interconnected diagram illustrating the lifecycle of a community from development, through launch and maintenance, to retirement.',
		gradient: 'linear-gradient(135deg, #84fab0, #8fd3f4)',
		image: '/project-images/community-lifecycle-diagram.png',
		client: 'Community of Practice',
		role: 'Graphic Designer',
		year: '2023',
		tools: ['Adobe Illustrator', 'Figma'],
		overview:
			'A circular lifecycle diagram that frames how communities of practice are born, grown, sustained, and gracefully retired — used in playbooks and leadership decks.',
		challenge:
			'Community owners needed a shared mental model for the lifecycle of their CoPs, but no visual existed that captured the cyclical, non-linear nature of community work.',
		solution:
			'Designed a continuous-loop diagram with clearly labeled stages, connector arrows, and supporting iconography. Delivered editable source files so teams can customize for their own context.',
		features: [
			'Continuous-loop layout with four primary stages',
			'Custom icons and color coding per stage',
			'Editable Figma master file',
			'Print, slide, and intranet exports',
		],
	},
	{
		id: 'engagement-closure-infographic',
		title: 'Engagement Closure Infographic',
		subtitle: 'Process Design',
		category: 'graphic',
		description:
			'A step-by-step infographic guiding users through the complete engagement closure process, from documentation to final code closure.',
		gradient: 'linear-gradient(135deg, #d299c2, #fef9d7)',
		image: '/project-images/engagement-closure-infographic.png',
		client: 'Engagement Operations',
		role: 'Graphic Designer',
		year: '2024',
		tools: ['Adobe Illustrator', 'Figma'],
		overview:
			'A vertical infographic that demystifies the engagement closure process, helping practitioners complete documentation, sign-offs, and code closure correctly the first time.',
		challenge:
			'Engagement closure is dense and policy-heavy. Teams kept missing steps, which created downstream rework for finance and quality teams.',
		solution:
			'Distilled the process into clear stages with checklists, ownership, and pitfalls highlighted visually. Designed for both desktop reading and printable wall posters.',
		features: [
			'Sequential numbered stages with owners',
			'Embedded checklists and policy callouts',
			'Common-pitfall warnings highlighted visually',
			'Print and digital formats included',
		],
	},
	{
		id: 'pmi-landing-faq-page',
		title: 'PMI Landing & FAQ Page',
		subtitle: 'Web Design',
		category: 'web',
		description:
			'A user-friendly landing and FAQ page guiding project managers through every phase of project management and providing instant answers to common queries.',
		gradient: 'linear-gradient(135deg, #89f7fe, #66a6ff)',
		image: '/project-images/pmi-landing-faq-page.png',
		gallery: ['/project-images/details/pmi-faq-1.png', '/project-images/details/pmi-faq-2.png'],
		client: 'EY Markets',
		role: 'UX Designer & SPFx Developer',
		year: '2024',
		tools: ['Figma', 'SharePoint', 'SPFx', 'React'],
		overview:
			'The front door to the Project Management Incubator — a landing experience with phase navigation and a searchable FAQ that resolves the most common PM questions instantly.',
		challenge:
			'Project managers wasted time emailing the central team for answers that were already documented. The existing docs lacked search and a clear entry point.',
		solution:
			'Designed a phase-driven landing page paired with a fuzzy-search FAQ. Each phase exposes its own tools and guides, and the FAQ surfaces top questions based on usage.',
		features: [
			'Phase-based navigation tiles',
			'Fuzzy-search FAQ with category filters',
			'Most-asked questions surfaced automatically',
			'Inline embedded videos and guides',
			'Feedback widget on every answer',
		],
	},
];

export const testimonials = [
	{
		name: 'Ankit Bafna',
		role: 'Associate Director @ EY',
		text: 'Prahnu, your exceptional skills in creating prototypes, coupled with your expertise in UX/UI design, have added tremendous value to our campaigns. Your responsiveness to last-minute changes has been particularly noteworthy.',
	},
	{
		name: 'Shyamala Swaminathan',
		role: 'Associate Director @ EY',
		text: "Prahnu's ability to convert concept to reality with creativity and technical expertise has been commendable. His various outputs are a testimony to his skills.",
	},
	{
		name: 'Parasmoni Goswami',
		role: 'Associate Director @ EY',
		text: 'Prahnu is excellent in technical skills, he is very focused. He understands the criticality of the situation and so he delivers accordingly with quality.',
	},
	{
		name: 'Shalini PC',
		role: 'Assistant Director @ EY',
		text: 'Prahnu was instrumental in creating all the gamification aspects of the Transcend CoP. His technical acumen is exceptional, and his creativity is truly impressive.',
	},
	{
		name: 'Abhishek Parakh',
		role: 'Supervising Associate @ EY',
		text: 'Prahnu has made significant contributions to the Transcend community. He has played an instrumental role as a UX designer, contributing to the success of many projects.',
	},
	{
		name: 'Sanskriti Singh',
		role: 'Assistant Director @ EY',
		text: 'Prahnu was highly responsive throughout, proactive and creative in sharing ideas. He did a great job creating a visually appealing interactive graphic that was very well received.',
	},
];

export const projects = projectsData.map((p) => ({
	...p,
	image: asset(p.image),
	gallery: Array.isArray(p.gallery) ? p.gallery.map(asset) : p.gallery,
}));
