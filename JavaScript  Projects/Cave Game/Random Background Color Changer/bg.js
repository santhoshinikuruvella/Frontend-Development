const bgColors =[
    "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",

];
const code = document.querySelector("#code");
const button =document.querySelector("#btn");
const section = document.querySelector("#section");

function randomColorIndex()
{
   const colorIndex = Math.floor((bgColors.length)*Math.random());
   return colorIndex;
}

function changeColor()
{
     const color=bgColors[randomColorIndex()];
     code.innerText = color;
     section.style.backgroundColor = color;
}
   button.onclick = changeColor;
