const sliderTrack = document.getElementById('slider-track');

// Clone the children of the slider track for infinite scroll effect
const cloneSliderItems = () => {
  const items = Array.from(sliderTrack.children);
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    sliderTrack.appendChild(clone);
  });
};

// Call the function to initialize cloning
cloneSliderItems();