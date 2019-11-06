// [] with all the div-s on page
let divs = document.querySelectorAll("div");

// gets random numbers for css and js position animation
const rand = multi => {
  return parseInt(multi * Math.random(), 10);
};

// gets window width and height
let ww = window.innerWidth;
let wh = window.innerHeight;

// the biggest possible value is a constraint in this game
let constraint = Math.min(ww, wh);

// moves the dots, is aware of the constraint
function move() {
  divs.forEach(div => {
    let w = rand(constraint);

    let x = rand(ww - w);
    let y = rand(wh - w);

    // applies styles
    div.style.width = w + "px";
    div.style.height = w + "px";
    div.style.top = y + "px";
    div.style.left = x + "px";

    // smoothly 'move' dot, requires over 1s to do so
    div.style.transition = rand(100) + 1000 + "ms";

    // applies random colours
    div.style.background = `rgba(
      ${rand(255)},
      ${rand(255)},
      ${rand(255)},
      ${Math.random() + 0.5}
    )`;
  });
}

window.setInterval(move, 1000);
