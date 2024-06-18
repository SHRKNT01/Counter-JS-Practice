let count = 0;

function updateCount(value) {
  count += value;
  document.querySelector("h3").textContent = count;
}

document.querySelector(".increase").addEventListener("click", function () {
  updateCount(1);
});

document.querySelector(".decrease").addEventListener("click", function () {
  updateCount(-1);
});

document.querySelector(".reset").addEventListener("click", function () {
  count = 0;
  document.querySelector("h3").textContent = count;
});
