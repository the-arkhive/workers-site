const showBio = document.querySelector(".showBio");
const text = document.querySelector(".bioLong");

showBio.addEventListener("click", (e) => {
  let bioLongOnOrOff = text.classList.toggle("bioLong");
  console.log(bioLongOnOrOff);
  text.classList.toggle("show-bio");
  if (showBio.innerText === "Hide Bio") {
    showBio.innerText = "Show Bio";
  } else {
    showBio.innerText = "Hide Bio";
  }
});
