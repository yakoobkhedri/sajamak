// input auto focus

// Convert NodeList to Array with slice()
const inputs = Array.prototype.slice.call(
    document.querySelectorAll('.inputs')
  );
  
  inputs.forEach((input) => {
    input.addEventListener('keydown', (event) => {
      const num = Number(event.key);
      if (num && num >= 0 && num <= 9) { // Only allow numbers
        if (input.value.length >= input.maxLength) {
          event.preventDefault();
          focusNext();
        }
      }
    });
  });
  
  function focusNext() {
    const currInput = document.activeElement;
    const currInputIndex = inputs.indexOf(currInput);
    const nextinputIndex =
      (currInputIndex + 1) % inputs.length;
    const input = inputs[nextinputIndex];
    input.focus();
  }