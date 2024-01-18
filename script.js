// const html = document.documentElement;
// const mountain = document.getElementById('mountain-picture');
// const mtn = document.getElementsByClassName('mountain');

// const frameCount = 410;

// const updateImage = index => {
//   //   console.log('bottom: ' + -index + 'px');
//   mountain.style.bottom = -index + 'px';
// };

// window.addEventListener('scroll', () => {
//   const scrollTop = html.scrollTop;
//   const maxScrollTop = html.scrollHeight - window.innerHeight;
//   const scrollFraction = scrollTop / maxScrollTop;
//   const frameIndex = Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount));

//   requestAnimationFrame(() => updateImage(frameIndex + 1));
// });

$(document).ready(async function () {
  carousel(carouselText, '#sentence');
});

// type writer
async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split('');
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++;
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split('');
  let i = 0;
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(''));
  }
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const carouselText = [
  { text: 'Computer Science Student' },
  { text: 'Software Engineer' },
  { text: 'Backend Developer' },
  { text: 'Mathematician' },
  // { text: 'Engineer' },
  { text: 'Skier and Home Cook' },
];

async function carousel(carouselList, eleRef) {
  var i = 0;
  while (true) {
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(2000);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++;
    if (i >= carouselList.length) {
      i = 0;
      await typeSentence('Computer Science Student, Developer, & Engineer', eleRef);
      await waitForMs(2000);
      break;
    }
  }
}

// Highlight animation
// before body
document.addEventListener('DOMContentLoaded', async function () {
  let wt = document.querySelector('.hl-anim1');
  await waitForMs(2000);
  wt.style.setProperty('--bg-width', '100%');

  wt = document.querySelector('.hl-anim2');
  await waitForMs(5500);
  wt.style.setProperty('--bg-width', '100%');
});

// Scroll function
$(function () {
  $('a').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
  });
});
