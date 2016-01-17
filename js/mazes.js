// Onclick dropdown
$(".dropdown-menu a").click(function (){
	var selected = $(this).text();
	var value = $(this).parents("div.btn-group").find("button span.value");
	$(value).text(selected);
});

// Recoge los datos seleccionados y realiza la comprobación
// Escribe la ruta
function check() {
	var cells = $("button span.value");
	var positions = $(cells).map(function(){return $(this).text();}).get();
	
	var circle1 = get_positions(positions, 0,1);
	var circle2 = get_positions(positions, 2,3);
	var start = get_positions(positions, 4,5);
	var goal = get_positions(positions, 6,7);
	
	verify(circle1, circle2, start, goal);
}

function get_positions(positions, x, y) {
	var res = [positions[x].substring(positions[x].indexOf(" ")+1), positions[y].substring(positions[y].indexOf(" ")+1)];
	return res;
}

// Realiza la comprobación
// circle1 es un array de fila/columna con la posición de un círculo
// circle2 es un array de fila/columna con la posición de un círculo
// start es un array de fila/columna con la posición de inicio
// goal es un array de fila/columna con la posición de fin
// Devuelve la ruta
function verify(circle1, circle2, start, goal) {
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
	
	var maze4 = [[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[]];
	
	var maze5 = [[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[]];
	
	var maze6 = [[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[]];
	
	var maze7 = [[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[]];
	
	var maze8 = [[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[]];
	
	var maze9 = [[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[] ,
	[] ,[] ,[] ,[] ,[] ,[]];
	
	var pos_circle1 = transform_coord_to_pos(circle1);
	var pos_circle2 = transform_coord_to_pos(circle2);
	var maze = undefined;
	if (find_maze(pos_circle1,pos_circle2, 6, 17)) {
		maze = maze1;
	} else if (find_maze(pos_circle1,pos_circle2, 10, 19)) {
		maze = maze2;
	} else if (find_maze(pos_circle1,pos_circle2, 21, 23)) {
		maze = maze3;
	} else if (find_maze(pos_circle1,pos_circle2, 0, 18)) {
		maze = maze4;
	} else if (find_maze(pos_circle1,pos_circle2, 16, 33)) {
		maze = maze5;
	} else if (find_maze(pos_circle1,pos_circle2, 4, 26)) {
		maze = maze6;
	} else if (find_maze(pos_circle1,pos_circle2, 1, 31)) {
		maze = maze7;
	} else if (find_maze(pos_circle1,pos_circle2, 3, 20)) {
		maze = maze8;
	} else if (find_maze(pos_circle1,pos_circle2, 8, 24)) {
		maze = maze9;
	}
	
	var pos_start = transform_coord_to_pos(start);
	var pos_goal = transform_coord_to_pos(goal);
	var path = [pos_start];
	
	find_path(maze, path, pos_goal);
	console.log(path);
}

function find_maze(circle1, circle2, pos1, pos2) {
	return (circle1 == pos1 && circle2 == pos2) || (circle2 == pos1 && circle1 == pos2)
}

function transform_coord_to_pos(pos) {
	return ((pos[0] - 1)*6) + (pos[1] - 1);
}

function find_path(maze, path, goal) {
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