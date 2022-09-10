const site = document.documentElement.lastElementChild;
const bannerBackground = site.querySelector(".banner-background");
const bannerGradient = site.querySelector(".banner-gradient img");
const buttonProject = site.querySelector("#btn-project");

buttonProject.addEventListener('click', (event) => {
  console.log(bannerBackground.outerHTML);
  bannerBackground.classList.toggle("banner-zoom")
  bannerGradient.classList.toggle("banner-opacity")

  }
)
