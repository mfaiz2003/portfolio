  const slider = document.getElementById("slider");
  const totalSlides = slider.children.length;
  let index = 0;

  setInterval(() => {
    index = (index + 1) % totalSlides;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }, 1800);
