





/*
	Adding button to show video when cicking preview button
*/

  function sudoku() {
	var x = document.getElementById('sudokuVid');
	if (x.style.visibility === 'hidden') {
	  x.style.visibility = 'visible';
	} else {
	  x.style.visibility = 'hidden';
	}
  }



  
  function issue() {
	var x = document.getElementById('issueVid');
	if (x.style.visibility === 'hidden') {
	  x.style.visibility = 'visible';
	} else {
	  x.style.visibility = 'hidden';
	}
  }



  function myFunction() {
	var x = document.getElementById('myDIV');
	if (x.style.visibility === 'hidden') {
	  x.style.visibility = 'visible';
	} else {
	  x.style.visibility = 'hidden';
	}
  }

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);