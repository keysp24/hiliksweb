// ── About page content — mirrors https://hiliks.com/about.html ──

export const aboutStats = [
  { v: '40', suffix: '+', k: 'Years in Business' },
  { v: '600', suffix: '+', k: 'Employees Worldwide' },
  { v: '25', suffix: '+', k: 'Customers Served' },
  { v: '50', suffix: '', k: 'Projects' },
];

export const ourStory = {
  title: 'Our Story',
  paragraphs: [
    'Founded in 1985 in New Delhi, HiLiKS Technologies has transformed into a global powerhouse listed on the Bombay Stock Exchange (BSE: HILIKSTECH). Our journey reflects four decades of relentless innovation, strategic expansion, and unwavering commitment to excellence.',
    'From our early days developing software solutions for Indian railways to our current status as a multinational corporation with offices across India, we\'ve consistently pushed boundaries in technology and consulting.',
  ],
};

export const timeline = [
  { year: '1985', text: 'Founded in Delhi with focus on development of Industrial Resources' },
  { year: '1998', text: 'Hiliks Technologies expanded across multiple locations in India - Pune, Hyderabad and Mumbai serving clients with customized, region-specific IT solutions.' },
  { year: '2005', text: 'Our company expanded into B2G, worked with government entities like UIDAI & AP GovT by playing a key role in Aadhaar project and providing IT services.' },
  { year: '2012', text: 'Listed on Bombay Stock Exchange (BSE).' },
  { year: '2018', text: 'Expanded the Telecom Solutions to "Fiber to Home" with Airtel.' },
  { year: '2022', text: 'Participated in the "Odisha Fibernet" under Bharat Broadband Project.' },
  { year: '2025', text: 'Established North American operations with Dallas and Chicago offices.' },
];

export const missionVision = {
  mission: {
    title: 'Our Mission',
    lead: 'To empower organizations worldwide with transformative technology solutions that drive efficiency, sustainability, and growth.',
    points: [
      'Deliver cutting-edge, platform-centric services',
      'Enable rapid integration with telecom ecosystems',
      'Provide seamless deployment with modular flexibility',
      'Offer tailored solutions adapted to client needs',
    ],
  },
  vision: {
    title: 'Our Vision',
    lead: 'To be the global leader in railway technology and digital transformation solutions by 2030.',
    points: [
      'Innovation-driven software solutions',
      'Carrier-grade reliability and scalability',
      'Industry-focused expertise',
      'Continuous global expansion',
    ],
  },
};

export type Value = { title: string; text: string; icon: string };

export const coreValues: Value[] = [
  {
    title: 'Customer Centricity',
    text: 'We put our clients at the heart of every decision, delivering solutions that exceed expectations.',
    icon: 'M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87',
  },
  {
    title: 'Integrity',
    text: 'We conduct business with honesty, transparency, and ethical practices in all engagements.',
    icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  },
  {
    title: 'Ownership',
    text: 'We take responsibility for our actions and deliver on our commitments with excellence.',
    icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  },
  {
    title: 'Collaboration',
    text: 'We believe in the power of teamwork to achieve extraordinary results for our clients.',
    icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  },
  {
    title: 'Innovation',
    text: 'We continuously push boundaries to develop groundbreaking solutions.',
    icon: 'M9 18h6M10 22h4M12 2v2M5.6 5.6l1.4 1.4M18.4 5.6l-1.4 1.4M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  },
  {
    title: 'Sustainability',
    text: 'We develop solutions that create long-term value for businesses and communities.',
    icon: 'M12 22c4.97 0 9-4.03 9-9-4.5 0-9-9-9-9s-4.5 9-9 9c0 4.97 4.03 9 9 9z',
  },
];

export type Leader = { name: string; title: string; bio: string };

export const leadership: Leader[] = [
  {
    name: 'V.N.P. Bhaskar',
    title: 'Independent Director',
    bio: 'Bhaskar leads corporate strategy, business growth, and stakeholder relations, steering the company\'s vision in the rail infrastructure sector. Bhaskar\'s leadership fosters sustainable expansion and technological advancements. He has been associated with reputed organizations such as Taj Residency (a Tata Enterprise), CMS Computers Ltd., Sreeven Infocom Ltd., RAM Informatics Ltd., and HCL Infotech Ltd., and has successfully handled various projects.',
  },
  {
    name: 'Varma Mudunuri',
    title: 'Director - Consulting & Operations',
    bio: 'Varma oversees strategic consulting, project execution, and operational excellence, driving innovation and efficiency. With 30 years of expertise, Varma ensures seamless delivery of mission-critical systems. Other Directorships involved were Haru Technologies Private Limited & Adopto Solutions Private Limited.',
  },
  {
    name: 'Sandeep C',
    title: 'Director - HR, Finance & Administration',
    bio: 'Sandeep manages human resources, financial governance, and organizational development, ensuring a robust, compliant, and people-centric workplace. Sandeep\'s focus on talent and fiscal discipline supports scalable success.',
  },
  {
    name: 'Bhanu Dinesh Alava',
    title: 'Independent Director',
    bio: 'Mr. Bhanu Dinesh Alava, ACMA, CISA, ID-IICA, is a finance professional with over 15 years of experience in strategic financial advisory, business and financial modelling, and internal controls across sectors such as agriculture, healthcare, IT, and education. Other Directorships involved were Silverthread Technology Private Limited, Amendsquare Technologies Private Limited, Global Dairy Health Limited, Acumen Alliance LLP - Designated Partner.',
  },
  {
    name: 'Mridul Tripathi',
    title: 'Chief Financial Officer',
    bio: 'Mr. Mridul Tripathi is a management professional with 13 years of experience across diverse business functions. He holds an MBA and has developed strong expertise in strategic planning, operations management, and team leadership.',
  },
  {
    name: 'Srivalli Tirokuvalluri',
    title: 'Non-Executive Director',
    bio: 'Ms. Srivalli Tirokuvalluri is a seasoned finance and accounts professional with over 25 years of experience in commercial operations, taxation, audit coordination, and statutory compliance. Other Directorships include Hiliks Greens Private Limited and Advaith Biofuels Limited.',
  },
  {
    name: 'Brinda Mahajan',
    title: 'Company Secretary and Compliance Officer',
    bio: 'Mrs. Brinda Mahajan is an Associate member of the Institute of Company Secretaries of India. She has over 10 years of experience in dealing with Secretarial Compliances of Listed and Unlisted Companies.',
  },
];

export type Office = { city: string; role: string };

export const globalPresence = {
  title: 'Global Presence',
  lead: 'Strategic locations serving clients across North America and India',
  regions: [
    {
      name: 'North America',
      iconFlag: 'US',
      offices: [
        { city: 'Chicago, IL', role: 'North American Headquarters' },
        { city: 'Dallas, TX', role: 'Technology Innovation Center' },
      ],
    },
    {
      name: 'India',
      iconFlag: 'IN',
      offices: [
        { city: 'Hyderabad', role: 'Global Corporate Office' },
        { city: 'Mumbai', role: 'Registered Office' },
        { city: 'Pune', role: 'R&D Center' },
        { city: 'Patna', role: 'Operations Hub' },
      ],
    },
  ],
  markers: [
    { top: 30, left: 25, label: 'Chicago, IL' },
    { top: 35, left: 20, label: 'Dallas, TX' },
    { top: 48, left: 68, label: 'Hyderabad, India' },
    { top: 48, left: 68.5, label: 'Mumbai, India' },
    { top: 47, left: 69.5, label: 'Pune, India' },
    { top: 42, left: 70.5, label: 'Patna, India' },
  ],
};

export const railwayTech = {
  title: 'Railway Technology Leadership',
  lead: 'Pioneering digital transformation in rail infrastructure with cutting-edge solutions',
  items: [
    { title: 'Signaling Systems', text: 'Next-generation ERTMS/ETCS solutions for safer, more efficient rail operations.', icon: 'M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 11 3.8 11 7c0 1.5-.5 2.98-2 4.5v3M8.5 16c0 .5.17 1 1 1h3c.83 0 1-.5 1-1v-3c0-.5-.17-1-1-1h-3c-.83 0-1 .5-1 1v3zM17 16v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C12.63 2 11 3.8 11 7' },
    { title: 'Asset Management', text: 'GIS-based platforms for comprehensive rail infrastructure monitoring.', icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' },
    { title: 'AI Predictive Maintenance', text: 'Machine learning models that reduce downtime by 40%.', icon: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm3.5-9.5l-3 4-2-1.5-2.5 3' },
    { title: 'Electrification', text: 'End-to-end solutions for railway electrification projects.', icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z' },
    { title: 'Passenger Experience', text: 'Integrated mobility apps used by 5M+ daily commuters.', icon: 'M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z' },
    { title: 'Data Analytics', text: 'Real-time operational intelligence for rail networks.', icon: 'M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7L7 14.3' },
  ],
};
