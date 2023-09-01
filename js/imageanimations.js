let expanded = false;
const button = document.querySelectorAll(".img_expand");

// Animations for sliding out images in panel
button.forEach((button) => {
  let panel = button.closest(".panel");
  let img_container = panel.querySelector(".image-container");
  let textbox = panel.querySelector(".text-box");

  button.addEventListener("click", function () {
    if (expanded == false) {
      textbox.classList.add("text-box-hide");
      img_container.classList.add("image-container-expand");
      expanded = !expanded;
      button.textContent = ">";
      button.classList.add("button_expanded");
    } else {
      textbox.classList.remove("text-box-hide");
      img_container.classList.remove("image-container-expand");
      expanded = false;
      button.textContent = "< ";
      button.classList.remove("button_expanded");
    }
  });
});

const imgs = document.querySelectorAll(".fullscreen-img");
const fullPage = document.querySelector("#fullpage");
const html = document.querySelector("html");

imgs.forEach((img) => {
  img.addEventListener("click", (event) => {
    fullPage.style.backgroundImage = "url(" + img.src + ")";
    fullPage.style.display = "block";
    html.style.overflowY = "hidden"; // Prevents User from scrolling while image expanded});
  });
});
