let input = document.getElementById("input-sec");
let output = document.getElementById("time-output");
let interval;
let time;
let startTimer = () => {
  time = parseInt(input.value);
  interval = setInterval(() => {
    if (time > 0) {
      input.style.display = "none";
      output.innerHTML = `${Math.floor(time / 60)} : ${time % 60}`;
      time--;
    } else {
      input.style.display = "none";
      output.innerHTML = `Time's Up`;
    }
  }, 1000);
};
let restart = () => {
  clearInterval(interval);
  output.innerHTML = null;
  input.style.display = "block";
  time = 0;
  input.value = time;
};
let stop = () => {
  clearInterval(interval);
  input.value = time;
};
