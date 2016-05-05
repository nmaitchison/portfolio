$(function(){

	// LOAD WORK

	// $(".flag").click(
	// 	function(event) {
	// 		console.log('flag', this.id);

	// 		var country = '#'+this.id;

	// 		$.get('contacts-template.html', function(htmlArg){

	// 			console.log('get');

	// 			$("#contacts-container").empty();

	// 			var source = $(htmlArg).find(country).html();
	// 			var template = Handlebars.compile(source);
	// 			var context = {title: "My New Post", body: "This is my first post!"}
	// 			var html = template(context);
	// 			$("#contacts-container").append(html);

	// 		});
	// 	}
	// );

	// MENU FUNCTIONS

	// var to check if menu is open
	var menuHidden = true;

	// when the menu btn is clicked
	$(".menu").click(
		function() {
			console.log('menu click');
			// check to see if it's open
			if(menuHidden){
				// if it is, open the menu
				$("nav").removeClass( "hidden" );
				// set var
				menuHidden = false;
			}
			// if not
			else if(!menuHidden){
				// close the menu
				$("nav").addClass( "hidden" );
				// set var
				menuHidden = true;
			}
	});

	$("nav ul li a").click(
		function() {
			console.log('nav click');
			// check to see if it's open
			if(menuHidden){
				// if it is, open the menu
				$("nav").removeClass( "hidden" );
				// set var
				menuHidden = false;
			}
			// if not
			else if(!menuHidden){
				// close the menu
				$("nav").addClass( "hidden" );
				// set var
				menuHidden = true;
			}
	});


	// SMOOTH SCROLLING

	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
  	});

});