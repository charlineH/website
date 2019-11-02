/*
	Retrospect by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

	skel
		.breakpoints({
			xlarge: '(max-width: 1680px)',
			large: '(max-width: 1280px)',
			medium: '(max-width: 980px)',
			small: '(max-width: 736px)',
			xsmall: '(max-width: 480px)'
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Nav.
			$('#nav')
				.append('<a href="#nav" class="close"></a>')
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right'
				});

	});

})(jQuery);

let pageHeader = {
	 init : function () {
		$(window).scroll(function () {
			//si on a defile vers le bas
			if ($(this).scrollTop() > 0) {
				//on ajoute la classe "fixNavigation" à <div id="nav-bar>
				$('#nav-bar').addClass("fixed"); 
			} else {
				//sinon on retire la classe "fixed" à <div id="nav-bar">
				$('#nav-bar').removeClass("fixed");
			}
		});

		$('.on-top').on('click', function() {
			window.scrollTo(0,0);
		});
	 }
}

let pageTaichi = {
	init : function() {
		document.getElementById("taichi").style.color = "#ff9933";
	}
}

let pageMassage = {
	init : function() {
		document.getElementById("massage").style.color = "#ff9933";
	}
}
let pagePortfolio = {
	init : function() {
		document.getElementById("portfolio").style.color = "#ff9933";
	}
}

let pageAPropos = {
	init : function() {
		document.getElementById("apropos").style.color = "#ff9933";
	}
}

let pageContact = {
	init : function() {
		document.getElementById("contact").style.color = "#ff9933";
		this.displayMessage();
	},

	displayMessage: function() {
		const urlParams = this.getUrlParams();
		let message = "";
		if (urlParams['envoi'] === 'success' ) {
			message =  'Le message a bien été envoyé.';
		} else if (urlParams['envoi'] === 'fail') {
			message =  "Erreur: Le message n'a pas pu être envoyé.";
		} else if (urlParams['envoi'] === 'invalid') {
			message =  "Vérifiez que tous les champs soient bien remplis et que l'email soit sans erreur.";
		}

		$('#result')[0].innerText= message;
	},

	 getUrlParams: function( prop ) {
    const params = {};
    const search = decodeURIComponent( window.location.href.slice( window.location.href.indexOf( '?' ) + 1 ) );
    const definitions = search.split( '&' );

    definitions.forEach( function( val, key ) {
        var parts = val.split( '=', 2 );
        params[ parts[ 0 ] ] = parts[ 1 ];
    } );

    return ( prop && prop in params ) ? params[ prop ] : params;
}
}
