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

  // Handle card and image toggling for sections
  const comp = document.querySelector("#comp");
  const work = document.querySelector("#work");
  const sem = document.querySelector("#sem");

  const card1 = document.querySelector("#card1");
  const card2 = document.querySelector("#card2");
  const card3 = document.querySelector("#card3");

  const compImg = document.querySelector("#compImg");
  const workImg = document.querySelector("#workImg");
  const semImg = document.querySelector("#semImg");

  const compTxt = document.querySelector("#compTxt");
  const workTxt = document.querySelector("#workTxt");
  const semTxt = document.querySelector("#semTxt");

  // Initialize display for comp section
  if (compImg && card1) {
      compImg.style.display = "block";
      card1.style.display = "block";
      card2.style.display = "none";
      card3.style.display = "none";
  }

  // Add event listeners to section buttons, only if they exist
  if (comp && work && sem && card1 && card2 && card3) {
      comp.addEventListener("click", function() {
          card1.style.display = "block";
          card2.style.display = "none";
          card3.style.display = "none";
          compImg.style.display = "block";
          workImg.style.display = "none";
          semImg.style.display = "none";
          comp.style.marginLeft = "5vw";
          comp.style.color = "#EFEAE3";
          work.style.color = "#504A45";
          work.style.marginLeft = "7vw";
          sem.style.color = "#504A45";
          sem.style.marginLeft = "7vw";
          compTxt.style.display = "block";
          workTxt.style.display = "none";
          semTxt.style.display = "none";
      });

      work.addEventListener("click", function() {
          card2.style.display = "block";
          card1.style.display = "none";
          card3.style.display = "none";
          compImg.style.display = "none";
          workImg.style.display = "block";
          semImg.style.display = "none";
          work.style.marginLeft = "5vw";
          work.style.color = "#EFEAE3";
          comp.style.color = "#504A45";
          comp.style.marginLeft = "7vw";
          sem.style.color = "#504A45";
          sem.style.marginLeft = "7vw";
          workTxt.style.display = "block";
          compTxt.style.display = "none";
          semTxt.style.display = "none";
      });

      sem.addEventListener("click", function() {
          card3.style.display = "block";
          card2.style.display = "none";
          card1.style.display = "none";
          compImg.style.display = "none";
          workImg.style.display = "none";
          semImg.style.display = "block";
          sem.style.marginLeft = "5vw";
          sem.style.color = "#EFEAE3";
          comp.style.color = "#504A45";
          comp.style.marginLeft = "7vw";
          work.style.color = "#504A45";
          work.style.marginLeft = "7vw";
          semTxt.style.display = "block";
          workTxt.style.display = "none";
          compTxt.style.display = "none";
      });
  } else {
      console.warn('One or more elements for the section toggling are missing.');
  }

  // Achievement item slider functionality
  const achievements = document.querySelectorAll('.achievement-item');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  let currentIndex = 0;

  // Function to show the achievement item at the specified index
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



gsap.to("#page3 h1, #page3 #img-p3 img", {
    x: "-330%",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        markers: true,
        start: "top top",
        end: "top -100%",
        scrub: 1,
        pin: true,
    }
});