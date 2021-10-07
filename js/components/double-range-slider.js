window.onload = function () {
  slideMin();
  slideMax();
};

let sliderMin = document.querySelector(".double-range-slider__slider-min");
let sliderMax = document.querySelector(".double-range-slider__slider-max");
let displayValMin = document.querySelector(".double-range-slider__range-min");
let displayValMax = document.querySelector(".double-range-slider__range-max");
let minGap = 0;
let sliderTrack = document.querySelector(".double-range-slider__track");
let sliderMaxValue = sliderMin.max;

function slideMin() {
  if (parseInt(sliderMax.value) - parseInt(sliderMin.value) <= minGap) {
    sliderMin.value = parseInt(sliderMax.value) - minGap;
  }

  displayValMin.textContent = sliderMin.value.replace(
    /(\d)(?=(\d{3})+$)/g,
    "$1 "
  );
  fillColor();
}

function slideMax() {
  if (parseInt(sliderMax.value) - parseInt(sliderMin.value) <= minGap) {
    sliderMax.value = parseInt(sliderMin.value) + minGap;
  }

  displayValMax.textContent = sliderMax.value.replace(
    /(\d)(?=(\d{3})+$)/g,
    "$1 "
  );
  fillColor();
}

function fillColor() {
  percentMin = (sliderMin.value / sliderMaxValue) * 100;
  percentMax = (sliderMax.value / sliderMaxValue) * 100;

  sliderTrack.style.background = `linear-gradient(to right, #C4C4C4 ${percentMin}% , #EB0000 ${percentMin}% , #EB0000 ${percentMax}% , #C4C4C4 ${percentMax}%)`;
}
