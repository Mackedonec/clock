const clock = document.querySelector(".clock");

setInterval(function getLocalDate() {
  const daysOfWeek = [
    "неділя",
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "п'ятниця",
    "субота",
  ];

  const date = new Date();

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  const dayOfWeek = date.getDay();

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  let datePart = `${year}-${month}-${day}`;
  let weekDay = daysOfWeek[dayOfWeek];
  let timePart = `${hours}:${minutes}:${seconds}`;

  clock.innerHTML = `${datePart} ${weekDay} ${timePart}`;
}, 1000);
