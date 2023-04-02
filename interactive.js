const galleryContainer = document.querySelector('.gallery-container');
const galleryCarousel = document.querySelector('.gallery-carousel');
const galleryImages = document.querySelectorAll('.gallery-image');
const galleryDots = document.querySelectorAll('.gallery-dot');

let imageIndex = 0;
let translateX = 0;

// Set active dot on page load
galleryDots[imageIndex].classList.add('active');

// Change image and dot when dot is clicked
galleryDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    imageIndex = index;
    translateX = -imageIndex * galleryImages[imageIndex].clientWidth;
    galleryCarousel.style.transform = `translateX(${translateX}px)`;
    updateActiveDot();
  });
});

// Change image and dot every 5 seconds
setInterval(() => {
  imageIndex++;
  if (imageIndex > galleryImages.length - 1) {
    imageIndex = 0;
    translateX = 0;
  } else {
    translateX -= galleryImages[imageIndex].clientWidth;
  }
  galleryCarousel.style.transform = `translateX(${translateX}px)`;
  updateActiveDot();
}, 5000);

// Update active dot
function updateActiveDot() {
  galleryDots.forEach(dot => {
    dot.classList.remove('active');
  });
  galleryDots[imageIndex].classList.add('active');
}
