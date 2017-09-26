const POSITION = "position";
const LABEL = "label";

// Id de cada una de las etapas
var stage_1_display = ["#stage_1_display_1", "#stage_1_display_2", "#stage_1_display_3", "#stage_1_display_4"];
var stage_1_position_pressed = ["#stage_1_position_pressed_1", "#stage_1_position_pressed_2", "#stage_1_position_pressed_3", "#stage_1_position_pressed_4"];
var stage_1_label_pressed = ["#stage_1_label_pressed_1", "#stage_1_label_pressed_2", "#stage_1_label_pressed_3", "#stage_1_label_pressed_4"];

var stage_2_display = ["#stage_2_display_1", "#stage_2_display_2", "#stage_2_display_3", "#stage_2_display_4"];
var stage_2_position_pressed = ["#stage_2_position_pressed_1", "#stage_2_position_pressed_2", "#stage_2_position_pressed_3", "#stage_2_position_pressed_4"];
var stage_2_label_pressed = ["#stage_2_label_pressed_1", "#stage_2_label_pressed_2", "#stage_2_label_pressed_3", "#stage_2_label_pressed_4"];

var stage_3_display = ["#stage_3_display_1", "#stage_3_display_2", "#stage_3_display_3", "#stage_3_display_4"];
var stage_3_position_pressed = ["#stage_3_position_pressed_1", "#stage_3_position_pressed_2", "#stage_3_position_pressed_3", "#stage_3_position_pressed_4"];
var stage_3_label_pressed = ["#stage_3_label_pressed_1", "#stage_3_label_pressed_2", "#stage_3_label_pressed_3", "#stage_3_label_pressed_4"];

var stage_4_display = ["#stage_4_display_1", "#stage_4_display_2", "#stage_4_display_3", "#stage_4_display_4"];
var stage_4_position_pressed = ["#stage_4_position_pressed_1", "#stage_4_position_pressed_2", "#stage_4_position_pressed_3", "#stage_4_position_pressed_4"];
var stage_4_label_pressed = ["#stage_4_label_pressed_1", "#stage_4_label_pressed_2", "#stage_4_label_pressed_3", "#stage_4_label_pressed_4"];

var stage_5_display = ["#stage_5_display_1", "#stage_5_display_2", "#stage_5_display_3", "#stage_5_display_4"];
var stage_5_position_pressed = ["#stage_5_position_pressed_1", "#stage_5_position_pressed_2", "#stage_5_position_pressed_3", "#stage_5_position_pressed_4"];
var stage_5_label_pressed = ["#stage_5_label_pressed_1", "#stage_5_label_pressed_2", "#stage_5_label_pressed_3", "#stage_5_label_pressed_4"];

var stages = [stage_1_display, stage_1_position_pressed, stage_1_label_pressed, stage_2_display, stage_2_position_pressed, stage_2_label_pressed, stage_3_display, stage_3_position_pressed, stage_3_label_pressed, stage_4_display, stage_4_position_pressed, stage_4_label_pressed, stage_5_display, stage_5_position_pressed, stage_5_label_pressed];

// Botones que lanzan evento de check
var check_buttons = [stage_1_display, stage_2_display, stage_3_display, stage_4_display, stage_5_display];

var solutions = ["#sol_1", "#sol_2", "#sol_3", "#sol_4", "#sol_5"]
var stage_section = ["#stage_1", "#stage_2", "#stage_3", "#stage_4", "#stage_5"]

// Onclick buttons
set_button_callbacks(stages);
// Calcular botón a presionar
for (var i=0; i<check_buttons.length; i++) {
	for (var j=0; j<check_buttons[i].length; j++) {
		$(check_buttons[i][j]).click(function() {
			check($(this).attr("id"));
		});
	}
}
// Mostrar siguientes etapas
for (var i=0; i<stages.length; i++) {
	for (var j=0; j<stages[i].length; j++) {
		$(stages[i][j]).click(function() {
			var current_stage = $(this).attr("id").substring(6,7);
			var selected_display = false;
			var selected_position = false;
			var selected_label = false;
			var selected = $("."+ACTIVE_CLASS).map(function(){return $(this).attr("id");}).get();
			for (var i=0; i<selected.length; i++) {
				if (selected[i].indexOf("stage_" + current_stage + "_display_") != -1) {
					selected_display = true;
				} else if (selected[i].indexOf("stage_" + current_stage + "_position_pressed_") != -1) {
					selected_position = true;
				} else if (selected[i].indexOf("stage_" + current_stage + "_label_pressed") != -1) {
					selected_label = true;
				}
			}
			if (selected_display && selected_position && selected_label) {
				$(stage_section[current_stage]).show();
				window.scrollTo(0,document.body.scrollHeight);
			}
		});
	}
}

// Recoge los datos seleccionados y realiza la comprobación
// Escribe el botón a presionar
function check(pressed) {
	var selected = $("."+ACTIVE_CLASS).map(function(){return $(this).attr("id");}).get();
	var stage = pressed.substring(6,7);
	var displays = [];
	var positions = [];
	var labels = [];
	
	// Obtener botones marcados
	for (var i=0; i<selected.length; i++) {
		var item_stage = selected[i].substring(6,7);
		var item = selected[i].substring(selected[i].length - 1);
		if (selected[i].indexOf("display") != -1) {
			displays[item_stage - 1] = item;
		} else if (selected[i].indexOf("position_pressed") != -1) {
			positions[item_stage - 1] = item;
		} else if (selected[i].indexOf("label_pressed") != -1) {
			labels[item_stage - 1] = item;
		}
	}
	
	// Calcular resultado
	var res = verify(stage, displays, positions, labels);
	console.log(res);
	
	// Escribir resultado
	var res_text;
	if (res["type"] == LABEL) {
		res_text = "label " + res["id"];
		
		$("#stage_"+stage+"_label_pressed_"+res["id"]).click();
	} else if (res["type"] == POSITION) {
		switch (res["id"]) {
			case "1": res_text = "first"; break;
			case "2": res_text = "second"; break;
			case "3": res_text = "third"; break;
			case "4": res_text = "fourth"; break;
		}
		res_text += " position";
		
		$("#stage_"+stage+"_position_pressed_"+res["id"]).click();
	}
	$(solutions[stage-1]).text(res_text);
}

// Realiza la comprobación
// stage es la etapa que se está calculando [1-5]
// displays es un array con los números mostrados en cada etapa
// positions es un array con las posiciones de los botones presionadas en cada etapa
// labels es un array con las etiquetas de los botones presionados en cada etapa
// devuelve una tupla. La el elemento type es label/position y el elemento id la etiqueta/posición
function verify(stage, displays, positions, labels) {
	var result = [];
	if (stage == 1) {
		// stage 1
		result = [{type:POSITION, id:"2"}, {type:POSITION, id:"2"}, {type:POSITION, id:"3"}, {type:POSITION, id:"4"}];
	} else if (stage == 2) {
		// stage 2
		result = [{type:LABEL, id:"4"}, {type:POSITION, id:positions[0]}, {type:POSITION, id:"1"}, {type:POSITION, id:positions[0]}];
	} else if (stage == 3) {
		// stage 3
		result = [{type:LABEL, id:labels[1]}, {type:LABEL, id:labels[0]}, {type:POSITION, id:"3"}, {type:LABEL, id:"4"}];
	} else if (stage == 4) {
		// stage 4
		result = [{type:POSITION, id:positions[0]}, {type:POSITION, id:"1"}, {type:POSITION, id:positions[1]}, {type:POSITION, id:positions[1]}];
	} else if (stage == 5) {
		// stage 5
		result = [{type:LABEL, id:labels[0]}, {type:LABEL, id:labels[1]}, {type:LABEL, id:labels[3]}, {type:LABEL, id:labels[2]}];
	}
	return result[displays[stage-1]-1];
}