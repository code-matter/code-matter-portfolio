export type Experience = {
  workplace: string;
  jobTitle: string;
  url?: string;
  description: string;
  dates: string[];
  skills: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    workplace: "Norda Stela",
    jobTitle: "Developer",
    url: "https://norda.com/en/",
    description:
      "Collaborated in a team to develop and maintain an internal platform for employees asset management data entry. Utilized Agile methodologies to enhance productivity and ensure timely project delivery. Developed and maintained mobile applications using React Native in a small team of 3, focusing on delivering high-quality mobile solutions. Contributed to the design and development of Unifika (Made by Planifika), a platform for architectural and mechanical asset management. Implemented responsive web design to ensure optimal user experience across various devices. Engaged in regular code reviews and participated in team meetings to align on project goals and progress.",
    dates: ["Jun. 2022", "Present"],
    skills: [
      "ReactJS",
      "React Native",
      "NextJS",
      "Ruby on Rails",
      "MYSQL",
      "Agile Methodologies",
      "Responsive Web Design",
      "Asset Management",
      "Team Collaboration",
      "Code Review",
    ],
  },
  {
    workplace: "Planifika",
    jobTitle: "Junior Web Developer",
    url: undefined,
    description:
      "Developed and maintained an internal website essential for daily operations, enabling employees to efficiently input data related to asset management. Collaborated with a team of three to design and implement a responsive website tailored to meet the specific needs of employees. Acted as part of the primary IT team, addressing and resolving various IT requests and issues from employees. Ensured the website's functionality and usability met high standards through continuous testing, debugging, and user feedback analysis. Provided technical expertise and support to colleagues on software issues, contributing to a smooth operational environment. Implemented enhancements and updates to the internal website based on user feedback and evolving business requirements.",
    dates: ["Sep. 2022", "Jun. 2022"],
    skills: [
      "ReactJS",
      "Ruby on Rails",
      "MYSQL",
      "IT Support",
      "Problem Solving",
      "Asset Management",
      "Responsive Web Design",
      "Team Collaboration",
      "Code Review",
    ],
  },
  {
    workplace: "04h11",
    jobTitle: "Junior Web Developer",
    url: undefined,
    description:
      "Developed responsive and interactive front-end features using ReactJS for client websites, ensuring optimal user experience and performance. Gained experience in back-end development using Ruby on Rails and MySQL. Implemented data visualization techniques using D3.js to present complex information in a clear and insightful manner for clients. Designed and maintained websites for various clients, incorporating web styling to enhance visual appeal and user engagement. Ensured websites responsiveness across different devices. Collaborated with cross-functional teams including designers and project managers to deliver high-quality web solutions within project timelines.",
    dates: ["Oct. 2021", "Sep. 2022"],
    skills: [
      "ReactJS",
      "Ruby on Rails",
      "MYSQL",
      "D3.js",
      "Responsive Web Design",
      "Client Communication",
      "Team Collaboration",
    ],
  },
  {
    workplace: "TechnoScience",
    jobTitle: "Science & Programming Workshop Educator",
    url: "https://technoscience.ca/",
    description:
      "Designed and delivered engaging Science and Python programming workshops for children, fostering their interest and understanding in STEM subjects. Conducted workshops utilizing Raspberry Pi and guided participants in building and programming robots using Python, enhancing their practical skills and creativity. Developed customized workshop content, adapting curriculum to cater to varying age groups and educational backgrounds. Trained fellow educators on delivering effective workshop sessions, ensuring consistency and quality across programs. Planned and executed presentations using PowerPoint to effectively communicate workshop content and engage participants. Monitored and evaluated workshop outcomes, gathering feedback to continuously improve curriculum and teaching methods.",
    dates: ["Jan. 2020", "Jun. 2022"],
    skills: [
      "Python",
      "Raspbery Pi",
      "ReactJS",
      "Teaching",
      "Workshop Development",
      "Presentation Skills",
      "Educational Outreach",
    ],
  },
  {
    workplace: "Kreezee",
    jobTitle: "Web Developer Internship",
    url: "https://www.kreezee.com/",
    description:
      "Developed and implemented various widgets for the company's WYSIWYG website builder, including an image carousel, file uploader/viewer, and calendar. Collaborated with team members to design and integrate user-friendly features, enhancing the functionality and usability of the WYSIWYG builder platform. Utilized Angular framework to create dynamic and responsive front-end components. Gained proficiency in backend development using C# and .NET framework. Participated in agile development processes, contributing to daily stand-ups, sprint planning, and code reviews. Assisted in troubleshooting and resolving technical issues to ensure smooth operation of web applications. Acquired hands-on experience in version control and collaborative coding environments.",
    dates: ["Summer 2020"],
    skills: [
      "Angular",
      ".NET",
      "C#",
      "Agile Methodologies",
      "Problem Solving",
      "Team Collaboration",
      "Responsive Web Design",
      "Code Review",
    ],
  },
];
