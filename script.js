    const toggleBtn = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });


document.addEventListener("DOMContentLoaded", () => {
  const image = document.getElementById("slideimage");

  if (!image) {
    console.warn("");
    return;
  }

  setTimeout(() => {
    image.classList.remove("opacity-0", "translate-x-full");
    image.classList.add("opacity-100", "translate-x-0");
  }, 100); 
})

document.addEventListener("DOMContentLoaded", () => {
  const textBlock = document.getElementById("slideText");

  if (textBlock) {
    
    setTimeout(() => {
      textBlock.classList.remove("opacity-0", "translate-x-full");
      textBlock.classList.add("opacity-100", "translate-x-0");
    }, 100); 
  } else {
    console.warn("");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const about = document.getElementById("aboutZoom");

  if (about) {
    setTimeout(() => {
      about.classList.remove("opacity-0", "scale-95");
      about.classList.add("opacity-100", "scale-100");
    }, 200); 
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const education = document.getElementById("educationSection");

  if (!education) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        
        education.classList.remove("opacity-0", "translate-y-10");
        education.classList.add("opacity-100", "translate-y-0");
      } else {
        
        education.classList.remove("opacity-100", "translate-y-0");
        education.classList.add("opacity-0", "translate-y-10");
      }
    });
  }, { threshold: 0.3 });

  observer.observe(education);
});

document.addEventListener("DOMContentLoaded", () => {
  const education = document.getElementById("aboutSection");

  if (!education) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        
        education.classList.remove("opacity-0", "translate-y-10");
        education.classList.add("opacity-100", "translate-y-0");
      } else {
        
        education.classList.remove("opacity-100", "translate-y-0");
        education.classList.add("opacity-0", "translate-y-10");
      }
    });
  }, { threshold: 0.3 });

  observer.observe(education);
});

