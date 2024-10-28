const updateClock = () => {
    const now = new Date();
    document.getElementById("hour").textContent = now.getHours();
    document.getElementById("min").textContent = now.getMinutes();
    document.getElementById("sec").textContent = now.getSeconds();
}
updateClock();