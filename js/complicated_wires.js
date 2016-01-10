
// Id de cada uno de las configuraciones del cable
var config_1 = ["#config_1_yes", "#config_1_no"];
var config_2 = ["#config_2_yes", "#config_2_no"];
var config_3 = ["#config_3_yes", "#config_3_no"];
var config_4 = ["#config_4_yes", "#config_4_no"];
var configs = [config_1, config_2, config_3, config_4];

// Otras opciones seleccionables
var option_last_sn_digit = ["#option_last_sn_digit_even", "#option_last_sn_digit_odd"];
var option_has_parallel_port = ["#option_has_parallel_port_yes", "#option_has_parallel_port_no"];
var option_batteries = ["#option_batteries_yes", "#option_batteries_no"];
var options = [option_last_sn_digit, option_has_parallel_port, option_batteries];

// Cuándo visualizar option_last_sn_digit

// Cuándo visualizar option_has_parallel_port

// Cuándo visualizar option_batteries

// Onclick buttons
for (var i=0; i<configs.length; i++) {
	for (var j=0; j<configs[i].length; j++) {
		$(configs[i][j]).click(select_one_callback(configs[i], "btn-primary"));
	}
}
for (var i=0; i<options.length; i++) {
	for (var j=0; j<options[i].length; j++) {
		$(options[i][j]).click(select_one_callback(options[i], "btn-primary"));
	}
}


