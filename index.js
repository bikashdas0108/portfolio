// ===== DOM Elements =====
const downloadButtonElement = document.getElementById("downloadButton");
const hamburgerElement = document.getElementById("hamburger");
const navLinksElement = document.getElementById("navLinks");
const mobileOverlayElement = document.getElementById("mobileOverlay");
const navElement = document.getElementById("nav");
const typewriterElement = document.getElementById("typewriter");

// ===== Color Utility (used by projects & experiences) =====
const getColor = (key) => {
  switch (key) {
    case "ReactJs":
    case "NodeJs":
    case "NodeJS":
      return "color: #10b981";
    case "Redux":
    case "ExpressJs":
    case "RTK":
      return "color: #8b5cf6";
    case "TypeScript":
    case "MySQL":
    case "TypeORM":
      return "color: #f59e0b";
    case "JavaScript":
      return "color: #22d3ee";
    case "SCSS":
    case "CSS":
      return "color: #06b6d4";
    case "Tailwind":
    case "Mantine":
      return "color: #ec4899";
    case "LangChain":
    case "LangGraph":
    case "LangSmith":
      return "color: #a78bfa";
    default:
      return "color: #f97316";
  }
};

// ===== Typewriter Effect =====
const descriptions = [
  "Software Developer",
  "Problem Solver",
  "Frontend Developer",
  "Quick Learner",
  "Team Player",
];

let descIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 80;
const deleteSpeed = 40;
const pauseTime = 2000;

function typewrite() {
  const currentText = descriptions[descIndex];

  if (!isDeleting) {
    typewriterElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typewrite, pauseTime);
      return;
    }
  } else {
    typewriterElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      descIndex = (descIndex + 1) % descriptions.length;
    }
  }

  setTimeout(typewrite, isDeleting ? deleteSpeed : typeSpeed);
}

typewrite();

// ===== Resume Download =====
function downloadPDF() {
  const pdfPath = "./src/pdf/Bikash_das_SDE_resume_2026.pdf";
  const link = document.createElement("a");
  link.href = pdfPath;
  link.download = "Bikash_das_SDE_resume_2026.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

downloadButtonElement.addEventListener("click", downloadPDF);

// ===== Scroll Reveal (Intersection Observer) =====
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Trigger counter animation when stat-card becomes active
        if (entry.target.classList.contains("stat-card")) {
          const num = entry.target.querySelector(".stat-number");
          if (num) animateCounter(num);
        }
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ===== Active Navigation on Scroll =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link[data-section]");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.dataset.section === id);
        });
      }
    });
  },
  { threshold: 0.3, rootMargin: `-${parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'))}px 0px -40% 0px` }
);

sections.forEach((section) => sectionObserver.observe(section));

// ===== Navbar Hide/Show on Scroll =====
let lastScrollY = window.scrollY;
let ticking = false;

function handleNavScroll() {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 50) {
    navElement.classList.add("scrolled");
  } else {
    navElement.classList.remove("scrolled");
  }

  if (currentScrollY > lastScrollY && currentScrollY > 200) {
    navElement.classList.add("nav-hidden");
  } else {
    navElement.classList.remove("nav-hidden");
  }

  lastScrollY = currentScrollY;
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(handleNavScroll);
    ticking = true;
  }
});

// ===== Mobile Hamburger Menu =====
function toggleMobileMenu() {
  const isOpen = hamburgerElement.classList.toggle("open");
  navLinksElement.classList.toggle("open");
  mobileOverlayElement.classList.toggle("active");
  hamburgerElement.setAttribute("aria-expanded", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
}

hamburgerElement.addEventListener("click", toggleMobileMenu);
mobileOverlayElement.addEventListener("click", toggleMobileMenu);

// Close mobile menu on nav link click
navLinksElement.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinksElement.classList.contains("open")) {
      toggleMobileMenu();
    }
  });
});

// ===== Counter Animation =====
// Completed years between a start date (YYYY-MM-DD) and today.
function yearsSince(startDate) {
  const start = new Date(startDate);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  const monthDiff = now.getMonth() - start.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < start.getDate())) {
    years--;
  }
  return years;
}

function animateCounter(element) {
  if (element.dataset.animated) return;
  element.dataset.animated = "true";

  const target = element.dataset.since
    ? yearsSince(element.dataset.since)
    : parseInt(element.dataset.target);
  const suffix = element.dataset.suffix || "+";
  const duration = 1500;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);

    element.textContent = current + (progress >= 1 ? suffix : "");

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// Observe stat cards (parent) instead of stat numbers directly.
// Counter starts only after the card is revealed and visible.
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target.classList.contains("active")) {
        const num = entry.target.querySelector(".stat-number");
        if (num) {
          animateCounter(num);
          counterObserver.unobserve(entry.target);
        }
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".stat-card").forEach((el) => counterObserver.observe(el));

// ===== Observe dynamically created elements =====
// Re-observe after skills/projects/experiences render
const dynamicObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === 1) {
        const reveals = node.querySelectorAll
          ? node.querySelectorAll(".reveal")
          : [];
        reveals.forEach((el) => revealObserver.observe(el));
        if (node.classList && node.classList.contains("reveal")) {
          revealObserver.observe(node);
        }
      }
    });
  });
});

dynamicObserver.observe(document.getElementById("main"), {
  childList: true,
  subtree: true,
});

// ===== Fallback: re-observe all reveals after dynamic content loads =====
// On cold mobile loads, IntersectionObserver may not fire reliably for
// elements observed via MutationObserver. Re-scan after all defer scripts run.
window.addEventListener("load", () => {
  requestAnimationFrame(() => {
    document.querySelectorAll(".reveal:not(.active)").forEach((el) => {
      revealObserver.observe(el);
    });
    // Re-observe stat cards for counter animation
    document.querySelectorAll(".stat-card").forEach((el) => {
      if (!el.querySelector(".stat-number[data-animated]")) {
        counterObserver.observe(el);
      }
    });
  });
});
