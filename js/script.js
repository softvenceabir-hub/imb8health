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
  document.addEventListener('DOMContentLoaded', function() {
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
            
      
            setInterval(function() {
                let nextIndex = (currentIndex + 1) % logos.length;
                updateCarousel(nextIndex);
            }, 5000);
        });

        // supplleyment

        const supplementcards = [
      {
    id:1,
        img: "https://im8health.com/cdn/shop/files/multivitamin.png?v=1745911823&width=500",
        title: "Multivitamin & Minerals",
        desc: "Complete spectrum of essential vitamins and minerals"
      },
      {
          id:2,
        img: "https://im8health.com/cdn/shop/files/Prebiotic_Fiber.png?v=1745911823&width=500",
        title: "Prebiotics",
        desc: "ASupports gut microbiome health"
      },
      {
        id:3,
        img: "https://im8health.com/cdn/shop/files/Prebiotic_Fiber.png?v=1745911823&width=500",
        title: "Probiotics",
        desc: "10 billion CFU of clinically studied strains"
      },
      {
        id:4,
        img: "https://im8health.com/cdn/shop/files/Prebiotic_Fiber.png?v=1745911823&width=500",
        title: "FPostbiotics",
        desc: "Bioactive compounds supporting gut-immune axis"
      },
      {
        id:5,
        img: "https://im8health.com/cdn/shop/files/Prebiotic_Fiber.png?v=1745911823&width=500",
        title: "Digestive Enzymes",
        desc: "Enhances nutrient absorption"
      },
      {
        id:6,
        img: "https://im8health.com/cdn/shop/files/Prebiotic_Fiber.png?v=1745911823&width=500",
        title: "Antioxidant Complex",
        desc: "Combats oxidative stress and supports cellular health"
      },
      {
        id:7,
        img: "https://im8health.com/cdn/shop/files/Prebiotic_Fiber.png?v=1745911823&width=500",
        title: "Adaptogen Complex",
        desc: "Helps body manage stress and maintain balance"
      },
      {
        id:8,
        img: "https://im8health.com/cdn/shop/files/Prebiotic_Fiber.png?v=1745911823&width=500",
        title: "Superfoods, Greens and Fruits",
        desc: "Concentrated nutrients from vegetables and superfoods"
      }
    ];
        const container = document.getElementById("cards");

    supplementcards.forEach(card => {
      container.innerHTML += `
        <div class="card-supplement">
      <img src="${card.img}" alt="${card.title}">
      <h2>Hello ffffddfdfdfdfdf</h2>
        
        </div>
      `;
    });
   
       