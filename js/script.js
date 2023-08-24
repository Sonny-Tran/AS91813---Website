let expanded = false;
const button = document.querySelectorAll(".img_expand");

button.forEach((button) => {
  let panel = button.closest(".panel");
  let img_container = panel.querySelector(".image-container");
  let textbox = panel.querySelector(".text-box");
  console.log("ran");
  console.log(expanded);

  button.addEventListener("click", function (event) {
    if (expanded == false) {
      textbox.classList.add("text-box-hide");
      img_container.classList.add("image-container-expand");
      console.log("ran2");
      expanded = !expanded;
      button.textContent = "> \n > \n >";
    } else {
      textbox.classList.remove("text-box-hide");
      img_container.classList.remove("image-container-expand");

      console.log("ran3");
      expanded = false;
      button.textContent = "< \n < \n <";
    }
  });
});

const imgs = document.querySelectorAll(".fullscreen-img");
const fullPage = document.querySelector("#fullpage");
const html = document.querySelector("html");

imgs.forEach((img) => {
  img.addEventListener("click", function () {
    setDirection(0);
    fullPage.style.backgroundImage = "url(" + img.src + ")";
    fullPage.style.display = "block";
    html.style.overflowY = "hidden"; // Prevents User from scrolling while image expanded
  });
});
