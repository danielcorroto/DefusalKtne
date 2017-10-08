// Ejecuta los distintos módulos de test de verificación de las posiciones y las palabras
function run_path_tests() {
	// Información de los tests
	// Cada elemento del array es un módulo del test
	// Cada módulo de test tiene un nombre "name" y una información de los datos del test "data"
	
	
	// Cada uno de los tests del array de "data" se compone de:
	// - "word" Palabra mostrada
	// - "position" Array fila y columna
	var test_data_position = [
		{name: "Test Who's on first - Positions",
		data: [
			{word: "yes", position: [2,1]},
			{word: "first", position: [1,2]},
			{word: "display", position: [3,2]},
			{word: "okay", position: [1,2]},
			{word: "says", position: [3,2]},
			{word: "nothing", position: [2,1]},
			{word: "(empty)", position: [3,1]},
			{word: "blank", position: [2,2]},
			{word: "no", position: [3,2]},
			{word: "led", position: [2,1]},
			{word: "lead", position: [3,2]},
			{word: "read", position: [2,2]},
			{word: "red", position: [2,2]},
			{word: "reed", position: [3,1]},
			{word: "leed", position: [3,1]},
			{word: "hold on", position: [3,2]},
			{word: "you", position: [2,2]},
			{word: "you are", position: [3,2]},
			{word: "your", position: [2,2]},
			{word: "you're", position: [2,2]},
			{word: "ur", position: [1,1]},
			{word: "there", position: [3,2]},
			{word: "they're", position: [3,1]},
			{word: "their", position: [2,2]},
			{word: "they are", position: [2,1]},
			{word: "see", position: [3,2]},
			{word: "c", position: [1,2]},
			{word: "cee", position: [3,2]}
		]}
	];
	
	// Cada uno de los tests del array de "data" se compone de:
	// - "word" Palabra mostrada
	// - "sol" palabras que forman parte de la solución
	var test_data = [
		{name: "Test Who's on first - Words",
		data: [
			{word: "ready", sol: "YES, OKAY, WHAT, MIDDLE, LEFT, PRESS, RIGHT, BLANK, READY, NO, FIRST, UHHH, NOTHING, WAIT"},
			{word: "first", sol: "LEFT, OKAY, YES, MIDDLE, NO, RIGHT, NOTHING, UHHH, WAIT, READY, BLANK, WHAT, PRESS, FIRST"},
			{word: "no", sol: "BLANK, UHHH, WAIT, FIRST, WHAT, READY, RIGHT, YES, NOTHING, LEFT, PRESS, OKAY, NO, MIDDLE"},
			{word: "blank", sol: "WAIT, RIGHT, OKAY, MIDDLE, BLANK, PRESS, READY, NOTHING, NO, WHAT, LEFT, UHHH, YES, FIRST"},
			{word: "nothing", sol: "UHHH, RIGHT, OKAY, MIDDLE, YES, BLANK, NO, PRESS, LEFT, WHAT, WAIT, FIRST, NOTHING, READY"},
			{word: "yes", sol: "OKAY, RIGHT, UHHH, MIDDLE, FIRST, WHAT, PRESS, READY, NOTHING, YES, LEFT, BLANK, NO, WAIT"},
			{word: "what", sol: "UHHH, WHAT, LEFT, NOTHING, READY, BLANK, MIDDLE, NO, OKAY, FIRST, WAIT, YES, PRESS, RIGHT"},
			{word: "uhhh", sol: "READY, NOTHING, LEFT, WHAT, OKAY, YES, RIGHT, NO, PRESS, BLANK, UHHH, MIDDLE, WAIT, FIRST"},
			{word: "left", sol: "RIGHT, LEFT, FIRST, NO, MIDDLE, YES, BLANK, WHAT, UHHH, WAIT, PRESS, READY, OKAY, NOTHING"},
			{word: "right", sol: "YES, NOTHING, READY, PRESS, NO, WAIT, WHAT, RIGHT, MIDDLE, LEFT, UHHH, BLANK, OKAY, FIRST"},
			{word: "middle", sol: "BLANK, READY, OKAY, WHAT, NOTHING, PRESS, NO, WAIT, LEFT, MIDDLE, RIGHT, FIRST, UHHH, YES"},
			{word: "okay", sol: "MIDDLE, NO, FIRST, YES, UHHH, NOTHING, WAIT, OKAY, LEFT, READY, BLANK, PRESS, WHAT, RIGHT"},
			{word: "wait", sol: "UHHH, NO, BLANK, OKAY, YES, LEFT, FIRST, PRESS, WHAT, WAIT, NOTHING, READY, RIGHT, MIDDLE"},
			{word: "press", sol: "RIGHT, MIDDLE, YES, READY, PRESS, OKAY, NOTHING, UHHH, BLANK, LEFT, FIRST, WHAT, NO, WAIT"},
			{word: "you", sol: "SURE, YOU ARE, YOUR, YOU'RE, NEXT, UH HUH, UR, HOLD, WHAT?, YOU, UH UH, LIKE, DONE, U"},
			{word: "you are", sol: "YOUR, NEXT, LIKE, UH HUH, WHAT?, DONE, UH UH, HOLD, YOU, U, YOU'RE, SURE, UR, YOU ARE"},
			{word: "your", sol: "UH UH, YOU ARE, UH HUH, YOUR, NEXT, UR, SURE, U, YOU'RE, YOU, WHAT?, HOLD, LIKE, DONE"},
			{word: "you're", sol: "YOU, YOU'RE, UR, NEXT, UH UH, YOU ARE, U, YOUR, WHAT?, UH HUH, SURE, DONE, LIKE, HOLD"},
			{word: "ur", sol: "DONE, U, UR, UH HUH, WHAT?, SURE, YOUR, HOLD, YOU'RE, LIKE, NEXT, UH UH, YOU ARE, YOU"},
			{word: "u", sol: "UH HUH, SURE, NEXT, WHAT?, YOU'RE, UR, UH UH, DONE, U, YOU, LIKE, HOLD, YOU ARE, YOUR"},
			{word: "uh huh", sol: "UH HUH, YOUR, YOU ARE, YOU, DONE, HOLD, UH UH, NEXT, SURE, LIKE, YOU'RE, UR, U, WHAT?"},
			{word: "uh uh", sol: "UR, U, YOU ARE, YOU'RE, NEXT, UH UH, DONE, YOU, UH HUH, LIKE, YOUR, SURE, HOLD, WHAT?"},
			{word: "what?", sol: "YOU, HOLD, YOU'RE, YOUR, U, DONE, UH UH, LIKE, YOU ARE, UH HUH, UR, NEXT, WHAT?, SURE"},
			{word: "done", sol: "SURE, UH HUH, NEXT, WHAT?, YOUR, UR, YOU'RE, HOLD, LIKE, YOU, U, YOU ARE, UH UH, DONE"},
			{word: "next", sol: "WHAT?, UH HUH, UH UH, YOUR, HOLD, SURE, NEXT, LIKE, DONE, YOU ARE, UR, YOU'RE, U, YOU"},
			{word: "hold", sol: "YOU ARE, U, DONE, UH UH, YOU, UR, SURE, WHAT?, YOU'RE, NEXT, HOLD, UH HUH, YOUR, LIKE"},
			{word: "sure", sol: "YOU ARE, DONE, LIKE, YOU'RE, YOU, HOLD, UH HUH, UR, SURE, U, WHAT?, NEXT, YOUR, UH UH"},
			{word: "like", sol: "YOU'RE, NEXT, U, UR, HOLD, DONE, UH UH, WHAT?, UH HUH, YOU, LIKE, SURE, YOU ARE, YOUR"}
		]}
	];
	
	for (var i=0; i<test_data_position.length; i++) {
		run_path_module_position(test_data_position[i]["name"], test_data_position[i]["data"])();
	}
	
	for (var i=0; i<test_data.length; i++) {
		run_path_module(test_data[i]["name"], test_data[i]["data"])();
	}
}

// Devuelve una función que ejecuta un módulo de test de verificación de las posiciones según la palabra
// name: nombre del módulo
// test_info: array con información de cada uno de los tests
function run_path_module_position(name, test_info) {
	return function() {
		QUnit.test(name, function( assert ) {
			for (var i=0; i<test_info.length; i++) {
				var x = test_info[i];
				assert.deepEqual(get_world_display_positions(x.word), x.position, "Word: " + x.word + " / Position: " + x.position);
			}
		});
	}
}

// Devuelve una función que ejecuta un módulo de test de verificación de las palabras
// name: nombre del módulo
// test_info: array con información de cada uno de los tests
function run_path_module(name, test_info) {
	return function() {
		QUnit.test(name, function( assert ) {
			for (var i=0; i<test_info.length; i++) {
				var x = test_info[i];
				assert.deepEqual(verify(x.word), x.sol, "Word: " + x.word + " / Solution: " + x.sol);
			}
		});
	}
}

run_path_tests();