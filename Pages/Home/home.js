const descriptions = {
  desc1: document.getElementById("desc_1"),
  desc2: document.getElementById("desc_2"),
  desc3: document.getElementById("desc_3"),
};

let current_tab = 1;

let next_btn = document.getElementById("next_btn");
let prev_btn = document.getElementById("prev_btn");
prev_btn.disabled = true;

const changingTabs = (e) => {
  e === "next" && current_tab++;

  e === "prev" && current_tab--;

  next_btn.disabled = current_tab === 3;
  prev_btn.disabled = current_tab === 1;

  descriptions.desc1.className =
    current_tab === 1 ? "hero-description show" : "hero-description hide";
  descriptions.desc2.className =
    current_tab === 2 ? "hero-description show" : "hero-description hide";
  descriptions.desc3.className =
    current_tab === 3 ? "hero-description show" : "hero-description hide";

  console.log(current_tab);
};

next_btn.addEventListener("click", () => {
  changingTabs("next");
});

prev_btn.addEventListener("click", () => {
  changingTabs("prev");
});
