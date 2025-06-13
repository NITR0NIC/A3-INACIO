document.addEventListener("DOMContentLoaded", () => {
    for (let i = 1; i <= 3; i++) {
      const title = localStorage.getItem(`project${i}-title`);
      const desc = localStorage.getItem(`project${i}-desc`);
      const img = localStorage.getItem(`project${i}-img`);
  
      const card = document.querySelectorAll(".project-card")[i - 1];
      if (card) {
        if (title) card.querySelector(".project-title").textContent = title;
        if (desc) card.querySelector(".project-description").textContent = desc;
        if (img) card.querySelector("img").src = img;
      }
    }
  });
  
  
  
  
  
  
