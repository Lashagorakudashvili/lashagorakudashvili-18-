//1
function displayTime() {
  const date = new Date();
  let hours = date.getHours();
  let ampm = 'AM';
  if (hours > 12) {
    hours -= 12;
    ampm = 'PM';
  } else if (hours === 0) {
    hours = 12;
  }
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const time = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
  const timeSpan = document.getElementById("time");
  timeSpan.textContent = time;
}

setInterval(displayTime, 1000);


//2
function mainSlider() {
  const slides = document.querySelectorAll(".slide");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");
  const indicators = document.querySelectorAll(".indicator");
  let slideIntervalId = null;
  let activeIndex = 0;

  function renderSlides() {
    slides.forEach((el, i) => {
      if (i === activeIndex) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
    renderIndicators();
  }

  function renderIndicators() {
    indicators.forEach((el, i) => {
      if (i === activeIndex) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }

  function nextFn() {
    if (activeIndex === slides.length - 1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }
    renderSlides();
  }

  function prevFn() {
    if (activeIndex === 0) {
      activeIndex = slides.length - 1;
    } else {
      activeIndex--;
    }
    renderSlides();
  }

  next.addEventListener("click", nextFn);
  prev.addEventListener("click", prevFn);

  function startSlideInterval() {
    slideIntervalId = setInterval(nextFn, 5000);
  }

  function stopSlideInterval() {
    clearInterval(slideIntervalId);
  }

  function handleSlideInterval() {
    stopSlideInterval();
    startSlideInterval();
  }

  startSlideInterval();
  renderSlides();

  slides.forEach((slide) => {
    slide.addEventListener("mouseenter", stopSlideInterval);
    slide.addEventListener("mouseleave", startSlideInterval);
  });

  document.addEventListener("keyup", (e) => {
    if (e.code === "ArrowRight") {
      nextFn();
      handleSlideInterval();
    }
    if (e.code === "ArrowLeft") {
      prevFn();
      handleSlideInterval();
    }
  });

  indicators.forEach((indicator, i) => {
    indicator.addEventListener("click", () => {
      activeIndex = i;
      renderSlides();
      handleSlideInterval();
    });
  });
    
  // Add navbar functionality
  const navbar = document.querySelector(".navbar");
  const navCircles = document.querySelectorAll(".nav-circle");
  
  navCircles.forEach((circle, i) => {
    circle.addEventListener("click", () => {
      activeIndex = i;
      renderSlides();
      handleSlideInterval();
    });
  });
}

mainSlider();










