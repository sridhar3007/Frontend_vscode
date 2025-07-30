function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

function submitForm(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
}

// Load Home by default
window.onload = () => {
  showPage('home');
};
