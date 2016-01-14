var morse_code = "";

// Pinta por pantalla el código morse actual
function display_code() {
	$("#output").text(morse_code + "|");
}

// Añade el punto/guion/espacio al código
// code es el símbolo a añadir
function add_code_refresh(code) {
	return function() {
		// No permitir dos espacios seguidos
		if (code == " " && morse_code.substring(morse_code.length - 1) == " ") {
			return;
		}
		// No permitir que empiece por espacio
		if (code == " " && morse_code == "") {
			return;
		}
		morse_code += code;
		display_code();
	}
}

$("#code_dot").click(add_code_refresh("·"));
$("#code_dash").click(add_code_refresh("-"));
$("#code_space").click(add_code_refresh(" "));
$("#code_back").click(function() {
	morse_code = morse_code.substring(0, morse_code.length - 1);
	display_code();
});
$("#code_reset").click(function() {
	morse_code = "";
	display_code();
	$("#frequency_row").hide();
});

// Recoge los datos seleccionados y realiza la comprobación
// Escribe la frecuencia a sintonizar
function check() {
	var frequencies = verify(morse_code);
	
	if (frequencies.length == 1) {
		$("#frequency").text(frequencies);
		$("#frequency_row").show();
	} else {
		$("#frequency_row").hide();
	}
}

// Realiza la comprobación
// code es el código morse
// Devuelve el valor del resultado
function verify(code) {
	var morse_array = [{code:"··· ···· · ·-·· ·-··", word:"shell", sol:3505}, 
	{code:"···· ·- ·-·· ·-·· ···", word:"halls", sol:3515}, 
	{code:"··· ·-·· ·· -·-· -·-", word:"slick", sol:3522}, 
	{code:"- ·-· ·· -·-· -·-", word:"trick", sol:3532}, 
	{code:"-··· --- -··- · ···", word:"boxes", sol:3535}, 
	{code:"·-·· · ·- -·- ···", word:"leaks", sol:3542}, 
	{code:"··· - ·-· --- -··· ·", word:"strobe", sol:3545}, 
	{code:"-··· ·· ··· - ·-· ---", word:"bistro", sol:3552}, 
	{code:"··-· ·-·· ·· -·-· -·-", word:"flick", sol:3555}, 
	{code:"-··· --- -- -··· ···", word:"bombs", sol:3565}, 
	{code:"-··· ·-· · ·- -·-", word:"break", sol:3572}, 
	{code:"-··· ·-· ·· -·-· -·-", word:"brick", sol:3575}, 
	{code:"··· - · ·- -·-", word:"steak", sol:3582}, 
	{code:"··· - ·· -· --·", word:"sting", sol:3592}, 
	{code:"···- · -·-· - --- ·-·", word:"vector", sol:3595}, 
	{code:"-··· · ·- - ···", word:"beats", sol:3600}];
	
	var res = [];
	for (var i=0; i<morse_array.length; i++) {
		if (morse_array[i]["code"].indexOf(code) != -1) {
			res.push(morse_array[i]["sol"]);
		}
	}
	
	return res;
}
