document.addEventListener("DOMContentLoaded", function () {
    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
      lerp: 0.1, // Adjust easing factor
    });
});