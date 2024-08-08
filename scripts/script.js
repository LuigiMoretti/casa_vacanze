let currentSlide = { camera1: 0, camera2: 0, salone: 0, servizi: 0 };

function showSlide(index, camera) {
  const slides = document.querySelectorAll("." + camera + " .galleria-item");
  const indicators = document.querySelectorAll("." + camera + " .indicator");

  if (index >= slides.length) {
    currentSlide[camera] = 0;
  } else if (index < 0) {
    currentSlide[camera] = slides.length - 1;
  } else {
    currentSlide[camera] = index;
  }
  const offset = -currentSlide[camera] * 100;
  document.querySelector(
    "." + camera + " .galleria-inner"
  ).style.transform = `translateX(${offset}%)`;

  indicators.forEach((indicator, i) => {
    if (i === currentSlide[camera]) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

function nextSlide(camera) {
  showSlide(currentSlide[camera] + 1, camera);
}

function prevSlide(camera) {
  showSlide(currentSlide[camera] - 1, camera);
}

document.addEventListener("DOMContentLoaded", () => {
  for (let camera in currentSlide) {
    showSlide(currentSlide[camera], camera);
  }
});

function showMore(room) {
  document.getElementById(room).style.display = "block";
  $("#main_page").fadeOut();
  window.scroll(0, 255);
}

function showLess() {
  document.getElementById("camera1_page").style.display = "none";
  document.getElementById("camera2_page").style.display = "none";
  document.getElementById("salone_page").style.display = "none";
  document.getElementById("servizi_page").style.display = "none";
  $("#main_page").fadeIn();
  window.location = "#foto";
}

$(document).scroll(() => {
  if ($(window).scrollTop() > 2160) {
    document.getElementById("contacts-compressed").style.display = "block";
  } else if ($(window).scrollTop() < 2160) {
    document.getElementById("contacts-compressed").style.display = "none";
  }
});
