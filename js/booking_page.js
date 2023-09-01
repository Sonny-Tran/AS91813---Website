const input = document.getElementById("booking_date");
const addDate = 3; //Converted these extra days to milliseconds and added it to today's date
const min = new Date(Date.now() + addDate * (24 * 60 * 60 * 1000));
const year = min.getFullYear();
const month = (min.getMonth() + 1).toString().padStart(2, "0");
const day = min.getDate().toString().padStart(2, "0");

const minDate = `${year}-${month}-${day}`; // Results in "YYYY-MM-DD" for today's date

// Now to set the MIN date value for the calendar to be today's date
document.getElementById("booking_date").setAttribute("min", minDate);

// Event listener to check if user selects a friday, saturday or sunday
input.addEventListener("change", function (e) {
  var day = new Date(this.value).getUTCDay();
  if ([1, 2, 3, 4].includes(day)) {
    e.preventDefault();
    this.value = "";
    alert("Only Friday, Saturdays and Sundays are avaliable");
  }
});
