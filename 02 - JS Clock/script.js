const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60)*360) + 90; //due to the offset of transform secondHand
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes/60)*360) + ((seconds/60)*6) + 90; //due to the offset of transform secondHand
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hour/12)*360) + ((minutes/60)*30) + 90; //due to the offset of transform secondHand
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  console.log(hours);
}

setInterval(setDate,1000);
