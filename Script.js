 var butaotop = document.getElementById("Buttontop");
 window.onscroll = function() {scrollFunction()};
 function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    butaotop.style.display = "block";
  } else {
    butaotop.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}