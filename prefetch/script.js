document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript file loaded!");
  const img = document.querySelector("img");
  img.addEventListener("load", function () {
    console.log("Image loaded!");
  });
});
