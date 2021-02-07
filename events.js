const butts = document.querySelector('.butts');

const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('🐛It got clicked!');
  alert('🐷You clicked the button');
}

const hooray = () => console.log('HOORAY!');

butts.addEventListener('click', hooray);
coolButton.addEventListener('click', handleClick);

// butts.removeEventListener('click', handleClick);

// listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function buyItem() {
  console.log('Buying item');
}

buyButtons.forEach(function (buyButton) {
  console.log('Binding the buy button');
  buyButton.addEventListener('click', buyItem);
});
