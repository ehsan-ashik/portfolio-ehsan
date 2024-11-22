export const profiledata = {
  "name": "Ehsan Ul Haque",
  "headline": "Ph.D. Candidate | Former Software Engineer",
  "location": "Storrs, CT",
  "official_email": "ehsan.ul_haque@uconn.edu",
  "personal_email": "aashik.buet10@gmail.com",
  "linkedin_url": "https://www.linkedin.com/in/ehsan-ul-haque/",
  "github_url": "https://github.com/ehsan-ashik",
  "leetcode_url": "https://leetcode.com/u/ehaque052/",
  "instagram_url": "https://www.instagram.com/ehsan.ashik/?igsh=MTZwdnF2NmZheTJxdA%3D%3D"
}

export const herodata = {
  
  "title": `Hi there! I'm \n\n**${profiledata.name}**`,
  "hero_desc_parts": [
    "I'm a **former software engineer** and **current PhD candidate** in Univerity of Connecticut with a passion for learning, building, and problem-solving. My journey began in computer science, where I discovered the transformative power of programming and developed confidence through hands-on projects like a [GUI-based Tic-Tac-Toe game](https://ehsan-ashik.github.io/tic-tac-toe-unity-game/) and a [3D model of the Taj Mahal](https://github.com/ehsan-ashik/Tajmahal-3D-renderer/blob/main/rendered%20images/white-light-2.PNG).",

    "In my career, I progressed from software engineer to senior roles, mastering backend architecture, scalable code design, and agile methodologies while mentoring others along the way. My current research in usable security and privacy combines my technical skills with a human-centered approach, exploring how people interact with security and privacy tools.",

    `I'm excited by new challenges and driven to keep pushing the boundaries of what I can achieve. Feel free to reach out if you want to collaborate, have a question, or just want to connect — [**${profiledata.official_email}**](mailto:${profiledata.official_email})`
  ]
}

export const aboutdata = {
  "about_desc_parts": [
    "Hello, my name is Ehsan. My journey into technology wasn't exactly planned; it started with a love for gaming. When I began my undergraduate studies in computer science, I didn't know much about programming. But I did know that computers held tremendous power, and I was curious to understand it.",
    
    "In my first year, I started learning C. It was a rewarding experience, yet I barely scratched the surface of what programming could do. My real “aha” moment came in my second year with Java, where I developed a [GUI-based 15 puzzle game](https://games.ehsanulhaque.com/fifteenpuzzlestart) as a project. It was my first substantial creation—something I built from scratch—and it opened my eyes to the world of possibilities. I began to understand that programming was more than just lines of code; it was a tool to bring ideas to life. The initial steep learning curves didn't deter me; they motivated me. My confidence grew with each project, and I started betting on myself to conquer even the most challenging tasks.",
    
    "After graduating, I received my first job offer as a software engineer, where I quickly learned that real-world coding goes beyond writing functional code. In a company, code needs to be clean, maintainable, and scalable. I learned to implement design patterns and to write code that others could easily follow and extend. Diving into large codebases, understanding them, and making modifications was challenging but invaluable. One memorable project was creating an offline mode for a website using shell scripts. I also became familiar with agile methodologies, sprint-based workflows, and version control—practical skills that transformed me into a disciplined, well-rounded engineer.",

    "A year and a half in, I was promoted to Senior Software Engineer. This role came with new challenges and opportunities to apply the structural and architectural principles I'd been learning. I focused heavily on backend development, optimizing API services, and writing database queries for data-intensive applications. I became passionate about creating loosely coupled, reusable components and crafting modular designs that could adapt and expand as needed. But the role also introduced me to mentorship, where I guided new recruits, sharing best practices and technical insights I had picked up along the way. Helping them succeed was immensely rewarding, and it solidified my own understanding as well.",

    "After three and a half years in the industry, I decided it was time to push myself further, which led me to pursue a PhD. I was driven by a hunger for deeper knowledge and a desire to contribute meaningfully to the field of usable security. I wanted to understand not only the technical aspects of security but also how users perceive and interact with it. As an HCI researcher, I conducted user studies to uncover behavioral insights on security and privacy. Designing studies free from bias, controlling for confounding factors, and analyzing data quantitatively and qualitatively allowed me to derive meaningful conclusions about user interactions. Translating these findings into scientific papers was challenging, yet it deepened my respect for research as a tool for real-world impact.",

    "Today, as I near the end of my PhD journey, I'm excited about where this curiosity will take me next. Each step in my career, from programming as a novice to researching complex user behaviors, has been about learning, challenging myself, and expanding my capabilities. I'm driven by a genuine love for learning and building, and I can't wait to see what challenges lie ahead."
  ]
}

export const skillsdata = [
  {
    "category": "Programming Language",
    "values": [
      "Python", "Java", "C#", "C/C++"
    ]
  },
  {
    "category": "Database",
    "values": [
      "SQL Server", "MySQL", "MongoDB"
    ]
  },
  {
    "category": "Version Control",
    "values": [
      "Git", "TFS"
    ]
  },
  {
    "category": "Project Management",
    "values": [
      "Jira", "Teamwork", "Trello"
    ]
  },
  {
    "category": "Cloud Repository",
    "values": [
      "GitHub", "Bitbucket"
    ]
  },
  {
    "category": "CI/CD",
    "values": [
      "TeamCity", "Octopus", "GitHub Actions"
    ]
  },
  {
    "category": "Graphics Fremwork",
    "values": [
      "Unity", "OpenGL"
    ]
  },
  {
    "category": "Web",
    "values": [
      "Next.js", "React.js", "Vue.js", "Tailwind"
    ]
  },
  {
    "category": "Statistical Analysis",
    "values": [
      "Python", "R", "SPSS"
    ]
  },
  {
    "category": "ML/AI",
    "values": [
      "PyTorch", "LangChain", "HuggingFace", "Scikit-Learn"
    ]
  },
  {
    "category": "Others",
    "values": [
      "Docker", "AWS", "Telerik Winforms", "NUnit", "Shell"
    ]
  },
]

export const projectsdata = [
  {
    "rank": 3,
    "visible": true,
    "title": "Amazon Product Review Scraping and Parsing Toolkit",
    "description": "This application streamlines the retrieval of user reviews for Amazon products, offering flexible options to filter reviews by multiple criteria supported by Amazon. Additionally, it enables targeted review searches based on specific keywords. The tool also features built-in functionality to parse and export the collected data into JSON or CSV formats, making it easy to analyze and integrate into other workflows.",
    "github_link": "https://github.com/ehsan-ashik/amazon-product-review-scraper",
    "stack": [ "Python", "Poetry", "Beautiful Soup 4"],
    "additional_link_title": "",
    "additional_link": ""
  },

  {
    "rank": 2,
    "visible": true,
    "title": "Tic-Tac-Toe Game",
    "description": "This project recreates the iconic Tic-Tac-Toe game, designed for an engaging player experience against a sophisticated AI opponent. Players can choose from three difficulty levels—*Normal*, *Hard*, and the ultimate challenge, *Unbeatable*. The AI opponent brings a new level of strategic depth, leveraging the [Minimax algorithm with Alpha-Beta pruning](https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning) to evaluate optimal moves and anticipate the player's strategy. Each level offers a unique challenge, from casual gameplay to a flawless opponent that's hard (impossible) to beat.",
    "github_link": "https://github.com/ehsan-ashik/tic-tac-toe",
    "stack": [ "C#", "Unity 2D"],
    "additional_link_title": "Play Game",
    "additional_link": "https://ehsan-ashik.github.io/tic-tac-toe-unity-game/"
  },

  {
    "rank": 1,
    "visible": true,
    "title": "Amazon Mechanical Turk Requester API Helpers",
    "description": "This .NET application serves as a powerful toolkit for advanced requester tasks on [Amazon Mechanical Turk (MTurk)](https://www.mturk.com/). Equipped with a curated set of helper functions, it allows users to programmatically handle *requester* tasks that go beyond the capabilities of the standard MTurk Web Requester Portal. Additionally, the app supports exporting *worker* data into Excel sheets based on *QualificationTypes*, making it convenient to organize and analyze worker information. Further, the app includes a robust logging system for sensitive tasks, such as sending emails to workers.",
    "github_link": "https://github.com/ehsan-ashik/mturk-api-helpers-console-app",
    "stack": [ "C#", ".NET", "AWS MTurk SDK"],
    "additional_link_title": "",
    "additional_link": ""
  },

  {
    "rank": 6,
    "visible": true,
    "title": "Smart-on-FHIR Client Portal",
    "description": "This client portal application is designed to support [FHIR (Fast Healthcare Interoperability Resources) standards](https://www.hl7.org/fhir/overview.html), integrating various essential resources like *Practitioner*, *Patient*, and *Patient Observations*. On the backend, it supports secure authentication with [Logica EHR sandbox](https://sandbox.logicahealth.org/dashboard), ensuring reliable access to health data. For added resilience, the app includes a fallback mechanism to a local FHIR server (if available), allowing uninterrupted service when remote server authentication or authorization encounters issues. This ensures robust and secure access to health information, enhancing usability and compliance with FHIR specifications.",
    "github_link": "https://github.com/ehsan-ashik/smart-on-fhir-vuejs-client-portal",
    "stack": [ "Node.js", "Vue.js"],
    "additional_link_title": "",
    "additional_link": ""
  },

  {
    "rank": 4,
    "visible": true,
    "title": "15 Puzzle Game",
    "description": "This project brings the classic [15 Puzzle game](https://en.wikipedia.org/wiki/15_puzzle) to life with a Java Swing interface, offering an intuitive and interactive experience. From the main menu, clicking the *Game* button launches the puzzle, where players can shuffle the grid and take on the challenge of reordering the tiles to their original positions. Players begin with a perfectly ordered grid, giving a clear view of the goal configuration. If stuck, player can reset the grid to start again. With every move, the game tests players' strategic thinking and spatial skills, making it a fun and mentally engaging experience. A major challenge was figuring out how to host the game online as Swing apps are not web-compatible. I used [Webswing](https://www.webswing.org/en) to make the app web-compatible, then deployed the dockerized app in an *AWS EC2* instance.\n\n*Use **admin** as username and **pwd** as password to play.*",
    "github_link": "https://github.com/ehsan-ashik/15-puzzle-game",
    "stack": [ "Java", "Swing", "Docker", "AWS"],
    "additional_link_title": "Play Game",
    "additional_link": "https://games.ehsanulhaque.com/fifteenpuzzlestart"
  },

  {
    "rank": 7,
    "visible": false,
    "title": "mRNA-based Prostate Cancer Detection",
    "description": "In this project, I trained micro RNA-based classification models to accurately identify prostate cancer. Prostate cancer is one of the common cancer types. While some types of prostate cancer grow slowly and may not need only minimal or no treatment, some other types can be very aggressive and can grow quickly. Best fitted trained model performed well for classification task, with over 95% accuracy.",
    "github_link": "https://github.com/ehsan-ashik/prostate-cancer-classification",
    "stack": ["R"],
    "additional_link_title": "View Report",
    "additional_link": "https://github.com/ehsan-ashik/prostate-cancer-classification/blob/main/CSE_5713___Data_Mining___Project_Report.pdf"
  },

  {
    "rank": 5,
    "visible": true,
    "title": "3D Render of the Mega Structure Taj Mahal",
    "description": "This Windows application brings [the majestic Taj Mahal](https://en.wikipedia.org/wiki/Taj_Mahal) to life in 3D, allowing users to explore the architectural marvel from numerous viewpoints. With ambient lighting and optional white and blue point lights, the app creates a captivating atmosphere, casting dynamic shadows and illuminating the monument's intricate details. Users can rotate the light sources 360 degrees, enhancing the visual depth and realism of the scene. Additionally, keyboard camera controls let users navigate the 3D space, offering exploration of the structure from different viewpoints.",
    "github_link": "https://github.com/ehsan-ashik/Tajmahal-3D-renderer",
    "stack": [ "C++", "OpenGL"],
    "additional_link_title": "View Renders",
    "additional_link": "https://github.com/ehsan-ashik/Tajmahal-3D-renderer/blob/main/rendered%20images/blue-light-1.PNG"
  },
]


export const researchdata = [
  {
    "rank": 1,
    "visible": true,
    "title": "Do Technical Level and Trust in Service Providers Inform Consumers' Privacy Control Adoption?",
    "description": "As tech companies increasingly collect user data, understanding how users perceive and respond to privacy controls is crucial. This study examines the trust gap between technical and non-technical users in service providers' data collection. By uncovering these disparities, we aim to inform the development of more effective privacy tools that resonate with diverse user groups.",
    "paper_link": "https://dl.acm.org/doi/full/10.1145/3544548.3581387",
    "stack": [ "SPSS", "R", "Python"],
    "additional_link_title": "View Poster",
    "additional_link": "https://drive.google.com/file/d/1td5S5YX87nW9XsEBLJ7Bi7UPx8aHkD4p/view",
    "visual_type": "slides",
    "visual_link": `<iframe
              src="https://uconn-my.sharepoint.com/personal/ehsan_ul_haque_uconn_edu/_layouts/15/Doc.aspx?sourcedoc={8b958379-784e-46f0-809a-17ed9607a80f}&amp;action=embedview&amp;wdAr=1.7777777777777777"
              class="w-full lg:w-[450px] h-[285px] rounded-lg"
            ></iframe>`,
    "remark": "The paper based on this project received 'Best Paper Award at 2023 ACM CHI Conference on Human Factors in Computing Systems'"
  },

  {
    "rank": 2,
    "visible": true,
    "title": "What Characteristics Lead to users' WTP for premium data privacy controls in IoT?",
    "description": "As the Internet of Things (IoT) expands, so do concerns about personal data privacy. Our research reveals that users are willing to pay for enhanced privacy protection, especially those with higher technical literacy. This finding underscores the need for IoT devices to prioritize user privacy and offer transparent, customizable privacy settings.",
    "paper_link": "https://dl.acm.org/doi/abs/10.1145/3617072.3617118",
    "stack": [ "SPSS", "R" ],
    "additional_link_title": "",
    "additional_link": "",
    "visual_type": "slides",
    "visual_link": `<iframe
              src="https://uconn-my.sharepoint.com/personal/ehsan_ul_haque_uconn_edu/_layouts/15/Doc.aspx?sourcedoc={d32c9865-2728-42a1-93f7-91ae94146c3e}&amp;action=embedview&amp;wdAr=1.7777777777777777"
              class="w-full lg:w-[450px] h-[285px] rounded-lg"
            ></iframe>`,
  },

  {
    "rank": 3,
    "visible": true,
    "title": "Who's to Blame When a Data Breach Occurs?",
    "description": "This study explores how users' past security actions impact their blame attribution. Surprisingly, we found that non-compliant users tend to deflect blame onto service providers. These insights can help organizations develop more effective pre- and post-breach communication strategies.",
    "paper_link": "https://dl.acm.org/doi/abs/10.1145/3617072.3617117",
    "stack": [ "SPSS", "R" ],
    "additional_link_title": "",
    "additional_link": "",
    "visual_type": "slides",
    "visual_link": `<iframe
              src="https://uconn-my.sharepoint.com/personal/ehsan_ul_haque_uconn_edu/_layouts/15/Doc.aspx?sourcedoc={dd9d944a-2dce-4e11-a456-034abb8811b9}&amp;action=embedview&amp;wdAr=1.7777777777777777"
              class="w-full lg:w-[450px] h-[285px] rounded-lg"
            ></iframe>`,
  },

  {
    "rank": 4,
    "visible": true,
    "title": "How do Users' Calculate Tradeoff between Privacy and Money at IoT Purchase Time?",
    "description": "As the 'pay for privacy' model gains momentum, we investigated how users weigh data privacy against monetary benefits. Our study, using an incentive-compatible lottery on Prolific, uncovers the subtle calculations that drive user choices in privacy-focused IoT purchases.",
    "paper_link": "",
    "stack": [ "SPSS", "R", "Python" ],
    "additional_link_title": "",
    "additional_link": "",
    "visual_type": "image",
    "remark": "The paper based on this project is currently under review.",
    "visual_link": "/images/wtp_plan.png",
  },

  {
    "rank": 5,
    "visible": true,
    "title": "How Do Users' Decide to Update Software?",
    "description": "This research explores why some users are more likely to update their software than others. While factors like update type (security vs. performance) and required restarts were not significant, trust in the software provider emerged as a key influence. Interestingly, those who intended to update often experienced higher levels of cognitive dissonance, suggesting that the decision to update can be a complex psychological process",
    "paper_link": "",
    "stack": [ "SPSS" ],
    "additional_link_title": "",
    "additional_link": "",
    "visual_type": "image",
    "remark": "The paper based on this project is currently under review.",
    "visual_link": "/images/windows_update.png",
  },

  {
    "rank": 6,
    "visible": true,
    "title": "How to Efficiently Detect Anime Faces Leveraging Combined Cascade Classifiers?",
    "description": "Anime face detection poses unique challenges due to its stylized nature. We address these challenges by training a cascade of classifiers, each focused on a specific facial feature. Our experimental results demonstrate the effectiveness of this approach, achieving a high detection accuracy.",
    "paper_link": "https://drive.google.com/file/d/1HtXyDIrF4T3xixnA0fd4yDLZuXg5yuQo/view",
    "stack": [ "OpenCV", "Java"],
    "additional_link_title": "View Poster",
    "additional_link": "https://drive.google.com/file/d/1ihbhulR7nJBVLImm-Q63k3cgW0U1bQGH/view",
    "visual_type": "image",
    "visual_link": "/images/sciev.png",
    "remark": "Undergraduate thesis"
  },
]