document.addEventListener("DOMContentLoaded", function () {
  const calendarContainer = document.querySelector(".calendar-container");
  const row = calendarContainer.querySelector(".row");

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();
  const daysCount = daysInMonth(currentYear, currentMonth);

  const handleDateClick = (dayButton) => {
    const selectedButton = row.querySelector(".active-date");
    if (selectedButton) {
      selectedButton.classList.remove("active-date");
    }

    dayButton.classList.add("active-date");
  };

  for (let day = 1; day <= daysCount; day++) {
    const dayButton = document.createElement("button");
    dayButton.classList.add("calendar-button");
    dayButton.textContent = day;

    if (day === currentDay) {
      dayButton.classList.add("active-date");
    }

    dayButton.addEventListener("click", () => {
      handleDateClick(dayButton);
    });

    row.appendChild(dayButton);
  }
});

// Function to calculate the number of days in a month
const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
