const input = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");
const romanNumerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];
  let result = "";

function convertToRoman(num) {
      let result = "";
      for (let [roman, value] of romanNumerals) {
        while (num >= value) {
          result += roman;
          num -= value;
        }
      }
      return result;
    }

    button.addEventListener("click", () => {
      const num = parseInt(input.value, 10);
      if (isNaN(num)) {
        output.innerHTML = "Please enter a valid number";
      } else if (num < 1) {
        output.innerHTML = "Please enter a number greater than or equal to 1";
      } else if (num >= 4000) {
        output.innerHTML = "Please enter a number less than or equal to 3999";
      } else {
        const romanNumeral = convertToRoman(num);
        output.innerHTML = romanNumeral;
      }
    });
