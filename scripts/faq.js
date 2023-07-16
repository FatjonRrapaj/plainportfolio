const coll = document.querySelectorAll(".collapsible");

coll.forEach((elem) => {
  elem.addEventListener("click", function () {
    elem.classList.toggle("active");
    const chevron = elem.children[0]?.children[1];
    const content = elem.children[1];
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.marginTop = 0;
      chevron.style.WebkitTransitionDuration = "0.2s";
      chevron.style.webkitTransform = "rotate(0deg)";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.marginTop = "1rem";
      chevron.style.WebkitTransitionDuration = "0.2s";
      chevron.style.webkitTransform = "rotate(180deg)";
    }
  });
});
