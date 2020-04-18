let bannerSlider = {

	init : function () {
    
		let img = $('#carrousel > blockquote'); // on cible les images contenues dans le carrousel
		if (img.length === 0) {
			img = $('.caroussel > blockquote');
		}
		let  indexImg = img.length - 1, // on définit l'index du dernier élément
		    i = 0, // on initialise un compteur
		    currentImg = img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)

		img.css('display', 'none'); // on cache les images
		currentImg.css('display', 'block'); // on affiche seulement l'image courante


		function slideImg(){
		    setTimeout(function(){ // on utilise une fonction anonyme
								
		    if(i < indexImg){ // si le compteur est inférieur au dernier index
			    i++; // on l'incrémente
			}
			else{ // sinon, on le remet à 0 (première image)
			    i = 0;
			}

			img.css('display', 'none');

			currentImg = img.eq(i);
			currentImg.css('display', 'block');

			slideImg(); // on oublie pas de relancer la fonction à la fin

		    }, 10000); // on définit l'intervalle à 3000 millisecondes (3s)
		}

		slideImg(); // enfin, on lance la fonction une première fois

	}

}
	

  