const experienceContainerElement = document.getElementById(
  "experienceContainer",
);

const getBorder = (num) => {
  if (num % 3 === 0) {
    return "border-left: 8px solid orange";
  } else if (num % 2 === 0) {
    return "border-left: 8px solid pink";
  } else {
    return "border-left: 8px solid lightGreen";
  }
};

const experiences = [
  {
    company: "Virtual Internships",
    link: "https://www.virtualinternships.com/",
    duration: "Jan 2024 to present",
    location: "UK (Remote)",
    techStack: [
      "TypeScript",
      "ReactJs",
      "RTK",
      "RTKQ",
      "Tailwind",
      "MUi",
      "antd",
      "NodeJs",
      "ExpressJs",
      "TypeORM",
      "MySQL",
    ],
    data: [
      {
        role: "Senior Software Engineer (SDE3)",
        description:
          "Leading and scaling the frontend team while driving architectural decisions, feature roadmaps, and end-to-end project delivery. Spearheading performance optimization, monitoring, and observability initiatives. Actively mentoring engineers and establishing best practices through comprehensive code reviews.",
      },
      {
        role: "Senior Frontend Engineer (SDE2)",
        description:
          "My role as a Senior Frontend Engineer involves decision making, planning, coding, performance monitoring, security measuring, mentoring and code reviews.",
      },
    ],
  },
  {
    company: "Tekion Corp",
    link: "https://tekion.com/",
    duration: "June 2023 to Jan 2024",
    location: "Bengaluru, India",
    techStack: ["JavaScript", "ReactJs", "Redux", "SCSS", "antd"],
    data: [
      {
        role: "Software Engineer",
        description:
          "My role as an SWE involved writing code for new features, resolving critical bugs, and maintaining the quality of code through PR reviews of my fellow developers.",
      },
    ],
  },
  {
    company: "Reliance Jio",
    link: "https://healthhub.jio.com",
    duration: "Aug 2020 to June 2023",
    location: "Navi Mumbai, India",
    techStack: [
      "TypeScript",
      "JavaScript",
      "ReactJs",
      "Redux",
      "SCSS",
      "Bootstrap",
    ],
    data: [
      {
        role: "SDE2",
        description:
          "As an SDE2, my primary role was to collaborate with product managers and designers for all new features and designs, create LLDs for the features, write scalable code, and guide my juniors.",
      },
      {
        role: "SDE1",
        description:
          "My role as a SDE involved writing code for new features, resolving critical bugs, writing test cases for the features, and maintaining the quality of code through PR reviews of my fellow developers.",
      },
    ],
  },
];

const showExperiences = () => {
  const experienceHtml = experiences.map((experience, i = 0) => {
    const techList = experience.techStack?.map(
      (techItem) =>
        `<span class='tech' style='${getColor(techItem)}'>#${techItem}</span>`,
    );

    const description = experience.data?.map(
      (dataItem) => `<div class='data-wrapper'>
        <div class='role'>${dataItem.role}</div>
        <div class='description'>${dataItem.description}</div>
      </div>`,
    );

    return `<div style='${getBorder(i + 1)}' class="experience-wrapper">
        <div class="experience-wrapper-left">
          <a href=${experience.link} target="_blank">
            <div class="company">${experience.company || ""}</div>
          </a>
          <div class="location">${experience.location || ""}</div>
          <div class="duration">${experience.duration}</div>
        </div>
        <div class="experience-wrapper-right">
          <div class="data">${description?.join("") || ""}</div>
          <div class="tech-list">${techList?.join("") || ""}</div>
        </div>
      </div>`;
  });

  experienceContainerElement.innerHTML = experienceHtml.join("");
};

showExperiences();
