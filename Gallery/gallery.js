
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    lerp: 0.1,
});


scroll.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy('#main', {
    scrollTop(value) {
        return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector('#main').style.transform ? 'transform' : 'fixed',
});



var tl = gsap.timeline();

tl.from('#txt h1 span', {
    opacity: 0,            
    y: 100,                   
    duration: 1,           
    stagger: 0.3             
});



gsap.to('#page1 #txt h1', {
    scrollTrigger: {
        trigger: '#page1',
        scroller: '#main',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
    },
    scale: 0.5,
    opacity: 0,
});
gsap.to('#page4', {
    scrollTrigger: {
        trigger: '#page4',
        scroller: '#main',
        start: 'top top',
        end: '+=1800',
        scrub: true,
        pin:true,
    },
});

// The data-scroll-speed attribute automatically adjusts the speed of each element.


// gsap.to('#page3 #middle p', {
//     scrollTrigger: {
//         trigger: '#page3',  
//         scroller: '#main',  
//         start: 'top top',   
//         end: 'bottom top',  
//         pin: true,          
//         scrub: true,        
//     },
//     x: -500,               
// });


gsap.fromTo(
    '#page3 #bottom #txt',
    { 
        x: -500,
        opacity: 0
    },
    {   
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.4, 
        scrollTrigger: {
            trigger: '#page3',  
            scroller: '#main',  
            start: 'top top',   
            end: 'bottom top', 
            // scrub: true,        
        }
    }
);
gsap.fromTo(
    '#page3 #bottom #img',
    {   
        x: 500,
        opacity: 0
    },
    {  
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.4, 
        scrollTrigger: {
            trigger: '#page3',  
            scroller: '#main',  
            start: 'top top',   
            end: 'bottom top',  
            // scrub: true,        
        }
    }
);

// Refresh ScrollTrigger and Locomotive Scroll
ScrollTrigger.addEventListener('refresh', () => scroll.update());
ScrollTrigger.refresh();


gsap.fromTo(
    '#page5 #bottom #txt',
    { 
        x: -500,
        opacity: 0
    },
    {   
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.4, 
        scrollTrigger: {
            trigger: '#page5',  
            scroller: '#main',  
            start: 'top top',   
            end: 'bottom top', 
            // scrub: true,        
        }
    }
);
gsap.fromTo(
    '#page5 #bottom #img',
    {   
        x: 500,
        opacity: 0
    },
    {  
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.4, 
        scrollTrigger: {
            trigger: '#page5',  
            scroller: '#main',  
            start: 'top top',   
            end: 'bottom top',  
            // scrub: true,        
        }
    }
);