$("div.thumbnail").click(function(){
	if ($(this).hasClass("selected")) {
		$(this).removeClass("selected");
	} else {
		$(this).addClass("selected");
	}
});

// Recoge los datos seleccionados y realiza la comprobación
// Escribe la secuencia a sintonizar
function check() {
	var selected = $(".selected");
	
	var ids = [];
	for (var i=0; i<selected.length; i++) {
		ids.push(selected[i].id);
	}
	
	if (ids.length == 4) {
		verify(ids);
	} else {
		
	}
}

// Realiza la comprobación
// ids son los identificadores de las imágenes
// Devuelve los identifiadores en orden
function verify(ids) {
	var ordered = [
	["keypads_archaickoppa","keypads_yus","keypads_lambda","keypads_koppa","keypads_iotifiedbigyus","keypads_kai","keypads_reverseddottedlunatesigma"],
	["keypads_ediaeresis","keypads_archaickoppa","keypads_reverseddottedlunatesigma","keypads_ohook","keypads_whitestar","keypads_kai","keypads_interrogationreversed"],
	["keypads_copyright","keypads_800","keypads_ohook","keypads_zhje","keypads_komidzje","keypads_lambda","keypads_whitestar"],
	["keypads_be","keypads_pilcrow","keypads_yat","keypads_iotifiedbigyus","keypads_zhje","keypads_interrogationreversed","keypads_tewithring"],
	["keypads_psi","keypads_tewithring","keypads_yat","keypads_dottedlunatesigma","keypads_pilcrow","keypads_ksi","keypads_whitestar"],
	["keypads_be","keypads_ediaeresis","keypads_thousand","keypads_ae","keypads_psi","keypads_yot","keypads_omega"]
	];
	var res = [];
	
	return res;
}
