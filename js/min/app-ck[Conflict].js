function detectmob(){return window.innerWidth<=800&&window.innerHeight<=600?!0:!1}$(document).foundation(),detectmob()||($(document).ready(function(){$(".hider *:not(.slideme, .flechatrazo, .flechaguarda, .normal, .invertida)").each(function(){var i=$(this).position().top,o=$(window).scrollTop()+$(window).height();i>o&&$(this).addClass("hideme").animate({opacity:"0"},500)}),$(window).scroll(function(){$(".hideme").each(function(){var i=$(this).position().top+$(this).outerHeight(),o=$(window).scrollTop()+$(window).height();o>i-200&&$(this).removeClass("hideme").animate({opacity:"1"},500)})})}),$(document).ready(function(){$(".hider2 *:not(.slideme, .flechatrazo, .flechaguarda, .normal, .invertida)").each(function(){var i=$(this).position().top,o=$(window).scrollTop()+$(window).height();i>o&&$(this).addClass("hideme2").css({opacity:"0"})}),$(window).scroll(function(){$(".hideme2").each(function(){var i=$(this).position().top+$(this).outerHeight(),o=$(window).scrollTop()+$(window).height();o>i-400&&$(this).removeClass("hideme2").animate({opacity:"1"},500)})})}),$(document).ready(function(){$(".hider3 *:not(.slideme, .flechatrazo, .flechaguarda, .normal, .invertida)").each(function(){var i=$(this).position().top,o=$(window).scrollTop()+$(window).height();i>o&&$(this).addClass("hideme3").css({opacity:"0"})}),$(window).scroll(function(){$(".hideme3").each(function(){var i=$(this).position().top+$(this).outerHeight(),o=$(window).scrollTop()+$(window).height();o>i-800&&$(this).removeClass("hideme3").animate({opacity:"1"},500)})})})),$(function(){$.scrollIt()}),$(".menu-opener").click(function(){$(".menu-opener, .menu-opener-inner, .menu").toggleClass("active")}),$(document).ready(function(){$("#logoanima").delay(8e3).addClass("animated")}),$(document).ready(function(){$(".textoanima").addClass("animatedtext")}),$(window).scroll(function(){$(".slideme").each(function(){var i=$(this).position().top+$(this).outerHeight(),o=$(window).scrollTop()+$(window).height();o>i-10&&$(this).addClass("slider")})});