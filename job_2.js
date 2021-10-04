
let input = document.querySelector("input");
let button = document.querySelector("button");
let resultNode = document.querySelector(".result");
let reg = /viagra|ХХХХ/gim;

function onClick() {
  let value = input.value;

  if (reg.test(value)) {
    let result = value.replace(reg, "***");
    resultNode.textContent = result;
  } else {
    resultNode.textContent = "Да!";
  }
}

button.addEventListener("click", onClick);