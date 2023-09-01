document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".projects__img");
  const modal = document.getElementById("image-modal");
  const enlargedImg = document.getElementById("enlarged-img");
  const closeBtn = document.getElementById("close-btn");

  images.forEach((image) => {
    image.addEventListener("click", function () {
      const src = this.getAttribute("src");
      enlargedImg.setAttribute("src", src);
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
