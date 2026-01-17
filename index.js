const introTextElement = document.getElementById("introText");
const downloadButtonElement = document.getElementById("downloadButton");

const getColor = (key) => {
  switch (key) {
    case "ReactJs":
    case "NodeJs":
      return "color: green";
    case "Redux":
    case "ExpressJs":
      return "color: blueviolet";
    case "TypeScript":
    case "MySQL":
      return "color: orangered";
    case "JavaScript":
      return "color: darkturquoise";
    case "SCSS":
    case "TypeORM":
      return "color: darkcyan";
    case "Tailwind":
      return "color:   color: hotpink";
    default:
      return "color: chocolate";
  }
};

const descriptionList = [
  "I am a <span class='description-text-span'>Software Developer</span>",
  "I am a <span class='description-text-span'>Problem Solver</span>",
  "I am a <span class='description-text-span'>Frontend Developer</span>",
  "I am a <span class='description-text-span'>Quick Learner</span>",
  "I am a <span class='description-text-span'>Team Player</span>",
];

const showInfoText = () => {
  let i = 0;
  setInterval(() => {
    introTextElement.innerHTML = descriptionList[i];
    i++;
    if (i >= descriptionList.length) i = 0;
  }, 2000);
};

showInfoText();

function downloadPDF() {
  downloadButtonElement.removeEventListener("click", downloadPDF);
  const pdfPath = "./src/pdf/Bikash_das_SDE_resume_2026.pdf";
  // Create an anchor element to trigger the download
  const link = document.createElement("a");
  link.href = pdfPath;
  link.download = "Bikash_das_SDE_resume_2026.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  downloadButtonElement.addEventListener("click", downloadPDF);
}

downloadButtonElement.addEventListener("click", downloadPDF);
