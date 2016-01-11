const ACTIVE_CLASS = "btn-primary";

// Función que setea las funciones de selección de botón:
// marca como seleccionado un botón y desmarca el resto
// groups es un array bidimensional
// la primera dimensión es un grupo de botones relacionados
// la segunda dimensión es cada botón del grupo
function set_button_callbacks(groups) {
	for (var i=0; i<groups.length; i++) {
		for (var j=0; j<groups[i].length; j++) {
			$(groups[i][j]).click(select_one_callback(groups[i], ACTIVE_CLASS));
		}
	}
}

// Función callback para la selección de un botón en un grupo
// this es el botón seleccionado
// group es la lista de botones en el grupo
// css class que incorpora solo el elemento seleccionado
function select_one_callback(group, css) {
	return function() {
		select_one("#" + this.id, group, css);
	}
}

// Dentro de un grupo de elementos, deja desmarcado todos menos uno de ellos
// selected selector del elemento seleccionado
// group lista de selectores del grupo completo: incluido el seleccionado
// css class que incorpora solo el elemento seleccionado
function select_one(selected, group, css) {
	for (var i=0; i<group.length; i++) {
		$(group[i]).removeClass(css);
		if (group[i] == selected) {
			$(group[i]).addClass(css);
		}
	}
}