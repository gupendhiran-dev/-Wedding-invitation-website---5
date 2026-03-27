// Staggered Event Cards Reveal
gsap.from(".event-card", {
    scrollTrigger: {
        trigger: ".events-grid",
        start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

// Timeline Items Reveal
gsap.utils.toArray('.timeline-item').forEach((item) => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });
});

// Couple Photo Reveal
gsap.from(".person", {
    scrollTrigger: {
        trigger: ".couple-section",
        start: "top 70%",
    },
    y: 100,
    opacity: 0,
    duration: 1.5,
    stagger: 0.3,
    ease: "expo.out"
});
