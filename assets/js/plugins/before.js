const imgAfter = document.querySelector('.img-wrapper:nth-of-type(2)');
const line = document.getElementById('line');
const slider = document.getElementById('slider');

slider.addEventListener('input', () => {
  line.style.left = `${slider.value}%`;   
  imgAfter.style.clipPath = `inset(0px 0px 0px ${slider.value}%)`;
});

// Reset on double-click
slider.addEventListener('dblclick', () => {
  slider.value = 50;
  line.style.left = '50%';
  imgAfter.style.clipPath = 'inset(0px 0px 0px 50%';
});


