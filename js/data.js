/**
 * Portfolio Configuration & Content Data
 * Mohammad Tamim (Abu Yousuf Tamim) - Software & Backend Engineer
 */

const portfolioData = {
  personal: {
    name: "Mohammad Tamim",
    fullName: "Abu Yousuf Tamim",
    title: "Software & Backend Engineering Enthusiast",
    subtitle: "2nd Year CSE Undergrad @ Gopalganj Science & Technology University (GSTU)",
    location: "Bangladesh",
    bio: "Computer Science & Engineering student with a deep analytical mindset spanning Discrete Mathematics, Vector Analysis, and Calculus. Strong in C++, Python, and Java with hands-on experience building complex state-machine simulations like the Battleship Game Engine. Combining solid theoretical computer science with hardware/semiconductor awareness, financial accounting fundamentals, and multilingual fluency (English, Arabic, Bengali).",
    status: "Open to Software & Backend Engineering Internships / Junior Roles",
    availability: "Available for Internships, Software Roles & Open-Source Collaboration",
    avatar: "assets/profile.jpg"
  },

  rotatingRoles: [
    "Software & Backend Engineer",
    "C++ & Python Developer",
    "DSA Problem Solver (Intermediate)",
    "Java OOP & State Machine Architect",
    "Discrete Math & Systems Enthusiast",
    "Multilingual: English, Arabic & Bengali"
  ],

  links: {
    email: "abuyousuftamim0@gmail.com",
    github: "https://github.com/aytamim83",
    codeforces: "https://codeforces.com/profile/Aytamim83",
    codeforcesHandle: "Aytamim83",
    hackerrank: "https://www.hackerrank.com/profile/abuyousuftamim0",
    whatsapp: "https://wa.me/8801344623783",
    whatsappNumber: "+880 1344-623783",
    facebook: "https://www.facebook.com/abuyousuf.tamim.1",
    linkedin: "https://linkedin.com/in/",
    resume: "#"
  },

  stats: [
    { label: "Core Stack", value: "C++, Python, Java, C" },
    { label: "Data Structures", value: "DSA (Intermediate)" },
    { label: "Math Foundations", value: "Discrete Math & Vectors" },
    { label: "Competitive Platform", value: "Codeforces (Aytamim83)" }
  ],

  spokenLanguages: [
    { name: "English", level: "Professional / Fluent", desc: "Technical documentation, collaboration, written & spoken communication" },
    { name: "Arabic (العربية)", level: "Proficient / Comprehension", desc: "Strong reading, comprehension, and conversational fluency" },
    { name: "Bengali (বাংলা)", level: "Native", desc: "Native proficiency in written and verbal communication" }
  ],

  // Detailed Interactive Domains with Specific Mastered Topics
  domains: {
    dsa: {
      title: "Data Structures & Algorithms (DSA)",
      level: "Intermediate",
      summary: "Rigorous algorithmic problem solving, abstract data types, asymptotic bounds, and space-time optimization.",
      categories: [
        {
          name: "Linear Data Structures",
          topics: ["Arrays & Dynamic Arrays", "Singly & Doubly Linked Lists", "Stacks (LIFO & Monotonic Stack)", "Queues & Circular Deques"]
        },
        {
          name: "Tree & Hierarchical Structures",
          topics: ["Binary Trees & Traversals (In/Pre/Post-order)", "Binary Search Trees (BST)", "Heaps & Priority Queues", "Trie Data Structure"]
        },
        {
          name: "Graph Algorithms",
          topics: ["Adjacency Matrix & Adjacency List", "Breadth-First Search (BFS)", "Depth-First Search (DFS)", "Cycle Detection in Directed/Undirected", "Topological Sorting", "Dijkstra's Shortest Path Basics"]
        },
        {
          name: "Algorithmic Paradigms",
          topics: ["Dynamic Programming (Memoization & Tabulation)", "Greedy Strategy & Interval Scheduling", "Binary Search on Answer Range", "Two Pointers & Sliding Window Technique", "Divide and Conquer"]
        },
        {
          name: "Mathematics & Number Theory in DSA",
          topics: ["Sieve of Eratosthenes", "GCD & Euclidean Algorithm", "Modular Arithmetic & Exponentiation", "Bit Manipulation & Bitmasking"]
        },
        {
          name: "Complexity & Analysis",
          topics: ["Big-O, Big-Omega, Big-Theta Asymptotics", "Recursion Tree & Master Theorem", "Auxiliary Space vs In-Place Optimization"]
        }
      ]
    },

    cpp: {
      title: "C++ Programming",
      level: "Proficient",
      summary: "Modern C++ features, deep Standard Template Library (STL) mastery, pointers, and object-oriented architecture.",
      categories: [
        {
          name: "Standard Template Library (STL)",
          topics: ["std::vector & dynamic reallocation", "std::set, std::multiset & Red-Black trees", "std::map & std::unordered_map (Hash Tables)", "std::priority_queue (Max/Min Heap)", "std::pair & std::tuple", "std::sort with custom comparators", "std::lower_bound & upper_bound"]
        },
        {
          name: "Memory & Pointer Mechanics",
          topics: ["Raw Pointers & Dereferencing", "Dynamic Allocation (new/delete)", "Pass by Value vs Pass by Reference", "Const correctness & pointer arithmetic", "Memory layout: Stack vs Heap"]
        },
        {
          name: "Object-Oriented Programming (OOP)",
          topics: ["Classes, Constructors & Destructors", "Inheritance (Single & Multiple)", "Polymorphism (Virtual Functions & Function Overriding)", "Encapsulation & Access Specifiers", "Operator Overloading"]
        },
        {
          name: "Performance & Fast I/O",
          topics: ["cin.tie(NULL) & ios_base::sync_with_stdio(false)", "Inline functions & macros", "Cache-friendly contiguous arrays"]
        }
      ]
    },

    python: {
      title: "Python Programming",
      level: "Proficient",
      summary: "Idiomatic Python, automation scripting, built-in data structures, backend prototyping, and algorithmic scripts.",
      categories: [
        {
          name: "Advanced Pythonic Concepts",
          topics: ["List, Dict & Set Comprehensions", "Generators & yield expressions", "Lambda functions, map, filter", "*args & **kwargs variable unpacking", "Decorators & context managers (with)"]
        },
        {
          name: "Built-In & Collections Module",
          topics: ["collections.deque (O(1) pops)", "collections.defaultdict & Counter", "heapq module (min-heaps)", "bisect module for binary search", "itertools (permutations, combinations)"]
        },
        {
          name: "System, Scripting & Backend Tools",
          topics: ["File I/O (JSON, CSV, Text)", "OS & Sys modules (paths, processes)", "HTTP requests & REST API consumption", "Modular project structuring & virtual environments"]
        }
      ]
    },

    java: {
      title: "Java & Battleship Engine Architecture",
      level: "Intermediate",
      summary: "Object-oriented software design, Swing GUI event-driven programming, custom physics simulation, and state machines.",
      categories: [
        {
          name: "Core Java & OOP",
          topics: ["Encapsulation, Inheritance, Polymorphism", "Abstract classes & Interfaces", "Collections Framework (ArrayList, HashMap)", "Exception Handling & Resource management", "Multi-threading & Timer-driven loops"]
        },
        {
          name: "Battleship Engine Architectural Design",
          topics: ["Strict State Machine (Placement, Pass Screen, Battle, GameOver)", "10x10 Matrix Coordinate Collision & Boundary Validators", "Ship Fleet Specifications (Carrier, Battleship, Cruiser, Submarine, Destroyer)", "Concealed Turn-based State Management for 2 Players"]
        },
        {
          name: "GUI & Custom Graphics Simulation",
          topics: ["Java Swing & AWT (JFrame, JPanel, custom paintComponent)", "Timer-driven Particle Animation Physics (explosions, missile trails)", "Event-Driven Listeners (MouseListener, ActionListener)", "Audio integration (javax.sound.sampled audio playback)"]
        }
      ]
    },

    math: {
      title: "Mathematics & Analytical Foundations",
      level: "Mastered / Strong",
      summary: "Theoretical discrete mathematics, differential calculus, and vector spaces underpinning computer science.",
      categories: [
        {
          name: "Discrete Mathematics (Mastered)",
          topics: ["Propositional & Predicate Logic (Truth tables, quantifiers)", "Set Theory, Venn Diagrams & Cartesian Products", "Relations & Equivalence Classes", "Combinatorics (Permutations, Combinations, Pigeonhole Principle)", "Graph Theory (Degrees, Paths, Cycles, Trees, Bipartite Graphs)", "Mathematical Induction & Direct/Contradiction Proofs"]
        },
        {
          name: "Differential Calculus (Strong)",
          topics: ["Limits & Continuity", "First & Higher Order Derivatives", "Product, Quotient & Chain Rules", "Rate of Change & Tangent Lines", "Function Optimization (Local/Global Maxima & Minima)", "Analytical Curve Sketching"]
        },
        {
          name: "Vector Analysis (Strong)",
          topics: ["2D and 3D Vector Geometry", "Dot (Scalar) Product & Orthogonality", "Cross (Vector) Product & Area calculation", "Scalar & Vector Projections", "3D Coordinate Transformations & Unit Vectors", "Gradients & Directional Derivatives"]
        }
      ]
    },

    eee: {
      title: "Electrical & Electronic Engineering (EEE)",
      level: "Undergraduate Study",
      summary: "Hardware computing bedrock, solid-state electronics, semiconductor physics, and electrical machines.",
      categories: [
        {
          name: "Semiconductor Physics",
          topics: ["Energy Bands (Valence, Conduction, Bandgap)", "Intrinsic & Extrinsic Semiconductors (P-type & N-type dopants)", "P-N Junction Formation & Depletion Layer Dynamics", "Diodes: Forward Bias, Reverse Bias, Rectification & Zener Effect", "Bipolar Junction Transistors (BJT) & Configurations", "MOSFET switches & physical logic gate implementation"]
        },
        {
          name: "Machine Mechanisms & Electromechanical Systems",
          topics: ["Magnetic Circuits & Flux Concepts", "DC Motors & Operating Principles (Back EMF)", "DC Generators & Voltage Generation", "AC Induction Motors & Rotating Magnetic Fields", "Transformers & Power Conversion Basics", "Electromechanical Torque & Rotational Dynamics"]
        },
        {
          name: "Circuit Fundamentals",
          topics: ["Ohm's Law & Kirchhoff's Current/Voltage Laws (KCL/KVL)", "Series, Parallel & Voltage/Current Divider Rules", "Capacitive & Inductive Impedance", "AC/DC Circuit Behaviour"]
        }
      ]
    },

    accounting: {
      title: "Financial Accounting & Business Logic",
      level: "Business Acumen",
      summary: "Financial mechanics, transactional integrity, ledger reconciliation, and business logic essential for FinTech backends.",
      categories: [
        {
          name: "Double-Entry Bookkeeping Principles",
          topics: ["The Fundamental Accounting Equation (Assets = Liabilities + Equity)", "Golden Rules of Debit and Credit", "Dual-aspect concept in every business transaction", "Source Documents & Voucher Verification"]
        },
        {
          name: "Ledgers & Accounting Cycle",
          topics: ["Journalizing Financial Transactions", "Posting to General Ledger & Subsidiary Ledgers", "Balancing Ledger Accounts", "Trial Balance Preparation & Error Detection", "Adjusting & Closing Entries"]
        },
        {
          name: "Financial Reporting",
          topics: ["Income Statement (Revenues, Expenses, Net Profit/Loss)", "Balance Sheet (Assets, Liabilities, Owner's Capital)", "Cash Flow Overview", "Depreciation & Asset Valuation Basics"]
        },
        {
          name: "Relevance to Software & FinTech Backends",
          topics: ["Designing ACID-Compliant Transaction Tables", "Preventing Double-Spending via Strict Debit/Credit Symmetry", "Immutable Financial Audit Trails & Event Sourcing", "Automated Reconciliation Systems"]
        }
      ]
    }
  },

  // Featured Engineering Projects
  projects: [
    {
      id: "battleship-engine",
      title: "Battleship 2-Player Game Engine & Combat Simulator",
      category: "backend",
      featured: true,
      badge: "Desktop / OOP Architecture",
      description: "A complete object-oriented turn-based naval combat game engine developed in Java. Engineered with custom state machines for game phases, grid collision detection, particle physics simulation for explosions, and dynamic audio integration.",
      highlights: [
        "Architected discrete game lifecycle states: PLACEMENT, PASS_SCREEN, BATTLE, GAME_OVER",
        "Implemented 2D matrix fleet coordinate mapping with custom collision and boundary validators",
        "Developed custom timer-driven particle animation rendering and event-driven Swing interface",
        "Full support for sound synthesis and turn-based player state concealment"
      ],
      tech: ["Java", "OOP", "Swing / AWT", "Event-Driven", "State Machine", "Particle Physics"],
      github: "https://github.com/aytamim83",
      demo: null
    },
    {
      id: "cf-algorithmic-engine",
      title: "Codeforces Algorithmic Solutions & DSA Library",
      category: "algorithms",
      featured: true,
      badge: "C++ / Competitive Programming",
      description: "A high-performance repository of algorithmic solutions tackling complex challenges from Codeforces (Handle: Aytamim83). Focuses on optimal time and space complexity with clean idiomatic C++ and Python.",
      highlights: [
        "Implemented graph traversals, dynamic programming paradigms, and greedy algorithms",
        "Benchmarked execution times (under 1.0s) and minimized memory footprint using C++ STL best practices",
        "Covers number theory, bit manipulation, combinatorics, and string algorithms"
      ],
      tech: ["C++", "Python", "STL", "Algorithms", "Codeforces", "Complexity Optimization"],
      github: "https://github.com/aytamim83",
      demo: "https://codeforces.com/profile/Aytamim83"
    },
    {
      id: "terminal-portfolio",
      title: "Interactive System Terminal Portfolio Engine",
      category: "systems",
      featured: true,
      badge: "Web / CLI Simulation",
      description: "A responsive, developer-centric terminal simulation that executes commands, parses arguments, and presents system diagnostic telemetry and portfolio data in a CLI environment.",
      highlights: [
        "Interactive command parser supporting commands like help, whoami, curl, skills, and clear",
        "Simulates Linux terminal output formatting, colored telemetry, and command history",
        "Zero-dependency pure JavaScript architecture engineered for sub-millisecond responsiveness"
      ],
      tech: ["JavaScript", "HTML5", "CSS3", "CLI Parsing", "Responsive Design"],
      github: "https://github.com/aytamim83",
      demo: "#terminal-section"
    },
    {
      id: "scalable-backend-starter",
      title: "RESTful Backend Architecture & Micro-Service Blueprint",
      category: "backend",
      featured: false,
      badge: "Backend Engineering",
      description: "Clean architecture blueprint demonstrating structured API routing, middleware authentication, database connectivity, and error-handling standards for backend services.",
      highlights: [
        "Separation of concerns across controllers, services, repositories, and models",
        "Standardized JSON error schemas and payload validation",
        "Configured for containerization and environment-based secret isolation"
      ],
      tech: ["Backend Architecture", "REST API", "Database Design", "Clean Code"],
      github: "https://github.com/aytamim83",
      demo: null
    }
  ],

  education: [
    {
      degree: "BSc in Computer Science & Engineering",
      institution: "Gopalganj Science & Technology University (GSTU)",
      period: "Currently Studying — 2nd Year (Expected 2028)",
      location: "Gopalganj, Bangladesh",
      details: [
        "Core Coursework: Structured Programming (C), Object-Oriented Programming (Java/C++), Data Structures & Algorithms, Discrete Mathematics, Digital Logic & Computer Architecture",
        "Interdisciplinary Studies: Semiconductor Devices, Electrical Circuits & Machine Mechanisms, Financial Accounting",
        "Active member of departmental programming community and contest participation"
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC) — Science",
      institution: "Dhaka City College",
      period: "Passed 2024",
      location: "Dhaka, Bangladesh",
      details: [
        "Mastered Higher Mathematics (Differentiation, Integration, Vectors), Physics, Chemistry, and ICT"
      ]
    },
    {
      degree: "Secondary School Certificate (SSC) — Science",
      institution: "Tamirul Millat Kamil Madrasha",
      period: "Passed 2022",
      location: "Dhaka, Bangladesh",
      details: [
        "Completed with distinction, mastering Mathematics, General Sciences, and Arabic Language Foundations"
      ]
    }
  ],

  terminalCommands: {
    help: "Available commands:\n  whoami      - Brief summary of who I am\n  skills      - List core engineering & backend skills\n  dsa         - View Data Structures & Algorithms topic breakdown\n  cpp         - View C++ & STL curriculum\n  python      - View Python concepts & scripting topics\n  java        - Inspect Java & Battleship engine architecture\n  math        - Inspect Mathematical Foundations (Discrete Math, Calculus, Vectors)\n  eee         - View Electrical & Semiconductor studies\n  accounting  - View Financial Accounting & business logic knowledge\n  langs       - List natural languages (English, Arabic, Bengali)\n  projects    - Summary of featured engineering projects\n  battleship  - Inspect the Battleship Java game engine\n  cf          - View Codeforces profile (Aytamim83)\n  edu         - View academic milestones\n  contact     - Display contact channels and email\n  github      - Open GitHub profile\n  whatsapp    - Connect via WhatsApp\n  facebook    - View Facebook profile\n  curl        - Simulate API call (usage: curl api/tamim)\n  clear       - Clear the terminal screen\n  date        - Show current server timestamp",
    whoami: "Mohammad Tamim (Abu Yousuf Tamim) — CSE Undergrad (2nd Year) @ Gopalganj Science & Technology University (GSTU)\nBackend & Software Engineering enthusiast with dedicated expertise across:\n  1. DSA (Intermediate, Codeforces: Aytamim83)\n  2. C++ & Python (Proficient)\n  3. Java & Battleship Combat Engine\n  4. Mathematics (Discrete Math Mastered, Differential Calculus, Vector Analysis)\n  5. EEE (Semiconductor Physics, Machine Mechanisms)\n  6. Accounting (Double-entry Bookkeeping, Financial Statements)\n  7. Languages (English, Arabic, Bengali)",
    skills: "Core Competency Domains:\n  * DSA (Intermediate): Trees, Graphs, DP, Sorting, Greedy, Complexity Analysis\n  * C++: Modern STL (vector, map, set, pq), Pointers, OOP, Fast I/O\n  * Python: Comprehensions, Collections, Scripting, Automation\n  * Java: OOP, State Machines, Swing GUI, Custom Particle Physics\n  * Math: Discrete Mathematics (Mastered), Differentiation, Vector Analysis\n  * EEE: Semiconductor Physics, Machine Mechanisms\n  * Accounting: Double-entry Bookkeeping, Ledger Reconciliation\n  * Tooling: Git, Linux/Bash, GCC/MinGW, VS Code",
    dsa: "Data Structures & Algorithms (Intermediate):\n  * Linear: Arrays, Linked Lists, Stacks, Queues, Deques\n  * Trees: Binary Trees, BST, Heaps/Priority Queues, Tries\n  * Graphs: BFS, DFS, Cycle Detection, Topological Sort, Dijkstra basics\n  * Paradigms: Dynamic Programming, Greedy, Binary Search, Two Pointers\n  * Math in DSA: Sieve, GCD, Modular Arithmetic, Bit Manipulation\n  * Big-O: Sub-second execution, space-time trade-offs",
    cpp: "C++ Proficiency:\n  * STL: vector, set, map, unordered_map, priority_queue, lower/upper_bound, sort\n  * Memory: Pointers, dynamic allocation, pass by reference, const correctness\n  * OOP: Classes, inheritance, virtual functions, polymorphism, operator overloading\n  * Performance: cin.tie(NULL), fast I/O, cache-friendly arrays",
    python: "Python Proficiency:\n  * Syntax: List/Dict/Set comprehensions, generators, decorators, *args/**kwargs\n  * Collections: deque, defaultdict, Counter, heapq, bisect\n  * Scripting: File I/O (JSON/CSV), OS/Sys modules, HTTP REST requests",
    java: "Java & Battleship Engine:\n  * Architecture: Strict state machine (Placement, Turn Pass, Battle, GameOver)\n  * Mechanics: 10x10 matrix collision detection, fleet concealment\n  * GUI & Physics: Swing custom graphics, timer-driven particle explosions, sound synthesis",
    math: "Mathematical Rigor:\n  1. Discrete Mathematics (Mastered): Propositional & predicate logic, set theory, combinatorics, graph theory, proofs\n  2. Differential Calculus (Strong): Derivatives, rates of change, function optimization\n  3. Vector Analysis (Strong): 3D coordinate transformations, dot & cross products, gradients",
    eee: "Electrical & Electronic Engineering (EEE):\n  * Semiconductors: P-N junctions, diodes, BJTs, MOSFETs, solid-state fundamentals\n  * Machine Mechanisms: Electrical machines, motors, generators, operational dynamics\n  * Circuits: Kirchhoff's laws, AC/DC analysis, hardware interfacing concepts",
    accounting: "Financial Accounting & Business Logic:\n  * Bookkeeping: Double-entry system, debit & credit ledgers, accounting equation\n  * Reporting: Balance sheets, income statements, cash flow tracking\n  * Tech Relevance: Transactional ACID consistency, financial reconciliation & audit trails",
    langs: "Spoken Languages:\n  * English:  Professional / Fluent (Documentation, collaboration, technical discussions)\n  * Arabic:   Proficient / Fluent reading & comprehension (العربية)\n  * Bengali:  Native (বাংলা)",
    battleship: "Project: Battleship 2-Player Naval Combat Engine\n  * Architecture: Strict state machine (Placement, Turn Pass, Battle, GameOver)\n  * Tech: Java, Swing GUI, Custom 2D particle explosion simulation, Audio synthesis\n  * Source: https://github.com/aytamim83",
    cf: "Codeforces Profile: Aytamim83\n  * URL: https://codeforces.com/profile/Aytamim83\n  * Focus: C++, Python, Data Structures, Algorithms, Time Complexity Optimization",
    edu: "Education:\n  1. BSc in CSE - Gopalganj Science & Technology University (2nd Year)\n  2. HSC (Science) - Dhaka City College (2024)\n  3. SSC (Science) - Tamirul Millat Kamil Madrasha (2022)",
    contact: "Get in touch:\n  * Email:     abuyousuftamim0@gmail.com\n  * WhatsApp:  +880 1344-623783 (https://wa.me/8801344623783)\n  * GitHub:    https://github.com/aytamim83\n  * Codeforces: https://codeforces.com/profile/Aytamim83\n  * Facebook:  https://www.facebook.com/abuyousuf.tamim.1\n  * Location:  Bangladesh",
    github: "Redirecting to https://github.com/aytamim83 ...",
    whatsapp: "Connecting to WhatsApp: https://wa.me/8801344623783 ...",
    facebook: "Opening Facebook: https://www.facebook.com/abuyousuf.tamim.1 ...",
    "curl api/tamim": "HTTP/1.1 200 OK\nContent-Type: application/json\n{\n  \"candidate\": \"Mohammad Tamim\",\n  \"full_name\": \"Abu Yousuf Tamim\",\n  \"university\": \"Gopalganj Science & Technology University\",\n  \"role\": \"Software & Backend Engineer\",\n  \"domains\": {\n    \"dsa\": \"Intermediate (Click to view curriculum in UI)\",\n    \"cpp\": \"Proficient (STL, Pointers, OOP)\",\n    \"python\": \"Proficient (Advanced, Scripting, DSA)\",\n    \"java\": \"Intermediate (OOP, Battleship State Machine, Swing)\",\n    \"math\": [\"Discrete Math (Mastered)\", \"Calculus\", \"Vectors\"],\n    \"eee\": [\"Semiconductors\", \"Machine Mechanisms\"],\n    \"accounting\": [\"Double-Entry Bookkeeping\", \"Balance Sheets\"],\n    \"spoken_languages\": [\"English\", \"Arabic\", \"Bengali\"]\n  },\n  \"open_for_hire\": true\n}"
  }
};
