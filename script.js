
// Select all necessary elements
const comp = document.querySelector("#comp");
const work = document.querySelector("#work");
const sem = document.querySelector("#sem");

const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");

// Function to show only the selected section and apply active styling
function showSection(cardToShow, activeButton) {
    // Hide all cards
    [card1, card2, card3].forEach(card => card.style.display = "none");
    
    // Remove active class from all buttons and reset styling
    [comp, work, sem].forEach(button => button.classList.remove("active"));
    
    // Show the specified card and apply active styling to the button
    cardToShow.style.display = "block";
    activeButton.classList.add("active");
}

// Initialize by showing the Competition section by default
showSection(card1, comp);

// Event listeners for toggling sections
comp.addEventListener("click", () => showSection(card1, comp));
work.addEventListener("click", () => showSection(card2, work));
sem.addEventListener("click", () => showSection(card3, sem));



  const achievements = document.querySelectorAll('.achievement-item');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  let currentIndex = 0;


  function showAchievement(index) {
      achievements.forEach((item, i) => {
          item.classList.toggle('active', i === index);
      });
  }

  // Check if next and prev buttons exist before adding event listeners
  if (nextBtn && prevBtn) {
      nextBtn.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % achievements.length;
          showAchievement(currentIndex);
      });

      prevBtn.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + achievements.length) % achievements.length;
          showAchievement(currentIndex);
      });
  } else {
      console.error('Next or Previous button not found in the DOM.');
  }

  // Initialize the first achievement display
  if (achievements.length > 0) {
      showAchievement(currentIndex);
  }




function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill out all fields.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}


// Initialize ScrollTrigger with Locomotive Scroll
gsap.registerPlugin(ScrollTrigger);

// Set smooth scrolling behavior on the body
document.body.style.scrollBehavior = "smooth";

// ScrollTrigger to handle smooth scrolling
ScrollTrigger.defaults({
  scroller: "#main",
  start: "top top",
  end: "bottom bottom",
  scrub: 1,
});

// Set up ScrollTrigger for sections
gsap.utils.toArray("section").forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    pin: true,
    markers: true, // Enable if you need debugging markers
  });
});

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
});

// Add event listeners for smooth scrolling
document.querySelectorAll('.teambtn').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href').substring(1); // Get id without the #
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Use Locomotive Scroll's `scrollTo` method
      scroll.scrollTo(targetElement, {
        offset: 0,        // Adjust offset if needed
        duration: 1000,   // Scrolling duration in milliseconds
        easing: [0.25, 0.00, 0.35, 1.00], // Cubic bezier easing for smooth animation
      });
    }
  });
});


document.querySelectorAll('.eventbtn').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href').substring(1); // Get id without the #
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Use Locomotive Scroll's `scrollTo` method
      scroll.scrollTo(targetElement, {
        offset: 0,        // Adjust offset if needed
        duration: 1000,   // Scrolling duration in milliseconds
        easing: [0.25, 0.00, 0.35, 1.00], // Cubic bezier easing for smooth animation
      });
    }
  });
});


document.querySelectorAll('.abtbtn').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href').substring(1); // Get id without the #
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Use Locomotive Scroll's `scrollTo` method
      scroll.scrollTo(targetElement, {
        offset: 0,        // Adjust offset if needed
        duration: 1000,   // Scrolling duration in milliseconds
        easing: [0.25, 0.00, 0.35, 1.00], // Cubic bezier easing for smooth animation
      });
    }
  });
});



// Function to animate counting numbers
function animateCounter(element, start, end, duration) {
  const range = end - start;
  let startTime = null;

  function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      element.textContent = Math.floor(progress * range + start);
      if (progress < 1) {
          requestAnimationFrame(step);
      }
  }

  requestAnimationFrame(step);
}

// Set up animations for each stat
function startCounting() {
  const stats = [
      { id: 'stats-1', end: 3 },
      { id: 'stats-2', end: 20 },
      { id: 'stats-3', end: 10 },
      { id: 'stats-4', end: 1500 }
  ];

  stats.forEach(stat => {
      const element = document.querySelector(`#${stat.id} h1`);
      animateCounter(element, 1, stat.end, 2000); // Duration of 2 seconds
  });

  function animateCounter(element, start, end, duration) {
      const stepTime = Math.abs(Math.floor(duration / (end - start)));
      let current = start;

      const timer = setInterval(() => {
          element.textContent = `${current}+`;
          if (current === end) {
              clearInterval(timer);
          } else {
              current++;
          }
      }, stepTime);
  }
}

// Trigger counting when the page is fully loaded
window.addEventListener('load', startCounting);



document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");

  hamburger.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  });
});

var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top="-100%"
},4000)