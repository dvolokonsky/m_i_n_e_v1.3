var images = [
  '2022-10-07_13.01.53.png',
  '2022-10-07_15.49.47.png',
  '2023-02-18_21.45.36.png'
];

var currentIndex = 0;

function changeImage() {
  // збільшити поточний індекс на 1
  currentIndex++;

  // якщо поточний індекс дорівнює довжині масиву, повернутися до першого зображення
  if (currentIndex == images.length) {
    currentIndex = 0;
  }

  // змінити шлях зображення на нове зображення
  document.getElementById('slideshow').src = images[currentIndex];
}

setInterval(changeImage, 5000);