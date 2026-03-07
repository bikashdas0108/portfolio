const projectsContainerElement = document.getElementById("projectsContainer");

const projects = [
  {
    title: "Internship Agent",
    subtitle: "AI powered Slack Assistant for Internship Management",
    image: null,
    description: [
      "Developed an AI-driven Slack assistant for Virtual Internships host companies to streamline candidate management.",
      "Integrated LangChain, LangGraph, and MCP for workflow orchestration, natural language processing, and secure platform access.",
      "Implemented observability and monitoring with LangSmith for real-time tracing, debugging, and analytics.",
      "Delivered features such as candidate search, shortlisting, career field exploration, and contextual conversation management.",
      "Enhanced efficiency by automating manual workflows and providing a conversational interface for host companies.",
    ],
    github: "https://github.com/bikashdas0108",
    tech: ["LangChain", "LangGraph", "LangSmith", "NodeJS", "TypeScript"],
    featured: true,
  },
  {
    title: "YouTube Clone",
    image: "src/images/yt-clone.jpeg",
    description: [
      "Developed a clone of YouTube using ReactJs, Redux, TypeScript and SCSS.",
      "Implemented search functionality with recent search recommendations and used debouncing for the same.",
      "Implemented live chat functionality with nested comments feature.",
      "Used Tailwind Css to make highly responsive design.",
      "Implemented lazy loading and code splitting to make the app more optimized.",
    ],
    github: "https://github.com/bikashdas0108",
    tech: ["ReactJs", "Redux", "TypeScript"],
  },
  {
    title: "Food Cravings App",
    image: "src/images/food.png",
    description: [
      "Built Food Cravings App using ReactJS, TypeScript and Context API to track the users daily food intake and to suggest various options for maintaining a healthy diet.",
      "Implemented features such as a robust search functionality for food items and categories, allowing users to easily find desired items.",
      "Used React useContext hook to solve the problem of prop drilling.",
    ],
    github: "https://github.com/bikashdas0108",
    tech: ["ReactJs", "Tailwind", "TypeScript"],
  },
  {
    title: "Online Code Editor",
    image: "src/images/code-editor.png",
    description: [
      "Developed a custom code editor that offers an intuitive and easy-to-navigate interface for writing HTML, CSS, and JavaScript.",
      "The editor provides real-time preview functionality, allowing users to see the output of their code instantly.",
      "By combining coding and previewing in one tool, the editor significantly improves the efficiency and productivity of web development tasks.",
      "The editor includes syntax highlighting and error detection, making it easier to write clean and error-free code.",
    ],
    github: "https://github.com/bikashdas0108/online-code-editor",
    url: "https://bikashdas0108.github.io/online-code-editor/",
    tech: ["ReactJs", "JavaScript", "CSS"],
  },
];

// Build project cards using safe DOM methods
const showProjects = () => {
  const fragment = document.createDocumentFragment();

  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card reveal";
    card.setAttribute("data-delay", index + 1);

    // Image section
    const imageWrapper = document.createElement("div");
    imageWrapper.className = "project-image-wrapper" + (project.image ? "" : " project-gradient-bg");

    if (project.image) {
      const imageLink = document.createElement("a");
      imageLink.href = project.url || project.github;
      imageLink.target = "_blank";
      imageLink.rel = "noopener noreferrer";

      const imageContainer = document.createElement("div");
      imageContainer.className = "project-image-container";
      const img = document.createElement("img");
      img.src = project.image;
      img.alt = project.title + " screenshot";
      img.className = "project-image";
      img.loading = "lazy";
      imageContainer.appendChild(img);
      imageLink.appendChild(imageContainer);
      imageWrapper.appendChild(imageLink);
    } else {
      const iconDiv = document.createElement("div");
      iconDiv.className = "project-gradient-icon";
      iconDiv.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>';
      imageWrapper.appendChild(iconDiv);
      if (project.subtitle) {
        const subtitleP = document.createElement("p");
        subtitleP.className = "project-gradient-subtitle";
        subtitleP.textContent = project.subtitle;
        imageWrapper.appendChild(subtitleP);
      }
    }
    card.appendChild(imageWrapper);

    // Info section
    const info = document.createElement("div");
    info.className = "project-info";

    // Title row
    const titleRow = document.createElement("div");
    titleRow.className = "project-title-row";

    const titleEl = document.createElement("h3");
    titleEl.className = "project-title";
    if (project.featured) {
      const badge = document.createElement("span");
      badge.className = "featured-badge";
      badge.textContent = "Featured";
      titleEl.appendChild(badge);
    }
    titleEl.appendChild(document.createTextNode(project.title));
    titleRow.appendChild(titleEl);

    // Links
    const linksDiv = document.createElement("div");
    linksDiv.className = "project-links";

    const ghLink = document.createElement("a");
    ghLink.href = project.github;
    ghLink.target = "_blank";
    ghLink.rel = "noopener noreferrer";
    ghLink.className = "project-link";
    ghLink.setAttribute("aria-label", "GitHub repository");
    const ghImg = document.createElement("img");
    ghImg.className = "project-github-logo";
    ghImg.src = "src/images/github-logo.png";
    ghImg.alt = "GitHub";
    ghLink.appendChild(ghImg);
    linksDiv.appendChild(ghLink);

    if (project.url) {
      const liveLink = document.createElement("a");
      liveLink.href = project.url;
      liveLink.target = "_blank";
      liveLink.rel = "noopener noreferrer";
      liveLink.className = "project-link";
      liveLink.setAttribute("aria-label", "Live demo");
      liveLink.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';
      linksDiv.appendChild(liveLink);
    }

    titleRow.appendChild(linksDiv);
    info.appendChild(titleRow);

    // Tech list
    const techList = document.createElement("div");
    techList.className = "project-tech-list";
    project.tech?.forEach((techItem) => {
      const span = document.createElement("span");
      span.className = "project-tech";
      span.style.cssText = getColor(techItem);
      span.textContent = "#" + techItem;
      techList.appendChild(span);
    });
    info.appendChild(techList);

    // Description
    const descList = document.createElement("ul");
    descList.className = "project-description";
    project.description?.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      descList.appendChild(li);
    });
    info.appendChild(descList);

    card.appendChild(info);
    fragment.appendChild(card);
  });

  projectsContainerElement.appendChild(fragment);
};

showProjects();
