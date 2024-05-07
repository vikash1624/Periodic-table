const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn10 = document.getElementById("btn10");

const boxes = document.querySelectorAll(".commonbox");

// 1-BUTTON

btn1.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.classList.remove("c11");
    if (box.classList.contains("c1")) {
      box.classList.add("c1");
    } else {
      box.classList.add("c11");
    }
  });
});

// 2-BUTTON

btn2.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.classList.remove("c11");
    if (box.classList.contains("c2")) {
      box.classList.add("c2");
    } else {
      box.classList.add("c11");
    }
  });
});

// 3-BUTTON

btn3.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.classList.remove("c11");
    if (box.classList.contains("c3")) {
      box.classList.add("c3");
    } else {
      box.classList.add("c11");
    }
  });
});

// 4-BUTTON

btn4.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.classList.remove("c11");
    if (box.classList.contains("c4")) {
      box.classList.add("c4");
    } else {
      box.classList.add("c11");
    }
  });
});

// 5-BUTTON

btn5.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.classList.remove("c11");
    if (box.classList.contains("c5")) {
      box.classList.add("c5");
    } else {
      box.classList.add("c11");
    }
  });
});

// 6-BUTTON

btn6.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.classList.remove("c11");
    if (box.classList.contains("c6")) {
      box.classList.add("c6");
    } else {
      box.classList.add("c11");
    }
  });
});

// 7-BUTTON

btn7.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.classList.remove("c11");
    if (box.classList.contains("c7")) {
      box.classList.add("c7");
    } else {
      box.classList.add("c11");
    }
  });
});

// 8-BUTTON

btn8.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.classList.remove("c11");
    if (box.classList.contains("c8")) {
      box.classList.add("c8");
    } else {
      box.classList.add("c11");
    }
  });
});

// 9-BUTTON

btn9.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.classList.remove("c11");
    if (box.classList.contains("c9")) {
      box.classList.add("c9");
    } else {
      box.classList.add("c11");
    }
  });
});

// 10-BUTTON

btn10.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.classList.remove("c11");
    if (box.classList.contains("c10")) {
      box.classList.add("c10");
    } else {
      box.classList.add("c11");
    }
  });
});
