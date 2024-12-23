let timer;
let timeInput;
let timeOutput = document.getElementById("timeOutput");
let time;
timeInput = document.getElementById("timeInput");

function setTime() {
  time = parseInt(timeInput.value);
  timer = setInterval(() => {
    if (time > 0) {
      const minute = (Math.floor(time / 60) < 10 ? "0" + Math.floor(time / 60) : Math.floor(time / 60));
      const second = (time % 60) < 10 ? "0" + time % 60 : time % 60;
      timeOutput.innerHTML = `${minute} : ${second}`;
    } else {
      timeOutput.innerHTML = "Time's Up";
      clearInterval(timer);
    }
    time--;
  }, 1000);
}
let timeOut = () => {
  clearInterval(timer);
  timeInput.value = time;
};