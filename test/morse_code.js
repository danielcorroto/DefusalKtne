// Ejecuta los distintos módulos de test de verificación del código morse
function run_path_tests() {
	// Información de los tests
	// Cada elemento del array es un módulo del test
	// Cada módulo de test tiene un nombre "name" y una información de los datos del test "data"
	// Cada uno de los tests del array de "data" se compone de:
	// - "code"  código morse
	// - "result" frecuencia resultado
	var test_data = [
		{name: "Test Morse code",
		data: [
			{code: "·", result: [3505, 3515, 3522, 3542, 3545, 3555, 3582, 3592, 3595] },
			{code: "-", result: [3532, 3535, 3552, 3565, 3572, 3575, 3600] },
			{code: "··", result: [3505, 3515, 3522, 3545, 3555, 3582, 3592, 3595] },
			{code: "·-", result: [3542] },
			{code: "-·", result: [3535, 3552, 3565, 3572, 3575, 3600] },
			{code: "--", result: [] },
			{code: "···", result: [3505, 3515, 3522, 3545, 3582, 3592, 3595] },
			{code: "··-", result: [3555] },
			{code: "·-·", result: [3542] },
			{code: "·--", result: [] },
			{code: "-··", result: [3535, 3552, 3565, 3572, 3575, 3600] },
			{code: "-·-", result: [] },
			{code: "--·", result: [] },
			{code: "---", result: [] },
			{code: "····", result: [3515] },
			{code: "··· ··", result: [3505] },
			{code: "··· ·-", result: [3522] },
			{code: "- ·", result: [3532] },
			{code: "-··· --- -·", result: [3535] },
			{code: "··· - ·-", result: [3545] },
			{code: "-··· ··", result: [3552] },
			{code: "-··· --- -- ", result: [3565] },
			{code: "-··· ·-· · ", result: [3572] },
			{code: "-··· ·-· ··", result: [3575] },
			{code: "··· - · ", result: [3582] },
			{code: "··· - ··", result: [3592] },
			{code: "···-", result: [3595] },
			{code: "-··· · ", result: [3600] }
		]}
	];
	
	for (var i=0; i<test_data.length; i++) {
		run_path_module(test_data[i]["name"], test_data[i]["data"])();
	}
}

// Devuelve una función que ejecuta un módulo de test de verificación del código morse
// name: nombre del módulo
// test_info: array con información de cada uno de los tests
function run_path_module(name, test_info) {
	return function() {
		QUnit.test(name, function( assert ) {
			for (var i=0; i<test_info.length; i++) {
				var x = test_info[i];
				assert.deepEqual(verify(x.code), x.result, "Code: " + x.code + " / Result: " + x.result);
			}
		});
	}
}

run_path_tests();