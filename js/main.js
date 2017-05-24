the-finest-hours$(function(){

	// LOAD WORK

	var projects = [
		{
			"id" : "KA",
			"name" : "King Arthur Legend of the Sword",
			"type" : "VFX Work",
			"skills" : ["Lighting"],
			"description" : "I worked on lighting for characters, large environments, and smoke fx for Warner Bros’ <i>King Arthur: Legend of the Sword</i>. The movie is still in theaters so I have no material to show yet. I’ll be updating as soon as I receive them. <br><br><b>Positon:</b> Junior Lighting TD</br><b>Studio:</b> MPC Film</br><b>Software:</b> Katana, RenderMan</br>",
			"preview" : "images/king-arthur/king-arthur-preview.png",
			"images" : ["images/king-arthur/KA_cover_v2.jpg"]
		},
		{
			"id" : "TFH",
			"name" : "The Finest Hours",
			"type" : "VFX Work",
			"skills" : ["Lighting"],
			"description" : "These are screencaps of some of the shots I worked on for Disney’s <i>The Finest Hours</i>. I did lighting for the Pendleton Extensions and the generic CG water shots for the rescue sequence. <br><br><b>Positon:</b> Junior Lighting TD<br><b>Studio:</b> MPC Film<br><b>Software:</b> Katana, RenderMan</br>",
			"preview" : "images/the-finest-hours/TFH_cover.jpg",
			"images" : ["images/the-finest-hours/MPC_VFX_O_CH0043_v32_still.jpg","images/the-finest-hours/MPC_VFX_O_CH0806_v160_still.jpg","images/the-finest-hours/MPC_VFX_O_CM0670_v53_still.jpg","images/the-finest-hours/MPC_VFX_O_PR0180_v37_still.jpg","images/the-finest-hours/MPC_VFX_O_PR0860_v62_still.jpg"]
		},
		{
			"id" : "F4",
			"name" : "Fantastic Four",
			"type" : "VFX Work",
			"skills" : ["Lighting"],
			"description" : "These are screencaps of some of the shots I worked on for Marvel’s <i>Fantastic Four</i>. I did lighting for The Thing and the Planet Zero environment for the final battle sequence.<br><br><b>Positon:</b> Junior Lighting TD<br><b>Studio:</b> MPC Film<br><b>Software:</b> Katana, RenderMan</br",
			"preview" : "images/F4/F4_cover.png",
			"images" : ["images/F4/MPC_VFX_FF0112_still.jpg","images/F4/MPC_VFX_FF0614_still.jpg","images/F4/MPC_VFX_FF0616_still.jpg","images/F4/MPC_VFX_FF0956_still.jpg","images/F4/MPC_VFX_FF1076_still.jpg"]
		},
		{
			"id" : "PCC1",
			"name" : "Mangos - Demo Reel",
			"type" : "Demo Reel",
"skills" : ["Modeling","Textures", "Lighting &amp; Shading"],
			"description" : "This is the second scene in my demo reel. I modeled everything in the scene, lit the scene and made all the textures and materials. <br><br><b>Software:</b> Maya, MentalRay, Adobe Photoshop CS6</br>",
			"preview" : "images/PCC1/PCC1-preview.png",
			"images" : ["images/PCC1/PCC1_render.jpg","images/PCC1/PCC1_wireframe.jpg","images/PCC1/TEX/mango1_UV_BASE.jpg","images/PCC1/TEX/mango2_UV_BASE.jpg","images/PCC1/TEX/mango3_UV_BASE.jpg","images/PCC1/TEX/vase_UV_BASE.jpg"]
		},
		{
			"id" : "PCC2",
			"name" : "Thread - Demo Reel",
			"type" : "Demo Reel",
"skills" : ["Modeling","Textures", "Lighting &amp; Shading"],
			"description" : "This is the third scene in my demo reel. I modeled everything in the scene, lit the scene and made all the textures and materials. <br><br><b>Software:</b> Maya, MentalRay, Adobe Photoshop CS6</br>",
			"preview" : "images/PCC2/PCC2-preview.png",
			"images" : ["images/PCC2/PCC2_render.jpg","images/PCC2/PCC2_wireframe.jpg","images/PCC2/TEX/label2_UV.jpg","images/PCC2/TEX/label3_UV.jpg","images/PCC2/TEX/label4_UV.jpg","images/PCC2/TEX/label5_UV.jpg","images/PCC2/TEX/spool1_UV.jpg","images/PCC2/TEX/spool2_UV.jpg","images/PCC2/TEX/spool3_UV.jpg","images/PCC2/TEX/spool4_UV.jpg","images/PCC2/TEX/spool5_UV.jpg","images/PCC2/TEX/table_UV.jpg"]
		},
		{
			"id" : "PCC3",
			"name" : "Kitchen - Demo Reel",
			"type" : "Demo Reel",
			"skills" : ["Modeling","Textures", "Lighting &amp; Shading"],
			"description" : "This is the first scene in my demo reel. I modeled everything in the scene, lit the scene and made all the textures and materials. <br><br><b>Software:</b> Maya, MentalRay, Adobe Photoshop CS6</br>",
			"preview" : "images/PCC3/PCC3-preview.png",
			"images" : ["images/PCC3/PCC3_render.jpg","images/PCC3/PCC3_wireframe.jpg","images/PCC3/TEX/lamp_REFL.jpg"]
		}
	];

	var max = projects.length;

	function setWork(){
		var vfx = '';
		var demo = '';
		for(var i = 0; i < max; i++){
			var obj = projects[i],
				html = '',
				skills = '';
			for(var j = 0; j < obj.skills.length; j++){
				skills += '<li><span class="bullet">+</span>'+obj['skills'][j]+'</li>';
			}

			html += '<div class="four columns"><div class="item" id="'+obj.id+'"><div class="overlay"><h3>'+obj.type+'</h3><ul>'+skills+'</ul></div><img src="'+obj.preview+'"></div></div>';

			if( projects[i]['type'] == "VFX Work" )
				vfx += html;
			else
				demo += html;
		}
		$('#work .work-container.vfx-work').prepend(vfx);
		$('#work .work-container.class-work').prepend(demo);
	}

	function setDetails(obj){
		var imgs = '';
		for(var j = 0; j < obj['images'].length; j++){
			imgs += '<img src="'+obj['images'][j]+'">';
		}
		var html = '<div id="work-desc" class="seven columns"><a href="#work" id="back">« Back to My Work</a><h2>'+obj.name+'</h2><p>'+obj.description+'</p></div><div id="work-img" class="five columns">'+imgs+'</div><div class="clear-fix"></div>';
		$("#work-details").append(html).show();
		$("#main-container").hide();
		window.scrollTo(0, 0);
	}

	jQuery('body').on('click','a#back',function(e) {
		$("#main-container").show();
		$("#work-details").hide();
	});

	jQuery('body').on('click','.work-container .item',function(e) {
		$("#work-details").empty();
		for(var i = 0; i < max; i++){
			if(projects[i]['id'] == this.id){
				setDetails(projects[i]);
				break;
			}
		}
	});

	setWork();

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

});
