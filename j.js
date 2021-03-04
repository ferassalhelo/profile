// function to set background for the section name..
window.onscroll = () => {
  if (window.scrollY > 0 && window.scrollY < 1030) {
    document
      .getElementById("one")
      .setAttribute(
        "style",
        "  background-color: var(--color-text);color: var(--color-othor);"
      );
  } else {
    document.getElementById("one").setAttribute("style", "");
  }
  if (window.scrollY > 1030 && window.scrollY < 2200) {
    document
      .getElementById("two")
      .setAttribute(
        "style",
        "  background-color: var(--color-text);color: var(--color-othor);"
      );
  } else {
    document.getElementById("two").setAttribute("style", "");
  }
  if (window.scrollY > 2200 && window.scrollY < 2880) {
    document
      .getElementById("three")
      .setAttribute(
        "style",
        "  background-color: var(--color-text);color: var(--color-othor);"
      );
  } else {
    document.getElementById("three").setAttribute("style", "");
  }
  if (window.scrollY > 2880) {
    document
      .getElementById("foure")
      .setAttribute(
        "style",
        "  background-color: var(--color-text);color: var(--color-othor);"
      );
  } else {
    document.getElementById("foure").setAttribute("style", "");
  }

  // display the top button
  if (window.innerWidth < 850 && window.scrollY > 300) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
};

// changes the other color in the root
document.getElementById("orange").addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-othor", "#ad3e00");
});
document.getElementById("green").addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-othor", "#007000");
});
document.getElementById("pink").addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-othor", "#a43f49");
});
document.getElementById("blue").addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-othor", "#00009c");
});
document.getElementById("red").addEventListener("click", () => {
  document.documentElement.style.setProperty("--color-othor", "#bb0000");
});
