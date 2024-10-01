function vacationBooklist(pagesCount, PagesPerHour, daysCount) {
  let totalHours = pagesCount / PagesPerHour;
  let hoursPerDay = totalHours / daysCount;
  console.log(hoursPerDay);
}
vacationBooklist(212, 20, 2);