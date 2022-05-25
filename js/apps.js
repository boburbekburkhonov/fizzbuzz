window.addEventListener("DOMContentLoaded", function() {
  const elForm = document.querySelector(".form");
  const elFormInput = document.querySelector(".form-input");
  const elFormResult = document.querySelector(".form-result");
  const elHeading = document.querySelector(".heading");
  const elResetBtn = document.querySelector(".reset-btn");

  elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    const formInput = Number(elFormInput.value);
    elHeading.textContent = "Natijangiz!"

    if (formInput % 3 === 0 && formInput % 5 === 0) {
      elFormResult.textContent = "FizzBuzz";
    } else if (formInput % 5 === 0) {
      elFormResult.textContent = "Buzz";
    } else if (formInput % 3 === 0) {
      elFormResult.textContent = "Fizz";
    } else {
      elFormResult.textContent = `${formInput}`;
    }
  })


  elResetBtn.addEventListener("click", function() {
    elHeading.textContent = "FizzBuzz";
    elFormResult.textContent = "....";
  })
})
