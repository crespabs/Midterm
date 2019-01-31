function add(char) {
	var screen = document.getElementById('screen');
	screen.value = screen.value+char;	
}
function subtract(char) {
	var screen = document.getElementById('screen');
	screen.value = screen.value-char;
}
function multiply(char) {
	var screen = document.getElementById('screen');
	screen.value = screen.value*char;
}
function divide(char) {
	var screen = document.getElementById('screen');
	screen.value = screen.value/char;
}
function modulo(char) {
	var screen = document.getElementById('screen');
	screen.value = screen.value%char;
}
function backspace() {
	var screen = document.getElementById('screen');
	screen.value = screen.value+char;
}
function reset() {
	document.getElementById('screen').value="";
	document.getElementById('result').value="";
}
function equal() {
	var screen = document.getElementById('screen');
	var result = eval(screen.value);
	document.getElementById('result').value=result;
	document.getElementById('screen').value="";
}
