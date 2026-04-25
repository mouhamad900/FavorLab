function showPage(pageId, el) {
  
  document.querySelectorAll(".page").forEach(p => {
    p.classList.add("hidden");
  });

  
  document.getElementById(pageId).classList.remove("hidden");


  document.querySelectorAll(".nav a").forEach(a => {
    a.classList.remove("active");
  });

  if (el) el.classList.add("active");


  document.getElementById("nav").classList.remove("show");
}

function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}
