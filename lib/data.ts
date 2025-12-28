
export const teamMembers = [
  { 
    slug: "sultonsho-nazarshoev",
    name: "Sultonsho Nazarshoev", 
    role: "Founder & CEO", 
    bio: "Leading the vision for autonomous aerial logistics.",
    fullBio: "Sultonsho is the visionary behind ADAS, bringing over 12 years of experience in technology and leadership. He is dedicated to revolutionizing how the world moves goods through autonomous flight. Prior to founding ADAS, he led key initiatives at major aerospace companies, focusing on unmanned aerial systems and AI integration.",
    expertise: ["Strategic Leadership", "Product Vision", "Business Development", "AI Strategy"],
    socials: { linkedin: "#", twitter: "#", github: "#" },
    quote: "The sky is not the limit, it's our infrastructure.",
    achievements: ["Founded 3 successful tech startups", "Raised $50M+ in venture capital", "Patent holder for drone navigation systems"],
    location: "San Francisco, CA",
    yearsOfExperience: 12,
    projectsCompleted: 45,
    clients: 120,
    awards: 8,
    email: "sultonsho@adas.tech",
    education: ["M.S. in Aerospace Engineering, MIT", "B.S. in Computer Science, Stanford"],
    certifications: ["PMP Certified", "FAA Part 107 Remote Pilot"],
    projects: [
      { title: "Project Skyway", description: "Developed the initial architecture for urban drone delivery corridors." },
      { title: "Autonomous Swarm Control", description: "Led the R&D for multi-agent drone coordination systems." }
    ]
  },
  { 
    slug: "azamat-israilov",
    name: "Azamat Israilov", 
    role: "CTO", 
    bio: "Architecting the future of scalable drone networks.",
    fullBio: "Azamat leads the technical strategy at ADAS. With a decade of experience in engineering, he oversees the development of our robust and scalable autonomous systems. His background includes building high-frequency trading platforms and distributed cloud infrastructure.",
    expertise: ["System Architecture", "Cloud Infrastructure", "Engineering Leadership", "Distributed Systems"],
    socials: { linkedin: "#", github: "#", twitter: "#" },
    quote: "Code is the poetry of logic, and we are writing the future.",
    achievements: ["Architected distributed systems for Fortune 500s", "Open source contributor to Kubernetes", "Led engineering teams of 50+"],
    location: "New York, NY",
    yearsOfExperience: 10,
    projectsCompleted: 30,
    clients: 80,
    awards: 5,
    email: "azamat@adas.tech",
    education: ["Ph.D. in Computer Science, CMU", "B.S. in Electrical Engineering, Berkeley"],
    certifications: ["AWS Certified Solutions Architect", "Google Cloud Professional Engineer"],
    projects: [
      { title: "Edge AI Inference Engine", description: "Optimized neural network models for real-time onboard processing." },
      { title: "Secure Data Link", description: "Implemented military-grade encryption for drone-to-ground communication." }
    ]
  },
  { 
    slug: "sino-somebody",
    name: "Sino Somebody", 
    role: "Product Lead", 
    bio: "Driving product innovation and user experience.",
    fullBio: "Sino bridges the gap between technical capability and user needs. He ensures that our products are not only powerful but also intuitive and essential for our customers. With a background in both engineering and design, he brings a holistic approach to product development.",
    expertise: ["Product Management", "UX Strategy", "Agile Methodologies", "User Research"],
    socials: { linkedin: "#", twitter: "#" },
    quote: "Great products are built on empathy and data.",
    achievements: ["Launched 5 major products from 0 to 1", "Increased user retention by 40%", "Certified Scrum Master"],
    location: "Austin, TX",
    yearsOfExperience: 8,
    projectsCompleted: 25,
    clients: 200,
    awards: 3,
    email: "sino@adas.tech",
    education: ["MBA, Harvard Business School", "B.A. in Psychology, Yale"],
    certifications: ["Certified Product Manager (CPM)", "CSPO"],
    projects: [
      { title: "ADAS Dashboard 2.0", description: "Redesigned the entire fleet management interface for better usability." },
      { title: "Customer Feedback Loop", description: "Established a direct channel for pilot feedback to engineering teams." }
    ]
  },
  { 
    slug: "noah-patel",
    name: "Noah Patel", 
    role: "Design Lead", 
    bio: "Crafting the visual language of autonomous flight.",
    fullBio: "Noah brings 7 years of design experience to ADAS. He is responsible for the sleek, functional, and accessible design of our user interfaces and brand identity. He believes that complex technology should feel simple and magical to the user.",
    expertise: ["UI/UX Design", "Brand Identity", "Visual Systems", "Motion Design"],
    socials: { linkedin: "#", twitter: "#", github: "#" },
    quote: "Design is not just what it looks like, it's how it works.",
    achievements: ["Red Dot Design Award Winner", "Rebranded 3 major tech companies", "Expert in Design Systems"],
    location: "London, UK",
    yearsOfExperience: 7,
    projectsCompleted: 60,
    clients: 150,
    awards: 12,
    email: "noah@adas.tech",
    education: ["B.F.A. in Interaction Design, RISD"],
    certifications: ["Google UX Design Certificate"],
    projects: [
      { title: "ADAS Brand Identity", description: "Created the complete visual identity system for the company." },
      { title: "Mobile Flight Controller", description: "Designed the mobile app interface for field operators." }
    ]
  },
];

export interface Job {
  slug: string;
  title: string;
  dept: string;
  type: string;
  loc: string;
  description: string;
  fullDescription?: string;
  requirements?: string[];
  responsibilities?: string[];
  niceToHave?: string[];
  experienceLevel?: 'Entry' | 'Mid' | 'Senior' | 'Lead';
  salaryRange?: string;
  remote?: boolean;
  applicants?: number;
  postedDate?: string;
  benefits?: string[];
  applicationProcess?: Array<{
    step: number;
    title: string;
    duration: string;
    description: string;
  }>;
}

export const jobs: Job[] = [
  { 
    slug: "senior-perception-engineer",
    title: "Senior Perception Engineer", 
    dept: "Engineering", 
    loc: "San Francisco, CA", 
    type: "Full-time",
    experienceLevel: "Senior",
    salaryRange: "$180k - $240k",
    remote: false,
    applicants: 45,
    postedDate: "2023-10-15",
    description: "Lead the development of our computer vision stack for autonomous navigation in complex environments.",
    fullDescription: "As a Senior Perception Engineer at ADAS, you will be at the forefront of autonomous technology. You will design and implement computer vision algorithms that enable our drones to navigate complex urban environments safely and efficiently. You will work closely with the hardware and planning teams to integrate your solutions into our flight stack.",
    requirements: [
      "5+ years in Computer Vision and Deep Learning",
      "Strong proficiency in C++ and Python",
      "Experience with PyTorch or TensorFlow",
      "Knowledge of SLAM and 3D reconstruction",
      "Master's or PhD in Computer Science or Robotics"
    ],
    responsibilities: [
      "Develop and optimize real-time computer vision algorithms",
      "Integrate perception modules with planning and control systems",
      "Lead data collection and dataset management efforts",
      "Mentor junior engineers and interns"
    ],
    niceToHave: [
      "Experience with CUDA and TensorRT",
      "Familiarity with ROS/ROS2",
      "Published papers in CVPR, ICCV, or ECCV"
    ]
  },
  { 
    slug: "flight-control-systems-lead",
    title: "Flight Control Systems Lead", 
    dept: "Engineering", 
    loc: "Remote / Hybrid", 
    type: "Full-time",
    experienceLevel: "Lead",
    salaryRange: "$200k - $260k",
    remote: true,
    applicants: 28,
    postedDate: "2023-10-20",
    description: "Design and implement robust flight control algorithms for our next-gen drone fleet.",
    fullDescription: "We are looking for an experienced Flight Control Systems Lead to architect the control strategies for our diverse fleet of UAVs. You will be responsible for ensuring stability, agility, and safety across various flight regimes and environmental conditions.",
    requirements: [
      "7+ years in Flight Control Systems",
      "Expertise in classical and modern control theory",
      "Experience with PX4 or ArduPilot firmware",
      "Strong embedded C++ programming skills",
      "Understanding of flight dynamics and aerodynamics"
    ],
    responsibilities: [
      "Design and tune control loops for multi-rotor and VTOL aircraft",
      "Implement state estimation and sensor fusion algorithms",
      "Validate control performance through simulation and flight testing",
      "Define safety critical architectures for flight control"
    ],
    niceToHave: [
      "Experience with system identification",
      "Knowledge of robust and adaptive control",
      "Pilot license (Part 107 or Private Pilot)"
    ]
  },
  { 
    slug: "ai-ml-research-scientist",
    title: "AI/ML Research Scientist", 
    dept: "R&D", 
    loc: "Boston, MA", 
    type: "Full-time",
    experienceLevel: "Senior",
    salaryRange: "$190k - $250k",
    remote: false,
    applicants: 62,
    postedDate: "2023-11-01",
    description: "Push the boundaries of swarm intelligence and reinforcement learning for multi-agent systems.",
    fullDescription: "Join our R&D team to solve the hardest problems in multi-agent coordination and decision making. You will conduct cutting-edge research in reinforcement learning and swarm intelligence to enable large-scale autonomous drone operations.",
    requirements: [
      "PhD in Machine Learning, Robotics, or related field",
      "Strong publication record in NeurIPS, ICML, ICLR, or RSS",
      "Expertise in Reinforcement Learning and Multi-Agent Systems",
      "Proficiency in Python and deep learning frameworks"
    ],
    responsibilities: [
      "Develop novel algorithms for decentralized swarm control",
      "Apply reinforcement learning to complex mission planning tasks",
      "Collaborate with academic partners and publish research findings",
      "Transition research prototypes into production systems"
    ],
    niceToHave: [
      "Experience with game theory",
      "Knowledge of distributed systems",
      "Experience with simulation environments like AirSim or Gazebo"
    ]
  },
  { 
    slug: "enterprise-sales-director",
    title: "Enterprise Sales Director", 
    dept: "Sales", 
    loc: "New York, NY", 
    type: "Full-time",
    experienceLevel: "Senior",
    salaryRange: "$160k - $220k + Commission",
    remote: true,
    applicants: 85,
    postedDate: "2023-10-10",
    description: "Drive enterprise adoption of our autonomous logistics platform across key verticals.",
    fullDescription: "As the Enterprise Sales Director, you will lead our go-to-market strategy for large enterprise accounts. You will build relationships with key decision-makers in logistics, healthcare, and infrastructure sectors to drive adoption of our autonomous delivery solutions.",
    requirements: [
      "10+ years in B2B SaaS or Enterprise Hardware sales",
      "Proven track record of closing 7-figure deals",
      "Experience in logistics, supply chain, or aviation industries",
      "Strong leadership and team-building skills",
      "Excellent communication and negotiation abilities"
    ],
    responsibilities: [
      "Develop and execute sales strategies for target verticals",
      "Manage the full sales cycle from prospecting to closing",
      "Build and lead a high-performing sales team",
      "Collaborate with product and marketing teams to align strategies"
    ],
    niceToHave: [
      "Experience selling to government agencies",
      "Network of contacts in target industries",
      "MBA or equivalent business degree"
    ]
  },
  { 
    slug: "drone-fleet-manager",
    title: "Drone Fleet Manager", 
    dept: "Operations", 
    loc: "Austin, TX", 
    type: "On-site",
    experienceLevel: "Mid",
    salaryRange: "$90k - $130k",
    remote: false,
    applicants: 34,
    postedDate: "2023-11-05",
    description: "Oversee the daily operations and maintenance of our regional drone fleet.",
    fullDescription: "The Drone Fleet Manager is responsible for the operational readiness of our drone fleet in the Austin region. You will oversee maintenance schedules, manage flight operations, and ensure compliance with all regulatory requirements.",
    requirements: [
      "FAA Part 107 Remote Pilot Certificate",
      "3+ years of experience managing technical teams or fleets",
      "Background in aviation maintenance or electronics",
      "Strong organizational and logistical skills",
      "Ability to work in a fast-paced operational environment"
    ],
    responsibilities: [
      "Schedule and supervise routine maintenance and repairs",
      "Manage flight crew rosters and shift schedules",
      "Ensure compliance with FAA regulations and company safety policies",
      "Track fleet performance metrics and report to leadership"
    ],
    niceToHave: [
      "Private Pilot License",
      "Experience with inventory management systems",
      "Knowledge of drone hardware and avionics"
    ]
  },
];

export interface Partner {
  slug: string;
  name: string;
  category: string;
  description: string;
  details?: string;
  website?: string;
  logo?: string;
  partnerLevel?: "strategic" | "premium" | "standard";
  isCertified?: boolean;
  yearsPartnered?: number;
  projectsCompleted?: number;
  teamSize?: string;
  successRate?: number;
  technologies?: string[];
  partnershipDate?: string;
  certificationDate?: string;
  nextMilestone?: {
    date: string;
    title: string;
    description: string;
  };
  highlights?: string[];
  benefits?: Array<{
    title: string;
    description: string;
  }>;
  caseStudies?: Array<{
    title: string;
    category: string;
    date: string;
    description: string;
    status: "completed" | "ongoing" | "planned";
    results?: string[];
  }>;
  contactPerson?: string;
  contactEmail?: string;
}

export const partners: Partner[] = [
  {
    slug: "dji-enterprise",
    name: "DJI Enterprise",
    category: "Hardware",
    description: "The world leader in civil drones and aerial imaging technology.",
    details: "Our partnership with DJI Enterprise allows for seamless integration with the Matrice and Mavic Enterprise series, unlocking advanced autonomous capabilities for off-the-shelf hardware.",
    website: "https://enterprise.dji.com",
    partnerLevel: "strategic",
    isCertified: true,
    yearsPartnered: 4,
    projectsCompleted: 150,
    teamSize: "10,000+",
    successRate: 99.9,
    technologies: ["Matrice 300 RTK", "Mavic 3 Enterprise", "DJI SDK", "Zenmuse Payloads"],
    partnershipDate: "2019",
    certificationDate: "2020",
    highlights: ["Global market leader", "Advanced SDK support", "Reliable hardware ecosystem"],
    benefits: [
      { title: "Seamless Integration", description: "Plug-and-play compatibility with ADAS software stack." },
      { title: "Global Support", description: "Worldwide service and support network for enterprise clients." }
    ],
    caseStudies: [
      {
        title: "Urban Delivery Network",
        category: "Logistics",
        date: "2023",
        description: "Deployed a fleet of 50 Matrice drones for medical supply delivery in urban environments.",
        status: "completed",
        results: ["Reduced delivery time by 60%", "Zero safety incidents", "10,000+ successful flights"]
      }
    ],
    contactEmail: "enterprise@dji.com"
  },
  {
    slug: "parrot",
    name: "Parrot",
    category: "Hardware",
    description: "European leader in professional drone solutions.",
    details: "We work closely with Parrot to support their ANAFI USA platform, ensuring high-security autonomous operations for government and defense clients.",
    website: "https://www.parrot.com",
    partnerLevel: "premium",
    isCertified: true,
    yearsPartnered: 3,
    projectsCompleted: 80,
    teamSize: "500+",
    successRate: 98.5,
    technologies: ["ANAFI USA", "ANAFI Ai", "Secure Data Link", "Thermal Imaging"],
    partnershipDate: "2020",
    certificationDate: "2021",
    highlights: ["NDAA Compliant", "Cybersecurity focused", "Rapid deployment"],
    benefits: [
      { title: "High Security", description: "Ideal for sensitive missions requiring data sovereignty." },
      { title: "Compact Form Factor", description: "Easily deployable drones for rapid response scenarios." }
    ],
    contactEmail: "partners@parrot.com"
  },
  {
    slug: "skydio",
    name: "Skydio",
    category: "Hardware",
    description: "Leading U.S. drone manufacturer with advanced autonomy.",
    details: "Integrating with Skydio's autonomy engine, we provide fleet management and mission planning layers that complement their onboard obstacle avoidance.",
    website: "https://www.skydio.com",
    partnerLevel: "strategic",
    isCertified: true,
    yearsPartnered: 2,
    projectsCompleted: 60,
    teamSize: "1,000+",
    successRate: 99.0,
    technologies: ["Skydio X2", "Skydio 2+", "Autonomy Engine", "3D Scan"],
    partnershipDate: "2021",
    certificationDate: "2022",
    highlights: ["Unmatched obstacle avoidance", "US-made", "AI-driven flight"],
    benefits: [
      { title: "Complex Environments", description: "Operate safely in GPS-denied and cluttered environments." },
      { title: "Autonomous Inspection", description: "Automated workflows for infrastructure inspection." }
    ],
    contactEmail: "enterprise@skydio.com"
  },
  {
    slug: "freefly-systems",
    name: "Freefly Systems",
    category: "Hardware",
    description: "High-end cinema and industrial drone platforms.",
    details: "For heavy-lift applications, our software powers Freefly's Alta X, enabling autonomous delivery of substantial payloads in challenging environments.",
    website: "https://freeflysystems.com",
    partnerLevel: "premium",
    isCertified: true,
    yearsPartnered: 3,
    projectsCompleted: 40,
    teamSize: "100+",
    successRate: 99.5,
    technologies: ["Alta X", "Astro", "Heavy Lift", "RTK GPS"],
    partnershipDate: "2020",
    certificationDate: "2021",
    highlights: ["Heavy payload capacity", "Open ecosystem", "Robust design"],
    benefits: [
      { title: "Heavy Logistics", description: "Capable of carrying payloads up to 35lbs for industrial delivery." },
      { title: "Customizable Platform", description: "Open architecture allows for custom sensor and payload integration." }
    ],
    contactEmail: "support@freeflysystems.com"
  },
  {
    slug: "pix4d",
    name: "Pix4D",
    category: "Software",
    description: "Premier photogrammetry and drone mapping software.",
    details: "Automated data pipelines from ADAS flights directly into Pix4D allow for real-time 2D mapping and 3D modeling.",
    website: "https://www.pix4d.com",
    partnerLevel: "strategic",
    isCertified: true,
    yearsPartnered: 5,
    projectsCompleted: 500,
    teamSize: "300+",
    successRate: 99.8,
    technologies: ["Pix4Dmapper", "Pix4Dcloud", "Photogrammetry", "3D Modeling"],
    partnershipDate: "2018",
    certificationDate: "2019",
    highlights: ["Industry standard for mapping", "Cloud processing", "High accuracy"],
    benefits: [
      { title: "Automated Mapping", description: "Seamless workflow from flight to 3D model." },
      { title: "High Precision", description: "Survey-grade accuracy for construction and mining." }
    ],
    contactEmail: "sales@pix4d.com"
  },
  {
    slug: "esri-arcgis",
    name: "Esri ArcGIS",
    category: "Software",
    description: "The global standard for location intelligence.",
    details: "Our deep integration with ArcGIS allows flight data and captured imagery to be instantly available within your existing GIS workflows.",
    website: "https://www.esri.com",
    partnerLevel: "strategic",
    isCertified: true,
    yearsPartnered: 4,
    projectsCompleted: 300,
    teamSize: "5,000+",
    successRate: 99.9,
    technologies: ["ArcGIS Pro", "ArcGIS Online", "Site Scan", "GIS"],
    partnershipDate: "2019",
    certificationDate: "2020",
    highlights: ["GIS market leader", "End-to-end workflow", "Advanced analytics"],
    benefits: [
      { title: "GIS Integration", description: "Direct data feed into the world's most powerful GIS software." },
      { title: "Spatial Analysis", description: "Leverage advanced spatial analysis tools on drone data." }
    ],
    contactEmail: "partners@esri.com"
  },
  {
    slug: "autodesk",
    name: "Autodesk",
    category: "Software",
    description: "Software for architecture, engineering, construction, media, and entertainment.",
    details: "Streamline construction site monitoring by feeding drone data directly into Autodesk Construction Cloud and BIM 360.",
    website: "https://www.autodesk.com",
    partnerLevel: "premium",
    isCertified: true,
    yearsPartnered: 3,
    projectsCompleted: 200,
    teamSize: "10,000+",
    successRate: 99.5,
    technologies: ["BIM 360", "Revit", "Civil 3D", "Construction Cloud"],
    partnershipDate: "2020",
    certificationDate: "2021",
    highlights: ["AEC industry standard", "BIM integration", "Cloud collaboration"],
    benefits: [
      { title: "Construction Monitoring", description: "Track site progress and compare against BIM models." },
      { title: "Digital Twin", description: "Create accurate digital twins of physical assets." }
    ],
    contactEmail: "partners@autodesk.com"
  },
  {
    slug: "sap",
    name: "SAP",
    category: "Software",
    description: "Market leader in enterprise application software.",
    details: "Connect your aerial logistics operations with your ERP system for end-to-end supply chain visibility and automated inventory management.",
    website: "https://www.sap.com",
    partnerLevel: "standard",
    isCertified: false,
    yearsPartnered: 1,
    projectsCompleted: 20,
    teamSize: "100,000+",
    successRate: 95.0,
    technologies: ["SAP S/4HANA", "SAP EWM", "Supply Chain Management", "ERP"],
    partnershipDate: "2022",
    highlights: ["Enterprise resource planning", "Supply chain optimization", "Global reach"],
    benefits: [
      { title: "Supply Chain Visibility", description: "Real-time tracking of inventory and shipments." },
      { title: "Automated Logistics", description: "Trigger drone deliveries directly from SAP ERP." }
    ],
    contactEmail: "partners@sap.com"
  }
];
