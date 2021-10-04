
//let selectors=document.querySelectorAll("input");
let button = document.querySelector("button");

//if (selectors[0].value>selectors[1].value) {
  //  let x=selectors[1].value; 
    //selectors[1].value=selectors[0].value;
    //selectors[0].value=x;}
function onClick(){
let arr = [];
let summ=0; 
let all=1;
for(let i=0; i<10; i++){

//arr[i]=(Math.round(Math.random()*(selectors[1].value-selectors[0].value))+(selectors[0].value));
arr[i]=Math.round(Math.random()*20)-10;
summ=summ+arr[i];
all=all*arr[i];
console.log(arr[i]);
}
let resultNode = document.querySelector(".result");
resultNode.textContent = arr;
let maxNode = document.querySelector(".Max");
maxNode.textContent = Math.max.apply(null,arr);
let minNode = document.querySelector(".Min");
minNode.textContent = Math.min.apply(null,arr);
let midNode = document.querySelector(".Mid");
midNode.textContent = summ/10;
let SumNode = document.querySelector(".Sum");
SumNode.textContent = summ;
let allNode = document.querySelector(".All");
allNode.textContent = all;
}
button.addEventListener("click", onClick);
//обьявить масив на 10 чисел 
//перебором найти минимальное /максимальное
