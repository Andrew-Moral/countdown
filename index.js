class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
  }

  timer = setInterval(() => {
    const time = this.targetDate - Date.now();
    this.updateClockface(time);
  }, 1000);

  updateClockface(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.selector.querySelector('[data-value= "days"]').textContent = days;
    this.selector.querySelector('[data-value="hours"]').textContent = hours;
    this.selector.querySelector('[data-value="mins"]').textContent = mins;
    this.selector.querySelector('[data-value="secs"]').textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

new CountdownTimer({
  selector: "#timer",
  targetDate: new Date("Dec 30, 2023, 17:00:00"),
});
