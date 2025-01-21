
const comp = document.querySelector("#comp");
const work = document.querySelector("#work");
const sem = document.querySelector("#sem");

const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");


function showSection(cardToShow, activeButton) {
    
    [card1, card2, card3].forEach(card => card.style.display = "none");
    
    
    [comp, work, sem].forEach(button => button.classList.remove("active"));
    
   
    cardToShow.style.display = "block";
    activeButton.classList.add("active");
}

showSection(card1, comp);

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

 
  if (achievements.length > 0) {
      showAchievement(currentIndex);
  }




// emailjs.init("A2veRxlogvNqfl7i8"); // Replace with your actual user ID

// function sendEmail() {
//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const subject = document.getElementById("subject").value.trim();
//     const message = document.getElementById("message").value.trim();

//     // Validate form data
//     if (name === "" || email === "" || subject === "" || message === "") {
//         alert("Please fill out all fields.");
//         return false;
//     }

//     // Send email via EmailJS
//     const formData = {
//         name: name,
//         email: email,
//         subject: subject,
//         message: message,
//     };

//     // Send the email
//     emailjs.send("service_jfotqc3", "template_vnfqgow", formData)
//         .then((response) => {
//             alert("Message sent successfully!");
//         })
//         .catch((error) => {
//             alert("Error sending message: " + error.text);
//         });

//     return false;  // Prevent form from refreshing the page
// }



gsap.registerPlugin(ScrollTrigger);


document.body.style.scrollBehavior = "smooth";


ScrollTrigger.defaults({
  scroller: "#main",
  start: "top top",
  end: "bottom bottom",
  scrub: 1,
});


gsap.utils.toArray("section").forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    start: "top center",
    end: "bottom center",
    pin: true,
    markers: true, 
  });
});


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



const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true,
});


document.querySelectorAll('.teambtn').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); 
    const targetId = this.getAttribute('href').substring(1); 
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      
      scroll.scrollTo(targetElement, {
        offset: 0,        
        duration: 1000,   
        easing: [0.25, 0.00, 0.35, 1.00], 
      });
    }
  });
});

document.getElementById('hamburger').addEventListener('click', function() {
  const menu = document.getElementById('menu');
  menu.classList.add('active');
});

document.getElementById('close-btn').addEventListener('click', function() {
  const menu = document.getElementById('menu');
  menu.classList.remove('active');
});



document.querySelectorAll('.eventbtn').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); 
    const targetId = this.getAttribute('href').substring(1); 
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      
      scroll.scrollTo(targetElement, {
        offset: 0,        
        duration: 1000,   
        easing: [0.25, 0.00, 0.35, 1.00],
      });
    }
  });
});


document.querySelectorAll('.abtbtn').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); 
    const targetId = this.getAttribute('href').substring(1); 
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      
      scroll.scrollTo(targetElement, {
        offset: 0,        
        duration: 1000,   
        easing: [0.25, 0.00, 0.35, 1.00], 
      });
    }
  });
});


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


function startCounting() {
  const stats = [
      { id: 'stats-1', end: 3 },
      { id: 'stats-2', end: 20 },
      { id: 'stats-3', end: 10 },
      { id: 'stats-4', end: 2500 }
  ];

  stats.forEach(stat => {
      const element = document.querySelector(`#${stat.id} h1`);
      animateCounter(element, 1, stat.end, 2000); 
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


// const topButton = document.getElementById('top-Button');
//     const page2 = document.getElementById('page2');

//     window.addEventListener('scroll', () => {
//       // Show button when scrolling in Page 2
//       const page2Top = page2.getBoundingClientRect().top;
//       if (page2Top <= window.innerHeight) {
//         topButton.style.display = 'block';
//       } else {
//         topButton.style.display = 'none';
//       }
//     });

//     topButton.addEventListener('click', () => {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//       });
//     });

function activateCard(selectedCard) {
  const cards = document.querySelectorAll('.card7');
  cards.forEach(card => card.classList.remove('active')); 
  selectedCard.classList.add('active'); 
}

window.onload = () => {
  const firstCard = document.querySelector('.card7');
  firstCard.classList.add('active'); 
};





