document.addEventListener('DOMContentLoaded', function () {
  // Initialize Locomotive Scroll
  const scroll = new LocomotiveScroll({
      el: document.querySelector('#main'),
      smooth: true
  });

  // Loader functionality
  const loader = document.querySelector("#loader");
  if (loader) {
      setTimeout(function() {
          loader.style.transform = "translateY(-100%)"; // Slide up
          loader.style.opacity = "0"; // Fade out
      }, 2000);

      // Remove loader from DOM after animation completes
      loader.addEventListener('transitionend', function() {
          loader.style.display = "none";
      });
  }

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
});



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

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

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








 
