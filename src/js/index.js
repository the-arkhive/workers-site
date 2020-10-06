const showBio = document.querySelector(".showBio");
const text = document.querySelector(".bioLong");

showBio.addEventListener("click", (e) => {
  text.classList.toggle("bioLong show-bio");
  if (showBio.innerText === "Show Bio") {
    showBio.innerText = "Hide Bio";
  } else {
    showBio.innerText = "Show Bio";
  }
});
