// Onclick dropdown
$(".dropdown-menu a").click(function (e){
	e.preventDefault();
	
	var selected = $(this).text();
	var value = $(this).parents("div.btn-group").find("button span.value");
	$(value).text(selected);
});

// Recoge los datos seleccionados y realiza la comprobación
// Escribe la ruta
function check() {
	var cells = $("button span.value");
	var positions = $(cells).map(function(){return $(this).text();}).get();
	
	var circle = get_positions(positions, 0,1);
	var start = get_positions(positions, 2,3);
	var goal = get_positions(positions, 4,5);
	
	if (circle[0] == "Row" || circle[1] == "Column" || start[0] == "Row" || start[1] == "Column" || goal[0] == "Row" || goal[1] == "Column") {
		return;
	}
	
	var path = verify(circle, start, goal);
	
	
	var sol = "";
	for (var i=1; i<path.length; i++) {
		if (path[i] - path[i-1] == -6) {
			sol += "\u21E7 "; // arriba
		} else if (path[i] - path[i-1] == 1) {
			sol += "\u21E8 "; // derecha
		} else if (path[i] - path[i-1] == 6) {
			sol += "\u21E9 "; // abajo
		} else if (path[i] - path[i-1] == -1) {
			sol += "\u21E6 "; // izquierda
		}
	}
	$("#path").text(sol);
	
	$(document).scrollTop(0);
}

function get_positions(positions, x, y) {
	var res = [positions[x].substring(positions[x].indexOf(" ")+1), positions[y].substring(positions[y].indexOf(" ")+1)];
	return res;
}

// Realiza la comprobación
// circle1 es un array de fila/columna [1-6] con la posición de un círculo
// start es un array de fila/columna [1-6] con la posición de inicio
// goal es un array de fila/columna [1-6] con la posición de fin
// Devuelve la ruta
function verify(circle, start, goal) {
	var maze1 = [[1, 6], [0, 2], [1, 8], [4, 9], [3, 5], [4],
	[0, 12], [8, 13], [2, 7], [3, 10], [9, 11], [10, 17],
	[6, 18], [7, 14], [13, 20], [16, 21], [15, 17], [11, 16, 23],
	[12, 24], [20], [14, 19, 21], [15, 20], [23], [17, 22, 29],
	[18, 25, 30], [24, 26], [25, 32], [28, 33], [27], [23, 35],
	[24, 31], [30], [26, 33], [27, 32], [35], [29, 34]];
	
	var maze2 = [[1], [0, 2, 7], [1], [4, 9], [3, 5, 10], [4],
	[7, 12], [1, 6], [9, 14], [3, 8], [4, 11], [10, 17],
	[6, 18], [14, 19], [8, 13], [16, 21], [15, 17], [11, 16, 23],
	[12, 19, 24], [13, 18], [21, 26], [15, 20], [28], [17, 29],
	[18, 30], [31], [20, 32], [28, 33], [22,27], [23, 35],
	[24], [25, 32], [26, 31], [27, 34], [33, 35], [29, 34]];
	
	var maze3 = [[1, 6], [0, 2], [1, 8], [9], [5, 10], [4, 11],
	[0], [13], [2, 14], [3, 10], [4, 9], [5 ,17],
	[13, 18], [7, 12, 19], [8, 20], [16, 21], [15, 22], [11, 23],
	[12, 24], [13, 25], [14, 26], [15, 27], [16, 28], [17, 29],
	[18, 30], [19, 26], [20, 25], [21, 33], [22, 34], [23, 35],
	[24, 31], [30, 32], [31, 33], [27, 32], [28, 35], [29, 34]];
	
	var maze4 = [[1, 6], [0, 7], [3], [2, 4], [3, 5], [4, 11],
	[0, 12], [1, 13], [9, 14], [8, 10], [9, 11], [5, 10, 17],
	[6, 18], [7, 14], [8, 13], [16, 21], [15], [11, 23],
	[12, 24], [20], [19, 21], [15, 20, 22], [21, 23], [17, 22, 29],
	[18, 25, 30], [24, 26], [25, 27], [26, 28], [27, 34], [23, 35],
	[24, 31], [30, 32], [31], [34], [28, 33], [29]];
	
	var maze5 = [[1], [0, 2], [1, 3], [2, 4], [3, 5, 10], [4, 11],
	[7, 12], [6, 8], [7, 9], [8, 10, 15], [4, 9], [5],
	[6, 13, 18], [12, 19], [15], [9, 14], [17, 22], [16, 23],
	[12, 24], [13, 20], [19, 21], [20, 27], [16], [17, 29],
	[18, 30], [26, 31], [25, 27], [21, 26, 28], [27], [23, 35],
	[24], [25, 32], [31, 33], [32, 34], [33, 35], [29, 34]];
	
	var maze6 = [[6], [2, 7], [1, 8], [4], [3, 5, 10], [4, 11],
	[0, 12], [1, 13], [2, 14], [10, 15], [4, 9], [5, 17],
	[6, 13, 18], [7, 12], [8], [9, 21], [17, 22], [11, 16],
	[12, 19], [18, 25], [21, 26], [15, 20, 27], [16, 28], [29],
	[25, 30], [19, 24], [20], [21, 33], [22, 29], [23, 28, 35],
	[24, 31], [30, 32], [31, 33], [27, 32], [35], [29, 34]];
	
	var maze7 = [[1, 6], [0, 2], [1, 3], [2, 9], [5, 10], [4, 11],
	[0, 12], [8, 13], [7], [3, 10], [4, 9], [5, 17],
	[6, 13], [7, 12], [15, 20], [14], [17, 22], [11, 16],
	[19, 24], [18, 25], [14, 21, 26], [20, 22], [16, 21], [29],
	[18, 30], [19], [20, 27], [26, 28], [27, 34], [23, 35],
	[24, 31], [30, 32], [31, 33], [32, 34], [28, 33, 35], [29, 34]];
	
	var maze8 = [[6], [2, 7], [1, 3], [2, 9], [5, 10], [4, 11],
	[0, 7, 12], [1, 6, 8], [7], [3, 10], [4, 9], [5, 17],
	[6, 18], [14, 19], [13, 15], [14, 16], [15, 22], [11, 23],
	[12, 24], [13, 20], [19, 26], [22], [16, 21, 23], [17, 22],
	[18, 30], [31], [20, 27], [26, 28], [27, 29], [28],
	[24, 31], [25, 30, 32], [31, 33], [32, 34], [33, 35], [34]];
	
	var maze9 = [[6], [2, 7], [1, 3], [2, 4], [3, 5, 10], [4, 11],
	[0, 12], [1, 13], [9, 14], [8], [4, 16], [5, 17],
	[6, 13, 18], [7, 12, 14], [8, 13], [16, 21], [10, 15], [11, 23],
	[12, 24], [25], [21, 26], [15, 20], [23], [17, 22, 29],
	[18, 30], [19, 31], [20, 32], [28, 33], [27, 34], [23],
	[24, 31], [25, 30], [26, 33], [27, 32], [28, 35], [34]];
	
	var pos_circle = transform_coord_to_pos(circle);
	var maze = undefined;
	if (find_maze(pos_circle, 6, 17)) {
		maze = maze1;
	} else if (find_maze(pos_circle, 10, 19)) {
		maze = maze2;
	} else if (find_maze(pos_circle, 21, 23)) {
		maze = maze3;
	} else if (find_maze(pos_circle, 0, 18)) {
		maze = maze4;
	} else if (find_maze(pos_circle, 16, 33)) {
		maze = maze5;
	} else if (find_maze(pos_circle, 4, 26)) {
		maze = maze6;
	} else if (find_maze(pos_circle, 1, 31)) {
		maze = maze7;
	} else if (find_maze(pos_circle, 3, 20)) {
		maze = maze8;
	} else if (find_maze(pos_circle, 8, 24)) {
		maze = maze9;
	}
	
	var pos_start = transform_coord_to_pos(start);
	var pos_goal = transform_coord_to_pos(goal);
	var path = [pos_start];
	
	find_path(maze, path, pos_goal);
	console.log(path);
	
	return path;
}

function find_maze(circle, pos1, pos2) {
	return (circle == pos1 || circle == pos2);
}

function transform_coord_to_pos(pos) {
	return ((pos[0] - 1)*6) + (pos[1] - 1);
}

function find_path(maze, path, goal) {
	if (path.length > maze.length) {
		console.log("Find error " + path)
		return false;
	}
	var actual = path[path.length - 1];
	if (actual === goal) {
		return true;
	}
	
	var options = maze[actual];
	for (var i=0; i<options.length; i++) {
		if (path[path.length -2] == options[i]) {
			continue;
		}
		
		path.push(options[i]);
		var found = find_path(maze, path, goal);
		if (found) {
			return true;
		} else {
			path.pop();
		}
	}
}