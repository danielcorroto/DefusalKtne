// Ejecuta los distintos módulos de test de verificación de la ruta del laberinto
function run_path_tests() {
	// Información de los tests
	// Cada elemento del array es un módulo del test
	// Cada módulo de test tiene un nombre "name" y una información de los datos del test "data"
	// Cada uno de los tests del array de "data" se compone de:
	// - "circle" círculo de selección de laberinto row/col [1-6]
	// - "start" casilla de inicio row/col [1-6]
	// - "goal" casilla de fin row/col [1-6]
	// - "path" ruta del laberinto
	var test_data = [
		{name: "Test Maze 1",
		data: [
			{circle: [[2,1],[3,6]], start: [5,5], goal: [6,2], path: [28, 27, 33, 32, 26, 25, 24, 30, 31]},
			{circle: [[2,1],[3,6]], start: [5,5], goal: [4,2], path: [28, 27, 33, 32, 26, 25, 24, 18, 12, 6, 0, 1, 2, 8, 7, 13, 14, 20, 19]},
			{circle: [[2,1],[3,6]], start: [6,2], goal: [1,6], path: [31, 30, 24, 18, 12, 6, 0, 1, 2, 8, 7, 13, 14, 20, 21, 15, 16, 17, 11, 10, 9, 3, 4, 5]},
			{circle: [[2,1],[3,6]], start: [6,2], goal: [4,5], path: [31, 30, 24, 18, 12, 6, 0, 1, 2, 8, 7, 13, 14, 20, 21, 15, 16, 17, 23, 22]},
			{circle: [[2,1],[3,6]], start: [5,5], goal: [6,5], path: [28, 27, 33, 32, 26, 25, 24, 18, 12, 6, 0, 1, 2, 8, 7, 13, 14, 20, 21, 15, 16, 17, 23, 29, 35, 34]}
		]},
		{name: "Test Maze 2",
		data: [
			{circle: [[2,5],[4,2]], start: [1,1], goal: [6,1], path: [0, 1, 7, 6, 12, 18, 24, 30]},
			{circle: [[2,5],[4,2]], start: [1,3], goal: [1,6], path: [2, 1, 7, 6, 12, 18, 19, 13, 14, 8, 9, 3, 4, 5]},
			{circle: [[2,5],[4,2]], start: [1,6], goal: [4,5], path: [5, 4, 10, 11, 17, 23, 29, 35, 34, 33, 27, 28, 22]},
			{circle: [[2,5],[4,2]], start: [1,1], goal: [5,2], path: [0, 1, 7, 6, 12, 18, 19, 13, 14, 8, 9, 3, 4, 10, 11, 17, 16, 15, 21, 20, 26, 32, 31, 25]}
		]},
		{name: "Test Maze 3",
		data: [
			{circle: [[4,4],[4,6]], start: [2,1], goal: [2,2], path: [6, 0, 1, 2, 8, 14, 20, 26, 25, 19, 13, 7]},
			{circle: [[4,4],[4,6]], start: [2,1], goal: [1,4], path: [6, 0, 1, 2, 8, 14, 20, 26, 25, 19, 13, 12, 18, 24, 30, 31, 32, 33, 27, 21, 15, 16, 22, 28, 34, 35, 29, 23, 17, 11, 5, 4, 10, 9, 3]}
		]},
		{name: "Test Maze 4",
		data: [
			{circle: [[1,1],[4,1]], start: [6,3], goal: [6,4], path: [32, 31, 30, 24, 25, 26, 27 ,28, 34, 33]},
			{circle: [[1,1],[4,1]], start: [6,4], goal: [1,3], path: [33, 34, 28, 27, 26, 25, 24, 18, 12, 6, 0, 1, 7, 13, 14, 8, 9, 10, 11, 5, 4, 3, 2]},
			{circle: [[1,1],[4,1]], start: [1,3], goal: [3,5], path: [2, 3, 4, 5, 11, 17, 23, 22, 21, 15, 16]},
			{circle: [[1,1],[4,1]], start: [1,3], goal: [4,2], path: [2, 3, 4, 5, 11, 17, 23, 22, 21, 20, 19]},
			{circle: [[1,1],[4,1]], start: [1,3], goal: [6,6], path: [2, 3, 4, 5, 11, 17, 23, 29, 35]}
		]},
		{name: "Test Maze 5",
		data: [
			{circle: [[3,5],[6,4]], start: [1,1], goal: [2,6], path: [0, 1, 2, 3, 4, 5, 11]},
			{circle: [[3,5],[6,4]], start: [1,1], goal: [3,3], path: [0, 1, 2, 3, 4, 10, 9, 15, 14]},
			{circle: [[3,5],[6,4]], start: [3,3], goal: [6,1], path: [14, 15, 9, 8, 7, 6, 12, 18, 24, 30]},
			{circle: [[3,5],[6,4]], start: [6,1], goal: [5,5], path: [30, 24, 18, 12, 13, 19, 20, 21, 27, 28]},
			{circle: [[3,5],[6,4]], start: [6,1], goal: [4,5], path: [30, 24, 18, 12, 13, 19, 20, 21, 27, 26, 25, 31, 32, 33, 34, 35, 29, 23, 17, 16, 22]}
		]},
		{name: "Test Maze 6",
		data: [
			{circle: [[1,5],[5,3]], start: [1,1], goal: [3,3], path: [0, 6, 12, 13, 7, 1, 2, 8, 14]},
			{circle: [[1,5],[5,3]], start: [1,1], goal: [5,3], path: [0, 6, 12, 18, 19, 25, 24, 30, 31, 32, 33, 27, 21, 20, 26]},
			{circle: [[1,5],[5,3]], start: [1,1], goal: [1,4], path: [0, 6, 12, 18, 19, 25, 24, 30, 31, 32, 33, 27, 21, 15, 9, 10, 4, 3]},
			{circle: [[1,5],[5,3]], start: [5,3], goal: [4,6], path: [26, 20, 21, 15, 9, 10, 4, 5, 11, 17, 16, 22, 28, 29, 23]},
			{circle: [[1,5],[5,3]], start: [5,3], goal: [6,5], path: [26, 20, 21, 15, 9, 10, 4, 5, 11, 17, 16, 22, 28, 29, 35, 34]}
		]},
		{name: "Test Maze 7",
		data: [
			{circle: [[1,2],[6,2]], start: [2,3], goal: [3,4], path: [8, 7, 13, 12, 6, 0, 1, 2, 3, 9, 10, 4, 5, 11, 17, 16, 22, 21, 20, 14, 15]},
			{circle: [[1,2],[6,2]], start: [2,3], goal: [4,6], path: [8, 7, 13, 12, 6, 0, 1, 2, 3, 9, 10, 4, 5, 11, 17, 16, 22, 21, 20, 26, 27, 28, 34, 35, 29, 23]},
			{circle: [[1,2],[6,2]], start: [2,3], goal: [5,2], path: [8, 7, 13, 12, 6, 0, 1, 2, 3, 9, 10, 4, 5, 11, 17, 16, 22, 21, 20, 26, 27, 28, 34, 33, 32, 31, 30, 24, 18, 19, 25]}
		]},
		{name: "Test Maze 8",
		data: [
			{circle: [[1,4],[4,3]], start: [1,1], goal: [5,2], path: [0, 6, 12, 18, 24, 30, 31, 25]},
			{circle: [[1,4],[4,3]], start: [1,1], goal: [6,6], path: [0, 6, 12, 18, 24, 30, 31, 32, 33, 34, 35]},
			{circle: [[1,4],[4,3]], start: [1,1], goal: [2,3], path: [0, 6, 7, 8]},
			{circle: [[1,4],[4,3]], start: [1,1], goal: [4,4], path: [0, 6, 7, 1, 2, 3, 9, 10, 4, 5, 11, 17, 23, 22, 21]},
			{circle: [[1,4],[4,3]], start: [2,3], goal: [5,6], path: [8, 7, 1, 2, 3, 9, 10, 4, 5, 11, 17, 23, 22, 16, 15, 14, 13, 19, 20, 26, 27, 28, 29]}
		]},
		{name: "Test Maze 9",
		data: [
			{circle: [[2,3],[5,1]], start: [1,1], goal: [4,2], path: [0, 6, 12, 18, 24, 30, 31, 25, 19]},
			{circle: [[2,3],[5,1]], start: [1,1], goal: [2,4], path: [0, 6, 12, 13, 14, 8, 9]},
			{circle: [[2,3],[5,1]], start: [1,1], goal: [4,5], path: [0, 6, 12, 13, 7, 1, 2, 3, 4, 5, 11, 17, 23, 22]},
			{circle: [[2,3],[5,1]], start: [1,1], goal: [5,6], path: [0, 6, 12, 13, 7, 1, 2, 3, 4, 5, 11, 17, 23, 29]},
			{circle: [[2,3],[5,1]], start: [1,1], goal: [6,6], path: [0, 6, 12, 13, 7, 1, 2, 3, 4, 10, 16, 15, 21, 20, 26, 32, 33, 27, 28, 34, 35]},
		]}
	];
	
	for (var i=0; i<test_data.length; i++) {
		run_path_module(test_data[i]["name"], test_data[i]["data"])();
	}
}

// Devuelve una función que ejecuta un módulo de test de verificación de la ruta del laberinto
// name: nombre del módulo
// test_info: array con información de cada uno de los tests
function run_path_module(name, test_info) {
	return function() {
		QUnit.test(name, function( assert ) {
			for (var i=0; i<test_info.length; i++) {
				var x = test_info[i];
				assert.deepEqual(verify(x.circle[0], x.start, x.goal), x.path, "Circle: " + x.circle[0] + " / Start: " + x.start + " / Goal: " + x.goal);
				assert.deepEqual(verify(x.circle[1], x.start, x.goal), x.path, "Circle: " + x.circle[1] + " / Start: " + x.start + " / Goal: " + x.goal);
				x.path.reverse();
				assert.deepEqual(verify(x.circle[0], x.goal, x.start), x.path, "Circle: " + x.circle[0] + " / Start: " + x.goal + " / Goal: " + x.start);
				assert.deepEqual(verify(x.circle[1], x.goal, x.start), x.path, "Circle: " + x.circle[1] + " / Start: " + x.goal + " / Goal: " + x.start);
			}
		});
	}
}

run_path_tests();