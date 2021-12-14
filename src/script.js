// Slider automatic start
function slider(counter, ms, type) {
  let isForward = true;
  setInterval(() => {
    const eleCheck = document.getElementById(type + counter);

    if (eleCheck) {
      eleCheck.checked = true;
    }

    if (isForward) {
      counter++;
    }

    if (!isForward) {
      counter--;
    }

    if (counter > 4) {
      counter = counter - 1;
      isForward = false;
    }

    if (counter < 1) {
      isForward = true;
      counter = 1;
    }
  }, ms);
}

slider(1, 4000, "radio");
slider(1, 2000, "testimonial-radio");

// Slider automatic ends

// ------------------------- Tour -------------------------
var popularSearchItems = document.querySelectorAll(
  ".popular-place__list .popular-place__item"
);

popularSearchItems.forEach((item) => {
  item.onclick = () => {
    item.classList.toggle("hide");
  };
});
