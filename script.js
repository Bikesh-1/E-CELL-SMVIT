document.addEventListener("DOMContentLoaded", function () {
  // Initialize Locomotive Scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    lerp: 0.1, // Adjust easing factor
  });

  // Loader functionality
  const loader = document.querySelector("#loader");
  if (loader) {
    setTimeout(function () {
      loader.style.transform = "translateY(-100%)"; // Slide up
      loader.style.opacity = "0"; // Fade out
    }, 2000);

    loader.addEventListener("transitionend", function () {
      loader.style.display = "none";
    });
  }

  // GSAP ScrollTrigger integration with Locomotive Scroll
  gsap.registerPlugin(ScrollTrigger);

  // Synchronize Locomotive Scroll with ScrollTrigger
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // Refresh Locomotive Scroll on ScrollTrigger refresh
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  // Section toggle functionality
  const comp = document.querySelector("#comp");
  const work = document.querySelector("#work");
  const sem = document.querySelector("#sem");

  const card1 = document.querySelector("#card1");
  const card2 = document.querySelector("#card2");
  const card3 = document.querySelector("#card3");

  function showSection(cardToShow, activeButton) {
    [card1, card2, card3].forEach((card) => (card.style.display = "none"));
    [comp, work, sem].forEach((button) => button.classList.remove("active"));

    cardToShow.style.display = "block";
    activeButton.classList.add("active");
  }

  showSection(card1, comp);

  comp.addEventListener("click", () => showSection(card1, comp));
  work.addEventListener("click", () => showSection(card2, work));
  sem.addEventListener("click", () => showSection(card3, sem));

  // Achievement slider functionality
  const achievements = document.querySelectorAll(".achievement-item");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  let currentIndex = 0;

  function showAchievement(index) {
    achievements.forEach((item, i) =>
      item.classList.toggle("active", i === index)
    );
  }

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % achievements.length;
      showAchievement(currentIndex);
    });

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + achievements.length) % achievements.length;
      showAchievement(currentIndex);
    });
  } else {
    console.error("Next or Previous button not found in the DOM.");
  }

  if (achievements.length > 0) {
    showAchievement(currentIndex);
  }

  // Form validation
  window.validateForm = function () {
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
  };

  // Initialize Swiper.js
  const swiper = new Swiper(".mySwiper", {
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

  // Refresh ScrollTrigger and Locomotive Scroll after layout changes
  swiper.on("slideChange", () => {
    ScrollTrigger.refresh();
    locoScroll.update();
  });
});


// Ensure GSAP ScrollToPlugin is registered
gsap.registerPlugin(ScrollToPlugin);

// Get navigation links and add click event listeners
document.querySelectorAll("#nav-right a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    const targetID = link.getAttribute("href").slice(1); // Get the section ID
    const targetSection = document.getElementById(targetID);

    if (targetSection) {
      // Use Locomotive Scroll for smooth scrolling
      locoScroll.scrollTo(targetSection);
    }
  });
});
