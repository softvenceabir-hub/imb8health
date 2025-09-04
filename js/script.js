//   droupdown
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownMenu = dropdown.querySelector(".dropdown-menu");

  // Show on mouse enter
  dropdown.addEventListener("mouseenter", function () {
    dropdownMenu.classList.add("show");
  });

  // Hide on mouse leave
  dropdown.addEventListener("mouseleave", function () {
    dropdownMenu.classList.remove("show");
  });
});

// count Down %
document.addEventListener("DOMContentLoaded", () => {
  const animate = el => {
    let target = +el.dataset.target, current = 0;
    const step = () => {
      current += target / 60;
      el.textContent = (current < target ? Math.floor(current) : target) + "%";
      if (current < target) requestAnimationFrame(step);
    };
    step();
  };

  const targets = new IntersectionObserver((entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animate(e.target);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });

  document.querySelectorAll(".percentage").forEach(el => targets.observe(el));
});

//   content Animation
document.addEventListener('DOMContentLoaded', function () {
  const logos = document.querySelectorAll('.logo');
  const quoteElement = document.querySelector('.quote');
  const authorElement = document.querySelector('.author');
  const progressBar = document.querySelector('.progress');

  const quotes = [
    '“We want to help people feel healthy and feel better and live a healthier, longer life.”',
    '"IM8 is leaning into science-backed wellness, seeking to position itself as the most effective – and safe – supplement product on the market."',
    '"I wanted to create something that is a one stop shop, one product that actually does it all."',
    '“We want to help people feel healthy and feel better and live a healthier, longer life.”',
    '"IM8 is leaning into science-backed wellness, seeking to position itself as the most effective – and safe – supplement product on the market."',
    '“We want to help people feel healthy and feel better and live a healthier, longer life.”'
  ];

  const authors = [
    '- Forbes',
    '- David Beckham',
    '- Athletech News',
    '- David Beckham',
    '- David Beckham',
    '- Athletech News'
  ];

  let currentIndex = 0;


  function updateCarousel(index) {

    quoteElement.style.opacity = 0;
    authorElement.style.opacity = 0;

    setTimeout(() => {

      quoteElement.textContent = quotes[index];
      authorElement.textContent = authors[index];

      quoteElement.style.opacity = 1;
      authorElement.style.opacity = 1;

      logos.forEach(logo => logo.classList.remove('active'));
      logos[index].classList.add('active');


      progressBar.style.transform = `translateX(${index * 100}%)`;

      currentIndex = index;
    }, 400);
  }


  setInterval(function () {
    let nextIndex = (currentIndex + 1) % logos.length;
    updateCarousel(nextIndex);
  }, 5000);
});

// supplleyment

const supplementcards = [
  {
    id: 1,
    img: "https://im8health.com/cdn/shop/files/multivitamin.png?v=1745911823&width=500",
    title: "Multivitamin & Minerals",
    desc: "Complete spectrum of essential vitamins and minerals",
    bacdesc: "Includes Reishi, Chaga, and Lion's Mane from our 200mg Adaptogen & Super Mushroom Complex for immune and cognitive support."
  },
  {
    id: 2,
    img: "https://im8health.com/cdn/shop/files/Prebiotic_Fiber.png?v=1745911823&width=500",
    title: "Prebiotics",
    desc: "Supports gut microbiome health",
    bacdesc: "Contains 3g Dietary Fiber (11% DV) including Guar Fiber & Agave Inulin to support gut microbiome health."
  },
  {
    id: 3,
    img: "https://im8health.com/cdn/shop/files/Probiotics.png?v=1745911824&width=500",
    title: "Probiotics",
    desc: "10 billion CFU of clinically studied strains",
    bacdesc: "Bacillus coagulans BC99 and Bacillus subtilis DE111 deliver a potent 10 billion CFU of highly stable probiotics, working together to improve gut health, boost digestion, and support immune function—all without needing refrigeration."
  },
  {
    id: 4,
    img: "https://im8health.com/cdn/shop/files/Lactobacillus.webp?v=1746168969&width=500",
    title: "Postbiotics",
    desc: "Bioactive compounds supporting gut-immune axis",
    bacdesc: "Postbiotics with Lactobacillus casei 327 (FloraSMART®) support gut health, enhance microbial balance, and contribute to overall digestive wellness."
  },
  {
    id: 5,
    img: "https://im8health.com/cdn/shop/files/Digestive_Enzymes.png?v=1745911824&width=500",
    title: "Digestive Enzymes",
    desc: "Enhances nutrient absorption",
    bacdesc: "Includes Amylase, Protease, Lipase, Cellulase & more to enhance nutrient absorption"
  },
  {
    id: 6,
    img: "https://im8health.com/cdn/shop/files/Selenium.webp?v=1746168569&width=500",
    title: "Antioxidant Complex",
    desc: "Combats oxidative stress and supports cellular health",
    bacdesc: "Provides antioxidants like Selenium and Vitamin C to protect cells from damage and support longevity."
  },
  {
    id: 7,
    img: "https://im8health.com/cdn/shop/files/Amyloglucosidase.webp?v=1747722638&width=500",
    title: "Adaptogen Complex",
    desc: "Helps body manage stress and maintain balance",
    bacdesc: "Includes adaptogens such as Ashwagandha and Rhodiola to promote resilience against physical and mental stress."
  },
  {
    id: 8,
    img: "https://im8health.com/cdn/shop/files/Spinach.webp?v=1746168645&width=500",
    title: "Superfoods, Greens and Fruits",
    desc: "Concentrated nutrients from vegetables and superfoods",
    bacdesc: "Packed with nutrient-dense greens, fruits, and vegetables to support overall vitality and well-being."
  },
  {
    id: 9,
    img: "https://im8health.com/cdn/shop/files/Lion_s_mane_mushroom_extract.png?v=1730864085&width=500",
    title: "Super Mushrooms Complex",
    desc: "Immune and cognitive support",
    bacdesc: "Features Lion’s Mane, Reishi, and Chaga mushrooms to enhance immunity and brain health."
  },
  {
    id: 10,
    img: "https://im8health.com/cdn/shop/files/de910d6de6847eee808c546801c82f924f573aef.png?v=1747451044&width=500",
    title: "Nootropic Stack",
    desc: "Enhances mental clarity and focus",
    bacdesc: "Contains brain-boosting nutrients like Ginkgo and Bacopa for focus, memory, and mental clarity."
  },
  {
    id: 11,
    img: "https://im8health.com/cdn/shop/files/Omega-3.png?v=1745911823&width=500",
    title: "Cellular Energy Stack",
    desc: "Supports cellular energy production",
    bacdesc: "Provides CoQ10 and Omega-3s to optimize mitochondrial energy and overall vitality."
  },
  {
    id: 12,
    img: "https://im8health.com/cdn/shop/files/Potassium.webp?v=1747451965&width=500",
    title: "Electrolytes Complex",
    desc: "Maintains optimal hydration",
    bacdesc: "Balanced electrolytes including Potassium and Magnesium to support hydration and muscle function."
  },
  {
    id: 13,
    img: "https://im8health.com/cdn/shop/files/Rectangle_1444336292.webp?v=1746168996&width=500",
    title: "Supports Healthy Inflammatory Response",
    desc: "Supports cellular energy production and heart health",
    bacdesc: "Formulated with Turmeric and Omega-3 to maintain a balanced inflammatory response."
  },
  {
    id: 14,
    img: "https://im8health.com/cdn/shop/files/MSM.webp?v=1746169015&width=500",
    title: "Collagen Complex",
    desc: "Promotes skin, hair, and joint health",
    bacdesc: "Contains Collagen, MSM, and Vitamin C to support joint flexibility, skin elasticity, and healthy hair."
  },
  {
    id: 15,
    img: "https://im8health.com/cdn/shop/files/Rectangle_1444336292.webp?v=1746168996&width=500",
    title: "Sleep Complex",
    desc: "Contains ingredients that support quality rest",
    bacdesc: "With Melatonin, Magnesium, and L-Theanine to promote relaxation and restful sleep."
  },
  {
    id: 16,
    img: "https://im8health.com/cdn/shop/files/Rectangle_1444336292.webp?v=1746168996&width=500",
    title: "Super Immune Protection",
    desc: "Strengthens natural defense systems",
    bacdesc: "Boosts immunity with Vitamin C, Zinc, and Echinacea to help protect against seasonal threats."
  }
];

const containers = document.querySelector(".Daily_Supplementst_card");
const toggleBtn = document.querySelector(".toggle-btn");

let showAll = false;

function renderCards() {
  containers.innerHTML = '';

  const cardsToShow = showAll ? supplementcards : supplementcards.slice(0, 8);

  cardsToShow.forEach(card => {
    containers.innerHTML += `
                    <div class="supplement-card">
                        <div class="card-inner">
                            <div class="card-front">
                                <div class="dispaly-content">
                                    <div class="image-box">
                                        <img src="${card.img}" alt="${card.title}">
                                    </div>
                                    <div class="dispaly-content-text">
                                        <h2>${card.title}</h2>
                                        <p>${card.desc}</p>
                                    </div>
                                    <button class="supplement-card-btn">
                                        <img style="width: 35px;" src="assets/octagon-icon.png" alt="Flip icon">
                                    </button>
                                </div>
                            </div>

                            <div class="card-back">
                                <button class="supplement-card-btn">
                                    <img style="width: 35px;" src="assets/octagon-icon.png" alt="Flip icon">
                                </button>
                                <div class="after-click-contant">
                                    <p>${card.bacdesc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                `;
  });



  countElement.textContent = showAll ? supplementcards.length : 8;
}

toggleBtn.addEventListener('click', function () {
  showAll = !showAll;
  renderCards();
  toggleBtn.textContent = showAll ? 'Show All Supplements' : 'Show Less Suplements';
});


renderCards();

// acording
 // Select all accordions
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach(acc => {
      const header = acc.querySelector(".accordion-header");
      const content = acc.querySelector(".accordion-content");

      header.addEventListener("click", () => {
        acc.classList.toggle("active");

        if(acc.classList.contains("active")){
          content.classList.add("open");
          content.style.maxHeight = content.scrollHeight + "px";
        }else{
          content.classList.remove("open");
          content.style.maxHeight = null;
        }
      });
    });