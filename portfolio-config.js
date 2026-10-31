// MOHAMED THOUFIQ M - Full Stack Developer & Technical Trainer Portfolio Configuration
window.PORTFOLIO_DATA = {
  profile: {
    name: "Mohamed Thoufiq M",
    title: "Full Stack Developer & Technical Trainer",
    headline: "MERN Stack • Database Architecture • Scalable Web Applications • Technical Mentorship",
    bio: "Full Stack Developer with hands-on experience across the MERN stack, database design, and technical training. Currently pursuing a B.Tech in Information Technology (CGPA: 8.36) alongside a Full Stack Development internship at TAP Academy, where strong performance led to selection as a Technical Trainer. Skilled in building scalable web applications, writing optimized SQL queries and stored procedures, and mentoring peers on full-stack concepts.",
    careerObjective: "Aiming to expand into campus-level technical training, delivering full-stack development programs at engineering colleges and helping students build practical, industry-ready skills.",
    phone: "+91 9629394553",
    email: "thoufiq17204@gmail.com",
    linkedin: "https://www.linkedin.com/in/mohamedthoufiq-m",
    linkedinHandle: "mohamedthoufiq-m",
    github: "https://github.com/Thoufiq1710",
    githubHandle: "Thoufiq1710",
    college: "Mohamed Sathak A.J. College of Engineering, Chennai, Tamil Nadu",
    degree: "B.Tech, Information Technology",
    cgpa: "8.36 / 10",
    period: "2022 – 2026",
    status: "Technical Trainer @ TAP Academy & Full Stack Developer",
    statusBadge: "Available for Training & Full-Stack Projects",
    photoUrl: "profile-photo.png"
  },

  // Interactive Gamification Questions to Unlock Profile Photo
  profileGame: {
    title: "Mohamed Thoufiq's Developer Quest",
    tagline: "Answer a Coding, Technical, or MCQ question correctly to decrypt and view the verified profile photo!",
    categories: [
      {
        id: "coding",
        name: "Coding Challenge",
        icon: "code",
        badge: "Logic & Syntax",
        questions: [
          {
            id: "c1",
            question: "What is the main logic condition for finding whether an integer variable 'i' is an even number in Java / JavaScript?",
            options: [
              { key: "A", text: "i % 2 == 0  (or i % 2 === 0)", correct: true },
              { key: "B", text: "i / 2 == 0", correct: false },
              { key: "C", text: "i * 2 == 0", correct: false },
              { key: "D", text: "i % 2 == 1", correct: false }
            ],
            explanation: "The modulo operator (%) yields the remainder of a division. For any even number divided by 2, remainder is strictly 0 (i % 2 == 0)."
          },
          {
            id: "c2",
            question: "Which keyword in Core Java is used to dynamically instantiate an object from a class definition?",
            options: [
              { key: "A", text: "new", correct: true },
              { key: "B", text: "this", correct: false },
              { key: "C", text: "class", correct: false },
              { key: "D", text: "static", correct: false }
            ],
            explanation: "The 'new' keyword allocates memory at runtime on the Java heap to instantiate a new object."
          }
        ]
      },
      {
        id: "technical",
        name: "Technical OOP Questions",
        icon: "cpu",
        badge: "Core Engineering",
        questions: [
          {
            id: "t1",
            question: "What are the Four Pillars of Object-Oriented Programming (OOP) in Core Java?",
            options: [
              { key: "A", text: "Encapsulation, Inheritance, Polymorphism, Abstraction", correct: true },
              { key: "B", text: "Compilation, Interpretation, Execution, Debugging", correct: false },
              { key: "C", text: "Classes, Objects, Methods, Variables", correct: false },
              { key: "D", text: "Relational, Document, Graph, Key-Value", correct: false }
            ],
            explanation: "The 4 fundamental pillars of OOP are Encapsulation (data hiding), Inheritance (code reuse), Polymorphism (multiple behaviors), and Abstraction (hiding implementation complexity)."
          },
          {
            id: "t2",
            question: "What is Encapsulation in Object-Oriented Programming?",
            options: [
              { key: "A", text: "Wrapping data (variables) and code (methods) together as a single unit with private fields and getter/setter access", correct: true },
              { key: "B", text: "Allowing a child class to inherit fields and methods from a parent class", correct: false },
              { key: "C", text: "Writing the same method with different parameter signatures", correct: false },
              { key: "D", text: "Translating Java source files directly into machine assembly", correct: false }
            ],
            explanation: "Encapsulation binds data and the methods that manipulate that data into a protective unit, safeguarding internal state via private variables and public accessors."
          }
        ]
      },
      {
        id: "mcq",
        name: "Database & Full Stack MCQ",
        icon: "database",
        badge: "MySQL & Web Dev",
        questions: [
          {
            id: "m1",
            question: "In MySQL relational database architecture, what is a Stored Procedure?",
            options: [
              { key: "A", text: "A pre-compiled collection of SQL statements saved in the database for reuse, automation, and optimal query speed", correct: true },
              { key: "B", text: "A temporary storage bucket in browser cookies", correct: false },
              { key: "C", text: "A hardware device used to connect network cables", correct: false },
              { key: "D", text: "A CSS layout rule used for responsive styling", correct: false }
            ],
            explanation: "Stored procedures are pre-compiled and cached on the database server, automating repetitive business logic and significantly improving query performance."
          },
          {
            id: "m2",
            question: "Which SQL clause is used to eliminate duplicate rows from a query result set?",
            options: [
              { key: "A", text: "SELECT DISTINCT column_name FROM table_name", correct: true },
              { key: "B", text: "SELECT UNIQUE column_name FROM table_name", correct: false },
              { key: "C", text: "SELECT FILTER column_name FROM table_name", correct: false },
              { key: "D", text: "SELECT ISOLATE column_name FROM table_name", correct: false }
            ],
            explanation: "The DISTINCT keyword is placed immediately after SELECT to filter out duplicate rows and return only distinct values."
          }
        ]
      }
    ]
  },

  metrics: [
    { label: "Engineering Colleges Trained", value: "4+", icon: "award", subtitle: "Campus Full-Stack Programs" },
    { label: "B.Tech IT CGPA", value: "8.36", icon: "book-open", subtitle: "Academic Excellence" },
    { label: "Database Performance", value: "100%", icon: "database", subtitle: "Optimized SQL & Procedures" },
    { label: "Trainees Mentored", value: "250+", icon: "users", subtitle: "Full Stack & Core Java" }
  ],

  infographic: {
    title: "Full-Stack & Database Engineering Architecture (8K Infographic)",
    description: "Architectural blueprint mapping Mohamed Thoufiq's end-to-end engineering matrix: MERN Stack frontend reactive state, Java OOP services, MySQL relational schema normalization, and campus technical training pipeline.",
    imagePath: "infographic-8k.jpg",
    tags: ["8K UHD Render", "MERN & Java Stack", "MySQL Stored Procedures", "Interactive Flow"]
  },

  skillsCategorized: {
    "Programming Languages": [
      { name: "Core Java", level: 92, tags: ["OOP", "Collections", "Exception Handling", "Multithreading"] }
    ],
    "Frontend Development": [
      { name: "HTML5", level: 98, tags: ["Semantic HTML", "Accessibility", "SEO"] },
      { name: "CSS3", level: 95, tags: ["Flexbox", "CSS Grid", "Animations", "Responsive Design"] },
      { name: "JavaScript (ES6+)", level: 94, tags: ["DOM", "Async/Await", "Event Loop", "Closures"] },
      { name: "MERN Stack / React", level: 90, tags: ["Components", "Hooks", "State Management", "SPA"] }
    ],
    "Backend & Architecture": [
      { name: "REST APIs", level: 92, tags: ["API Design", "JSON Serialization", "Endpoints", "Postman"] },
      { name: "CRUD Operations", level: 96, tags: ["Data Flow", "Validation", "Controllers", "Routing"] },
      { name: "Object-Oriented Programming (OOP)", level: 95, tags: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"] }
    ],
    "Database Engineering": [
      { name: "MySQL", level: 96, tags: ["Relational Design", "Indexing", "Normalization (3NF)", "Foreign Keys"] },
      { name: "Stored Procedures", level: 94, tags: ["Automated Business Logic", "Triggers", "Transactions"] },
      { name: "SQL Queries", level: 97, tags: ["Complex Joins", "Subqueries", "Query Optimization"] },
      { name: "MySQL Workbench", level: 95, tags: ["Schema Modeling", "EER Diagrams", "Query Profiling"] },
      { name: "Database Design", level: 96, tags: ["Schema Architecture", "Constraints", "Data Integrity"] }
    ],
    "Professional & Mentorship": [
      { name: "Technical Training", level: 98, tags: ["Curriculum Delivery", "Live Coding", "Workshops"] },
      { name: "Mentoring & Code Review", level: 96, tags: ["1-on-1 Guidance", "Debug Sessions", "Best Practices"] },
      { name: "Technical Communication", level: 95, tags: ["Simplifying Complex Concepts", "College Seminars"] }
    ]
  },

  experience: [
    {
      role: "Technical Trainer (Intern)",
      company: "TAP Academy",
      period: "Jul 2026 – Present",
      type: "8-Month Internship",
      badge: "Promoted in 2 Months",
      highlights: [
        "Selected as a Technical Trainer after just two months into the Full Stack Development internship in recognition of strong technical competence and clear communication skills (joined trainer role on July 11, 2026).",
        "Deliver intensive training sessions on full-stack web development, covering HTML, CSS, JavaScript, Core Java, and MySQL to diverse trainee batches.",
        "Mentor trainees on hands-on full-stack projects, review codebases, and resolve complex technical doubts to reinforce practical engineering foundations.",
        "Design and refine hands-on training materials, coding exercises, and real-world examples to simplify intricate full-stack concepts for learners."
      ]
    },
    {
      role: "Full Stack Development Intern",
      company: "TAP Academy",
      period: "May 2026 – Present",
      type: "6-Month Program",
      badge: "Intensive Track",
      highlights: [
        "Undergoing rigorous hands-on training in end-to-end full-stack web development across HTML, CSS, JavaScript, Core Java, and MySQL.",
        "Built practical web projects applying clean REST API design, robust CRUD operations, and seamless database integration between frontend and backend.",
        "Practiced industry-aligned coding standards, strict version control with Git/GitHub, and collaborative agile development workflows."
      ]
    },
    {
      role: "MERN Stack Intern",
      company: "LogicApps MI",
      period: "3 Months",
      type: "Internship",
      badge: "Database & Backend Focus",
      highlights: [
        "Designed and developed a highly scalable MySQL database architecture ensuring strict data integrity, consistency, and high throughput under concurrent load.",
        "Created and optimized complex SQL queries, stored procedures, and custom database objects to streamline business processes and accelerate data retrieval.",
        "Designed fully normalized database schemas with proper foreign key relationships, constraints, and indexing techniques for robust backend integration.",
        "Collaborated closely with frontend and backend developers to integrate complex database workflows seamlessly with application REST APIs.",
        "Managed enterprise databases using MySQL Workbench, ensuring efficient data storage, query profiling, and maintenance across development cycles."
      ]
    }
  ],

  campusEngagements: [
    {
      college: "Idhya College of Engineering",
      program: "Full Stack Web Development",
      stack: "HTML, CSS, JavaScript, Core Java, MySQL",
      icon: "cpu"
    },
    {
      college: "St. John's College of Engineering",
      program: "Full Stack Web Development",
      stack: "HTML, CSS, JavaScript, Core Java, MySQL",
      icon: "code"
    },
    {
      college: "Global College of Academy",
      program: "Full Stack Web Development",
      stack: "HTML, CSS, JavaScript, Core Java, MySQL",
      icon: "globe"
    },
    {
      college: "Government College of Engineering, Chalkere",
      program: "Full Stack Web Development",
      stack: "HTML, CSS, JavaScript, Core Java, MySQL",
      icon: "terminal"
    }
  ],

  projects: [
    {
      id: "genprocsql",
      title: "GENPROCSQL — Full Stack Web Application & Database Engine",
      subtitle: "Automated Stored Procedure Generator & Normalized MySQL Architecture",
      category: "Full Stack & Database Engineering",
      badge: "Primary Featured Project",
      duration: "3 Months",
      github: "https://github.com/Thoufiq1710/GENPROCSQL",
      githubShort: "github.com/Thoufiq1710/GENPROCSQL",
      summary: "High-performance full stack web platform built with a normalized MySQL database schema, automated stored procedures, optimized SQL queries, and seamless REST API integration.",
      accentColor: "#06b6d4",
      highlights: [
        "Designed and implemented complete MySQL database schema to support end-to-end frontend and backend functionality.",
        "Developed optimized SQL queries and stored procedures to automate business logic, improve data retrieval, and enhance database performance.",
        "Established an efficient database architecture with proper relationships, 3NF normalization, and data integrity for scalable application development.",
        "Collaborated with frontend and backend developers to define database workflows and enable seamless API integration.",
        "Managed database objects using MySQL Workbench for reliable data storage, maintenance, and performance optimization."
      ],
      firstPage: {
        headline: "GENPROCSQL — First-Page UI/UX Experience Viewport",
        tagline: "Live Schema & Stored Procedure Control Dashboard • Public Level-1 Viewport",
        restrictedNotice: "Object codebase and production database instances are securely isolated. You have immediate access to the First-Page UI/UX prototype, interactive flow pipeline, and design grid boxes.",
        flowSteps: [
          { step: "01", title: "Schema Ingestion & Form UI", desc: "User inputs table entity models, fields, and constraints through interactive first-page form.", icon: "file-text" },
          { step: "02", title: "Normalization & Index Parser", desc: "Automated engine checks 3NF compliance, creates foreign keys and primary indices.", icon: "cpu" },
          { step: "03", title: "Stored Procedure Synthesis", desc: "Generates parameterized CRUD stored procedures, triggers, and transactional blocks.", icon: "database" },
          { step: "04", title: "Gated Object Execution", desc: "Restricted backend service connects to MySQL Workbench with authorized credentials.", icon: "lock" }
        ],
        gridBoxes: [
          {
            title: "Database Normalization Box",
            badge: "Architecture",
            desc: "Structured schema modeling with primary-foreign key relationships, cascading constraints, and 3NF integrity.",
            metric: "3NF Compliant • Zero Data Redundancy",
            color: "cyan"
          },
          {
            title: "Stored Procedure Grid",
            badge: "Optimization",
            desc: "Pre-compiled SQL procedures executing parameterized CRUD actions with sub-millisecond execution times.",
            metric: "Optimized Execution Plans • Indexed Queries",
            color: "purple"
          },
          {
            title: "REST API Integration Flow",
            badge: "Workflow",
            desc: "Bridging frontend JSON client payloads to backend controllers with rigorous input sanitization.",
            metric: "RESTful Endpoints • CRUD Pipeline",
            color: "emerald"
          },
          {
            title: "Object Access Control Matrix",
            badge: "Security Clearance",
            desc: "Visitors explore the First-Page UI/UX interface and schema flow. Complete database object requires authenticated access.",
            metric: "Public Viewport Active • Full Object Protected",
            color: "amber"
          }
        ],
        liveMockup: {
          appTitle: "GENPROCSQL Studio — Live Interface Mockup",
          statusText: "Connected to MySQL Localhost (Sandboxed UI)",
          tables: [
            { name: "users_auth", rows: "1,240 rows", engine: "InnoDB" },
            { name: "stored_procedures", rows: "48 procs", engine: "InnoDB" },
            { name: "query_logs", rows: "18,492 logs", engine: "MyISAM" }
          ],
          activeProcedure: `CREATE PROCEDURE GetOptimizedUserData(IN p_userId INT)
BEGIN
  -- Optimized indexed retrieval with data integrity check
  SELECT u.id, u.username, u.email, r.role_name
  FROM users_auth u
  INNER JOIN user_roles r ON u.role_id = r.id
  WHERE u.id = p_userId AND u.is_active = 1;
END;`,
          actions: ["Run Procedure Test", "Inspect Schema Grid", "View Flow Nodes", "Request Full Codebase"]
        }
      }
    },
    {
      id: "mern-campus-hub",
      title: "Campus Trainer Lab — Interactive Full-Stack Learning Hub",
      subtitle: "Hands-on Technical Training & Code Review Platform",
      category: "Full Stack & Technical Training",
      badge: "Campus Engagement Lab",
      duration: "Ongoing",
      github: "https://github.com/Thoufiq1710",
      githubShort: "github.com/Thoufiq1710",
      summary: "Interactive training portal designed for campus engineering workshops across Idhya, St. John's, Global College, and Chalkere Engineering colleges.",
      accentColor: "#8b5cf6",
      highlights: [
        "Curated interactive full-stack learning modules covering HTML5, CSS3, ES6+ JavaScript, Core Java, and MySQL.",
        "Live code sandbox enabling real-time code reviews, syntax debugging, and logic visualization for student batches.",
        "Automated doubt resolution and technical problem-solving workflows for 250+ aspiring engineering trainees."
      ],
      firstPage: {
        headline: "Campus Trainer Lab — First-Page Student & Trainer Viewport",
        tagline: "Live Training Session Interface • Level 1 Public Clearance",
        restrictedNotice: "Instructor administration and grading engine objects are gated. Public visitors can test the first-page code sandbox and module curriculum flow.",
        flowSteps: [
          { step: "01", title: "Batch Onboarding", desc: "Engineering trainees access college-specific curriculum rooms.", icon: "users" },
          { step: "02", title: "Concept Demystification", desc: "Live walkthrough of Core Java OOP, JavaScript asynchronous flow, and SQL syntax.", icon: "monitor" },
          { step: "03", title: "Interactive Coding Grid", desc: "Students build hands-on CRUD applications with real-time mentor code review.", icon: "code" },
          { step: "04", title: "Protected Assessment Object", desc: "Automated test runner verifies code accuracy under secure sandbox.", icon: "check-circle" }
        ],
        gridBoxes: [
          {
            title: "Multi-College Curriculum Box",
            badge: "Training Matrix",
            desc: "Custom syllabus tailored for 4 engineering colleges, balancing theory with practical industry coding standards.",
            metric: "4 Colleges • 250+ Trainees",
            color: "purple"
          },
          {
            title: "Live Code Debugger Grid",
            badge: "Mentorship",
            desc: "Interactive terminal and syntax highlight box helping trainees solve Java and SQL queries on the spot.",
            metric: "Instant Doubt Resolution",
            color: "cyan"
          },
          {
            title: "Hands-on CRUD Sandbox",
            badge: "Practical Lab",
            desc: "Step-by-step guidance on connecting HTML/CSS/JS frontend to Java backend and MySQL database.",
            metric: "End-to-End MERN Integration",
            color: "emerald"
          },
          {
            title: "Restricted Object Portal",
            badge: "Access Policy",
            desc: "Visitors explore the first-page UI/UX curriculum preview. Complete grading object requires trainer authorization.",
            metric: "Public Viewport Active • Object Gated",
            color: "amber"
          }
        ],
        liveMockup: {
          appTitle: "Campus Trainer Studio — Workshop View",
          statusText: "Session Active: Full-Stack Web Development Batch",
          activeModule: "Module 4: MySQL Stored Procedures & Java JDBC Integration",
          actions: ["Test Interactive Grid", "View Curriculum Flow", "Inspect Sandbox", "Contact Trainer"]
        }
      }
    }
  ],

  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "Mohamed Sathak A.J. College of Engineering",
      location: "Chennai, Tamil Nadu",
      period: "2022 – 2026",
      cgpa: "8.36 / 10",
      description: "Pursuing Bachelor of Technology with focus on full stack web development, relational database systems, object-oriented software engineering, and data structures."
    }
  ],

  achievements: [
    {
      title: "Selected as Technical Trainer at TAP Academy",
      desc: "Promoted to Technical Trainer after just two months into the Full Stack Development internship (joined trainer role on July 11, 2026 for an 8-month opportunity), recognizing outstanding technical proficiency and ability to mentor peers.",
      icon: "zap",
      badge: "Leadership & Training"
    },
    {
      title: "Conducted Campus Full-Stack Training Across 4 Engineering Colleges",
      desc: "Delivered comprehensive full-stack web development training sessions covering HTML, CSS, JavaScript, Core Java, and MySQL for Idhya College, St. John's College, Global College, and Government College of Engineering Chalkere.",
      icon: "award",
      badge: "Campus Impact"
    },
    {
      title: "Successfully Completed 3-Month MERN Stack Internship",
      desc: "Gained intensive hands-on experience in full-stack web applications, REST API integrations, and scalable MySQL database architecture at LogicApps MI.",
      icon: "check-circle",
      badge: "Industry Experience"
    },
    {
      title: "Engineered Real-World Database Layer for GENPROCSQL",
      desc: "Architected complete relational database schema, optimized queries, and stored procedures to automate application business logic and data workflows.",
      icon: "database",
      badge: "Database Engineering"
    }
  ]
};
