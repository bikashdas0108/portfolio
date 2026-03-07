const experienceContainerElement = document.getElementById(
  "experienceContainer"
);

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
      "MUI",
      "AntD",
      "Mantine",
      "NodeJs",
      "ExpressJs",
      "TypeORM",
      "MySQL",
    ],
    data: [
      {
        role: "Senior Software Engineer (SDE3)",
        description:
          "Led the frontend team, managing planning, unblocking members, and creating LLD for new features. Established observability and monitoring systems to improve application stability, performance tracking, and incident response. Increased performance score by 30% using prefetch, lazy loading, code splitting and RTKQ caching. Improved scalability of the application by implementing modular design. Implemented LLM integration into profile and internship creation flows, enhancing user engagement.",
        highlights: ["Led frontend team", "30% performance increase", "LLM integration"],
      },
      {
        role: "Senior Frontend Engineer (SDE2)",
        description:
          "Developed an end-to-end platform for partner universities with features like authentication, multi user access, and placement report statistics. Achieved 90% code coverage by writing unit test cases. Developed a scalable backend architecture and database schema from scratch, ensuring performance and reliability.",
        highlights: ["90% code coverage", "End-to-end platform", "Backend architecture"],
      },
    ],
  },
  {
    company: "Tekion Corp",
    link: "https://tekion.com/",
    duration: "June 2023 to Jan 2024",
    location: "Bengaluru, India",
    techStack: ["JavaScript", "ReactJs", "Redux", "SCSS", "AntD"],
    data: [
      {
        role: "Software Engineer",
        description:
          "Developed Custom Hooks and Higher Order Components (HOCs) to eliminate code duplication and to improve reusability of code. Implemented advanced performance optimisation techniques, including Pure Component, debouncing, and memoization, to enhance overall efficiency of the CRM platform. Optimised performance by eliminating redundant API calls, resulting in a 40% reduction in load time. Reduced bug resolution time by ~50% using basic coding principles like DRY and SRP.",
        highlights: ["40% load time reduction", "50% faster bug resolution", "Custom Hooks & HOCs"],
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
          "Developed a Render Engine that can efficiently process JSON files and transform them into JSX, reducing the JS bundle size and the page load time. Guided a Team and collaborated with product managers, backend developers, and designers to develop a customisable user dashboard for JioHealth, leveraging a config-driven-ui.",
        highlights: ["Render Engine", "Config-driven UI", "Team leadership"],
      },
      {
        role: "SDE1",
        description:
          "Developed complex workflows such as the Corporate and CoWIN Vaccination Booking, which facilitated vaccination for over 1M individuals through the application. Increased user base by more than 200K by implementing ABDM workflows to create, link and unlink ABHA accounts. Cut down the software release cycle by 30% by implementing CI/CD pipelines to automate the build and release of the web-apps.",
        highlights: ["1M+ vaccinations facilitated", "200K+ new users", "30% faster releases"],
      },
    ],
  },
];

const accentColors = [
  { border: "var(--accent)", bg: "var(--accent-glow)" },
  { border: "var(--purple)", bg: "var(--purple-glow)" },
  { border: "var(--green)", bg: "rgba(16, 185, 129, 0.15)" },
];

// Build experience timeline using safe DOM methods
const showExperiences = () => {
  const fragment = document.createDocumentFragment();

  experiences.forEach((experience, i) => {
    const color = accentColors[i % accentColors.length];

    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item reveal";
    timelineItem.setAttribute("data-delay", i + 1);

    // Dot
    const dot = document.createElement("div");
    dot.className = "timeline-dot";
    dot.style.background = color.border;
    dot.style.boxShadow = "0 0 12px " + color.bg;
    timelineItem.appendChild(dot);

    // Card
    const card = document.createElement("div");
    card.className = "timeline-card";
    card.style.borderLeft = "3px solid " + color.border;

    // Header
    const header = document.createElement("div");
    header.className = "timeline-card-header";

    const companyInfo = document.createElement("div");
    companyInfo.className = "exp-company-info";

    const companyLink = document.createElement("a");
    companyLink.href = experience.link;
    companyLink.target = "_blank";
    companyLink.rel = "noopener noreferrer";
    const companyName = document.createElement("h3");
    companyName.className = "exp-company";
    companyName.textContent = experience.company;
    companyLink.appendChild(companyName);
    companyInfo.appendChild(companyLink);

    const locationSpan = document.createElement("span");
    locationSpan.className = "exp-location";
    locationSpan.textContent = experience.location;
    companyInfo.appendChild(locationSpan);

    const durationSpan = document.createElement("span");
    durationSpan.className = "exp-duration";
    durationSpan.textContent = experience.duration;

    header.appendChild(companyInfo);
    header.appendChild(durationSpan);
    card.appendChild(header);

    // Roles
    const rolesDiv = document.createElement("div");
    rolesDiv.className = "exp-roles";

    experience.data?.forEach((dataItem) => {
      const roleBlock = document.createElement("div");
      roleBlock.className = "exp-role-block";

      const roleTitle = document.createElement("h4");
      roleTitle.className = "exp-role";
      roleTitle.textContent = dataItem.role;
      roleBlock.appendChild(roleTitle);

      if (dataItem.highlights) {
        const highlightsDiv = document.createElement("div");
        highlightsDiv.className = "exp-highlights";
        dataItem.highlights.forEach((h) => {
          const badge = document.createElement("span");
          badge.className = "exp-highlight";
          badge.textContent = h;
          highlightsDiv.appendChild(badge);
        });
        roleBlock.appendChild(highlightsDiv);
      }

      const descP = document.createElement("p");
      descP.className = "exp-description";
      descP.textContent = dataItem.description;
      roleBlock.appendChild(descP);

      rolesDiv.appendChild(roleBlock);
    });

    card.appendChild(rolesDiv);

    // Tech list
    const techListDiv = document.createElement("div");
    techListDiv.className = "exp-tech-list";
    experience.techStack?.forEach((techItem) => {
      const span = document.createElement("span");
      span.className = "exp-tech";
      span.style.cssText = getColor(techItem);
      span.textContent = techItem;
      techListDiv.appendChild(span);
    });
    card.appendChild(techListDiv);

    timelineItem.appendChild(card);
    fragment.appendChild(timelineItem);
  });

  experienceContainerElement.appendChild(fragment);
};

showExperiences();
