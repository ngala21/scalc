var add = function(number1, number2){
  return number1 + number2;
};
add();

var sub = function(number1, number2) {
  return number1 - number2;
};
sub();

var product = function(number1, number2) {
  return number1 * number2;
}
product();

var div = function(number1, number2) {
  return number1 / number2;
}
div();

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
var resul = sub(number1, number2);
var resu = product(number1, number2);
var res = div(number1, number2);

alert(result);
alert(resul);
alert(resu);
alert(res);
