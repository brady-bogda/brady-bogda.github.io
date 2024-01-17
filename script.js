const html = document.documentElement;
const mountain = document.getElementById('mountain-picture');
const mtn = document.getElementsByClassName('mountain');

const frameCount = 410;

const updateImage = index => {
  //   console.log('bottom: ' + -index + 'px');
  mountain.style.bottom = -index + 'px';
};

window.addEventListener('scroll', () => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount));

  requestAnimationFrame(() => updateImage(frameIndex + 1));
});
