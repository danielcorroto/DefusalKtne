// Ejecuta los distintos módulos de test de verificación de los cables complejos
function run_path_tests() {
	// Información de los tests
	// Cada elemento del array es un módulo del test
	// Cada módulo de test tiene un nombre "name" y una información de los datos del test "data"
	// Cada uno de los tests del array de "data" se compone de:
	// - "config" array de 1/0 según la configuración activa o no: [red color, blue color, has star, led on]
	// - "opts" array de true/false según las opciones activas o no: [is even, has parallel port, has bateries]
	// - "cut" si hay que cortar el cable
	var test_data = [
		{name: "Test Complicated wires 1",
		data: [
			{config: [0, 0, 0, 0], opts: [false, false, false], cut: true},
			{config: [0, 0, 0, 1], opts: [false, false, false], cut: false},
			{config: [0, 0, 1, 0], opts: [false, false, false], cut: true},
			{config: [0, 0, 1, 1], opts: [false, false, false], cut: false},
			{config: [0, 0, 1, 1], opts: [false, false, true], cut: true},
			{config: [0, 1, 0, 0], opts: [false, false, false], cut: false},
			{config: [0, 1, 0, 0], opts: [true, false, false], cut: true},
			{config: [0, 1, 0, 1], opts: [false, false, false], cut: false},
			{config: [0, 1, 0, 1], opts: [false, true, false], cut: true},
			{config: [0, 1, 1, 0], opts: [false, false, false], cut: false},
			{config: [0, 1, 1, 1], opts: [false, false, false], cut: false},
			{config: [0, 1, 1, 1], opts: [false, true, false], cut: true},
			{config: [1, 0, 0, 0], opts: [false, false, false], cut: false},
			{config: [1, 0, 0, 0], opts: [true, false, false], cut: true},
			{config: [1, 0, 0, 1], opts: [false, false, false], cut: false},
			{config: [1, 0, 0, 1], opts: [false, false, true], cut: true},
			{config: [1, 0, 1, 0], opts: [false, false, false], cut: true},
			{config: [1, 0, 1, 1], opts: [false, false, false], cut: false},
			{config: [1, 0, 1, 1], opts: [false, false, true], cut: true},
			{config: [1, 1, 0, 0], opts: [false, false, false], cut: false},
			{config: [1, 1, 0, 0], opts: [true, false, false], cut: true},
			{config: [1, 1, 0, 1], opts: [false, false, false], cut: false},
			{config: [1, 1, 0, 1], opts: [true, false, false], cut: true},
			{config: [1, 1, 1, 0], opts: [false, false, false], cut: false},
			{config: [1, 1, 1, 0], opts: [false, true, false], cut: true},
			{config: [1, 1, 1, 1], opts: [false, false, false], cut: false}
		]}
	];
	
	for (var i=0; i<test_data.length; i++) {
		run_path_module(test_data[i]["name"], test_data[i]["data"])();
	}
}

// Devuelve una función que ejecuta un módulo de test de verificación de los cables complejos
// name: nombre del módulo
// test_info: array con información de cada uno de los tests
function run_path_module(name, test_info) {
	return function() {
		QUnit.test(name, function( assert ) {
			for (var i=0; i<test_info.length; i++) {
				var x = test_info[i];
				assert.deepEqual(verify(x.config, x.opts), x.cut, "Configuration: " + x.config + " / Options: " + x.opts + " / Cut: " + x.cut);
			}
		});
	}
}

run_path_tests();