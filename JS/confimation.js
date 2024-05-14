const confirmation = document.getElementById("confirmation");
const reservationButton = document.getElementById("reservationButton");

reservationButton.addEventListener("click", function (event) {
  const mail = document.getElementById("email").value;
  const checkOut = document.getElementById("checkOut").value;
  const checkIn = document.getElementById("checkIn").value;
  const location = document.getElementById("location").value;

  if (mail != "" && checkIn != "" && checkOut != "" && location != "") {
    event.preventDefault();

    confirmation.style.visibility = "visible";

    setTimeout(function () {
      confirmation.style.visibility = "hidden";
    }, 2000);
  }
});
