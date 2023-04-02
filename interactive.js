var images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg'
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