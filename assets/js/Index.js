
const Index = {

	init: function() {
		document.getElementById("home").style.color = "#ff9933";
		$('#taichi-button').on('click', function() {
			if ($('#text-taichi').is(":visible") ) {
				$('#text-taichi').hide();	
			} else {	
				$('#text-taichi').show();
			}
		});

		$('#atelier-button').on('click', function() {
			if ($('#text-atelier').is(":visible") ) {
				$('#text-atelier').hide();	
			} else {	
				$('#text-atelier').show();
			}
		});
	}

}