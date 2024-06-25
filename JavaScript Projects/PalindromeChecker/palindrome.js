const textInput = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const output = document.getElementById("result");

function clearText(textInput) {
  return textInput.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

function checkPalindrome() {
  let inputValue = textInput.value.trim();
  if (!inputValue) {
    alert("Please input a value");
    return;
  }
  
  let clearedText = clearText(inputValue);
  let reversedText = clearedText.split('').reverse().join('');
  const happy=`<i style='font-size:24px' class='far'>&#xf584;</i>`;
  const sad=`<i style='font-size:24px' class='far'>&#xf5b4;</i>`;
  if (clearedText === reversedText) {
    output.innerHTML = `${inputValue} is a palindrome ${happy}`;
  } else {
    output.innerHTML = `${inputValue} is not a palindrome ${sad}`;
  }
}
button.addEventListener("click", checkPalindrome);
