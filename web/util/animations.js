export const linear = timeFraction => timeFraction;
export const quad = timeFraction => Math.pow(timeFraction, 2);
export const circ = timeFraction => 1 - Math.sin(Math.acos(timeFraction));

export const backBow = (x, timeFraction) =>
  Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);

export const bounce = timeFraction => {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return (
        -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      );
    }
  }
};

export const elastic = (x, timeFraction) =>
  Math.pow(2, 10 * (timeFraction - 1)) *
  Math.cos(((20 * Math.PI * x) / 3) * timeFraction);

// @timing -> animation function
export const makeEaseOut = timing => timeFraction =>
  1 - timing(1 - timeFraction);

// @timing -> animation function
export const makeEaseInOut = timing => timeFraction => {
  if (timeFraction < 0.5) return timing(2 * timeFraction) / 2;
  else return (2 - timing(2 * (1 - timeFraction))) / 2;
};

export default ({ timing, draw, duration }) => {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction goes from 0 to 1
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // calculate the current animation state
    let progress = timing(timeFraction);

    draw(progress); // draw it

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};
