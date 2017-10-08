// Id de cada uno de los colores de los cables
var button_color = ["#color_blue", "#color_red", "#color_white", "#color_yellow"];
var button_label = ["#label_abort", "#label_detonate", "#label_hold"];
var button_batteries = ["#batteries_0_1", "#batteries_2", "#batteries_3"];
var button_car = ["#car_yes", "#car_no"];
var button_frk = ["#frk_yes", "#frk_no"];
var button_strip = ["#strip_blue", "#strip_white", "#strip_yellow", "#strip_other"];
var options = [button_color, button_label, button_batteries, button_car, button_frk, button_strip];

// Desactiva un grupo de botones
// option_group es un array con el grupo de botones que se va a desactivar
function disable_group(option_group) {
	for (var i=0; i<option_group.length; i++) {
		$(option_group[i]).removeClass(ACTIVE_CLASS);
	}
}

// Onclick buttons
// Activa CAR para boton white
for (var i=0; i<button_color.length; i++) {
	$(button_color[i]).click(function() {
		if ((this).id == "color_white") {
			$("#car").show();
		} else {
			$("#car").hide();
			disable_group(button_car);
		}
	});
}
// Activa FRK para más de 2 baterías
for (var i=0; i<button_batteries.length; i++) {
	$(button_batteries[i]).click(function() {
		if ((this).id == "batteries_3") {
			$("#frk").show();
		} else {
			$("#frk").hide();
			disable_group(button_frk);
		}
	});
}
// Desactiva grupo strip cuando se modifica selección
// Cambia solución a "??" cuando se selecciona un botón
for (var i=0; i<options.length; i++) {
	if (options[i] != button_strip) {
		for (var j=0; j<options[i].length; j++) {
			$(options[i][j]).click(function() {
				$("#strip").hide();
				disable_group(button_strip);
				$("#solution").text("??");
			});
		}
	} else {
		for (var j=0; j<options[i].length; j++) {
			$(options[i][j]).click(function() {
				$("#solution").text("??");
			});
		}
	}
}
set_button_callbacks(options);

// Recoge los datos seleccionados y realiza la comprobación
// Escribe qué realizar con el botón (o pide una opción más)
function check() {
	console.log("Checking");
	
	var selected = [];
	for (var i=0; i<options.length; i++) {
		for (var j=0; j<options[i].length; j++) {
			if ($(options[i][j]).hasClass(ACTIVE_CLASS)) {
				selected.push($(options[i][j])[0].id);
			}
		}
		if (selected.length < i+1) {
			selected.push(null);
		}
	}
	
	var solution = verify(selected);
	
	// Comprueba si hay que mostrar una nueva opción strip o no
	if (solution == "_hold_") {
		$("#strip").show();
		window.scrollTo(0,document.body.scrollHeight);
	} else {
		$("#solution").text(solution);
		$(document).scrollTop(0);
	}
}

// Realiza la comprobación
// options son las opciones seleccionadas
// Devuelve un texto con el resultado o "_hold_" si hay que mostrar la opción strip
function verify(options) {
	console.log("Verifying " + options);
	
	if (options[0] == "color_blue" && options[1] == "label_abort" && options[5] == null) {
		return "_hold_";
	} else if (options[0] == "color_blue" && options[1] == "label_abort" && options[5] != null) {
		return verify_strip(options[5]);
	} else if (options[1] == "label_detonate" && (options[2] == "batteries_2" || options[2] == "batteries_3") ) {
		return "Press and immediately release the button";
	} else if (options[0] == "color_white" && options[3] == "car_yes" && options[5] == null) {
		return "_hold_";
	} else if (options[0] == "color_white" && options[3] == "car_yes" && options[5] != null) {
		return verify_strip(options[5]);
	} else if (options[2] == "batteries_3" && options[4] == "frk_yes") {
		return "Press and immediately release the button";
	} else if (options[0] == "color_yellow" && options[5] == null) {
		return "_hold_";
	} else if (options[0] == "color_yellow" && options[5] != null) {
		return verify_strip(options[5]);
	} else if (options[0] == "color_red" && options[1] == "label_hold") {
		return "Press and immediately release the button";
	} else if (options[0] != null && options[1] != null) {
		return verify_strip(options[5]);
	} else {
		return "??";
	}
	
	return "??";
}

// Realiza la comprobación del color del strip mostrado
// option_strip opción strip seleccionada
// Devuelve un texto con el resultado
function verify_strip(option_strip) {
	if (option_strip == "strip_blue") {
		return "Release when the countdown timer has a 4 in any position";
	} else if (option_strip == "strip_white") {
		return "Release when the countdown timer has a 1 in any position";
	} else if (option_strip == "strip_yellow") {
		return "Release when the countdown timer has a 5 in any position";
	} else if (option_strip == "strip_other") {
		return "Release when the countdown timer has a 1 in any position";
	}
}