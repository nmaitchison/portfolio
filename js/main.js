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
	
	var projects = [
		{
			"id" : "PCC1",
			"name" : "Mangos - Demo Reel",
			"type" : "Demo Reel",
			"description" : "This is the second scene in my demo reel. I modeled everything in the scene, lit the scene and made all the textures and materials.",
			"preview" : "images/PCC1/PCC1-preview.jpg",
			"images" : ["images/PCC1/PCC1_render.jpg","images/PCC1/PCC1_wireframe.jpg","images/PCC1/TEX/mango1_UV_BASE.jpg","images/PCC1/TEX/mango2_UV_BASE.jpg","images/PCC1/TEX/mango3_UV_BASE.jpg","images/PCC1/TEX/vase_UV_BASE.jpg"]
		},
		{
			"id" : "PCC2",
			"name" : "Thread - Demo Reel",
			"type" : "Demo Reel",
			"description" : "This is the third scene in my demo reel. I modeled everything in the scene, lit the scene and made all the textures and materials.",
			"preview" : "images/PCC2/PCC2-preview.jpg",
			"images" : ["images/PCC2/PCC2_render.jpg","images/PCC2/PCC2_wireframe.jpg","images/PCC2/TEX/label2_UV.jpg","images/PCC2/TEX/label3_UV.jpg","images/PCC2/TEX/label4_UV.jpg","images/PCC2/TEX/label5_UV.jpg","images/PCC2/TEX/spool1_UV.jpg","images/PCC2/TEX/spool2_UV.jpg","images/PCC2/TEX/spool3_UV.jpg","images/PCC2/TEX/spool4_UV.jpg","images/PCC2/TEX/spool5_UV.jpg","images/PCC2/TEX/table_UV.jpg"]
		},
		{
			"id" : "PCC3",
			"name" : "Kitchen - Demo Reel",
			"type" : "Demo Reel",
			"description" : "This is the first scene in my demo reel. I modeled everything in the scene, lit the scene and made all the textures and materials.",
			"preview" : "images/PCC3/PCC3-preview.jpg",
			"images" : ["images/PCC3/PCC3_render.jpg","images/PCC3/PCC3_wireframe.jpg","images/PCC3/TEX/lamp_REFL.jpg"]
		},
		{
			"id" : "hallway",
			"name" : "Hallway - Classwork",
			"type" : "Class Project",
			"description" : "This is an assignment I did in my Visual Development class. I had to match the lighting from a reference image using the techniques taught in the class. Mine is on the left and the reference is on the right.",
			"preview" : "images/hallway/hallway-preview.jpg",
			"images" : ["images/hallway/HALLWAY.jpg"]
		},
		{
			"id" : "jar",
			"name" : "Jar - Classwork",
			"type" : "Class Project",
			"description" : "This is an assignment I did in my Shading and Lighting class. I had to replicate the textures and lighting based on a real life reference image",
			"preview" : "mages/jar/jar-preview.jpg",
			"images" : ["images/jar/JAR.jpg"]
		},
			{
			"id" : "crush",
			"name" : "Crush - Classwork",
			"type" : "Class Project",
			"description" : "This is an assignment I did in my Visual Development class. I had to make the materials for the bottle and make the uvs and materials for the gear. I also had to add a sticker and water stains to the box using projections.",
			"preview" : "images/crush/crush-preview.jpg",
			"images" : ["images/crush/CRUSH.tga"]
		},
			{
			"id" : "cheese",
			"name" : "Cheese - Classwork ",
			"type" : "Class Project",
			"description" : "This is an assignment I did in my Shading and Lighting class. I had do the materials and textures for the cheese, knife, cutting board, wine bottle and wine glass. Everything else in the scene was given to me already finished.",
			"preview" : "images/cheese/cheese-preview.jpg",
			"images" : ["images/cheese/CHEESE.jpg"]
		},
		{
			"id" : "clothing-dev",
			"name" : "Clothing Development",
			"type" : "Class Project",
			"description" : "This is an assignment I did in my Character Development class. I had to create a reference sheet similar to something I would show an art director for the clothing of a character I created. I had to base the character of a time period, clothing style and job given from a random generator. I got cyberpunk graffiti artist from the present.",
			"preview" : "images/clothing-dev/ClothingDevelopment.jpg",
			"images" : ["images/clothing-dev/ClothingDevelopment.jpg"]
		},
		{
			"id" : "emma-waffles",
			"name" : "Emma & Waffles",
			"type" : "Class Project",
			"description" : "This is an assignment I did in my Methods of Design class. I had to create  2 characters, a hero and sidekick, for a fake tv show based off of a random target audience and object given to me. I was given the age group 4-7 and cake.",
			"preview" : "images/emma-waffles/emma-waffles-preview.jpg",
			"images" : ["images/emma-waffles/emmaWaffles_2.jpg","images/emma-waffles/emmaWaffles_1.jpg","images/emma-waffles/emma.jpg","images/emma-waffles/waffles.jpg"]
		}, 
		{
			"id" : "cougar-knits",
			"name" : "Cougar Knits",
			"type" : "Logo Design",
			"description" : "I designed this logo for my friend’s organization called Cougar Knits.",
			"preview" : "images/cougar-knits/cougar-knits-preview.jpg",
			"images" : ["images/cougar-knits/cougar_knits.jpg"]
		},
		{
			"id" : "molly",
			"name" : "Robot - Akëro Clothing",
			"type" : "Shirt Design",
			"description" : "I made this design for my clothing company Akëro Clothing.",
			"preview" : "images/molly/molly-preview.jpg",
			"images" : ["images/molly/molly_main.png"]
		},
		{
			"id" : "cat",
			"name" : "Cat - Akëro Clothing",
			"type" : "Shirt Design",
			"description" : "I made this design for my clothing company Akëro Clothing.",
			"preview" : "images/cat/cat-preview.jpg",
			"images" : ["images/cat/cat_main.png"]
		} 
	];
	
	jQuery("body").on('click','#back',function(e) {
		console.log('click');
		$("#main-container").show();
		$("#work-details").hide();
	});
	
	var max = projects.length;
	
	$(".work-container .item").on('click',function(e) {
		console.log(this.id);
		$("#work-details").empty();
		for(var i = 0; i < max; i++){
			if(projects[i]['id'] == this.id){
				var obj = projects[i];
				var imgs = '';
				for(var j = 0; j < obj['images'].length; j++){
					imgs += '<img src="'+obj['images'][j]+'">';
				}
				var html = '<div id="work-desc" class="seven columns"><span id="back">« Back to Works</span><h2>'+obj.name+'</h2><p>'+obj.description+'</p></div><div id="work-img" class="five columns">'+imgs+'</div><div class="clear-fix"></div>';
				$("#work-details").append(html).show();
				$("#main-container").hide();
				break;
			}
		}
		
	});

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
				$("#main-container").show();
				$("#work-details").hide();
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