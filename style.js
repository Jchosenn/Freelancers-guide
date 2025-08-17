const sr = ScrollReveal()
const scrollRevealOption = {
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
};

// Apply ScrollReveal to each section and its elements
sr.reveal(".nav__container", {
    ...scrollRevealOption,
    origin: "top",
});


sr.reveal(".crest", {
    ...scrollRevealOption,
    delay: 500,
});

sr.reveal(".hero__content h1", {
    ...scrollRevealOption,
    delay: 600,
});

sr.reveal(".image__holder", {
    ...scrollRevealOption,
    delay: 700,
    origin: "bottom",
});
sr.reveal("#p-txt", {
    ...scrollRevealOption,
    delay: 750,
});

sr.reveal(".buttons", {
    ...scrollRevealOption,
    delay: 800,
});
sr.reveal(".rating", {
    ...scrollRevealOption,
    delay: 800,
});
sr.reveal(".credibility__div", {
    ...scrollRevealOption,
    delay: 900,
});
sr.reveal(".partners", {
    ...scrollRevealOption,
    delay: 900,
});
