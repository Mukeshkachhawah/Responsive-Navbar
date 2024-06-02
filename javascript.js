document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu i");
  const clickableBox = document.querySelector(".clickable-box");

  menuIcon.addEventListener("click", function () {
    if (clickableBox.style.display === "block") {
      clickableBox.style.display = "none";
    } else {
      clickableBox.style.display = "block";
    }
  });

  // Optional: Close the dropdown box when clicking outside of it
  document.addEventListener("click", function (event) {
    if (
      !clickableBox.contains(event.target) &&
      !menuIcon.contains(event.target)
    ) {
      clickableBox.style.display = "none";
    }
  });
});
