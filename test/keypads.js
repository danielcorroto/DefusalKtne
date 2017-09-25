// Ejecuta los distintos módulos de test de verificación de la ordenación de iconos
function run_path_tests() {
	// Información de los tests
	// Cada elemento del array es un módulo del test
	// Cada módulo de test tiene un nombre "name" y una información de los datos del test "data"
	// Cada uno de los tests del array de "data" se compone de:
	// - "keypads" iconos desordenados
	// - "ordered" iconos ordenados
	var test_data = [
		{name: "Test Keypads 1",
		data: [
			{keypads: ["keypads_iotifiedbigyus", "keypads_archaickoppa", "keypads_reverseddottedlunatesigma", "keypads_lambda"], ordered: ["keypads_archaickoppa", "keypads_lambda", "keypads_iotifiedbigyus", "keypads_reverseddottedlunatesigma"]},
			{keypads: ["keypads_iotifiedbigyus", "keypads_yus", "keypads_reverseddottedlunatesigma", "keypads_kai"], ordered: ["keypads_yus", "keypads_iotifiedbigyus", "keypads_kai", "keypads_reverseddottedlunatesigma"]},
			{keypads: ["keypads_archaickoppa", "keypads_iotifiedbigyus", "keypads_yus", "keypads_kai"], ordered: ["keypads_archaickoppa", "keypads_yus", "keypads_iotifiedbigyus", "keypads_kai"]},
			{keypads: ["keypads_archaickoppa", "keypads_kai", "keypads_lambda", "keypads_yus"], ordered: ["keypads_archaickoppa", "keypads_yus", "keypads_lambda", "keypads_kai"]}
		]},
		{name: "Test Keypads 2",
		data: [
			{keypads: ["keypads_kai", "keypads_whitestar", "keypads_ohook", "keypads_archaickoppa"], ordered: ["keypads_archaickoppa", "keypads_ohook", "keypads_whitestar", "keypads_kai"]},
			{keypads: ["keypads_interrogationreversed", "keypads_ediaeresis", "keypads_kai", "keypads_archaickoppa"], ordered: ["keypads_ediaeresis", "keypads_archaickoppa", "keypads_kai", "keypads_interrogationreversed"]},
			{keypads: ["keypads_archaickoppa", "keypads_ohook", "keypads_whitestar", "keypads_reverseddottedlunatesigma"], ordered: ["keypads_archaickoppa", "keypads_reverseddottedlunatesigma", "keypads_ohook", "keypads_whitestar"]},
			{keypads: ["keypads_ediaeresis", "keypads_reverseddottedlunatesigma", "keypads_interrogationreversed", "keypads_whitestar"], ordered: ["keypads_ediaeresis", "keypads_reverseddottedlunatesigma", "keypads_whitestar", "keypads_interrogationreversed"]}
		]},
		{name: "Test Keypads 3",
		data: [
			{keypads: ["keypads_komidzje", "keypads_zhje", "keypads_lambda", "keypads_smallomegawithtitlo"], ordered: ["keypads_smallomegawithtitlo", "keypads_zhje", "keypads_komidzje", "keypads_lambda"]},
			{keypads: ["keypads_whitestar", "keypads_copyright", "keypads_komidzje", "keypads_smallomegawithtitlo"], ordered: ["keypads_copyright", "keypads_smallomegawithtitlo", "keypads_komidzje", "keypads_whitestar"]},
			{keypads: ["keypads_zhje", "keypads_lambda", "keypads_copyright", "keypads_ohook"], ordered: ["keypads_copyright", "keypads_ohook", "keypads_zhje", "keypads_lambda"]},
			{keypads: ["keypads_ohook", "keypads_whitestar", "keypads_lambda", "keypads_copyright"], ordered: ["keypads_copyright", "keypads_ohook", "keypads_lambda", "keypads_whitestar"]}
		]},
		{name: "Test Keypads 4",
		data: [
			{keypads: ["keypads_iotifiedbigyus", "keypads_tewithring", "keypads_yat", "keypads_interrogationreversed"], ordered: ["keypads_yat", "keypads_iotifiedbigyus", "keypads_interrogationreversed", "keypads_tewithring"]},
			{keypads: ["keypads_interrogationreversed", "keypads_yat", "keypads_pilcrow", "keypads_zhje"], ordered: ["keypads_pilcrow", "keypads_yat", "keypads_zhje", "keypads_interrogationreversed"]},
			{keypads: ["keypads_tewithring", "keypads_be", "keypads_pilcrow", "keypads_interrogationreversed"], ordered: ["keypads_be", "keypads_pilcrow", "keypads_interrogationreversed", "keypads_tewithring"]},
			{keypads: ["keypads_yat", "keypads_tewithring", "keypads_be", "keypads_iotifiedbigyus"], ordered: ["keypads_be", "keypads_yat", "keypads_iotifiedbigyus", "keypads_tewithring"]}
		]},
		{name: "Test Keypads 5",
		data: [
			{keypads: ["keypads_psi", "keypads_tewithring", "keypads_pilcrow", "keypads_whitestar"], ordered: ["keypads_psi", "keypads_tewithring", "keypads_pilcrow", "keypads_whitestar"]},
			{keypads: ["keypads_ksi", "keypads_dottedlunatesigma", "keypads_tewithring", "keypads_yat"], ordered: ["keypads_tewithring", "keypads_yat", "keypads_dottedlunatesigma", "keypads_ksi"]},
			{keypads: ["keypads_whitestar", "keypads_dottedlunatesigma", "keypads_ksi", "keypads_yat"], ordered: ["keypads_yat", "keypads_dottedlunatesigma", "keypads_ksi", "keypads_whitestar"]},
			{keypads: ["keypads_ksi", "keypads_whitestar", "keypads_psi", "keypads_pilcrow"], ordered: ["keypads_psi", "keypads_pilcrow", "keypads_ksi", "keypads_whitestar"]}
		]},
		{name: "Test Keypads 6",
		data: [
			{keypads: ["keypads_ediaeresis", "keypads_be", "keypads_ae", "keypads_yot"], ordered: ["keypads_be", "keypads_ediaeresis", "keypads_ae", "keypads_yot"]},
			{keypads: ["keypads_ediaeresis", "keypads_thousand", "keypads_omega", "keypads_psi"], ordered: ["keypads_ediaeresis", "keypads_thousand", "keypads_psi", "keypads_omega"]},
			{keypads: ["keypads_ediaeresis", "keypads_thousand", "keypads_be", "keypads_psi"], ordered: ["keypads_be", "keypads_ediaeresis", "keypads_thousand", "keypads_psi"]},
			{keypads: ["keypads_yot", "keypads_omega", "keypads_be", "keypads_thousand"], ordered: ["keypads_be", "keypads_thousand", "keypads_yot", "keypads_omega"]}
		]}
	];
	
	for (var i=0; i<test_data.length; i++) {
		run_path_module(test_data[i]["name"], test_data[i]["data"])();
	}
}

// Devuelve una función que ejecuta un módulo de test de verificación de la ordenación de iconos
// name: nombre del módulo
// test_info: array con información de cada uno de los tests
function run_path_module(name, test_info) {
	return function() {
		QUnit.test(name, function( assert ) {
			for (var i=0; i<test_info.length; i++) {
				var x = test_info[i];
				assert.deepEqual(verify(x.keypads), x.ordered, "Keypads: " + x.keypads + " / Ordered: " + x.ordered);
			}
		});
	}
}

run_path_tests();