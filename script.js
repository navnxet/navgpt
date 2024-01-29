let sidebar = document.querySelector(".sidebar");
let sidebar_middle = document.querySelector(".sidebar .middle");
let sidebar_hide = document.querySelector(".sidebar_hide");
let sidebar_show = document.querySelector(".sidebar_show");
sidebar_hide.addEventListener("click", function () {
  sidebar.style.display = "none";
  sidebar_middle.style.width = "16rem";
});
sidebar_show.addEventListener("click", function () {
  sidebar.style.display = "block";
  sidebar_middle.style.width = "15.6rem";
});
