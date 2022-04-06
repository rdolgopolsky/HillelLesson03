let number1 = prompt("Enter your digit", 0);

const mathOperation = prompt("what operation do you want to perform?");

let number2 = prompt("Enter your second digit", 0);

let result;

if (!isNaN(number1) && !isNaN(number2)) {
	number1 = +Number(number1);
	number2 = +Number(number2);

	if (mathOperation === "+") {
		result = number1 + number2;
		alert(`Your result ${result}`);
	} else if (mathOperation === "-") {
		result = number1 - number2;
		alert(`Your result ${result}`);
	} else if (mathOperation === "/") {
		result = number1 / number2;
		alert(`Your result ${result}`);
	} else if (mathOperation === "*") {
		result = number1 * number2;
		alert(`Your result ${result}`);
	} else {
		alert("You can't do this operation.");
	}
} else {
	alert("Enter normal numbers");
}
