$(function(){
	var projects = [
		{
			"id" : "TWB",
			"name" : "The Willoughbys",
			"position" : "Senior Lighting Artist & Sequence Lead / Bron Animation",
			"type" : "VFX Work",
			"skills" : ["Lighting"],
			"description" : "I worked on lighting  and compositing for Bron Animation’s <i>The Willoughbys</i>.<br>Software: Katana, RenderMan, Nuke",
			"preview" : "",
			"images" : ["images/TWB/twb-01.jpg","images/TWB/twb-02.jpeg"],
			"layout" : "horizontal"
		},
		{
			"id" : "HM",
			"name" : "Henchmen",
			"position" : "Lighter & Compositor / Bron Animation",
			"type" : "VFX Work",
			"skills" : ["Lighting"],
			"description" : "I worked on lighting  and compositing for Bron Animation’s <i>Henchmen</i>. The movie is still in theaters so I have no material to show yet. I’ll be updating as soon as I receive them.<br>Software: Katana, RenderMan, Nuke",
			"preview" : "",
			"images" : ["images/HM/hench_891_220.png","images/HM/hench_560_720.png","images/HM/hench_560_740.png","images/HM/hench_891_160.png","images/HM/hench_891_180.png"],
			"layout" : "horizontal"
		},
		{
			"id" : "KA",
			"name" : "King Arthur Legend of the Sword",
			"position" : "Junior Lighting TD / MPC Films Montréal",
			"type" : "VFX Work",
			"skills" : ["Lighting"],
			"description" : "I worked on lighting for characters, large environments, and smoke fx for Warner Bros’ <i>King Arthur: Legend of the Sword</i>. The movie is still in theaters so I have no material to show yet. I’ll be updating as soon as I receive them.<br>Software: Katana, RenderMan",
			"preview" : "images/king-arthur/king-arthur-preview.png",
			"images" : ["images/king-arthur/KA_cover_v2.jpg"],
			"layout" : "vertical"
		},
		{
			"id" : "TFH",
			"name" : "The Finest Hours",
			"position" : "Junior Lighting TD / MPC Films Montréal",
			"type" : "VFX Work",
			"skills" : ["Lighting"],
			"description" : "These are screencaps of some of the shots I worked on for Disney’s <i>The Finest Hours</i>. I did lighting for the Pendleton Extensions and the generic CG water shots for the rescue sequence.<br>Software: Katana, RenderMan",
			"preview" : "images/the-finest-hours/TFH_cover.jpg",
			"images" : ["images/the-finest-hours/MPC_VFX_O_CH0043_v32_still.jpg","images/the-finest-hours/MPC_VFX_O_CH0806_v160_still.jpg","images/the-finest-hours/MPC_VFX_O_CM0670_v53_still.jpg","images/the-finest-hours/MPC_VFX_O_PR0180_v37_still.jpg","images/the-finest-hours/MPC_VFX_O_PR0860_v62_still.jpg"],
			"layout" : "horizontal"
		},
		{
			"id" : "F4",
			"name" : "Fantastic Four",
			"position" : "Junior Lighting TD / MPC Films Montréal",
			"type" : "VFX Work",
			"skills" : ["Lighting"],
			"description" : "These are screencaps of some of the shots I worked on for Marvel’s <i>Fantastic Four</i>. I did lighting for The Thing and the Planet Zero environment for the final battle sequence.<br>Software: Katana, RenderMan",
			"preview" : "images/F4/F4_cover.png",
			"images" : ["images/F4/MPC_VFX_FF0112_still.jpg","images/F4/MPC_VFX_FF0614_still.jpg","images/F4/MPC_VFX_FF0616_still.jpg","images/F4/MPC_VFX_FF0956_still.jpg","images/F4/MPC_VFX_FF1076_still.jpg"],
			"layout" : "horizontal"
		},
		{
			"id" : "PCC1",
			"name" : "Mangos - Demo Reel",
			"position" : "Student / Full Sail University",
			"type" : "Demo Reel",
"skills" : ["Modeling","Textures", "Lighting &amp; Shading"],
			"description" : "This is the second scene in my demo reel. I modeled everything in the scene, lit the scene and made all the textures and materials.<br>Software: Maya, MentalRay, Adobe Photoshop CS6",
			"preview" : "images/PCC1/PCC1-preview.png",
			"images" : ["images/PCC1/PCC1_render.jpg","images/PCC1/PCC1_wireframe.jpg"],
			"layout" : "horizontal"
		},
		{
			"id" : "PCC2",
			"name" : "Thread - Demo Reel",
			"position" : "Student / Full Sail University",
			"type" : "Demo Reel",
"skills" : ["Modeling","Textures", "Lighting &amp; Shading"],
			"description" : "This is the third scene in my demo reel. I modeled everything in the scene, lit the scene and made all the textures and materials.<br>Software: Maya, MentalRay, Adobe Photoshop CS6",
			"preview" : "images/PCC2/PCC2-preview.png",
			"images" : ["images/PCC2/PCC2_render.jpg","images/PCC2/PCC2_wireframe.jpg"],
			"layout" : "horizontal"
		},
		{
			"id" : "PCC3",
			"name" : "Kitchen - Demo Reel",
			"position" : "Student / Full Sail University",
			"type" : "Demo Reel",
			"skills" : ["Modeling","Textures", "Lighting &amp; Shading"],
			"description" : "This is the first scene in my demo reel. I modeled everything in the scene, lit the scene and made all the textures and materials.<br>Software: Maya, MentalRay, Adobe Photoshop CS6",
			"preview" : "images/PCC3/PCC3-preview.png",
			"images" : ["images/PCC3/PCC3_render.jpg","images/PCC3/PCC3_wireframe.jpg"],
			"layout" : "vertical"
		}
	];

	function rotateSlider( $slider ){
		var selectedClass = 'selected';
		var $images = $slider .find('.slides li');
		var $nav = $slider .find('.nav li');
		var max = $images.length;
		var selectedPos = 0;
		if (max > 1) {
			setInterval(function(){
				if (selectedPos >= max) selectedPos = 0;
				$images.removeClass(selectedClass);
				$nav.removeClass(selectedClass);
				$images.filter('[data-item="'+selectedPos+'"]').addClass(selectedClass);
				$nav.filter('[data-item="'+selectedPos+'"]').addClass(selectedClass);
				selectedPos++;
			}, 3000);

		}
	}

	function setWork(){
		var max = projects.length;
		var html = '';
		var navHtml = '';
		var cnt = 2;
		for (var i = 0; i < max; i++) {
			var obj = projects[i];
			var imgs = '';
			var imgsNav = '';
			for (var j = 0; j < obj.images.length; j++) {
				var imageClass = j === 0 ? 'class="selected"' : '';
				imgs += '<li data-item="'+j+'" '+imageClass+'><img src="'+obj['images'][j]+'"></li>';
				imgsNav += '<li data-item="'+j+'" '+imageClass+'><span class="item"></span></li>';
			}

			navHtml += '<li data-project="'+obj.id+'"><a href="#'+obj.id+'">'+cnt+'</a></li>';

			html += '<article id="'+obj.id+'" class="project '+obj.layout+'">'
				+ '<div class="images">'
				+ '<ul class="slides">'+imgs+'</ul>'
				+ '<ul class="nav">'+imgsNav+'</ul>'
				+ '</div>'
				+ '<div class="details">'
				+ '<div class="title"><h2>'+obj.name+'</h2><h3>'+obj.position+'</h3></div>'
				+ '<p>'+obj.description+'</p>'
				+ '</div></article>';
			cnt++;
		}
		$('#nav-list').append(navHtml);
		$('#work').prepend(html);
	}

	function startTwinkle(){
		var cnt = 1;
		var twinkleOne = $('.twinkle-one');
		var twinkleTwo = $('.twinkle-two');
		var twinkleThree = $('.twinkle-three');
		setInterval(function(){
			if( cnt == 1 ){
				twinkleOne.show();
				twinkleTwo.hide();
				twinkleThree.hide();
			} else if( cnt == 2 ){
				twinkleOne.hide();
				twinkleTwo.show();
				twinkleThree.hide();
			} else if( cnt == 3 ){
				twinkleOne.hide();
				twinkleTwo.hide();
				twinkleThree.show();
				cnt = 0;
			}
			cnt++;
		}, 800);
	}

	function updateNav($nav, $selected){
		$nav.find('li').removeClass('active');
		$selected.addClass('active');
	}

	setWork();
	startTwinkle();

	$(document).find('.images').each(function( index ) {
		var $slider = $(this);
		rotateSlider($slider);
	});

	var $nav = $(document).find('#nav-list');
	$(document).find('.project').appear();
	$(document).on('appear', '.project', function(e) {
		console.log('APPEARED');
		var currId = $(this).attr('id');
		updateNav($nav, $nav.find('[data-project="'+currId+'"]'));
	  });
	$nav.on('click', 'li', function(){
		updateNav($nav, $(this));
	});

});
$(function(){
	var projects = [
		{
			"id" : "TWB",
			"name" : "The Willoughbys",
			"position" : "Senior Lighting Artist & Sequence Lead / Bron Animation",
			"type" : "VFX Work",
			"skills" : ["Lighting"],
			"description" : "These are two stills that were released for Bron Animation’s <i>The Willoughbys</i> that I did the lighting and compositing for. I worked as a sequence lead and also got to do a little bit of lookdev for characters and props. The film is set to be released this year on Netflix so I should have more of my work to show soon!<br>Software: Katana, RenderMan, Nuke",
			"preview" : "",
			"images" : ["images/TWB/twb-01.jpg","images/TWB/twb-02.jpeg"],
			"layout" : "horizontal"
		},
		{
			"id" : "HM",
			"name" : "Henchmen",
			"position" : "Lighter & Compositor / Bron Animation",
			"type" : "VFX Work",
			"skills" : ["Lighting"],
			"description" : "These are screencaps of some of the shots I worked on for Bron Animation’s <i>Henchmen</i>. I did character lighting and compositing and worked on combining 3D and 2D elements. <br>Software: Katana, RenderMan, Nuke",
			"preview" : "",
			"images" : ["images/HM/hench_891_220.png","images/HM/hench_560_720.png","images/HM/hench_560_740.png","images/HM/hench_891_160.png","images/HM/hench_891_180.png"],
			"layout" : "horizontal"
		},
		{
			"id" : "KA",
			"name" : "King Arthur Legend of the Sword",
			"position" : "Junior Lighting TD / MPC Films Montréal",
			"type" : "VFX Work",
			"skills" : ["Lighting"],
			"description" : "I worked on lighting for characters, large environments, and smoke fx for Warner Bros’ <i>King Arthur: Legend of the Sword</i>.<br>Software: Katana, RenderMan",
			"preview" : "images/king-arthur/king-arthur-preview.png",
			"images" : ["images/king-arthur/KA_cover_v2.jpg"],
			"layout" : "vertical"
		},
		{
			"id" : "TFH",
			"name" : "The Finest Hours",
			"position" : "Junior Lighting TD / MPC Films Montréal",
			"type" : "VFX Work",
			"skills" : ["Lighting"],
			"description" : "These are screencaps of some of the shots I worked on for Disney’s <i>The Finest Hours</i>. I did lighting for the Pendleton Extensions and the generic CG water shots for the rescue sequence.<br>Software: Katana, RenderMan",
			"preview" : "images/the-finest-hours/TFH_cover.jpg",
			"images" : ["images/the-finest-hours/MPC_VFX_O_CH0043_v32_still.jpg","images/the-finest-hours/MPC_VFX_O_CH0806_v160_still.jpg","images/the-finest-hours/MPC_VFX_O_CM0670_v53_still.jpg","images/the-finest-hours/MPC_VFX_O_PR0180_v37_still.jpg","images/the-finest-hours/MPC_VFX_O_PR0860_v62_still.jpg"],
			"layout" : "horizontal"
		},
		{
			"id" : "F4",
			"name" : "Fantastic Four",
			"position" : "Junior Lighting TD / MPC Films Montréal",
			"type" : "VFX Work",
			"skills" : ["Lighting"],
			"description" : "These are screencaps of some of the shots I worked on for Marvel’s <i>Fantastic Four</i>. I did lighting for The Thing and the Planet Zero environment for the final battle sequence.<br>Software: Katana, RenderMan",
			"preview" : "images/F4/F4_cover.png",
			"images" : ["images/F4/MPC_VFX_FF0112_still.jpg","images/F4/MPC_VFX_FF0614_still.jpg","images/F4/MPC_VFX_FF0616_still.jpg","images/F4/MPC_VFX_FF0956_still.jpg","images/F4/MPC_VFX_FF1076_still.jpg"],
			"layout" : "horizontal"
		},
		{
			"id" : "PCC1",
			"name" : "Mangos - Demo Reel",
			"position" : "Student / Full Sail University",
			"type" : "Demo Reel",
"skills" : ["Modeling","Textures", "Lighting &amp; Shading"],
			"description" : "This is the second scene in my demo reel. I modeled everything in the scene, lit the scene and made all the textures and materials.<br>Software: Maya, MentalRay, Adobe Photoshop CS6",
			"preview" : "images/PCC1/PCC1-preview.png",
			"images" : ["images/PCC1/PCC1_render.jpg","images/PCC1/PCC1_wireframe.jpg"],
			"layout" : "horizontal"
		},
		{
			"id" : "PCC2",
			"name" : "Thread - Demo Reel",
			"position" : "Student / Full Sail University",
			"type" : "Demo Reel",
"skills" : ["Modeling","Textures", "Lighting &amp; Shading"],
			"description" : "This is the third scene in my demo reel. I modeled everything in the scene, lit the scene and made all the textures and materials.<br>Software: Maya, MentalRay, Adobe Photoshop CS6",
			"preview" : "images/PCC2/PCC2-preview.png",
			"images" : ["images/PCC2/PCC2_render.jpg","images/PCC2/PCC2_wireframe.jpg"],
			"layout" : "horizontal"
		},
		{
			"id" : "PCC3",
			"name" : "Kitchen - Demo Reel",
			"position" : "Student / Full Sail University",
			"type" : "Demo Reel",
			"skills" : ["Modeling","Textures", "Lighting &amp; Shading"],
			"description" : "This is the first scene in my demo reel. I modeled everything in the scene, lit the scene and made all the textures and materials.<br>Software: Maya, MentalRay, Adobe Photoshop CS6",
			"preview" : "images/PCC3/PCC3-preview.png",
			"images" : ["images/PCC3/PCC3_render.jpg","images/PCC3/PCC3_wireframe.jpg"],
			"layout" : "vertical"
		}
	];

	function rotateSlider( $slider ){
		var selectedClass = 'selected';
		var $images = $slider .find('.slides li');
		var $nav = $slider .find('.nav li');
		var max = $images.length;
		var selectedPos = 0;
		if (max > 1) {
			setInterval(function(){
				if (selectedPos >= max) selectedPos = 0;
				$images.removeClass(selectedClass);
				$nav.removeClass(selectedClass);
				$images.filter('[data-item="'+selectedPos+'"]').addClass(selectedClass);
				$nav.filter('[data-item="'+selectedPos+'"]').addClass(selectedClass);
				selectedPos++;
			}, 3000);

		}
	}

	function setWork(){
		var max = projects.length;
		var html = '';
		var navHtml = '';
		var cnt = 2;
		for (var i = 0; i < max; i++) {
			var obj = projects[i];
			var imgs = '';
			var imgsNav = '';
			for (var j = 0; j < obj.images.length; j++) {
				var imageClass = j === 0 ? 'class="selected"' : '';
				imgs += '<li data-item="'+j+'" '+imageClass+'><img src="'+obj['images'][j]+'"></li>';
				imgsNav += '<li data-item="'+j+'" '+imageClass+'><span class="item"></span></li>';
			}

			navHtml += '<li data-project="'+obj.id+'"><a href="#'+obj.id+'">'+cnt+'</a></li>';

			html += '<article id="'+obj.id+'" class="project '+obj.layout+'">'
				+ '<div class="images">'
				+ '<ul class="slides">'+imgs+'</ul>'
				+ '<ul class="nav">'+imgsNav+'</ul>'
				+ '</div>'
				+ '<div class="details">'
				+ '<div class="title"><h2>'+obj.name+'</h2><h3>'+obj.position+'</h3></div>'
				+ '<p>'+obj.description+'</p>'
				+ '</div></article>';
			cnt++;
		}
		$('#nav-list').append(navHtml);
		$('#work').prepend(html);
	}

	function startTwinkle(){
		var cnt = 1;
		var twinkleOne = $('.twinkle-one');
		var twinkleTwo = $('.twinkle-two');
		var twinkleThree = $('.twinkle-three');
		setInterval(function(){
			if( cnt == 1 ){
				twinkleOne.show();
				twinkleTwo.hide();
				twinkleThree.hide();
			} else if( cnt == 2 ){
				twinkleOne.hide();
				twinkleTwo.show();
				twinkleThree.hide();
			} else if( cnt == 3 ){
				twinkleOne.hide();
				twinkleTwo.hide();
				twinkleThree.show();
				cnt = 0;
			}
			cnt++;
		}, 800);
	}

	function updateNav($nav, $selected){
		$nav.find('li').removeClass('active');
		$selected.addClass('active');
	}

	setWork();
	startTwinkle();

	$(document).find('.images').each(function( index ) {
		var $slider = $(this);
		rotateSlider($slider);
	});

	var $nav = $(document).find('#nav-list');
	$(document).find('.project').appear();
	$(document).on('appear', '.project', function(e) {
		console.log('APPEARED');
		var currId = $(this).attr('id');
		updateNav($nav, $nav.find('[data-project="'+currId+'"]'));
	  });
	$nav.on('click', 'li', function(){
		updateNav($nav, $(this));
	});

});
