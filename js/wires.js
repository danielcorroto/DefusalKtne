
// Id del selector de número de cables
var wires = ["#wires_3", "#wires_4", "#wires_5", "#wires_6"];

// Id de cada uno de los cables
var wire = ["#wire_1", "#wire_2", "#wire_3", "#wire_4", "#wire_5", "#wire_6"];

// Id de cada uno de los colores de los cables
var wire_1_color = ["#wire_1_white", "#wire_1_black", "#wire_1_red", "#wire_1_yellow", "#wire_1_blue"];
var wire_2_color = ["#wire_2_white", "#wire_2_black", "#wire_2_red", "#wire_2_yellow", "#wire_2_blue"];
var wire_3_color = ["#wire_3_white", "#wire_3_black", "#wire_3_red", "#wire_3_yellow", "#wire_3_blue"];
var wire_4_color = ["#wire_4_white", "#wire_4_black", "#wire_4_red", "#wire_4_yellow", "#wire_4_blue"];
var wire_5_color = ["#wire_5_white", "#wire_5_black", "#wire_5_red", "#wire_5_yellow", "#wire_5_blue"];
var wire_6_color = ["#wire_6_white", "#wire_6_black", "#wire_6_red", "#wire_6_yellow", "#wire_6_blue"];
var wire_color = [wire_1_color, wire_2_color, wire_3_color, wire_4_color, wire_5_color, wire_6_color];

// Otras opciones seleccionables
var options = ["#option_last_sn_digit_even", "#option_last_sn_digit_odd"];

// Onclick buttons
for (var i=0; i<wires.length; i++) {
	$(wires[i]).click(function() {
		var id = this.id.substring(6);
		select_wires(id);
	});
}
for (var i=0; i<wire_color.length; i++) {
	for (var j=0; j<wire_color[i].length; j++) {
		$(wire_color[i][j]).click(select_one_callback(wire_color[i], "btn-primary"));
	}
}
for (var i=0; i<options.length; i++) {
	$(options[i]).click(select_one_callback(options, "btn-primary"));
}


// Cambia color del número de cables seleccionado y visualiza los cables correspondientes
// wire_id es un número entre 3 y 6
function select_wires(wire_id) {
	console.log("Show wires " + wire_id);
	// Cambia color del botón
	select_one("#wires_" + wire_id, wires, "btn-primary");
	
	// Visualiza el cable
	for (var i=0; i<wire.length; i++) {
		if (i < wire_id) {
			$(wire[i]).show();
		} else {
			$(wire[i]).hide();
		}
	}
	
	// Visualiza opciones
	if (wire_id > 3) {
		$("#option_last_sn_digit").show();
	} else {
		$("#option_last_sn_digit").hide();
	}
}

// Recoge los datos seleccionados y realiza la comprobación
// Escribe el cable a cortar
function check() {
	console.log("Checking");
	
	var selected_wires = 0;
	var selected_colors = [];
	var selected_odd = false;
	
	// Número de cables
	for (var i=0; i<wires.length; i++) {
		if ($(wires[i]).hasClass("btn-primary")) {
			selected_wires = i+3;
		}
	}
	
	// Colores de los cables
	for (var i=0; i<selected_wires; i++) {
		for (var j=0; j<wire_color[i].length; j++) {
			if ($(wire_color[i][j]).hasClass("btn-primary")) {
				var color = wire_color[i][j].substring(8);
				selected_colors.push(color);
			}
		}
	}
	
	// Si SN es impar
	if (selected_wires > 3) {
		selected_odd = $("#option_last_sn_digit_odd").hasClass("btn-primary");
	}
	
	var cut = verify(selected_wires, selected_colors, selected_odd);
	$("#cut").text(cut);
	$(document).scrollTop(0);
}

// Realiza la comprobación
// size es el número de cables seleccionado
// colors es un array de cables seleccionados
// is_odd indica si el último dígito del número de serie es impar
function verify(size, colors, is_odd) {
	console.log("Verifying " + size + " " + colors + " " + is_odd);
	
	if (size == 3) {
		if (count_colors("red", colors) == 0) {
			return "second";
		} else if (colors[size-1] == "white") {
			return "last";
		} else if (count_colors("blue", colors) > 1) {
			return "last blue";
		} else {
			return "last";
		}
	} else if (size == 4) {
		if (is_odd && count_colors("red", colors) > 1) {
			return "last red";
		} else if (colors[size-1] == "yellow" && count_colors("red", colors) == 0) {
			return "first";
		} else if (count_colors("blue", colors) == 1) {
			return "first";
		} else if (count_colors("yellow", colors) > 1) {
			return "last";
		} else {
			return "second";
		}
	} else if (size == 5) {
		if (is_odd && colors[size-1] == "black") {
			return "forth";
		} else if (count_colors("red", colors) == 1 && count_colors("yellow", colors) > 1) {
			return "first";
		} else if (count_colors("black", colors) == 0) {
			return "second";
		} else {
			return "first";
		}
	} else if (size == 6) {
		if (is_odd && count_colors("yellow", colors) == 0) {
			return "third";
		} else if (count_colors("yellow", colors) == 1 && count_colors("white", colors) > 1) {
			return "forth";
		} else if (count_colors("red", colors) == 0) {
			return "last";
		} else {
			return "forth";
		}
	}
	
	return "??";
}

// Cuenta el número de elementos que hay en el array
// color es el elemento a buscar
// colors es el array donde buscar el elemento
function count_colors(color, colors) {
	var count = 0;
	
	for (var i=0; i<colors.length; i++) {
		if (colors[i] == color) {
			count += 1;
		}
	}
	
	return count;
}