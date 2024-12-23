document.getElementById("notifyButton").addEventListener("click", function () {
  var notification = document.getElementById("notification");
  notification.classList.remove("hidden");
  setTimeout(function () {
    notification.classList.add("hidden");
  }, 5000);
});
