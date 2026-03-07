const skillsContainerElement = document.getElementById("skillsContainer");

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { logo: "./src/images/js-logo.png", name: "JavaScript" },
      { logo: "./src/images/ts-logo.png", name: "TypeScript" },
      { logo: "./src/images/cpp-logo.png", name: "C++" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { logo: "./src/images/react-logo.png", name: "ReactJS" },
      { logo: "./src/images/redux-logo.png", name: "Redux" },
      { logo: null, name: "RTK" },
      { logo: null, name: "RTKQ" },
      { logo: "./src/images/es6-logo.png", name: "ES6" },
    ],
  },
  {
    category: "Styling",
    skills: [
      { logo: "./src/images/html-logo.png", name: "HTML5" },
      { logo: "./src/images/css-logo.png", name: "CSS3" },
      { logo: "./src/images/sass-logo.png", name: "SASS" },
      { logo: "./src/images/tailwind-logo.png", name: "Tailwind" },
      { logo: "./src/images/bootstrap-logo.png", name: "Bootstrap" },
      { logo: "./src/images/mui-logo.png", name: "MUI" },
      { logo: null, name: "AntD" },
      { logo: null, name: "Mantine" },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { logo: "./src/images/node-logo.png", name: "NodeJs" },
      { logo: null, name: "ExpressJs" },
      { logo: null, name: "TypeORM" },
      { logo: null, name: "MySQL" },
      { logo: "./src/images/ajax-logo.png", name: "AJAX" },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { logo: "./src/images/git-logo.png", name: "Git" },
      { logo: "./src/images/cicd-logo.png", name: "CI/CD" },
      { logo: "./src/images/lodash-logo.png", name: "Lodash" },
      { logo: "./src/images/dsa-logo.png", name: "DSA" },
      { logo: null, name: "GTM" },
      { logo: null, name: "GA4" },
    ],
  },
];

const showSkills = () => {
  // Build DOM using safe methods (no innerHTML with user data)
  const fragment = document.createDocumentFragment();

  skillCategories.forEach((category) => {
    let delay = 0;
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "skill-category reveal";

    const titleEl = document.createElement("h3");
    titleEl.className = "skill-category-title";
    titleEl.textContent = category.category;
    categoryDiv.appendChild(titleEl);

    const gridDiv = document.createElement("div");
    gridDiv.className = "skill-category-grid";

    category.skills.forEach((skill) => {
      delay++;
      const skillDiv = document.createElement("div");
      skillDiv.className = "skill";
      skillDiv.style.setProperty("--skill-delay", `${Math.min(delay, 8) * 0.1}s`);

      if (skill.logo) {
        const logoWrapper = document.createElement("div");
        logoWrapper.className = "skill-logo-wrapper";
        const img = document.createElement("img");
        img.src = skill.logo;
        img.alt = skill.name + " logo";
        img.className = "skill-logo";
        img.loading = "lazy";
        logoWrapper.appendChild(img);
        skillDiv.appendChild(logoWrapper);
      } else {
        const textIcon = document.createElement("div");
        textIcon.className = "skill-text-icon";
        textIcon.textContent = skill.name.substring(0, 2);
        skillDiv.appendChild(textIcon);
      }

      const nameSpan = document.createElement("span");
      nameSpan.className = "skill-name";
      nameSpan.textContent = skill.name;
      skillDiv.appendChild(nameSpan);

      gridDiv.appendChild(skillDiv);
    });

    categoryDiv.appendChild(gridDiv);
    fragment.appendChild(categoryDiv);
  });

  skillsContainerElement.appendChild(fragment);
};

showSkills();
