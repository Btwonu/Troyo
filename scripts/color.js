const colorChange = document.querySelector('.color-changer');
const hexValue = document.querySelector('h2');



  let color = '#';
  let symbols = '0123456789abcdef';
 
  for (let i = 0; i < 6; i++) {
    color += symbols[Math.floor(Math.random() * 16)];
  }
  
let isColorized = false;

colorChange.addEventListener('click', () => {

  if (!isColorized) {
    document.body.style.background = color;
    hexValue.textContent = color;
    isColorized = true;
  } else {
    document.body.style.background = '#fff';
    hexValue.textContent = 'Colorize';
    isColorized = false;
    color = '#';
      for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
      }
  }
});

