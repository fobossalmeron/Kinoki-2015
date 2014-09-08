// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


//FadeIns 
function detectmob() {
   if(window.innerWidth <= 800 && window.innerHeight <= 600) {
     return true;
   } else {
     return false;
   }
}

if(!detectmob()){

//EasyFade
$(document).ready(function() {
	
	/* Hide all elements outside the visible window */
	$('.hider *:not(.slideme, .flechatrazo, .flechaguarda, .normal, .invertida)').each( function(){
	   
		var top_of_object = $(this).position().top;
		var bottom_of_window = $(window).scrollTop() + $(window).height();
	   
		if( bottom_of_window < top_of_object  ){
		
			$(this).addClass('hideme').animate({'opacity':'0'},500);
			
		}
		
	});
	
	/* Every time the window is scrolled ... */
	$(window).scroll( function(){
		
		/* Check the location of the desired elements */
		$('.hideme').each( function(){
			
			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			
			
				if( bottom_of_window > ( bottom_of_object - 200 )  ){
				
					$(this).removeClass('hideme').animate({'opacity':'1'},500);
					
				}
			
		}); 
	
	});
	
});
//Harderfade
$(document).ready(function() {
	
	/* Hide all elements outside the visible window */
	$('.hider2 *:not(.slideme, .flechatrazo, .flechaguarda, .normal, .invertida)').each( function(){
	   
		var top_of_object = $(this).position().top;
		var bottom_of_window = $(window).scrollTop() + $(window).height();
	   
		if( bottom_of_window < top_of_object  ){
		
			$(this).addClass('hideme2').css({'opacity':'0'});
			
		}
		
	});
	
	/* Every time the window is scrolled ... */
	$(window).scroll( function(){
		
		/* Check the location of the desired elements */
		$('.hideme2').each( function(){
			
			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			
			
				if( bottom_of_window > ( bottom_of_object - 400 )  ){
				
					$(this).removeClass('hideme2').animate({'opacity':'1'},500);
					
				}
			
		}); 
	
	});
	
});

//SuperFAQ
$(document).ready(function() {
	
	/* Hide all elements outside the visible window */
	$('.hider3 *:not(.slideme, .flechatrazo, .flechaguarda, .normal, .invertida)').each( function(){
	   
		var top_of_object = $(this).position().top;
		var bottom_of_window = $(window).scrollTop() + $(window).height();
	   
		if( bottom_of_window < top_of_object  ){
		
			$(this).addClass('hideme3').css({'opacity':'0'});
			
		}
		
	});
	
	/* Every time the window is scrolled ... */
	$(window).scroll( function(){
		
		/* Check the location of the desired elements */
		$('.hideme3').each( function(){
			
			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			
			
				if( bottom_of_window > ( bottom_of_object - 800 )  ){
				
					$(this).removeClass('hideme3').animate({'opacity':'1'},500);
					
				}
			
		}); 
	
	});
	
});

}
// scrollIt
$(function() { $.scrollIt(); });

// topbarToggle
$(".menu-opener").click(function(){
  $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active"); 
  });
  
//HomeAnimation
$(document).ready(function(){
    $("#logoanima").delay(8000).addClass('animated');                      
});

$(document).ready(function(){
    $(".textoanima").addClass('animatedtext');                      
});

//slideins
	$(window).scroll( function(){
		$('.slideme').each( function(){
			
			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			
			
				if( bottom_of_window > ( bottom_of_object - 10 )  ){
				
					$(this).addClass('slider');
					
				}
	
	});
	
});

//Ajax slider
$(document).ready(function(){
 	 	$('#noticiarecent1').load('blogdata.html #noticia1');
 	 	$('#noticiarecent2').load('blogdata.html #noticia2');
 	 	$('#noticiarecent3').load('blogdata.html #noticia3');
});