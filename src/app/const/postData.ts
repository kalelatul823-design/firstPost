

 
//  Create Cards by using following objects

import { IaiArr, IbiologyArr, IbusinessArr, IcloudArr, IcyberSecurityArr, IeducationArr, IgeographyArr, IhealthArr, IhistoryArr, ImathArr, IpsychologyArr, IroboticsArr, ItechToolsArr, IwebDevArr } from "../models/post";

 // 1
 export let aiArr :IaiArr[] = [
  { topic: "AI Fundamentals", details: "Understand the core ideas behind Artificial Intelligence." },
  { topic: "Neural Networks", details: "Learn how interconnected nodes mimic human brains." },
  { topic: "Machine Learning", details: "Use data-driven algorithms to make intelligent predictions." },
  { topic: "Deep Learning", details: "Explore CNNs and RNNs for complex pattern recognition." },
  { topic: "Computer Vision", details: "Enable machines to interpret and understand images." },
  { topic: "Speech Recognition", details: "Convert spoken language into text using ML models." },
  { topic: "AI Ethics", details: "Learn responsible use of AI and fairness in models." },
  { topic: "Chatbots", details: "Build conversational bots using NLP and APIs." },
  { topic: "Reinforcement Learning", details: "Train models through reward-based learning systems." },
  { topic: "AI Tools", details: "Use TensorFlow, PyTorch, and Keras for development." }
];


// 2 
export let mathArr : ImathArr[] = [
  { concept: "Algebra", explain: "Work with variables, equations, and expressions." },
  { concept: "Geometry", explain: "Study shapes, lines, and spatial relationships." },
  { concept: "Trigonometry", explain: "Understand angles and functions like sine and cosine." },
  { concept: "Calculus", explain: "Learn differentiation and integration for change rates." },
  { concept: "Statistics", explain: "Analyze and interpret numerical data." },
  { concept: "Probability", explain: "Predict outcomes of random experiments." },
  { concept: "Linear Algebra", explain: "Work with matrices and vector spaces." },
  { concept: "Number Theory", explain: "Study prime numbers and divisibility." },
  { concept: "Set Theory", explain: "Understand unions, intersections, and complements." },
  { concept: "Discrete Math", explain: "Explore logic, graphs, and combinatorics." }
];


  // 3
export let roboticsArr : IroboticsArr[] = [
  { module: "Robot Anatomy", summary: "Learn the mechanical structure of robots." },
  { module: "Sensors", summary: "Understand how robots perceive their environment." },
  { module: "Actuators", summary: "Control robot motion using motors and servos." },
  { module: "Microcontrollers", summary: "Program devices like Arduino and Raspberry Pi." },
  { module: "Kinematics", summary: "Calculate robot movement and arm positions." },
  { module: "Path Planning", summary: "Find optimal movement routes for robots." },
  { module: "Automation", summary: "Integrate robotics in industrial automation systems." },
  { module: "AI in Robotics", summary: "Apply AI for decision-making and perception." },
  { module: "Human-Robot Interaction", summary: "Design intuitive robot interfaces for users." },
  { module: "Robotic Vision", summary: "Implement image recognition in robots." }
];




// 4 
export let businessArr : IbusinessArr[] = [
  { topicName: "Entrepreneurship", description: "Start and manage new business ventures." },
  { topicName: "Marketing", description: "Promote products using modern marketing strategies." },
  { topicName: "Finance", description: "Manage investments, budgets, and capital." },
  { topicName: "Operations", description: "Optimize business processes and workflows." },
  { topicName: "Sales", description: "Learn persuasion and negotiation techniques." },
  { topicName: "Leadership", description: "Develop decision-making and team management skills." },
  { topicName: "Economics", description: "Understand supply, demand, and market behavior." },
  { topicName: "Business Ethics", description: "Conduct business responsibly and transparently." },
  { topicName: "E-Commerce", description: "Create and manage online selling platforms." },
  { topicName: "Start-up Funding", description: "Learn about investors, equity, and venture capital." }
];


 // 5
export let geographyArr : IgeographyArr[] = [
  { subject: "Continents", info: "Explore the seven continents of the world." },
  { subject: "Oceans", info: "Learn about Earth's five major oceans." },
  { subject: "Climate", info: "Understand weather patterns and temperature zones." },
  { subject: "Mountains", info: "Study the formation and features of mountains." },
  { subject: "Rivers", info: "Know the importance of river systems and deltas." },
  { subject: "Forests", info: "Learn about rainforests, deciduous, and coniferous types." },
  { subject: "Deserts", info: "Discover Earth's driest and hottest regions." },
  { subject: "Maps", info: "Read and interpret different kinds of maps." },
  { subject: "Natural Disasters", info: "Understand earthquakes, floods, and volcanoes." },
  { subject: "Human Geography", info: "Study population, culture, and urbanization." }
];

// // 6 

 export let psychologyArr : IpsychologyArr[] = [
  { field: "Cognitive Psychology", concept: "Understand how people think and process information." },
  { field: "Behavioral Psychology", concept: "Study human behavior through conditioning and observation." },
  { field: "Social Psychology", concept: "Learn how group dynamics influence individuals." },
  { field: "Developmental Psychology", concept: "Explore growth from infancy to adulthood." },
  { field: "Clinical Psychology", concept: "Treat and assess mental health conditions." },
  { field: "Personality Theories", concept: "Understand different personality models." },
  { field: "Memory", concept: "Study how humans store and recall information." },
  { field: "Emotions", concept: "Analyze the science behind feelings and reactions." },
  { field: "Motivation", concept: "Explore what drives human actions." },
  { field: "Perception", concept: "Understand how we interpret sensory input." }
];

// 7
export let biologyArr : IbiologyArr[] = [
  { section: "Cell Structure", detail: "Understand cell organelles and their functions." },
  { section: "Genetics", detail: "Learn about DNA, genes, and heredity." },
  { section: "Evolution", detail: "Study natural selection and species adaptation." },
  { section: "Human Anatomy", detail: "Explore the systems inside the human body." },
  { section: "Botany", detail: "Learn about plants, photosynthesis, and growth." },
  { section: "Zoology", detail: "Study animals and their ecological roles." },
  { section: "Microbiology", detail: "Understand bacteria, viruses, and microorganisms." },
  { section: "Biotechnology", detail: "Explore genetic engineering and its applications." },
  { section: "Ecology", detail: "Learn how organisms interact with their environment." },
  { section: "Reproduction", detail: "Study sexual and asexual reproduction in living beings." }
];

// 8 
 export let techToolsArr : ItechToolsArr[] = [
  { tool: "VS Code", usage: "Code editor for web and software development." },
  { tool: "Postman", usage: "API testing and documentation tool." },
  { tool: "Figma", usage: "Design and prototype user interfaces collaboratively." },
  { tool: "Git", usage: "Version control system for tracking code changes." },
  { tool: "Docker", usage: "Containerize applications for easy deployment." },
  { tool: "Jira", usage: "Project management tool for agile workflows." },
  { tool: "Slack", usage: "Team communication and collaboration platform." },
  { tool: "Notion", usage: "Organize tasks, notes, and documentation." },
  { tool: "Visual Studio", usage: "IDE for C#, .NET, and multi-language development." },
  { tool: "Firebase", usage: "Backend services for mobile and web apps." }
];


// 9 

export let educationArr : IeducationArr[] = [
  { subjectName: "Mathematics", overview: "Learn logical problem-solving and number systems." },
  { subjectName: "Science", overview: "Explore natural and physical phenomena." },
  { subjectName: "English", overview: "Improve grammar, vocabulary, and writing." },
  { subjectName: "History", overview: "Understand civilizations and major world events." },
  { subjectName: "Geography", overview: "Study Earth's features and human impact." },
  { subjectName: "Civics", overview: "Learn about governance, rights, and duties." },
  { subjectName: "Computer Science", overview: "Understand algorithms and programming basics." },
  { subjectName: "Economics", overview: "Study production, distribution, and consumption." },
  { subjectName: "Physical Education", overview: "Learn fitness, teamwork, and sports." },
  { subjectName: "Environmental Studies", overview: "Understand the importance of nature and ecology." }
];


 // 10
export let cloudArr : IcloudArr[] = [
  { topic: "AWS Basics", info: "Start with EC2, S3, and IAM fundamentals." },
  { topic: "Azure Cloud", info: "Learn Microsoft Azure for enterprise apps." },
  { topic: "Google Cloud", info: "Understand GCP’s compute and storage services." },
  { topic: "Cloud Storage", info: "Manage files with buckets and access policies." },
  { topic: "Serverless Architecture", info: "Run apps without managing servers." },
  { topic: "Load Balancing", info: "Distribute traffic efficiently across servers." },
  { topic: "Cloud Networking", info: "Understand VPCs, subnets, and firewalls." },
  { topic: "Cloud Security", info: "Protect resources using encryption and IAM roles." },
  { topic: "DevOps on Cloud", info: "Automate builds and deploys in the cloud." },
  { topic: "Cost Optimization", info: "Manage cloud usage for better pricing efficiency." }
];


// 11
export let webDevArr : IwebDevArr[] = [
  { topic: "HTML5", details: "Structure web pages using semantic elements like header, section, article, and footer. Learn forms, media tags, and accessibility basics so your pages are clean, SEO-friendly, and easy to maintain." },
  { topic: "CSS3", details: "Style layouts using Flexbox, Grid, transitions, and animations. Understand the box model, specificity, and variables to build modern, consistent, and visually appealing interfaces." },
  { topic: "JavaScript", details: "Add interactivity with ES6+ features like arrow functions, promises, async/await, and modules. Learn DOM manipulation, event handling, and how the event loop really works." },
  { topic: "TypeScript", details: "Write type-safe code with interfaces, generics, and enums to catch bugs at compile time. Perfect for building large, scalable applications with better tooling and refactoring support." },
  { topic: "Angular", details: "Build enterprise-grade single-page apps using components, services, dependency injection, and routing. Master RxJS, forms, and lazy loading for fast, structured, and testable applications." },
  { topic: "React", details: "Create reusable UI with components, hooks, and state management. Learn the virtual DOM, context, and performance techniques to build dynamic and responsive user interfaces." },
  { topic: "Node.js", details: "Run JavaScript on the server with a non-blocking, event-driven runtime. Build APIs, handle files and streams, and use npm packages to power fast and scalable backends." },
  { topic: "REST APIs", details: "Design and consume HTTP-based services using proper methods, status codes, and resource naming. Learn authentication, pagination, versioning, and error handling for reliable client-server communication." },
  { topic: "Responsive Design", details: "Make websites look great on mobiles, tablets, and desktops using media queries, fluid grids, and flexible images. Adopt a mobile-first approach for better user experience everywhere." },
  { topic: "Web Performance", details: "Optimize load time with lazy loading, code splitting, caching, and image compression. Measure Core Web Vitals to deliver faster pages and improve both user satisfaction and search rankings." }
];

// 12
export let databaseArr = [
  { concept: "SQL Basics", explain: "Query relational data using SELECT, JOIN, GROUP BY, and subqueries. Learn how to filter, sort, and combine tables to extract meaningful insights from structured data efficiently." },
  { concept: "MongoDB", explain: "Store flexible, JSON-like documents inside collections without a fixed schema. Ideal for fast-changing applications where nested data and horizontal scaling are important." },
  { concept: "Normalization", explain: "Organize tables into normal forms to reduce data redundancy and avoid update anomalies. Understand when to normalize for consistency and when to denormalize for read performance." },
  { concept: "Indexing", explain: "Speed up queries using B-tree, hash, and compound indexes. Learn how to read query plans and balance faster reads against slower writes and extra storage." },
  { concept: "Transactions", explain: "Ensure data integrity with ACID properties — atomicity, consistency, isolation, and durability. Handle commits, rollbacks, and isolation levels to keep critical operations like payments safe." },
  { concept: "Aggregation", explain: "Process and summarize large datasets using pipelines with stages like match, group, sort, and project. Generate reports, totals, and analytics directly inside the database." },
  { concept: "Redis", explain: "Use blazing-fast in-memory storage for caching, sessions, queues, and leaderboards. Learn data structures like strings, hashes, lists, and sets along with expiry policies." },
  { concept: "Replication", explain: "Maintain copies of data across multiple servers for high availability and fault tolerance. Understand primary-secondary setups, failover, and read scaling in production systems." },
  { concept: "Sharding", explain: "Distribute huge datasets across multiple machines using a shard key. Learn how to scale horizontally while avoiding hotspots and keeping queries efficient." },
  { concept: "Backup & Recovery", explain: "Protect data against accidental deletion, corruption, and hardware failures. Plan regular backups, point-in-time recovery, and tested restore procedures for business continuity." }
];

// 13
export let cyberSecurityArr : IcyberSecurityArr[] = [
  { module: "Network Security", summary: "Protect networks using firewalls, intrusion detection systems, VPNs, and segmentation. Learn how to monitor traffic, block suspicious activity, and secure the perimeter of an organization." },
  { module: "Cryptography", summary: "Secure data with symmetric and asymmetric encryption, hashing, and digital signatures. Understand how TLS, certificates, and key management keep communication private and trustworthy." },
  { module: "Ethical Hacking", summary: "Think like an attacker to find vulnerabilities legally before real criminals do. Practice reconnaissance, scanning, exploitation, and reporting following responsible disclosure guidelines." },
  { module: "Malware Analysis", summary: "Study how viruses, worms, ransomware, and trojans behave and spread. Learn static and dynamic analysis techniques to understand threats and build effective defenses." },
  { module: "Web Security", summary: "Prevent common attacks such as XSS, CSRF, SQL injection, and insecure deserialization. Follow OWASP guidelines, validate inputs, and apply secure headers to harden web applications." },
  { module: "Authentication", summary: "Verify identity using passwords, OTPs, biometrics, and tokens like JWT and OAuth. Learn multi-factor authentication and session management to keep user accounts safe." },
  { module: "Incident Response", summary: "Detect, contain, eradicate, and recover from security breaches in a structured way. Prepare playbooks, collect evidence, and conduct post-incident reviews to prevent repeat attacks." },
  { module: "Penetration Testing", summary: "Simulate real-world attacks on systems, apps, and networks to test their defenses. Use tools like Nmap and Burp Suite, then document findings with clear remediation steps." },
  { module: "Security Compliance", summary: "Follow standards and regulations like ISO 27001, GDPR, and PCI-DSS. Understand audits, policies, and risk assessments that keep organizations legally and ethically secure." },
  { module: "Social Engineering", summary: "Recognize human-based manipulation tactics such as phishing, pretexting, and impersonation. Train teams to question suspicious requests and build a strong security-aware culture." }
];

// 14
export const healthArr : IhealthArr[] = [
  { topicName: "Nutrition", description: "Maintain a balanced diet with the right mix of carbohydrates, proteins, healthy fats, vitamins, and minerals. Learn portion control and mindful eating to support energy, growth, and long-term wellbeing." },
  { topicName: "Exercise", description: "Build strength, stamina, and flexibility through regular cardio, resistance, and stretching routines. Even 30 minutes a day improves heart health, mood, and overall fitness." },
  { topicName: "Sleep Hygiene", description: "Develop habits for deep, consistent sleep such as fixed timings, limited screen use at night, and a calm bedroom. Good sleep boosts memory, focus, and immunity." },
  { topicName: "Mental Wellness", description: "Manage stress, anxiety, and burnout with mindfulness, journaling, and healthy boundaries. Build emotional resilience and know when to seek support from friends or professionals." },
  { topicName: "Hydration", description: "Understand why drinking enough water matters for digestion, skin, temperature control, and concentration. Learn simple ways to track intake and spot signs of dehydration early." },
  { topicName: "First Aid", description: "Learn basic emergency care for cuts, burns, fractures, choking, and CPR. Knowing what to do in the first few minutes can save lives before professional help arrives." },
  { topicName: "Yoga", description: "Improve flexibility, balance, and calmness through asanas, breathing exercises, and meditation. A regular practice reduces stress and strengthens both body and mind." },
  { topicName: "Preventive Care", description: "Use regular health check-ups, screenings, and vaccinations to catch problems early. Prevention is cheaper, easier, and far more effective than treating advanced conditions." },
  { topicName: "Immunity", description: "Strengthen the body's natural defenses with proper nutrition, sleep, exercise, and stress control. Learn how lifestyle choices help you fight infections and recover faster." },
  { topicName: "Posture", description: "Reduce back, neck, and shoulder strain with better sitting, standing, and desk ergonomics. Simple stretches and workspace adjustments prevent long-term pain for people working at computers." }
];

// 15
export const historyArr : IhistoryArr[] = [
  { subject: "Indus Valley", info: "Explore one of the world's earliest urban civilizations, known for planned cities like Harappa and Mohenjo-daro. Study its drainage systems, trade links, seals, and mysterious decline." },
  { subject: "Maurya Empire", info: "Study Chandragupta, Chanakya, and Ashoka, who built the first pan-Indian empire. Learn about its administration, Ashoka's edicts, and the spread of Buddhism across Asia." },
  { subject: "Mughal Era", info: "Learn about the rule of Babur to Aurangzeb, along with achievements in art, architecture, and administration. Monuments like the Taj Mahal and Red Fort reflect this rich cultural blend." },
  { subject: "Maratha Empire", info: "Understand Chhatrapati Shivaji Maharaj's guerrilla tactics, forts, navy, and people-focused governance. Follow how the Marathas expanded across India and shaped regional politics." },
  { subject: "British Rule", info: "Examine colonial policies, economic exploitation, railways, education reforms, and their long-term impact. Understand how the East India Company evolved into direct Crown rule." },
  { subject: "Freedom Struggle", info: "Follow movements like Non-Cooperation, Dandi March, and Quit India led by Gandhi, Nehru, Bose, and many others. Learn the sacrifices that led to independence in 1947." },
  { subject: "World War I", info: "Understand the causes, alliances, and major battles of the Great War between 1914 and 1918. See how it reshaped borders, empires, and international relations." },
  { subject: "World War II", info: "Study the global conflict from 1939 to 1945, including key events, leaders, and turning points. Learn about its human cost, the formation of the UN, and the start of the Cold War." },
  { subject: "Renaissance", info: "Discover Europe's rebirth of art, science, and learning between the 14th and 17th centuries. Meet thinkers like Leonardo da Vinci, Michelangelo, and Galileo who changed how people saw the world." },
  { subject: "Industrial Revolution", info: "See how steam engines, factories, and mechanization transformed production and society. Understand its effects on urban growth, working conditions, and the global economy." }
];

// // 16
// export const spaceArr = [
//   { field: "Solar System", concept: "Explore the sun, eight planets, moons, asteroids, and comets that make up our cosmic neighborhood. Compare their sizes, atmospheres, and orbits to understand how each world is unique." },
//   { field: "Galaxies", concept: "Learn how billions of stars, gas, and dust are bound together by gravity into spiral, elliptical, and irregular galaxies. Our Milky Way is just one among hundreds of billions." },
//   { field: "Black Holes", concept: "Understand regions of spacetime where gravity is so strong that nothing, not even light, can escape. Study event horizons, singularities, and how black holes bend space around them." },
//   { field: "Space Missions", concept: "Study major exploration programs by ISRO, NASA, and ESA, such as Chandrayaan, Mangalyaan, and the Mars rovers. See how each mission expands human knowledge of the universe." },
//   { field: "Exoplanets", concept: "Discover planets orbiting stars beyond our solar system and learn the transit and wobble methods used to detect them. Explore the search for habitable worlds and signs of life." },
//   { field: "Big Bang Theory", concept: "Learn how the universe began about 13.8 billion years ago and has been expanding ever since. Understand cosmic background radiation and evidence supporting this leading theory." },
//   { field: "Telescopes", concept: "See how optical, radio, and space telescopes like Hubble and James Webb observe distant objects. Understand how they collect light and reveal the early universe." },
//   { field: "Rockets", concept: "Understand propulsion, thrust, staging, and orbital mechanics that allow vehicles to escape Earth's gravity. Explore how modern reusable rockets are lowering the cost of spaceflight." },
//   { field: "Space Stations", concept: "Explore how astronauts live, work, and conduct experiments in orbit aboard the International Space Station. Learn about microgravity, life support, and international cooperation." },
//   { field: "Astronomy Basics", concept: "Identify constellations, planets, and celestial events like eclipses and meteor showers with the naked eye. Learn simple tips for stargazing and using star maps or apps." }
// ];

// // 17
// export const financeArr = [
//   { section: "Budgeting", detail: "Plan monthly income and expenses using methods like the 50/30/20 rule. Track spending, cut unnecessary costs, and make sure your money is working toward your goals." },
//   { section: "Saving", detail: "Build an emergency fund covering three to six months of expenses, then save for long-term goals. Learn the power of consistency and automatic transfers to grow your reserves." },
//   { section: "Mutual Funds", detail: "Invest in diversified portfolios managed by professionals through SIPs or lump sums. Understand equity, debt, and hybrid funds along with expense ratios and risk levels." },
//   { section: "Stock Market", detail: "Understand shares, indices like Sensex and Nifty, and how trading works. Learn fundamental and technical analysis, and why long-term discipline beats short-term speculation." },
//   { section: "Insurance", detail: "Protect yourself and your family against financial risks with life, health, vehicle, and property insurance. Compare coverage, premiums, and claim processes before choosing a policy." },
//   { section: "Taxation", detail: "Learn about income tax slabs, deductions, exemptions, and filing returns on time. Use legal tax-saving options to keep more of what you earn." },
//   { section: "Credit Score", detail: "Know how repayment history, credit utilization, and loan enquiries affect your score. A strong score helps you get loans and credit cards at lower interest rates." },
//   { section: "Loans", detail: "Compare home, education, personal, and vehicle loans based on interest rates, EMIs, and tenure. Understand processing fees and prepayment options to avoid costly mistakes." },
//   { section: "Retirement Planning", detail: "Prepare for financial independence by investing early in PPF, NPS, and long-term funds. Estimate your future expenses and build a corpus that can last through retirement." },
//   { section: "Cryptocurrency", detail: "Understand blockchain-based digital assets like Bitcoin and Ethereum, how wallets work, and why prices are highly volatile. Learn the risks, regulations, and the need for caution." }
// ];

// // 18
// export const devOpsArr = [
//   { tool: "CI/CD", usage: "Automate building, testing, and deploying code on every commit. Catch bugs early, release faster, and reduce manual errors with reliable pipelines." },
//   { tool: "Jenkins", usage: "Open-source automation server for creating build, test, and deployment pipelines. Use plugins and Jenkinsfiles to integrate with Git, Docker, and cloud platforms." },
//   { tool: "Kubernetes", usage: "Orchestrate containers across clusters with automatic scaling, self-healing, and rolling updates. Learn pods, services, deployments, and config maps to run apps at scale." },
//   { tool: "Terraform", usage: "Provision cloud infrastructure using declarative code. Version your servers, networks, and databases so environments are repeatable, reviewable, and easy to recreate." },
//   { tool: "Ansible", usage: "Automate configuration management, application deployment, and server updates using simple YAML playbooks. No agents required, which makes it quick to adopt." },
//   { tool: "GitHub Actions", usage: "Run workflows directly from your repository on push, pull request, or schedule. Build, test, and deploy projects using reusable community actions and secrets." },
//   { tool: "Prometheus", usage: "Collect time-series metrics from applications and servers, and set alerts on thresholds. Query data with PromQL to monitor performance and system health." },
//   { tool: "Grafana", usage: "Visualize metrics and logs with interactive, customizable dashboards. Connect multiple data sources and share insights with the whole team." },
//   { tool: "Nginx", usage: "Serve static content, act as a reverse proxy, and balance load across servers. Configure SSL, caching, and compression to improve speed and security." },
//   { tool: "Linux Basics", usage: "Master shell commands, file permissions, processes, and package management. Strong Linux skills are essential for managing servers, containers, and cloud environments." }
// ];

// // 19
// export const languageArr = [
//   { subjectName: "Hindi", overview: "Learn grammar, vocabulary, poetry, and prose of India's most widely spoken language. Improve reading, writing, and expression through stories, essays, and everyday conversation." },
//   { subjectName: "Marathi", overview: "Study the language and culture of Maharashtra, from basic script to literature and folk traditions. Practice speaking with common phrases used in daily life." },
//   { subjectName: "English", overview: "Develop fluency with grammar, vocabulary, pronunciation, and writing skills. Useful for academics, careers, and global communication in a connected world." },
//   { subjectName: "Sanskrit", overview: "Explore the classical language of ancient India, its grammar rules, and rich scriptures. Understanding Sanskrit helps you connect with the roots of many modern languages." },
//   { subjectName: "Spanish", overview: "Learn one of the most widely spoken languages in the world, with simple pronunciation and logical grammar. Great for travel, business, and understanding Latin culture." },
//   { subjectName: "French", overview: "Understand pronunciation, grammar, and everyday vocabulary of the language of art, fashion, and diplomacy. Opens doors to study and work opportunities in many countries." },
//   { subjectName: "German", overview: "Build strong foundations in grammar, cases, and vocabulary for study and work in Europe. German skills are highly valued in engineering, research, and technology." },
//   { subjectName: "Japanese", overview: "Learn Hiragana, Katakana, and basic Kanji along with polite everyday expressions. Discover how culture and language blend in Japan's unique communication style." },
//   { subjectName: "Tamil", overview: "Discover one of the oldest living classical languages with a rich literary history. Learn the script, sounds, and common phrases used across Tamil Nadu and beyond." },
//   { subjectName: "Bengali", overview: "Study poetry, prose, and spoken communication of the language of Tagore and Bengal's cultural heritage. Practice reading and conversation for personal and professional growth." }
// ];

// // 20
// export const sportsArr = [
//   { topic: "Cricket", info: "Learn batting techniques, bowling variations, and fielding strategies across Test, ODI, and T20 formats. Understand rules, captaincy decisions, and what makes the sport a passion in India." },
//   { topic: "Football", info: "Understand positions, formations, passing, dribbling, and teamwork on the pitch. Learn how fitness and tactical awareness decide the result of a match." },
//   { topic: "Kabaddi", info: "Explore India's traditional contact sport built on raiding, tackling, and quick reflexes. Learn rules, scoring, and how the Pro Kabaddi League made it popular worldwide." },
//   { topic: "Badminton", info: "Master smashes, drops, clears, and footwork while understanding singles and doubles strategy. Build speed, agility, and wrist strength with regular drills." },
//   { topic: "Tennis", info: "Study serves, forehands, backhands, volleys, and scoring rules across different court surfaces. Develop stamina and mental toughness needed for long rallies." },
//   { topic: "Athletics", info: "Train for sprints, long-distance running, jumps, and throws using proper technique and conditioning. Learn warm-ups, recovery, and how to avoid common injuries." },
//   { topic: "Swimming", info: "Build endurance and full-body strength with freestyle, backstroke, breaststroke, and butterfly. Learn breathing control, safety basics, and efficient stroke mechanics." },
//   { topic: "Hockey", info: "Learn stick control, passing, penalty corners, and team formations in India's national sport. Understand how speed and coordination lead to goals." },
//   { topic: "Chess", info: "Develop strategy, tactics, patience, and concentration through openings, middlegame plans, and endgames. Chess sharpens logical thinking and decision-making skills." },
//   { topic: "Olympics", info: "Understand the history of the modern Olympic Games, the values of fair play, and India's memorable medal moments. Discover how athletes prepare for years to compete on the world stage." }
// ];

// // 21
// export const environmentArr = [
//   { concept: "Climate Change", explain: "Understand global warming, greenhouse gases, and how human activities are changing weather patterns. Learn about rising sea levels, extreme events, and what individuals can do to help." },
//   { concept: "Renewable Energy", explain: "Explore solar, wind, hydro, and biomass power as clean alternatives to fossil fuels. Learn how these sources reduce pollution and create sustainable long-term energy supply." },
//   { concept: "Recycling", explain: "Reduce waste by sorting and reusing paper, plastic, glass, and metal. Follow the reduce, reuse, recycle principle to save resources and protect landfills." },
//   { concept: "Biodiversity", explain: "Protect the variety of plants, animals, and microorganisms that keep ecosystems balanced. Learn why habitat loss and extinction threaten food, medicine, and climate stability." },
//   { concept: "Water Conservation", explain: "Use and manage freshwater responsibly through rainwater harvesting, drip irrigation, and leak control. Small daily habits can save thousands of litres every year." },
//   { concept: "Air Pollution", explain: "Study sources like vehicles, industries, and burning of waste, and their effects on health. Learn about AQI, clean transport, and policies that improve air quality." },
//   { concept: "Afforestation", explain: "Restore forests by planting trees to absorb carbon dioxide, prevent soil erosion, and support wildlife. Community plantation drives play a key role in cooling cities." },
//   { concept: "Sustainable Living", explain: "Adopt habits like saving energy, using public transport, buying local, and avoiding single-use plastic. Sustainable choices reduce your carbon footprint and save money too." },
//   { concept: "Ozone Layer", explain: "Learn how this protective layer shields Earth from harmful ultraviolet radiation and how CFCs damaged it. The Montreal Protocol shows how global cooperation can heal the environment." },
//   { concept: "Waste Management", explain: "Handle solid, liquid, biomedical, and electronic waste through segregation, composting, and safe disposal. Efficient systems keep cities clean and reduce environmental harm." }
// ];

// // 22
// export const designArr = [
//   { module: "Color Theory", summary: "Use the color wheel, contrast, and harmony to evoke emotion and guide attention. Learn how palettes, saturation, and brand colors affect user perception." },
//   { module: "Typography", summary: "Choose fonts, sizes, spacing, and weights for readability and personality. Understand hierarchy and pairing so text looks professional and communicates clearly." },
//   { module: "Layout & Grid", summary: "Organize content with balance, alignment, whitespace, and visual hierarchy. Use grid systems to create consistent, clean, and scannable designs across screens." },
//   { module: "UX Research", summary: "Understand user needs through interviews, surveys, personas, and usability testing. Research-backed decisions lead to products people actually enjoy using." },
//   { module: "Wireframing", summary: "Sketch the structure and flow of screens before adding visual details. Low-fidelity wireframes help teams discuss ideas and fix problems early and cheaply." },
//   { module: "Prototyping", summary: "Create clickable, interactive mockups in tools like Figma to validate ideas. Test real user journeys and gather feedback before developers write any code." },
//   { module: "Design Systems", summary: "Maintain consistent components, tokens, and guidelines across products and teams. A good design system speeds up work and keeps the experience unified." },
//   { module: "Accessibility", summary: "Design products usable by everyone, including people with visual, motor, or hearing impairments. Follow WCAG guidelines for contrast, keyboard navigation, and screen readers." },
//   { module: "Branding", summary: "Build a visual identity with logo, colors, tone, and messaging that people remember. Strong branding builds trust and sets you apart from competitors." },
//   { module: "Motion Design", summary: "Add meaningful animation and micro-interactions that guide users and give feedback. Learn timing, easing, and when subtle motion improves usability." }
// ];

// // 23
// export const physicsArr = [
//   { topicName: "Mechanics", description: "Study motion, force, momentum, work, and energy using Newton's laws. These fundamentals explain everything from falling objects to the movement of vehicles and planets." },
//   { topicName: "Thermodynamics", description: "Understand heat, temperature, work, and entropy along with the laws governing energy transfer. Learn how engines, refrigerators, and power plants operate." },
//   { topicName: "Optics", description: "Learn about reflection, refraction, lenses, mirrors, and the nature of light. Understand how cameras, microscopes, telescopes, and eyeglasses work." },
//   { topicName: "Electricity", description: "Explore electric charge, current, voltage, resistance, and circuits. Apply Ohm's law to understand how household wiring and electronic devices function." },
//   { topicName: "Magnetism", description: "Understand magnetic fields, forces, and electromagnetic induction. Discover how motors, generators, transformers, and MRI machines rely on magnetic effects." },
//   { topicName: "Waves", description: "Study sound, light, and water waves with concepts like frequency, wavelength, amplitude, and interference. Learn how waves carry energy and information." },
//   { topicName: "Quantum Physics", description: "Discover the strange behavior of particles at atomic scales, including wave-particle duality and uncertainty. Quantum theory powers modern electronics and emerging computing." },
//   { topicName: "Relativity", description: "Learn how Einstein's theories connect space, time, and gravity. Understand time dilation, mass-energy equivalence, and why GPS needs relativistic corrections." },
//   { topicName: "Nuclear Physics", description: "Study atomic nuclei, radioactivity, fission, and fusion. Explore applications in power generation, medicine, and the powerful energy of the stars." },
//   { topicName: "Gravitation", description: "Understand the force that governs falling objects, planetary orbits, and tides. Learn Newton's law of gravitation and how it shapes the structure of the cosmos." }
// ];

// // 24
// export const chemistryArr = [
//   { subject: "Periodic Table", info: "Learn how elements are arranged by atomic number and recurring properties. Predict reactivity, valency, and trends across groups and periods with ease." },
//   { subject: "Chemical Bonding", info: "Understand ionic, covalent, and metallic bonds and how atoms share or transfer electrons. Bonding explains the shape, strength, and properties of molecules." },
//   { subject: "Acids & Bases", info: "Study pH, indicators, strong and weak acids, and neutralization reactions. See how these concepts apply to digestion, cleaning products, and industrial processes." },
//   { subject: "Organic Chemistry", info: "Explore carbon compounds, functional groups, and reaction mechanisms. Organic chemistry is the basis of medicines, plastics, fuels, and living organisms." },
//   { subject: "Stoichiometry", info: "Calculate quantities of reactants and products using mole concepts and balanced equations. Essential for predicting yields in labs and industries." },
//   { subject: "Electrochemistry", info: "Learn how chemical energy converts into electrical energy in batteries and cells. Understand redox reactions, electrolysis, and corrosion prevention." },
//   { subject: "Thermochemistry", info: "Study heat changes during reactions, including enthalpy, exothermic, and endothermic processes. Learn how energy flows in fuels, food, and chemical manufacturing." },
//   { subject: "Polymers", info: "Understand large molecules made of repeating units, such as plastics, rubber, and synthetic fibers. Explore their properties, uses, and environmental challenges." },
//   { subject: "Chemical Kinetics", info: "Measure how fast reactions occur and what factors affect their rates, like temperature, concentration, and catalysts. Useful for controlling industrial processes." },
//   { subject: "Environmental Chemistry", info: "See how chemicals affect air, water, and soil, including acid rain, smog, and pollutants. Learn green chemistry approaches that reduce harm to the planet." }
// ];

// // 25
// export const careerArr = [
//   { field: "Resume Writing", concept: "Present your skills, projects, and achievements clearly in a concise, well-structured document. Use action words and measurable results so recruiters notice you within seconds." },
//   { field: "Interview Skills", concept: "Prepare for technical and HR rounds by practicing common questions and the STAR method. Communicate with confidence, ask smart questions, and follow up professionally." },
//   { field: "Networking", concept: "Build genuine professional relationships through events, communities, and online platforms. A strong network brings referrals, mentorship, and hidden opportunities." },
//   { field: "LinkedIn Profile", concept: "Showcase your experience, skills, and recommendations with a strong headline and summary. Stay active with posts and connections to attract recruiters." },
//   { field: "Time Management", concept: "Prioritize tasks using tools like the Eisenhower matrix and time blocking. Avoid distractions, set realistic deadlines, and maintain a healthy work-life balance." },
//   { field: "Public Speaking", concept: "Deliver ideas clearly and confidently in meetings, presentations, and conferences. Practice structure, body language, and voice control to engage any audience." },
//   { field: "Salary Negotiation", concept: "Research market rates and highlight your value before discussing compensation. Learn to negotiate benefits, role, and growth along with the base salary." },
//   { field: "Freelancing", concept: "Find clients, set fair pricing, and manage projects independently. Build a portfolio, communicate expectations, and deliver on time to earn repeat work." },
//   { field: "Personal Branding", concept: "Create a recognizable professional identity through your work, writing, and online presence. A consistent brand makes you memorable and trusted in your field." },
//   { field: "Upskilling", concept: "Keep learning new tools, technologies, and soft skills to stay relevant. Set small learning goals, build projects, and earn certifications that match industry demand." }
// ];

// // 26
// export const mobileDevArr = [
//   { section: "Android Basics", detail: "Build apps using Kotlin or Java with activities, fragments, and XML layouts. Learn the app lifecycle, intents, and Material Design for a polished experience." },
//   { section: "iOS Basics", detail: "Develop apps with Swift, Xcode, and SwiftUI for iPhones and iPads. Understand view controllers, storyboards, and Apple's human interface guidelines." },
//   { section: "Flutter", detail: "Create beautiful cross-platform apps from a single Dart codebase. Use widgets, hot reload, and state management to build fast mobile, web, and desktop apps." },
//   { section: "React Native", detail: "Build native mobile apps with JavaScript and React concepts. Share code between Android and iOS while still accessing device features through native modules." },
//   { section: "Ionic", detail: "Develop hybrid apps using Angular, HTML, CSS, and Capacitor. A great choice for web developers who want to ship mobile apps quickly." },
//   { section: "Push Notifications", detail: "Engage users with timely alerts using Firebase Cloud Messaging or APNs. Learn permissions, segmentation, and best practices to avoid annoying users." },
//   { section: "App Storage", detail: "Persist data using SQLite, Room, shared preferences, and secure storage. Handle offline mode and syncing so apps remain useful without internet." },
//   { section: "Mobile UI Patterns", detail: "Design navigation like tabs, drawers, and bottom sheets that feel natural on small screens. Consider thumb reach, gestures, and consistent spacing." },
//   { section: "App Publishing", detail: "Prepare builds, icons, screenshots, and descriptions to release on Play Store and App Store. Understand review guidelines, versioning, and update strategies." },
//   { section: "Mobile Security", detail: "Protect user data with encryption, secure APIs, and certificate pinning. Avoid storing secrets in code and follow platform security best practices." }
// ];

// // 27
// export const dataScienceArr = [
//   { tool: "Python", usage: "The most popular language for data analysis, automation, and machine learning. Its simple syntax and huge library ecosystem make it ideal for beginners and experts alike." },
//   { tool: "Pandas", usage: "Clean, transform, and analyze tabular data using DataFrames. Handle missing values, merge datasets, and group data to prepare it for analysis." },
//   { tool: "NumPy", usage: "Perform fast numerical computations with multi-dimensional arrays. It forms the foundation for most scientific and machine learning libraries in Python." },
//   { tool: "Matplotlib", usage: "Create line charts, bar graphs, histograms, and scatter plots to visualize patterns. Customize labels, colors, and layouts to tell clear data stories." },
//   { tool: "Scikit-learn", usage: "Build classic machine learning models for classification, regression, and clustering. Includes tools for preprocessing, model selection, and evaluation." },
//   { tool: "Jupyter Notebook", usage: "Combine live code, output, charts, and notes in a single interactive document. Perfect for experiments, tutorials, and sharing analysis with others." },
//   { tool: "Power BI", usage: "Build interactive business dashboards and reports from multiple data sources. Use DAX and visuals to help decision makers understand trends quickly." },
//   { tool: "Tableau", usage: "Visualize data with drag-and-drop analytics and beautiful dashboards. Explore patterns and share insights without writing complex code." },
//   { tool: "Apache Spark", usage: "Process big data with distributed computing across clusters. Handle batch and streaming workloads much faster than traditional approaches." },
//   { tool: "SQL for Analytics", usage: "Extract, filter, and summarize data from databases using joins, window functions, and aggregations. A must-have skill for every data professional." }
// ];

// // 28
// export const foodArr = [
//   { topic: "Indian Cuisine", details: "Explore regional flavors from Punjabi curries to South Indian dosas, along with the spices and techniques behind them. Learn how balance of taste makes Indian food unique." },
//   { topic: "Baking", details: "Learn the science of breads, cakes, cookies, and pastries, including measuring, mixing, and oven control. Understand how yeast, eggs, and butter affect texture and rise." },
//   { topic: "Street Food", details: "Discover popular snacks like pav bhaji, chaat, vada pav, and momos found across Indian cities. Learn how simple ingredients turn into crowd-favorite flavors." },
//   { topic: "Healthy Eating", details: "Cook balanced meals using whole grains, vegetables, lean proteins, and minimal processed ingredients. Small swaps in oil, sugar, and portions can improve your health." },
//   { topic: "Vegetarian Cooking", details: "Create protein-rich, satisfying dishes using lentils, paneer, tofu, and beans. Learn how to combine ingredients for taste, nutrition, and variety." },
//   { topic: "Desserts", details: "Prepare traditional sweets like gulab jamun and kheer along with modern desserts like brownies and cheesecake. Learn sugar stages, setting agents, and presentation." },
//   { topic: "Beverages", details: "Make refreshing teas, coffees, smoothies, lassis, and mocktails at home. Understand brewing methods and flavor pairings for every season." },
//   { topic: "Meal Prep", details: "Plan, cook, and store meals in advance to save time and money during busy weekdays. Learn batch cooking and storage tips to keep food fresh." },
//   { topic: "Spices", details: "Understand how turmeric, cumin, cardamom, and other spices add flavor, aroma, and health benefits. Learn when to roast, temper, or grind them for best results." },
//   { topic: "Food Safety", details: "Store, handle, and cook food hygienically to prevent contamination and illness. Learn about safe temperatures, cross-contamination, and proper cleaning habits." }
// ];

// // 29
// export const travelArr = [
//   { concept: "Trip Planning", explain: "Organize routes, stays, transport, and activities in advance with a realistic budget. Good planning saves money, avoids stress, and helps you enjoy every moment." },
//   { concept: "Budget Travel", explain: "Explore more by spending smartly through off-season bookings, local transport, and homestays. Learn how to find deals without compromising on experiences." },
//   { concept: "Solo Travel", explain: "Gain confidence, independence, and new perspectives by exploring on your own. Learn safety tips, accommodation choices, and ways to meet fellow travelers." },
//   { concept: "Adventure Tourism", explain: "Try trekking, rafting, paragliding, and camping in scenic locations. Understand safety gear, fitness needs, and responsible practices for outdoor activities." },
//   { concept: "Heritage Tours", explain: "Visit forts, temples, palaces, and museums that tell the story of a region's past. Hiring local guides adds depth and meaning to every site." },
//   { concept: "Beach Destinations", explain: "Relax on beautiful coastlines with sun, sand, and water sports. Compare popular beaches in Goa, Kerala, and the Andamans for the best season and activities." },
//   { concept: "Hill Stations", explain: "Escape to cool mountain retreats like Manali, Shimla, and Ooty with scenic views and fresh air. Learn the best months to visit and what to pack." },
//   { concept: "Travel Documents", explain: "Prepare passports, visas, ID proofs, tickets, and insurance well before departure. Keep digital and physical copies to avoid problems on the road." },
//   { concept: "Local Culture", explain: "Respect and experience regional traditions, festivals, food, and etiquette. Learning a few local phrases helps you connect with people and enrich your trip." },
//   { concept: "Travel Photography", explain: "Capture memorable moments using good lighting, composition, and storytelling. Learn simple tips for landscapes, portraits, and street photography with any camera." }
// ];

// // 30
// export const musicArr = [
//   { module: "Music Theory", summary: "Understand notes, scales, chords, rhythm, and key signatures that form the language of music. Theory helps you play, compose, and communicate with other musicians." },
//   { module: "Classical Music", summary: "Explore Hindustani and Carnatic traditions with ragas, talas, and improvisation. Appreciate the depth, discipline, and emotion behind India's classical heritage." },
//   { module: "Guitar", summary: "Learn open chords, strumming patterns, fingerpicking, and basic songs. Build finger strength and rhythm with daily practice and simple exercises." },
//   { module: "Piano", summary: "Practice keys, scales, hand coordination, and reading sheet music. Start with simple melodies and progress to chords and full pieces." },
//   { module: "Vocals", summary: "Train breathing, pitch, tone, and expression through warm-ups and vocal exercises. Learn how to protect your voice and perform comfortably." },
//   { module: "Tabla", summary: "Learn basic bols, taals, and rhythmic patterns of this popular Indian percussion instrument. Develop finger techniques and timing with guided practice." },
//   { module: "Music Production", summary: "Record, edit, and mix tracks using digital audio workstations like FL Studio or Ableton. Understand layering, effects, and mastering for a professional sound." },
//   { module: "Songwriting", summary: "Compose melodies and meaningful lyrics using song structures like verse, chorus, and bridge. Find inspiration and refine your ideas into complete songs." },
//   { module: "Ear Training", summary: "Recognize intervals, chords, and melodies by listening alone. A trained ear helps you play by ear, improvise, and learn songs much faster." },
//   { module: "Live Performance", summary: "Build stage presence, confidence, and audience connection through rehearsal and practice. Learn sound checks, setlist planning, and handling nerves." }
// ];

// // 31
// export const lawArr = [
//   { topicName: "Constitution", description: "Understand fundamental rights, directive principles, and duties that form the foundation of Indian democracy. Learn how the separation of powers protects citizens." },
//   { topicName: "Contract Law", description: "Learn how agreements become legally binding through offer, acceptance, and consideration. Understand breach, remedies, and why clear written contracts matter." },
//   { topicName: "Criminal Law", description: "Study offences, punishments, and procedures from FIR to trial. Understand the roles of police, courts, and the rights of the accused and victims." },
//   { topicName: "Consumer Rights", description: "Know your protections as a buyer against defective goods, unfair practices, and misleading ads. Learn how to file complaints in consumer forums." },
//   { topicName: "Cyber Law", description: "Understand laws governing online activities, data protection, hacking, and digital signatures. Learn your rights and responsibilities in the digital world." },
//   { topicName: "Property Law", description: "Learn about ownership, sale, lease, mortgage, and inheritance of property. Understand registration, titles, and common disputes to avoid legal trouble." },
//   { topicName: "Intellectual Property", description: "Protect creations through patents, trademarks, copyrights, and designs. Learn how IP rights encourage innovation and safeguard brands." },
//   { topicName: "Labour Law", description: "Understand employee rights, working hours, wages, and employer duties. Learn about provident fund, gratuity, and dispute resolution at workplaces." },
//   { topicName: "Family Law", description: "Study marriage, divorce, adoption, custody, and succession rules under different personal laws. Learn how courts protect the interests of families." },
//   { topicName: "Legal Ethics", description: "Follow professional standards of honesty, confidentiality, and fairness in legal practice. Ethics ensure trust between lawyers, clients, and the justice system." }
// ];

// // 32
// export const architectureArr = [
//   { subject: "Civil Engineering", info: "Design and build roads, bridges, dams, and buildings that serve society. Learn surveying, materials, and construction management for safe infrastructure." },
//   { subject: "Structural Design", info: "Ensure buildings can safely bear loads from people, wind, and earthquakes. Understand beams, columns, foundations, and structural analysis basics." },
//   { subject: "Urban Planning", info: "Shape cities for living, work, and transport through zoning, public spaces, and utilities. Plan for growth, traffic, and sustainability." },
//   { subject: "Interior Design", info: "Create functional and beautiful indoor spaces using layout, lighting, color, and furniture. Balance comfort, style, and budget for homes and offices." },
//   { subject: "Sustainable Buildings", info: "Reduce energy and water use with green construction, natural ventilation, and solar panels. Learn about certifications like LEED and GRIHA." },
//   { subject: "Building Materials", info: "Choose concrete, steel, brick, glass, and eco-friendly options based on strength, cost, and durability. Understand how materials affect safety and comfort." },
//   { subject: "CAD Drawing", info: "Draft precise 2D and 3D plans using software like AutoCAD and Revit. Learn layers, dimensions, and standards for professional drawings." },
//   { subject: "Landscape Design", info: "Blend gardens, pathways, and outdoor spaces with structures for harmony with nature. Select plants and layouts that suit climate and usage." },
//   { subject: "Smart Homes", info: "Integrate automation for lighting, security, climate, and appliances into residential design. Learn how sensors and apps improve comfort and efficiency." },
//   { subject: "Heritage Conservation", info: "Preserve and restore historic buildings and monuments using traditional methods and modern science. Protect cultural identity for future generations." }
// ];

// // 33
// export const agricultureArr = [
//   { field: "Crop Science", concept: "Understand how crops grow, flower, and yield based on seeds, climate, and care. Learn about major crops like wheat, rice, cotton, and sugarcane." },
//   { field: "Soil Health", concept: "Maintain fertility with proper nutrients, organic matter, and pH balance. Soil testing and composting improve yield while protecting the land." },
//   { field: "Irrigation", concept: "Deliver water efficiently using drip, sprinkler, and canal systems. Smart irrigation saves water and boosts productivity, especially in dry regions." },
//   { field: "Organic Farming", concept: "Grow food without synthetic chemicals using compost, bio-fertilizers, and natural pest control. Learn certification and market opportunities for organic produce." },
//   { field: "Pest Control", concept: "Protect crops using integrated pest management with biological, cultural, and safe chemical methods. Identify pests early to reduce losses and costs." },
//   { field: "Horticulture", concept: "Cultivate fruits, vegetables, flowers, and ornamental plants with proper pruning and care. Explore high-value crops that can increase farm income." },
//   { field: "Dairy Farming", concept: "Manage cattle breeds, feeding, health, and milk production for steady income. Learn hygiene, cooperative societies, and value-added dairy products." },
//   { field: "AgriTech", concept: "Use drones, sensors, satellite data, and mobile apps for smart farming decisions. Technology helps monitor crops, save inputs, and increase yield." },
//   { field: "Crop Rotation", concept: "Improve soil health by alternating crop types each season. This reduces pests and diseases while naturally restoring nutrients." },
//   { field: "Agri Marketing", concept: "Sell produce at better prices through mandis, FPOs, and online platforms. Understand grading, storage, transport, and MSP to reduce middlemen losses." }
// ];

// // 34
// export const gamingArr = [
//   { section: "Game Design", detail: "Plan mechanics, levels, story, and player experience before writing code. Learn how rewards, challenges, and feedback keep players engaged." },
//   { section: "Unity", detail: "Build 2D and 3D games using C# in one of the most popular game engines. Learn scenes, prefabs, physics, and asset management to publish on multiple platforms." },
//   { section: "Unreal Engine", detail: "Create high-quality visuals with Blueprints and C++ for PC and console games. Explore lighting, materials, and cinematic tools for realistic worlds." },
//   { section: "Game Physics", detail: "Simulate collisions, gravity, friction, and movement to make gameplay feel natural. Learn rigidbodies, colliders, and how to tune physics for fun." },
//   { section: "Game AI", detail: "Program enemies and NPC behavior using state machines, pathfinding, and decision trees. Good AI creates challenge without feeling unfair." },
//   { section: "Sound Design", detail: "Add music, ambient sounds, and effects that enhance immersion and emotion. Learn mixing and adaptive audio that reacts to gameplay." },
//   { section: "Level Design", detail: "Craft engaging environments with pacing, challenges, and hidden rewards. Guide players naturally using layout, lighting, and visual cues." },
//   { section: "Multiplayer", detail: "Build real-time online gameplay using networking, servers, and synchronization. Handle latency, matchmaking, and cheating prevention." },
//   { section: "Game Monetization", detail: "Earn through ads, in-app purchases, premium pricing, and subscriptions. Balance revenue with fair player experience for long-term success." },
//   { section: "Esports", detail: "Explore competitive gaming, tournaments, teams, and streaming culture. Learn how professional players train and how the industry is growing." }
// ];

// // 35
// export const softSkillsArr = [
//   { tool: "Communication", usage: "Express ideas clearly in speech, writing, and body language. Good communication prevents misunderstandings and builds strong personal and professional relationships." },
//   { tool: "Teamwork", usage: "Collaborate effectively by sharing responsibilities, respecting opinions, and supporting each other. Great teams achieve more than individuals working alone." },
//   { tool: "Critical Thinking", usage: "Analyze information objectively, question assumptions, and evaluate evidence before deciding. This skill helps you avoid mistakes and find better solutions." },
//   { tool: "Problem Solving", usage: "Break down complex challenges into smaller parts and find practical, creative solutions. Learn structured approaches like root-cause analysis and brainstorming." },
//   { tool: "Adaptability", usage: "Adjust quickly to change, new tools, and unexpected situations with a positive mindset. Adaptable people thrive in fast-moving workplaces." },
//   { tool: "Emotional Intelligence", usage: "Understand and manage your emotions while recognizing those of others. Empathy and self-awareness improve leadership, teamwork, and conflict handling." },
//   { tool: "Creativity", usage: "Generate fresh ideas and approaches by exploring, experimenting, and thinking differently. Creativity drives innovation in every field, not just art." },
//   { tool: "Conflict Resolution", usage: "Handle disagreements calmly by listening, finding common ground, and focusing on solutions. Resolving conflicts early keeps relationships and projects healthy." },
//   { tool: "Active Listening", usage: "Focus fully on the speaker, ask clarifying questions, and respond thoughtfully. Listening builds trust and helps you understand what people really need." },
//   { tool: "Decision Making", usage: "Weigh options, consider risks and outcomes, and commit with confidence. Learn frameworks that help you make timely and well-informed choices." }
// ];