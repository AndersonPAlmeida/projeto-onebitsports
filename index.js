const linkTop = document.querySelector(".top");

linkTop.addEventListener("click", () => {
   window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});