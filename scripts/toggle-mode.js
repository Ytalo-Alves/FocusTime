let darkMode = true
const toggleButton = document.getElementById('dark-mode-button')

toggleButton.addEventListener('click', (e) => {
  document.documentElement.classList.toggle('light')
  const mode = darkMode ? 'light' : 'dark'
  e.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

  darkMode = !darkMode
})