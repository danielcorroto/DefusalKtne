// Ejecuta los distintos módulos de test de verificación de las cables
function run_path_tests() {
	// Información de los tests
	// Cada elemento del array es un módulo del test
	// Cada módulo de test tiene un nombre "name" y una información de los datos del test "data"
	// Cada uno de los tests del array de "data" se compone de:
	// - "size" cantidad de cables
	// - "colors" array de cables seleccionados
	// - "is_odd" si el último dígito del número de serie es impar
	// - "cut" cuál es el cable que hay que cortar
	var test_data = [
		{name: "Test 3 Wires",
		data: [
			{size: 3, colors: ["blue", "blue", "blue"], is_odd: true, cut: "second"},
			{size: 3, colors: ["red", "blue", "white"], is_odd: false, cut: "last"},
			{size: 3, colors: ["blue", "blue", "red"], is_odd: true, cut: "last blue"},
			{size: 3, colors: ["white", "blue", "red"], is_odd: false, cut: "last"},
			{size: 3, colors: ["yellow", "yellow", "yellow"], is_odd: true, cut: "second"},
			{size: 3, colors: ["red", "blue", "blue"], is_odd: true, cut: "last blue"}
		]},
		{name: "Test 4 Wires",
		data: [
			{size: 4, colors: ["red", "blue", "red", "blue"], is_odd: true, cut: "last red"},
			{size: 4, colors: ["red", "blue", "red", "blue"], is_odd: false, cut: "second"},
			{size: 4, colors: ["blue", "blue", "blue", "yellow"], is_odd: true, cut: "first"},
			{size: 4, colors: ["red", "blue", "yellow", "white"], is_odd: false, cut: "first"},
			{size: 4, colors: ["yellow", "yellow", "white", "white"], is_odd: true, cut: "last"},
			{size: 4, colors: ["white", "black", "blue", "yellow"], is_odd: false, cut: "first"},
			{size: 4, colors: ["blue", "white", "yellow", "black"], is_odd: true, cut: "first"},
			{size: 4, colors: ["black", "black", "black", "black"], is_odd: false, cut: "second"}
		]},
		{name: "Test 5 Wires",
		data: [
			{size: 5, colors: ["white", "white", "white", "white", "black"], is_odd: true, cut: "forth"},
			{size: 5, colors: ["white", "white", "white", "white", "black"], is_odd: false, cut: "first"},
			{size: 5, colors: ["red", "black", "white", "yellow", "yellow"], is_odd: true, cut: "first"},
			{size: 5, colors: ["red", "black", "white", "yellow", "white"], is_odd: false, cut: "first"},
			{size: 5, colors: ["red", "red", "red", "yellow", "yellow"], is_odd: true, cut: "second"},
			{size: 5, colors: ["white", "blue", "red", "white", "blue"], is_odd: false, cut: "second"},
			{size: 5, colors: ["black", "red", "yellow", "white", "blue"], is_odd: true, cut: "first"},
			{size: 5, colors: ["red", "yellow", "yellow", "yellow", "yellow"], is_odd: false, cut: "first"},
		]},
		{name: "Test 6 Wires",
		data: [
			{size: 6, colors: ["blue", "red", "white", "black", "blue", "red"], is_odd: true, cut: "third"},
			{size: 6, colors: ["blue", "red", "white", "black", "blue", "red"], is_odd: false, cut: "forth"},
			{size: 6, colors: ["yellow", "white", "blue", "red", "black", "blue"], is_odd: true, cut: "forth"},
			{size: 6, colors: ["blue", "white", "red", "yellow", "white", "black"], is_odd: false, cut: "forth"},
			{size: 6, colors: ["white", "yellow", "blue", "black", "white", "white"], is_odd: true, cut: "forth"},
			{size: 6, colors: ["yellow", "yellow", "white", "white", "blue", "blue"], is_odd: false, cut: "last"},
			{size: 6, colors: ["blue", "white", "yellow", "black", "yellow", "yellow"], is_odd: true, cut: "last"},
			{size: 6, colors: ["blue", "blue", "blue", "red", "red", "red"], is_odd: false, cut: "forth"}
		]}
	];
	
	for (var i=0; i<test_data.length; i++) {
		run_path_module(test_data[i]["name"], test_data[i]["data"])();
	}
}

// Devuelve una función que ejecuta un módulo de test de verificación de los cables
// name: nombre del módulo
// test_info: array con información de cada uno de los tests
function run_path_module(name, test_info) {
	return function() {
		QUnit.test(name, function( assert ) {
			for (var i=0; i<test_info.length; i++) {
				var x = test_info[i];
				assert.equal(verify(x.size, x.colors, x.is_odd), x.cut, "Size: " + x.size + " / Colors: " + x.colors + " / Odd: " + x.is_odd + " / Cut: " + x.cut );
			}
		});
	}
}

run_path_tests();