// Ejecuta los distintos módulos de test de verificación de la memorización de números
function run_path_tests() {
	// Información de los tests
	// Cada elemento del array es un módulo del test
	// Cada módulo de test tiene un nombre "name" y una información de los datos del test "data"
	// Cada uno de los tests del array de "data" se compone de:
	// - "stage"  etapa que se está calculando [1-5]
	// - "displays" array con los números mostrados en cada etapa
	// - "positions" array con las posiciones de los botones presionadas en cada etapa
	// - "labels" array con las etiquetas de los botones presionados en cada etapa
	// - "type" Solución. Tipo de resultado LABEL/POSITION
	// - "id" Solución. Identificador de la etiqueta o posición
	var test_data = [
		{name: "Test Memory stage 1",
		data: [
			{stage: 1, displays: ["1"], positions: [], labels: [], type:"position", id:"2" },
			{stage: 1, displays: ["2"], positions: [], labels: [], type:"position", id:"2" },
			{stage: 1, displays: ["3"], positions: [], labels: [], type:"position", id:"3" },
			{stage: 1, displays: ["4"], positions: [], labels: [], type:"position", id:"4" }
		]},
		{name: "Test Memory stage 2",
		data: [
			{stage: 2, displays: [1, 1], positions: ["1"], labels: ["2"], type:"label", id:"4" },
			{stage: 2, displays: [2, 1], positions: ["3"], labels: ["4"], type:"label", id:"4" },
			{stage: 2, displays: [3, 2], positions: ["2"], labels: ["1"], type:"position", id:"2" },
			{stage: 2, displays: [4, 2], positions: ["4"], labels: ["3"], type:"position", id:"4" },
			{stage: 2, displays: [3, 3], positions: ["2"], labels: ["4"], type:"position", id:"1" },
			{stage: 2, displays: [1, 3], positions: ["3"], labels: ["3"], type:"position", id:"1" },
			{stage: 2, displays: [3, 4], positions: ["1"], labels: ["2"], type:"position", id:"1" },
			{stage: 2, displays: [2, 4], positions: ["2"], labels: ["3"], type:"position", id:"2" }
		]},
		{name: "Test Memory stage 3",
		data: [
			{stage: 3, displays: [1, 2, 1], positions: ["1", "3"], labels: ["2", "4"], type:"label", id:"4" },
			{stage: 3, displays: [3, 2, 1], positions: ["3", "1"], labels: ["1", "3"], type:"label", id:"3" },
			{stage: 3, displays: [3, 2, 2], positions: ["3", "1"], labels: ["3", "2"], type:"label", id:"3" },
			{stage: 3, displays: [4, 1, 2], positions: ["2", "4"], labels: ["4", "1"], type:"label", id:"4" },
			{stage: 3, displays: [3, 2, 3], positions: ["3", "1"], labels: ["3", "1"], type:"position", id:"3" },
			{stage: 3, displays: [4, 1, 3], positions: ["1", "2"], labels: ["4", "3"], type:"position", id:"3" },
			{stage: 3, displays: [3, 2, 4], positions: ["4", "1"], labels: ["3", "2"], type:"label", id:"4" },
			{stage: 3, displays: [4, 1, 4], positions: ["3", "1"], labels: ["4", "3"], type:"label", id:"4" }
		]},
		{name: "Test Memory stage 4",
		data: [
			{stage: 4, displays: [1, 2, 4, 1], positions: ["1", "3", "2"], labels: ["2", "4", "3"], type:"position", id:"1" },
			{stage: 4, displays: [3, 2, 3, 1], positions: ["3", "2", "3"], labels: ["1", "3", "2"], type:"position", id:"3" },
			{stage: 4, displays: [3, 2, 1, 2], positions: ["4", "1", "2"], labels: ["3", "1", "1"], type:"position", id:"1" },
			{stage: 4, displays: [4, 1, 1, 2], positions: ["3", "3", "4"], labels: ["4", "2", "3"], type:"position", id:"1" },
			{stage: 4, displays: [3, 2, 3, 3], positions: ["1", "4", "1"], labels: ["3", "1", "1"], type:"position", id:"4" },
			{stage: 4, displays: [4, 1, 2, 3], positions: ["1", "1", "4"], labels: ["4", "1", "2"], type:"position", id:"1" },
			{stage: 4, displays: [3, 2, 2, 4], positions: ["2", "4", "2"], labels: ["3", "2", "1"], type:"position", id:"4" },
			{stage: 4, displays: [4, 1, 3, 4], positions: ["4", "1", "3"], labels: ["4", "4", "3"], type:"position", id:"1" }
		]},
		{name: "Test Memory stage 5",
		data: [
			{stage: 5, displays: [1, 2, 2, 4, 1], positions: ["1", "4", "3", "2"], labels: ["2", "4", "4", "3"], type:"label", id:"2" },
			{stage: 5, displays: [3, 2, 1, 3, 1], positions: ["3", "2", "3", "3"], labels: ["1", "4", "3", "2"], type:"label", id:"1" },
			{stage: 5, displays: [3, 4, 2, 1, 2], positions: ["1", "4", "1", "2"], labels: ["3", "2", "1", "1"], type:"label", id:"2" },
			{stage: 5, displays: [4, 1, 1, 4, 2], positions: ["3", "2", "3", "4"], labels: ["4", "2", "3", "3"], type:"label", id:"2" },
			{stage: 5, displays: [3, 2, 1, 3, 3], positions: ["1", "4", "4", "1"], labels: ["3", "1", "4", "1"], type:"label", id:"1" },
			{stage: 5, displays: [4, 1, 1, 2, 3], positions: ["2", "1", "1", "4"], labels: ["4", "4", "1", "2"], type:"label", id:"2" },
			{stage: 5, displays: [3, 2, 3, 2, 4], positions: ["2", "4", "4", "2"], labels: ["3", "2", "3", "1"], type:"label", id:"3" },
			{stage: 5, displays: [4, 2, 1, 3, 4], positions: ["4", "1", "3", "2"], labels: ["1", "4", "4", "3"], type:"label", id:"4" }
		]}
	];
	
	for (var i=0; i<test_data.length; i++) {
		run_path_module(test_data[i]["name"], test_data[i]["data"])();
	}
}

// Devuelve una función que ejecuta un módulo de test de verificación de la memorización de números
// name: nombre del módulo
// test_info: array con información de cada uno de los tests
function run_path_module(name, test_info) {
	return function() {
		QUnit.test(name, function( assert ) {
			for (var i=0; i<test_info.length; i++) {
				var x = test_info[i];
				assert.deepEqual(verify(x.stage, x.displays, x.positions, x.labels), {type:x.type, id:x.id}, "Stage: " + x.stage + " / Displays: " + x.displays + " / Positions: " + x.positions + " / Labels: " + x.labels + " / Type: " + x.type + " / Id: " + x.id );
			}
		});
	}
}

run_path_tests();