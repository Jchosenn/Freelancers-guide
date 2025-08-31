const sr = ScrollReveal()
const scrollRevealOption = {
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
}

// Apply ScrollReveal to each section and its elements
sr.reveal('.nav__container', {
  ...scrollRevealOption,
  origin: 'top',
})

sr.reveal('.crest', {
  ...scrollRevealOption,
  delay: 500,
})

sr.reveal('.hero__content h1', {
  ...scrollRevealOption,
  delay: 600,
})

sr.reveal('.image__holder', {
  ...scrollRevealOption,
  delay: 700,
  origin: 'bottom',
})
sr.reveal('#p-txt', {
  ...scrollRevealOption,
  delay: 750,
})

sr.reveal('.buttons', {
  ...scrollRevealOption,
  delay: 800,
})
sr.reveal('.rating', {
  ...scrollRevealOption,
  delay: 800,
})
sr.reveal('.credibility__div', {
  ...scrollRevealOption,
  delay: 900,
})
sr.reveal('.partners', {
  ...scrollRevealOption,
  delay: 900,
})

// Theme toggle logic
const themeToggle = document.querySelector('#theme-toggle')

themeToggle.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme') || 'light'
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
  document.body.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)

  // Toggle moon/sun icon
  themeToggle.classList.toggle('fa-moon', newTheme === 'dark')
  themeToggle.classList.toggle('fa-sun', newTheme === 'light')
})

// Initialize theme based on saved preference or system setting
const savedTheme = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

if (savedTheme) {
  document.body.setAttribute('data-theme', savedTheme)
} else if (prefersDark) {
  document.body.setAttribute('data-theme', 'dark')
}

// Set initial icon based on theme
const currentTheme =
  document.body.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light')
themeToggle.classList.add(currentTheme === 'dark' ? 'fa-moon' : 'fa-sun')

const modalContainer = document.querySelector('.modal-container')
const btnLearnMore = document.querySelectorAll('.learn-more')
const btnCloseModal = document.querySelector('.close-modal')
const overLay = document.querySelector('.overlay')

const openModal = () => {
  modalContainer.classList.remove('hidden')
  overLay.classList.remove('hidden')
}

const closeModal = () => {
  modalContainer.classList.add('hidden')
  overLay.classList.add('hidden')
}

for (let i = 0; i < btnLearnMore.length; i++)
  btnLearnMore[i].addEventListener('click', openModal)
btnCloseModal.addEventListener('click', closeModal)

overLay.addEventListener('click', closeModal)

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modalContainer.classList.contains('hidden')) {
    closeModal()
  }
})
