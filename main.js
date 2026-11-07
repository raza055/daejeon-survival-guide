const drawer = document.getElementById("drawer-example");
const openBtn = document.getElementById("openDrawer");
const closeBtn = document.getElementById("closeDrawer");

const modal = document.getElementById("infoModal");
const modalContent = document.getElementById("modalContent");
const arcModal = document.getElementById("modal-for-arc");
const bankModal = document.getElementById("modal-for-bank");
const simModal = document.getElementById("modal-for-sim");
// const appsModal = document.getElementById("modal-for-apps");

if (drawer && openBtn && closeBtn) {
  // Open drawer
  openBtn.addEventListener("click", () => {
    drawer.classList.remove("-translate-x-full");
    drawer.classList.add("translate-x-0");

    document.body.style.overflow = "hidden";
  });

  // Close drawer
  closeBtn.addEventListener("click", () => {
    drawer.classList.remove("translate-x-0");
    drawer.classList.add("-translate-x-full");

    document.body.style.overflow = "";
  });

  // Close with Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      drawer.classList.remove("translate-x-0");
      drawer.classList.add("-translate-x-full");
      document.body.style.overflow = "";
    }
  });
}

function openModal(type) {
  let html = "";
  if (type === "arc") {
    html = `
          <div class="w-16 h-16 bg-emerald text-cream rounded-2xl flex items-center justify-center mb-6"><i data-lucide="file-badge" class="w-8 h-8"></i></div>
          <h2 class="text-4xl font-serif text-mocha mb-6">ARC Step-by-Step</h2>
          <div class="space-y-6">
            <div class="flex gap-4"><span class="w-8 h-8 rounded-full bg-mocha text-cream flex items-center justify-center font-bold shrink-0">1</span><p class="text-mocha/80"><strong class="text-mocha">Book on HiKorea:</strong> Visit hikorea.go.kr → Daejeon Immigration → pick a slot.</p></div>
            <div class="flex gap-4"><span class="w-8 h-8 rounded-full bg-mocha text-cream flex items-center justify-center font-bold shrink-0">2</span><p class="text-mocha/80"><strong class="text-mocha">Documents:</strong> Passport, Enrollment Cert, 1 Photo (3.5x4.5cm), ₩30,000 fee.</p></div>
            <div class="flex gap-4"><span class="w-8 h-8 rounded-full bg-mocha text-cream flex items-center justify-center font-bold shrink-0">3</span><p class="text-mocha/80"><strong class="text-mocha">Visit Office:</strong> 30 Daehak-ro, Yuseong-gu. Arrive 15 mins early.</p></div>
          </div>
        `;
  } else if (type === "bank") {
    html = `
          <div class="w-16 h-16 bg-mocha text-cream rounded-2xl flex items-center justify-center mb-6"><i data-lucide="landmark" class="w-8 h-8"></i></div>
          <h2 class="text-4xl font-serif text-mocha mb-6">Hana Bank Setup</h2>
          <p class="text-mocha/80 mb-4">Open a student account at the Woosong branch (17 Daehak-ro).</p>
          <ul class="list-disc list-inside text-mocha/80 space-y-2">
            <li>Bring your ARC and Passport.</li>
            <li>Ask for a "Student Account" (학생 계좌).</li>
            <li>Request the online banking certificate (공인인증서).</li>
            <li>Download the Hana Bank app and enable fingerprint login.</li>
          </ul>
        `;
  } else if (type === "sim") {
    html = `
          <div class="w-16 h-16 bg-emerald text-cream rounded-2xl flex items-center justify-center mb-6"><i data-lucide="smartphone" class="w-8 h-8"></i></div>
          <h2 class="text-4xl font-serif text-mocha mb-6">SIM Card Plans</h2>
          <div class="space-y-4">
            <div class="bg-white p-4 rounded-xl border border-mocha/10 flex justify-between items-center">
              <div><p class="font-bold text-mocha">Chingu Mobile</p><p class="text-sm text-mocha/60">10GB + slow unlimited</p></div>
              <p class="font-bold text-emerald">₩22,000</p>
            </div>
            <div class="bg-white p-4 rounded-xl border border-mocha/10 flex justify-between items-center">
              <div><p class="font-bold text-mocha">Woori Mobile</p><p class="text-sm text-mocha/60">15GB + 3Mbps unlimited</p></div>
              <p class="font-bold text-emerald">₩29,000</p>
            </div>
          </div>
        `;
  } else if (type === "apps") {
    html = `
          <div class="w-16 h-16 bg-mocha text-cream rounded-2xl flex items-center justify-center mb-6"><i data-lucide="smartphone" class="w-8 h-8"></i></div>
          <h2 class="text-4xl font-serif text-mocha mb-6">Survival Apps</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between bg-white p-4 rounded-xl border border-mocha/10">
              <div class="flex items-center gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Naver_Map_Logo.svg/200px-Naver_Map_Logo.svg.png" class="w-10 h-10 object-contain">
                <div><p class="font-bold text-mocha">Naver Map</p><p class="text-xs text-mocha/60">Navigation</p></div>
              </div>
              <a href="#" class="bg-mocha text-cream px-4 py-2 rounded-lg text-xs font-bold hover:bg-emerald transition">Download</a>
            </div>
            <div class="flex items-center justify-between bg-white p-4 rounded-xl border border-mocha/10">
              <div class="flex items-center gap-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Kakao_T_Logo.png/200px-Kakao_T_Logo.png" class="w-10 h-10 object-contain">
                <div><p class="font-bold text-mocha">KakaoT</p><p class="text-xs text-mocha/60">Taxi & Ride</p></div>
              </div>
              <a href="#" class="bg-mocha text-cream px-4 py-2 rounded-lg text-xs font-bold hover:bg-emerald transition">Download</a>
            </div>
            <div class="flex items-center justify-between bg-white p-4 rounded-xl border border-mocha/10">
              <div class="flex items-center gap-4">
                <div class="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center"><i data-lucide="bike" class="w-6 h-6 text-cyan-600"></i></div>
                <div><p class="font-bold text-mocha">Baemin</p><p class="text-xs text-mocha/60">Food Delivery</p></div>
              </div>
              <a href="#" class="bg-mocha text-cream px-4 py-2 rounded-lg text-xs font-bold hover:bg-emerald transition">Download</a>
            </div>
          </div>
        `;
  }

  modalContent.innerHTML = html;
  modal.classList.add("active");
  lucide.createIcons();
  trackEvent("modal_open_" + type);
}

function closeModal() {
  modal.classList.remove("active");
}

// Close modal on outside click
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// 2. GA4 Tracking
function trackEvent(eventName, eventCategory = "Engagement") {
  if (typeof gtag === "function") {
    gtag("event", eventName, {
      event_category: eventCategory,
      event_label: eventName,
    });
  }
}

// 3. Scroll Reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal-item").forEach((el) => observer.observe(el));

// 4. Restaurant Data
const restaurants = [
  {
    name: "Kimchi Jjigae House",
    tags: ["korean"],
    price: "₩6,000–8,000",
    dist: "3 min",
  },
  {
    name: "Halal Kitchen",
    tags: ["halal"],
    price: "₩8,000–12,000",
    dist: "8 min",
  },
  {
    name: "Cafe SolBridge",
    tags: ["cafe"],
    price: "₩4,000–6,000",
    dist: "On campus",
  },
  {
    name: "24 Chicken",
    tags: ["korean"],
    price: "₩7,000–10,000",
    dist: "4 min",
  },
  {
    name: "Bibimbap Express",
    tags: ["korean"],
    price: "₩6,500",
    dist: "2 min",
  },
  {
    name: "Kebab House",
    tags: ["halal"],
    price: "₩5,000–8,000",
    dist: "10 min",
  },
];

let activeFilter = "all";

function renderEats() {
  const grid = document.getElementById("eatsGrid");
  grid.innerHTML = "";
  restaurants
    .filter((r) => activeFilter === "all" || r.tags.includes(activeFilter))
    .forEach((r) => {
      const card = document.createElement("div");
      card.className =
        "group border-b border-cream/10 pb-6 hover:border-cream/30 transition-colors duration-500 cursor-pointer";
      card.innerHTML = `
          <div class="flex justify-between items-start mb-4">
            <h3 class="font-serif text-2xl">${r.name}</h3>
            <span class="text-sm text-[#d4af37] font-medium">${r.price}</span>
          </div>
          <div class="flex justify-between items-center text-sm text-cream/50 uppercase tracking-widest">
            <span>${r.tags[0]} • ${r.dist}</span>
            <a href="https://map.naver.com/p/search/${r.name}" target="_blank" class="text-cream group-hover:text-[#d4af37] transition-colors flex items-center gap-2">Map <i data-lucide="arrow-up-right" class="w-4 h-4"></i></a>
          </div>
        `;
      grid.appendChild(card);
    });
  lucide.createIcons();
}

document.querySelectorAll(".filter-pill").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-pill")
      .forEach((b) => b.classList.remove("active", "bg-cream", "text-mocha"));
    btn.classList.add("active", "bg-cream", "text-mocha");
    activeFilter = btn.dataset.filter;
    renderEats();
  });
});

renderEats();
lucide.createIcons();

arcModal.addEventListener("click", () => openModal("arc"));
bankModal.addEventListener("click", () => openModal("bank"));
simModal.addEventListener("click", () => openModal("sim"));
// appsModal.addEventListener("click", () => openModal("apps"));




// fetch("https://pyungyo.com/api/v1/plans", {
//   "headers": {
//     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/jxl,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
//     "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
//     "cache-control": "max-age=0",
//     "priority": "u=0, i",
//     "upgrade-insecure-requests": "1"
//   },
//   "body": null,
//   "method": "GET",
//   "mode": "cors",
//   "credentials": "omit"
// });