let element = document.querySelector(".collapsible__content")


let animation = element.animate([
  { transform: 'scale(1)', opacity: 1 },
  { transform: 'scale(.6)', opacity: 0 },
], {
  duration: 700,
  easing: 'ease-in-out',
  delay: 10,
  iterations: 1,
  direction: 'normal',
  fill: 'forwards'
})

console.log('element: ', element);


animation.pause();

const btns_wrapper = document.getElementsByClassName("collapsible__button")[0];
const closeBtn = document.querySelector(".collapsible__action--visible");
const openBtn = document.querySelector(".collapsible__action--hidden");

btns_wrapper.addEventListener("click", (event) => {
  let btn = event.target;
  if (btn.classList.contains("collapsible__action--visible")) {
    playAnimation(1, btn, openBtn);

  }
  else if (btn.classList.contains("collapsible__action--hidden")) {
    playAnimation(-1, btn, closeBtn);
  }

}, true);


function playAnimation(rate, btn, activeted) {
  if (element.style.display === 'none') {
    element.style.display = 'block';
  }

  animation.playbackRate = rate;
  animation.play();
  animation.finished.then(() => {
    btn.style.pointerEvents = 'none';
    activeted.style.pointerEvents = 'auto';
    element.style.display = (rate === -1) ? 'block' : 'none';
  })

}




