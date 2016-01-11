
// Id de cada uno de las configuraciones del cable
var config_1 = ["#config_1_no", "#config_1_yes"];
var config_2 = ["#config_2_no", "#config_2_yes"];
var config_3 = ["#config_3_no", "#config_3_yes"];
var config_4 = ["#config_4_no", "#config_4_yes"];
var configs = [config_1, config_2, config_3, config_4];

// Otras opciones seleccionables
var option_last_sn_digit = ["#option_last_sn_digit_odd", "#option_last_sn_digit_even"];
var option_has_parallel_port = ["#option_has_parallel_port_no", "#option_has_parallel_port_yes"];
var option_has_batteries = ["#option_has_batteries_no", "#option_has_batteries_yes"];
var options = [option_last_sn_digit, option_has_parallel_port, option_has_batteries];

// Cuándo visualizar option_last_sn_digit
var show_option_last_sn_digit = [ ["#config_1_no", "#config_2_yes", "#config_3_no", "#config_4_no"], ["#config_1_yes", "#config_2_no", "#config_3_no", "#config_4_no"], ["#config_1_yes", "#config_2_yes", "#config_3_no"] ];

// Cuándo visualizar option_has_parallel_port
var show_option_has_parallel_port = [ ["#config_1_no", "#config_2_yes", "#config_4_yes"], ["#config_1_yes", "#config_2_yes", "#config_3_yes", "#config_4_no"] ];

// Cuándo visualizar option_has_batteries
var show_option_has_batteries = [ ["#config_1_no", "#config_2_no", "#config_3_yes", "#config_4_yes"], ["#config_1_yes", "#config_2_no", "#config_4_yes"] ];

// Onclick buttons
for (var i=0; i<configs.length; i++) {
	for (var j=0; j<configs[i].length; j++) {
		$(configs[i][j]).click(select_one_callback(configs[i], "btn-primary"));
		$(configs[i][j]).click(function(){show_options()});
	}
}
for (var i=0; i<options.length; i++) {
	for (var j=0; j<options[i].length; j++) {
		$(options[i][j]).click(select_one_callback(options[i], "btn-primary"));
	}
}

function show_options() {
	// s/n
	show_option(show_option_last_sn_digit, "#option_last_sn_digit");
	
	// parallel
	show_option(show_option_has_parallel_port, "#option_has_parallel_port");
	
	// batteries
	show_option(show_option_has_batteries, "#option_has_batteries");
}

function show_option(options, selector) {
	var show = false;
	for (var i=0; i< options.length; i++) {
		var j=0;
		while ( $(options[i][j]).hasClass("btn-primary") ) {
			j++;
		}
		if (j == options[i].length) {
			show = true;
		}
	}
	if (show) {
		$(selector).show();
	} else {
		$(selector).hide();
	}
}

// Recoge los datos seleccionados y realiza la comprobación
// Escribe si se debe cortar el cable
function check() {
	var config = [];
	for (var i=0; i<configs.length; i++) {
		for (var j=0; j<configs[i].length; j++) {
			if ($(configs[i][j]).hasClass("btn-primary")) {
				config.push(j);
			}
		}
	}
	
	var option = [];
	for (var i=0; i<options.length; i++) {
		option.push($(options[i][1]).hasClass("btn-primary"));
	}
	
	var cut = verify(config, option);
	if (cut) {
		$("#cut").text("cut");
	} else {
		$("#cut").text("don't cut");
	}
	$(document).scrollTop(0);
}

// Realiza la comprobación
// config es un array de 1/0 según la configuración activa o no
// opts es un array de true/false según las opciones activas o no
// Devuelve el resultado booleano
function verify(config, opts) {
	var cut_wire = [cut(), dont(), cut(), has_batteries(opts), is_even(opts), has_parallel(opts), dont(), has_parallel(opts), is_even(opts), has_batteries(opts), cut(), has_batteries(opts), is_even(opts), is_even(opts), has_parallel(opts), dont()];
	var index = 0;
	for (var i=0; i<config.length; i++) {
		index = index * 2 + config[i];
	}
	
	return cut_wire[index]();
}

function cut() {
	return function() {
		return true;
	};
}

function dont() {
	return function() {
		return false;
	};
}

function is_even(opts) {
	return function() {
		return opts[0];
	}
}

function has_parallel(opts) {
	return function() {
		return opts[1];
	}
}

function has_batteries(opts) {
	return function() {
		return opts[2];
	}
}