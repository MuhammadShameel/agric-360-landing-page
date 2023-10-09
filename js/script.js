const xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        data: [860, 2140, 1060, 2060, 1070, 1110, 1330, 2210, 7830, 2478],
        borderColor: "red",
        fill: false,
      },
      {
        data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
        borderColor: "green",
        fill: false,
      },
      {
        data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
        borderColor: "blue",
        fill: false,
      },
      {
        data: [800, 200, 300, 1000, 4000, 5000, 6000, 7000, 1000, 1000],
        borderColor: "purple",
        fill: false,
      },
    ],
  },
  options: {
    legend: { display: true },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth", // Change view as needed
    events: [
      {
        title: "Event 1",
        start: "2023-10-01",
      },
      {
        title: "Event 2",
        start: "2023-10-15",
      },
      // Add more events as needed
    ],
  });
  calendar.render();
});

const slides = document.querySelectorAll(".slide");
const buttons = document.querySelectorAll(".slider-button");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
      buttons[i].classList.add("active");
    } else {
      slide.classList.remove("active");
      buttons[i].classList.remove("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Automatically change slides every 5 seconds (5000 milliseconds)
setInterval(nextSlide, 5000);

// Initialize the first slide
showSlide(currentSlide);

AOS.init({
  duration: 1200,
});
