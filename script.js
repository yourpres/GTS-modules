const appIcons = {
  dashboard: '<svg viewBox="0 0 24 24"><path d="M4 14a8 8 0 0 1 16 0v4H4v-4Z"></path><path d="M12 14l5-6"></path><path d="M6.5 11.5l-2-1"></path><path d="M9 7.2 8 5"></path><path d="M15 7.2 16 5"></path><circle cx="12" cy="14" r="2"></circle></svg>',
  report: '<svg viewBox="0 0 24 24"><path d="M5 3h14v18H5z"></path><path d="M8 8h8"></path><path d="M8 12h8"></path><path d="M8 16h5"></path></svg>',
  employ: '<svg viewBox="0 0 24 24"><path d="M4 18 9 13l4 3 7-9"></path><path d="M15 7h5v5"></path><path d="M5 20h3v-6H5z"></path><path d="M11 20h3v-8h-3z"></path><path d="M17 20h3V9h-3z"></path></svg>',
  data: '<svg viewBox="0 0 24 24"><path d="M6 3h9l3 3v15H6z"></path><path d="M15 3v4h4"></path><path d="M9 10h6"></path><path d="M9 14h6"></path><path d="M9 18h4"></path></svg>',
  feedback: '<svg viewBox="0 0 24 24"><path d="M21 14a6 6 0 0 1-6 6H8l-5 3 2-5a7 7 0 0 1-2-5V9a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v5Z"></path><path d="M8 11h.01"></path><path d="M12 11h.01"></path><path d="M16 11h.01"></path></svg>',
  validation: '<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path><path d="m8.5 12 2.5 2.5L16 9"></path></svg>',
  faq: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M9.5 9a2.8 2.8 0 1 1 4.6 2.1c-1.3.9-2.1 1.4-2.1 2.9"></path><path d="M12 17h.01"></path></svg>',
  manual: '<svg viewBox="0 0 24 24"><path d="M4 5.5A4 4 0 0 1 8 4h12v15H8a4 4 0 0 0-4 1.5v-15Z"></path><path d="M4 5.5V20"></path><path d="M8 4v15"></path></svg>',
  planning: '<svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"></path><path d="m8 13 3-3 3 3 3-5"></path></svg>',
  maintenance: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19 12a7 7 0 0 0-.2-1.7l2-1.5-2-3.5-2.4 1a7 7 0 0 0-2.9-1.7L13 2h-4l-.5 2.6a7 7 0 0 0-2.9 1.7l-2.4-1-2 3.5 2 1.5A7 7 0 0 0 3 12c0 .6.1 1.2.2 1.7l-2 1.5 2 3.5 2.4-1a7 7 0 0 0 2.9 1.7L9 22h4l.5-2.6a7 7 0 0 0 2.9 1.7l2.4 1 2-3.5-2-1.5c.1-.5.2-1.1.2-1.7Z"></path></svg>',
  pie: '<svg viewBox="0 0 24 24"><path d="M12 2v10h10A10 10 0 1 1 12 2Z"></path><path d="M14 2.2A10 10 0 0 1 21.8 10H14V2.2Z"></path></svg>',
  degree: '<svg viewBox="0 0 24 24"><path d="m2 9 10-5 10 5-10 5L2 9Z"></path><path d="M6 11.5V16c2.8 2 9.2 2 12 0v-4.5"></path><path d="M22 9v6"></path></svg>',
  briefcase: '<svg viewBox="0 0 24 24"><path d="M3 8h18v12H3z"></path><path d="M9 8V5h6v3"></path><path d="M3 13h18"></path></svg>',
  users: '<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="4"></circle><path d="M2 21v-2a6 6 0 0 1 12 0v2"></path><circle cx="17" cy="9" r="3"></circle><path d="M22 21v-1a5 5 0 0 0-5-5"></path></svg>',
  clipboard: '<svg viewBox="0 0 24 24"><path d="M8 4h8l1 3H7l1-3Z"></path><path d="M6 6H4v16h16V6h-2"></path><path d="M8 12h8"></path><path d="M8 16h8"></path></svg>',
  id: '<svg viewBox="0 0 24 24"><path d="M3 5h18v14H3z"></path><circle cx="9" cy="11" r="2.5"></circle><path d="M5.5 17a4 4 0 0 1 7 0"></path><path d="M15 9h4"></path><path d="M15 13h4"></path></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M5 20v-6h4v6H5Z"></path><path d="M10 20V9h4v11h-4Z"></path><path d="M15 20V4h4v16h-4Z"></path></svg>',
  light: '<svg viewBox="0 0 24 24"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 3H9c0-1 0-2-1-3Z"></path><path d="M4 10H2"></path><path d="M22 10h-2"></path><path d="M12 2V0"></path></svg>',
  target: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="4"></circle><path d="M12 3v3"></path><path d="M12 18v3"></path><path d="M3 12h3"></path><path d="M18 12h3"></path></svg>',
  pin: '<svg viewBox="0 0 24 24"><path d="M12 22s7-6.7 7-13A7 7 0 1 0 5 9c0 6.3 7 13 7 13Z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>',
  award: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="5"></circle><path d="m8.5 13-2 8 5.5-3 5.5 3-2-8"></path></svg>',
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m16 16 5 5"></path></svg>',
  database: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="8" ry="3"></ellipse><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"></path><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"></path></svg>',
  bell: '<svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"></path><path d="M10 21h4"></path></svg>',
  list: '<svg viewBox="0 0 24 24"><path d="M8 6h13"></path><path d="M8 12h13"></path><path d="M8 18h13"></path><path d="M3 6h.01"></path><path d="M3 12h.01"></path><path d="M3 18h.01"></path></svg>'
};

const pabloAlangilanBranches = [
  { text: "Pablo Borbon", bold: true },
  ["CAFAD", "CET", "CICS", "COE"],
  { text: "Alangilan", bold: true },
  ["CABEIHM", "CAS", "CTE"]
];

const roleHeaderImages = {
  admin: "src/admin_header.png",
  programChair: "src/program_chair_header.png",
  externalAffairs: "src/external_affairs_header.png",
  vcaa: "src/vcaa_header.png"
};

const roleData = {
  admin: {
    title: "Admin Module Access",
    subLabel: "Submodules / Reports",
    modules: [
      { name: "Dashboard", icon: "dashboard", theme: "blue", items: simple(["All", "Bachelor's Degree", "Master's / Doctorate Degree", "Professional Degree"], ["pie", "degree", "degree", "briefcase"]) },
      { name: "Reports", icon: "report", theme: "green", items: [
        group("Top Employers", "report", ["Top 200 Companies", "Top 200 Job Sectors"]),
        group("Employment Reconciliation", "users", ["Tracked vs Total Alumni", "Employment Date Range", "With Major", "Projection"]),
        group("Registrar Matching", "search", ["Unmatched Registrar Records Report", "Employment History Support Report"]),
        group("Further Studies", "degree", ["Pursue Further Education"]),
        group("Combined Data", "database", ["Graduate Tracer Combined"]),
        label("Unemployed Alumni", "users")
      ] },
      { name: "Employability Report", icon: "employ", theme: "purple", items: simple(["Accomplished for all Program", "Relevance of Employment", "Employment Sector", "Location of Employment"], ["award", "target", "briefcase", "pin"]) },
      { name: "Data List", icon: "data", theme: "orange", items: [
        group("Graduate Tracer Records", "users", ["Graduate Tracer Data", "Alumni Tracked List", "Alumni Registration List"]),
        group("Degree Records", "degree", ["Bachelor's Degree", "Master's / Doctorate Degree", "Professional Degree"]),
        group("Registrar Records", "clipboard", ["Registrar Data"]),
        group("Alumni Reference", "id", ["Alumni Birthday"]),
        label("Percentage of Graduates (24 Months Prior) that are Employed", "pie"),
        label("Traced Report", "data"),
        label("Alumni Sample Size", "users"),
        label("Tracked vs Not Tracked (All)", "chart"),
        label("Tracked vs Not Tracked (Undergrad)", "chart")
      ] },
      { name: "Planning", icon: "planning", theme: "teal", items: simple(["Monitoring", "Forecast"], ["planning", "employ"]) },
      { name: "Feedback and Suggestions", icon: "feedback", theme: "pink", items: [group("Feedback", "feedback", ["Alumni", "Alumni Dashboard"]), label("User Suggestion", "light")] },
      { name: "Validation", icon: "validation", theme: "gold", items: simple(["Bachelor's Degree", "Master's / Doctorate Degree", "Professional Degree"], ["degree", "degree", "briefcase"]) },
      { name: "Maintenance", icon: "maintenance", theme: "navy", items: [
        group("Access and Directory", "users", ["User Role", "Campus", "Alumni Panel", "Social Media"]),
        group("Academic Records", "report", ["College", "Old College", "Program", "Old Program", "Master's / Doctorate Degree", "Professional Degree"]),
        group("Content", "list", ["Announcements"])
      ] },
      { name: "FAQ", icon: "faq", theme: "purple", items: simple(["Frequently Asked Questions"], ["faq"]) }
    ]
  },
  programChair: {
    title: "Program Chair Module Access",
    subLabel: "Submodules",
    modules: [
      { name: "Dashboard", icon: "dashboard", theme: "blue", items: [
        label("All", "pie"),
        label("Bachelor's Degree", "degree"),
        { type: "label", text: "Master's / Doctorate Degree (PB and Alangilan)", icon: "degree", sublines: pabloAlangilanBranches },
        label("Professional Degree (PB COL and COM)", "briefcase")
      ] },
      { name: "Data List", icon: "data", theme: "orange", items: [
        group("Graduate Tracer Records", "users", ["Alumni Tracked List"]),
        group("Degree Records", "degree", [
          "Bachelor's Degree",
          "Master's / Doctorate Degree",
          pabloAlangilanBranches,
          "Professional Degree (PB COL and COM)"
        ]),
        group("Registrar Records", "clipboard", ["Registrar Data"]),
        label("Alumni Reference", "id"),
        label("Tracked vs not tracked (All)", "chart"),
        label("Tracked vs not tracked (Undergrad)", "chart")
      ] },
      { name: "Feedback and Suggestions", icon: "feedback", theme: "pink", items: [
        label("User Suggestion", "light")
      ] },
      { name: "Validation", icon: "validation", theme: "gold", items: [
        label("Bachelor's Degree", "degree"),
        { type: "label", text: "Master's / Doctorate Degree (PB and Alangilan)", icon: "degree", sublines: pabloAlangilanBranches },
        label("Professional Degree (PB COL and COM)", "briefcase")
      ] },
      { name: "FAQ", icon: "faq", theme: "purple", items: [
        label("Frequently Asked Questions", "faq")
      ] },
      { name: "User Manual", icon: "manual", theme: "green", items: [
        label("User Manual / Guide", "manual")
      ] }
    ]
  },
  externalAffairs: {
    title: "External Affairs Module Access",
    subLabel: "Submodules / Reports",
    modules: [
      { name: "Dashboard", icon: "dashboard", theme: "blue", items: simple(["All", "Bachelor's Degree", "Master's / Doctorate Degree", "Professional Degree"], ["pie", "degree", "degree", "briefcase"]) },
      { name: "Employability Report", icon: "employ", theme: "purple", items: simple(["Accomplished for all program", "Relevance of Employment", "Employment Sector", "Location of Employment"], ["award", "target", "briefcase", "pin"]) },
      { name: "Data List", icon: "data", theme: "orange", items: [
        group("Graduate Tracer Records", "users", ["Alumni Tracked List"]),
        group("Degree Records", "degree", ["Bachelor's Degree", "Master's / Doctorate Degree", "Professional Degree"]),
        group("Registrar Records", "clipboard", ["Registrar Data"]),
        label("Alumni Reference", "id"),
        label("Tracked vs not tracked (All)", "chart"),
        label("Tracked vs not tracked (Undergrad)", "chart")
      ] },
      { name: "Feedback and Suggestions", icon: "feedback", theme: "pink", items: simple(["User Suggestion"], ["light"]) },
      { name: "Validation", icon: "validation", theme: "gold", items: simple(["Bachelor's Degree", "Master's / Doctorate Degree", "Professional Degree"], ["degree", "degree", "briefcase"]) },
      { name: "FAQ", icon: "faq", theme: "purple", items: simple(["Frequently Asked Questions"], ["faq"]) }
    ]
  },
  vcaa: {
    title: "VCAA Module Access",
    subLabel: "Submodules",
    modules: [
      { name: "Dashboard", icon: "dashboard", theme: "blue", items: simple(["All", "Bachelor's Degree", "Master's / Doctorate Degree", "Professional Degree"], ["pie", "degree", "degree", "briefcase"]) },
      { name: "Employability Report", icon: "employ", theme: "purple", items: simple(["Accomplished for all program", "Relevance of Employment", "Employment Sector", "Location of Employment"], ["award", "target", "briefcase", "pin"]) },
      { name: "Data List", icon: "data", theme: "orange", items: [
        group("Graduate Tracer Records", "users", ["Alumni Tracked List"]),
        group("Degree Records", "degree", ["Bachelor's Degree", "Master's / Doctorate Degree", "Professional Degree"]),
        group("Registrar Records", "clipboard", ["Registrar Data"]),
        label("Alumni Reference", "id"),
        label("Tracked vs not tracked (All)", "chart"),
        label("Tracked vs not tracked (Undergrad)", "chart")
      ] },
      { name: "Feedback and Suggestions", icon: "feedback", theme: "pink", items: simple(["User Suggestion"], ["light"]) },
      { name: "Validation", icon: "validation", theme: "gold", items: simple(["Bachelor's Degree", "Master's / Doctorate Degree", "Professional Degree"], ["degree", "degree", "briefcase"]) },
      { name: "FAQ", icon: "faq", theme: "purple", items: simple(["Frequently Asked Questions"], ["faq"]) }
    ]
  }
};

function simple(labels, iconNames) {
  return labels.map((text, index) => label(text, iconNames[index] || "list"));
}

function label(text, icon) {
  return { type: "label", text, icon };
}

function group(title, icon, lines) {
  return { type: "group", title, icon, lines };
}

function icon(name) {
  return appIcons[name] || appIcons.list;
}

function slugify(text) {
  return String(text).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function renderLines(lines) {
  return lines.map(item => {
    if (Array.isArray(item)) {
      return `<ul>` + item.map(subItem => {
        if (Array.isArray(subItem)) {
          return `<ul>${subItem.map(s => `<li>${s}</li>`).join("")}</ul>`;
        } else if (typeof subItem === 'string') {
          return `<li>${subItem}</li>`;
        } else if (typeof subItem === 'object' && subItem !== null) {
          const content = subItem.bold ? `<strong>${subItem.text}</strong>` : subItem.text;
          return `<li>${content}</li>`;
        }
        return "";
      }).join("") + `</ul>`;
    } else if (typeof item === 'string') {
      return `<li>${item}</li>`;
    } else if (typeof item === 'object' && item !== null) {
      const content = item.bold ? `<strong>${item.text}</strong>` : item.text;
      return `<li>${content}</li>`;
    }
    return "";
  }).join("");
}

function render(roleKey) {
  const role = roleData[roleKey];
  document.getElementById("roleTitle").textContent = role.title;
  document.getElementById("submoduleLabel").textContent = role.subLabel;
  
  const pageEl = document.querySelector(".page");
  pageEl.className = "page";
  pageEl.classList.add(`role-${roleKey}`);

  document.getElementById("moduleMap").innerHTML = role.modules.map(renderModule).join("");
}

function renderModule(module) {
  const cls = `module-${slugify(module.name)}`;
  return `<article class="module-row theme-${module.theme} ${cls}">
    <div class="rail"><span></span></div>
    <section class="module-card">
      <span class="module-icon">${icon(module.icon)}</span>
      <strong>${module.name}</strong>
    </section>
    <div class="connector"><span></span></div>
    <section class="sub-card">
      ${module.items.map(renderItem).join("")}
    </section>
  </article>`;
}

function renderItem(item) {
  if (item.type === "group") {
    return `<div class="sub-item">
      <span class="sub-icon">${icon(item.icon)}</span>
      <div>
        <h3>${item.title}</h3>
        <ul>${renderLines(item.lines)}</ul>
      </div>
    </div>`;
  }

  if (item.sublines) {
    const extraSublines = renderLines([item.sublines]);
    return `<div class="sub-item compact">
      <span class="sub-icon">${icon(item.icon)}</span>
      <div>
        <h3>${item.text}</h3>
        ${extraSublines}
      </div>
    </div>`;
  }

  return `<div class="sub-item compact">
    <span class="sub-icon">${icon(item.icon)}</span>
    <h3>${item.text}</h3>
  </div>`;
}

function waitForImages(element) {
  const images = Array.from(element.querySelectorAll("img"));
  return Promise.all(images.map(img => {
    if (img.complete && img.naturalWidth > 0) {
      return Promise.resolve();
    }

    return new Promise(resolve => {
      img.addEventListener("load", resolve, { once: true });
      img.addEventListener("error", resolve, { once: true });
    });
  }));
}

function buildPdfHeader(roleKey, roleTitle) {
  const header = document.createElement("img");
  header.className = "pdf-role-header";
  header.src = roleHeaderImages[roleKey] || roleHeaderImages.programChair;
  header.alt = roleTitle;
  return header;
}

function replaceExportHeader(exportElement, roleKey, roleTitle) {
  const header = exportElement.querySelector(".header");
  const rolePanel = exportElement.querySelector(".role-panel");
  const pdfHeader = buildPdfHeader(roleKey, roleTitle);

  if (header) {
    header.replaceWith(pdfHeader);
  } else {
    exportElement.prepend(pdfHeader);
  }

  rolePanel?.remove();
}

async function waitForPrintAssets(printDocument) {
  const stylesheets = Array.from(printDocument.querySelectorAll('link[rel="stylesheet"]'));
  await Promise.all(stylesheets.map(link => {
    if (link.sheet) {
      return Promise.resolve();
    }

    return new Promise(resolve => {
      const timeout = setTimeout(resolve, 1500);
      link.addEventListener("load", () => {
        clearTimeout(timeout);
        resolve();
      }, { once: true });
      link.addEventListener("error", () => {
        clearTimeout(timeout);
        resolve();
      }, { once: true });
    });
  }));

  await waitForImages(printDocument);

  if (printDocument.fonts?.ready) {
    await printDocument.fonts.ready;
  }
}

document.querySelectorAll(".role-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".role-button").forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    render(button.dataset.role);
  });
});

async function downloadCurrentViewAsPdf() {
  const downloadButton = document.getElementById("downloadPdfBtn");
  const pageElement = document.querySelector(".page");
  const activeBtn = document.querySelector(".role-button.active");
  const roleKey = activeBtn?.dataset.role || "view";
  const roleTitle = roleData[roleKey] ? roleData[roleKey].title : "Graduate Tracer";

  if (!pageElement) {
    window.print();
    return;
  }

  const printFrame = document.createElement("iframe");
  const exportElement = pageElement.cloneNode(true);

  downloadButton.disabled = true;
  downloadButton.setAttribute("aria-busy", "true");

  exportElement.classList.add("pdf-export-page");
  replaceExportHeader(exportElement, roleKey, roleTitle);
  printFrame.className = "print-frame";
  printFrame.setAttribute("aria-hidden", "true");
  document.body.appendChild(printFrame);

  let cleanedUp = false;
  const cleanup = () => {
    if (cleanedUp) {
      return;
    }

    cleanedUp = true;
    printFrame.remove();
    downloadButton.disabled = false;
    downloadButton.removeAttribute("aria-busy");
  };

  try {
    const frameDocument = printFrame.contentDocument;
    const baseHref = document.baseURI;
    const stylesheetHref = new URL("style.css", baseHref).href;

    frameDocument.open();
    frameDocument.write(`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <base href="${baseHref}">
          <title>${roleTitle}</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
          <link rel="stylesheet" href="${stylesheetHref}">
        </head>
        <body class="print-export-body"></body>
      </html>`);
    frameDocument.close();
    frameDocument.body.appendChild(exportElement);

    await waitForPrintAssets(frameDocument);

    printFrame.contentWindow.addEventListener("afterprint", cleanup, { once: true });
    printFrame.contentWindow.focus();
    printFrame.contentWindow.print();
    setTimeout(cleanup, 30000);
  } catch (error) {
    cleanup();
    throw error;
  }
}

document.getElementById("downloadPdfBtn").addEventListener("click", downloadCurrentViewAsPdf);

render("programChair");
