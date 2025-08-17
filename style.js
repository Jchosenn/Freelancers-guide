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


// Check for saved theme in localStorage or system preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

 if (savedTheme) {
      document.body.setAttribute('data-theme', savedTheme)
    } else if (prefersDark) {
      document.body.setAttribute('data-theme', 'dark')
    }

const themeToggle = document.querySelector("#theme-toggle").addEventListener("click", () => {
const currentTheme = document.body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      console.log("hello")
})