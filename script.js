const images = [
  "/new/image1.jpeg",
  "/new/image2.jpeg",
  "/new/image3.jpeg",
  "/new/image4.jpeg",
  "/new/image5.jpeg",
  "/new/image6.jpeg",  
  "/new/image7.jpeg",
  "/new/image8.jpeg",
  "/new/image9.jpeg",
  // Add more image filenames here
];

let currentIndex = 0;
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-image");
const captionText = document.getElementById("caption");

function openModal(index) {
  currentIndex = index;
  modal.style.display = "block";
  modalImg.src = images[currentIndex];
  captionText.innerHTML = `Image ${currentIndex + 1}`;
}

function closeModal() {
  modal.style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;

  // Loop through images if we go past the end or before the start
  if (currentIndex >= images.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  modalImg.src = images[currentIndex];
  captionText.innerHTML = `Image ${currentIndex + 1}`;
}
