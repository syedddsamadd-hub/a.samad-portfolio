let data = [
  {
    img: "petbot.png",
    title: "petbot",
    description: "Petbot is a responsive manufacturing company website for plastic products, including bottles, jars, and glasses. The site allows users to browse products with an interactive and user-friendly interface, showcasing my skills in responsive design and front-end development.",
    button: "live",
    button1: "view code",
    one: "https://syedddsamadd-hub.github.io/petbot/",
    two: "https://github.com/syedddsamadd-hub/petbot"
  },
    {
    img: "recipe.png",
    title: "recipe app",
    description: "a clean aand responsive modern recipe app where user can find his favourite recipe meal made with html ,css , javascript and Api of Db meals.",
    button: "live",
    button1: "view code",
    one: "https://syedddsamadd-hub.github.io/recipe/",
    two: "https://github.com/syedddsamadd-hub/recipe"
  },
  {
    img: "todo.png",
    title: "to do list manager",
    description: "A sleek To-Do List application designed to keep your day organized. With real-time updates, interactive design, and smooth transitions, this project demonstrates clean jquery logic and creative UI styling.",
    button: "live",
    button1: "view code",
    one: "https://6900f59bdf039229229b12a2--todtaskapp.netlify.app/",
    two: "https://github.com/syedddsamadd-hub/todolist"
  },
  {
    img: "calculator.png",
    title: "calculator",
    description: "a calculator where you calculate your expense made with html css and javascript and responsive for every screen size till 400px.",
    button: "live",
    button1: "view code",
    one: "https://calculationapp1.netlify.app/",
    two: "https://github.com/syedddsamadd-hub/calculator"
  },
  {
    img: "bridges.png",
    title: "famous bridges",
    description: "This project is a responsive informational website showcasing famous bridges from around the world. The website is designed with a clean and modern layout using Bootstrap to ensure compatibility across all devices.",
    button: "live",
    button1: "view code",
    one: "https://syedddsamadd-hub.github.io/bridgeswebsite/",
    two: "https://github.com/syedddsamadd-hub/bridgeswebsite.git"
  },
  {
    img: "count.png",
    title: "life calculator",
    description: "a beautiful design life calculator made with html , css and javascript.",
    button: "live",
    button1: "view code",
    one: "https://birth-calculator-app.netlify.app/",
    two: "index.html"
  },
  {
    img: "genrator.png",
    title: "dynamic-cards",
    description: "A dynamic e-commerce cards generator built using HTML,bootstrap and jquery. It allows users to enter data through an input field, and generates stylish cards based on their input with responsive design.",
    button: "live",
    button1: "view code",
    one: "https://690201a0111b4258a6636991--e-commercecardsgenerator.netlify.app/",
    two: "https://github.com/syedddsamadd-hub/cardsgenerator"
  },

]
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("project-container");
  const row = document.getElementById("row1");
  let proCards = "";
  data.forEach(a => {
    proCards += `
               <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                  <div style="" class="project-card m-3">
                  <img width='100%' height="300px"style="border-radius: 15px 15px 0 0;" src="images/${a.img}"  alt="pic">
                  <h3 class="ms-2 mt-2 text-capitalize">${a.title}</h3>
                  <p style=" text-align:justify;"class="mx-2 mt-3 text-capitalize">${a.description}</p>
                  <a href="${a.one}" style="font-size:20px;"class="btn text-capitalize mx-2 my-1 fw-bold"><i class="fa-solid fa-link me-1"></i>${a.button}</a>
                  <a href="${a.two}" style="font-size:20px;" class="btn text-capitalize mx-2 my-1 fw-bold"><i class="fa-brands fa-github me-1"></i>${a.button1}</a>
            </div>
          </div>
            `;
    row.innerHTML = proCards;
    container.append(row);


  });
});

// VIP Smooth Scroll Animation with Side Entry Effects
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

// Animation Observer
const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
  
  // Animate project cards with side entry
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    // Alternate left and right entry
    if (index % 2 === 0) {
      card.classList.add('slide-from-left');
    } else {
      card.classList.add('slide-from-right');
    }
    card.style.animationDelay = `${index * 0.15}s`;
    animationObserver.observe(card);
  });
  
  // Animate images from left
  const images = document.querySelectorAll('img, .about-image, .profile-image');
  images.forEach((img, index) => {
    img.classList.add('slide-from-left');
    img.style.animationDelay = `${index * 0.1}s`;
    animationObserver.observe(img);
  });
  
  // Animate paragraphs and text from right
  const paragraphs = document.querySelectorAll('p, .about-text, .description');
  paragraphs.forEach((para, index) => {
    para.classList.add('slide-from-right');
    para.style.animationDelay = `${index * 0.1}s`;
    animationObserver.observe(para);
  });
  
  // Animate sections
  const sections = document.querySelectorAll('section, .about-section, .skills-section, .contact-section');
  sections.forEach(section => {
    animationObserver.observe(section);
  });
  
  // Animate skill items from bottom
  const skills = document.querySelectorAll('.skill-item, .skill-card');
  skills.forEach((skill, index) => {
    skill.style.animationDelay = `${index * 0.1}s`;
    animationObserver.observe(skill);
  });
  
  // Animate heading elements from top
  const headings = document.querySelectorAll('h1, h2, h3');
  headings.forEach((heading, index) => {
    heading.classList.add('slide-from-top');
    heading.style.animationDelay = `${index * 0.1}s`;
    animationObserver.observe(heading);
  });
  
  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Parallax effect on scroll
  let ticking = false;
  window.addEventListener('scroll', () => {
    if(!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax-effect');
        parallaxElements.forEach(el => {
          const speed = el.dataset.speed || 0.5;
          el.style.transform = `translateY(${scrolled * speed}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  });
  
  // Add hover 3D effect to cards
  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
  });
  
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav, .navbar');
  const currentScroll = window.pageYOffset;
  
  if(navbar) {
    if(currentScroll > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  
  lastScroll = currentScroll;
});