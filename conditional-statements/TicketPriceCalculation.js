function ticketPriceCalculation(age) {
  if (age < 0) { // Input Validation
    return "Please enter a valid age";
  } else if (age < 12) {
    return 5;
  } else if (age < 18) {
    return 10;
  } else if (age < 60) {
    return 20;
  } else {
    return 15;
   }
}
 
ticketPriceCalculation(10);