function formatNumber(number) {
  return number < 10 ? "0" + number : number;
}

function humanReadable(seconds) {
  let hours = Math.floor(seconds / 60 / 60);
  seconds -= hours * 60 * 60;
  let minutes = Math.floor(hours / 60);
  seconds -= minutes * 60;

  while (seconds >= 60) {
    seconds = seconds - 60;
    minutes++;
  }
  while (minutes >= 60) {
    minutes = minutes - 60;
    hours++;
  }

  let formattedHours = formatNumber(hours);
  let formattedMinutes = formatNumber(minutes);
  let formattedSeconds = formatNumber(seconds);

  let time = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  return time;
}
