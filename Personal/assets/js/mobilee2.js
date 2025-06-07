document.addEventListener("DOMContentLoaded", function () {
  // Get the current path (e.g., "/about.html" or "/Personal/about.html")
  let currentPath = window.location.pathname;
  if (currentPath.endsWith("/") || currentPath === "") currentPath += "index.html";

  // Select all nav links in both navs
  const navLinks = document.querySelectorAll('#navmenu a, #slideNav a');

  navLinks.forEach(link => {
    link.classList.remove('active'); // Remove previous active
    // Get the link's href as a path (ignore domain, query, hash)
    let linkHref = link.getAttribute('href').split(/[?#]/)[0];
    // If linkHref is relative, make it absolute for comparison
    if (!linkHref.startsWith("/")) linkHref = "/" + linkHref;
    // Highlight if the current path ends with the link's href
    if (currentPath.endsWith(linkHref)) {
      link.classList.add('active');
    }
  });
});