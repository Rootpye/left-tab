function lefttab(input, length) {
  // If the input is null or undefined, treat it as an empty string
  input = input == null ? "" : String(input);

  // If padding is not needed, return the input as is
  if (input.length >= length) {
    return input;
  }
  
  // Calculate the required number of tab paddings
  const paddingLength = length - input.length;

  // Generate and return the tab padding
  const padding = '\t'.repeat(paddingLength);
  return padding + input;
}

// Example usage
const inputString = "Hello, world!";
console.log(lefttab(inputString, 20)); // Add tab padding 8
console.log(lefttab("Test", 10));      // Add tab padding 6
console.log(lefttab(123, 6));          // Add tab padding 3
