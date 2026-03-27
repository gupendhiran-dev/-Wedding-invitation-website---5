// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// Hero Parallax Setup
const tlParallax = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Layer 1 (Sky) moves the slowest
tlParallax.to(".layer-1", { yPercent: 20, ease: "none" }, 0);
// Layer 2 (Mountains) moves slightly faster
tlParallax.to(".layer-2", { yPercent: 35, ease: "none" }, 0);
// Layer 3 (Clouds)
tlParallax.to(".layer-3", { yPercent: 50, ease: "none" }, 0);
// Hero Text moves up and fades out
tlParallax.to(".hero-content", { yPercent: 80, opacity: 0, ease: "none" }, 0);
// Layer 4 (Back Foliage)
tlParallax.to(".layer-4", { yPercent: 60, ease: "none" }, 0);
// Layer 5 (Front Foliage - Foreground) moves the fastest to create deep 3D illusion
tlParallax.to(".layer-5", { yPercent: -30, scale: 1.1, ease: "none" }, 0);
