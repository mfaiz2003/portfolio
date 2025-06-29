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
  const about = document.getElementById("aboutSection");

  if (!about) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        
        about.classList.remove("opacity-0", "translate-y-10");
        about.classList.add("opacity-100", "translate-y-0");
      } else {
        
        about.classList.remove("opacity-100", "translate-y-0");
        about.classList.add("opacity-0", "translate-y-10");
      }
    });
  }, { threshold: 0.1 });

  observer.observe(about);
});

document.addEventListener("DOMContentLoaded", () => {
  const education = document.getElementById("educationsection");

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
  }, { threshold: 0.1 });

  observer.observe(education);
});

document.addEventListener("DOMContentLoaded", () => {
  const skill = document.getElementById("skillsection");

  if (!skill) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        
        skill.classList.remove("opacity-0", "translate-y-10");
        skill.classList.add("opacity-100", "translate-y-0");
      } else {
        
        skill.classList.remove("opacity-100", "translate-y-0");
        skill.classList.add("opacity-0", "translate-y-10");
      }
    });
  }, { threshold: 0.1 });

  observer.observe(skill);
});


document.addEventListener("DOMContentLoaded", () => {
  const project = document.getElementById("projectsection");

  if (!project) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        
        project.classList.remove("opacity-0", "translate-y-10");
        project.classList.add("opacity-100", "translate-y-0");
      } else {
        
        project.classList.remove("opacity-100", "translate-y-0");
        project.classList.add("opacity-0", "translate-y-10");
      }
    });
  }, { threshold: 0.1 });

  observer.observe(project);
});

document.addEventListener("DOMContentLoaded", () => {
  const service = document.getElementById("servicesection");

  if (!service) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        
        service.classList.remove("opacity-0", "translate-y-10");
       service.classList.add("opacity-100", "translate-y-0");
      } else {
        
        service.classList.remove("opacity-100", "translate-y-0");
        service.classList.add("opacity-0", "translate-y-10");
      }
    });
  }, { threshold: 0.1 });

  observer.observe(service);
});


document.addEventListener("DOMContentLoaded", () => {
  const contact = document.getElementById("contactsection");

  if (!contact) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        
        contact.classList.remove("opacity-0", "translate-y-10");
       contact.classList.add("opacity-100", "translate-y-0");
      } else {
        
        contact.classList.remove("opacity-100", "translate-y-0");
        contact.classList.add("opacity-0", "translate-y-10");
      }
    });
  }, { threshold: 0.1 });

  observer.observe(contact);
});


  document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleEducation");
    const moreContent = document.getElementById("educationMore");

    let isVisible = false;

    toggleBtn.addEventListener("click", () => {
      isVisible = !isVisible;
      moreContent.classList.toggle("hidden");
      toggleBtn.textContent = isVisible ? "Show Less" : "Show More";
    });
  });

