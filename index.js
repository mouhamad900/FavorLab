function showPage(pageId, el) {
  // hide all pages
  document.querySelectorAll(".page").forEach(p => {
    p.classList.add("hidden");
  });

  // show selected page
  document.getElementById(pageId).classList.remove("hidden");

  // remove active
  document.querySelectorAll(".nav a").forEach(a => {
    a.classList.remove("active");
  });

  // add active
  if (el) el.classList.add("active");

  // close menu on mobile
  document.getElementById("nav").classList.remove("show");
}

function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}