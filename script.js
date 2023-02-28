const up_btn = document.querySelector("#arrowTop");
const bot_btn = document.querySelector("#arrowDown");
const windowB = document.querySelector(".content");

function all() {
  if (window.scrollY > windowB.scrollHeight / 2) {
    up_btn.style.visibility = "visible";
  } else {
    up_btn.style.visibility = "hidden";
  }

  if (window.scrollY < windowB.scrollHeight / 2) {
    bot_btn.style.visibility = "visible";
  } else {
    bot_btn.style.visibility = "hidden";
  }

  up_btn.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
  
  bot_btn.addEventListener("click", () => {
    window.scrollTo(0, windowB.clientHeight);
  });
}

setInterval(all, 100);
