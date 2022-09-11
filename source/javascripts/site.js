const site = document.documentElement.lastElementChild;
const bannerBackground = site.querySelector(".banner-background");
const bannerGradient = site.querySelector(".banner-gradient");
const buttonProject = site.querySelector("#btn-project");
const headerContent = site.querySelector(".header-content")

buttonProject.addEventListener('click', (event) => {
  console.log(bannerBackground.outerHTML);
  bannerBackground.classList.toggle("banner-zoom")
  bannerGradient.classList.toggle("banner-opacity")
  headerContent.classList.toggle("content-fade")
  }
)
