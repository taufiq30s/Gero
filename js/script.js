document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, 0);
});

$(window).scroll(function(){
	var scrollTop = $(this).scrollTop();
	
	$('.main-product-info').css({
		opacity: function() {
			var elementHeight = $(this).height(),
			opacity = ((1- (scrollTop) / elementHeight) * 1.1) + 0.2 ;
			return opacity;
		}
	})
});

$(document).ready(function(){
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        hover: true, // Activate on hover
        coverTrigger: false, // Displays dropdown below the button
        alignment: 'left' ,// Displays dropdown with edge aligned to the left of button
        constrainWidth: true, 
        }
    );
	$('.dropdown-button-user').dropdown({coverTrigger: false, constrainWidth: false});
    $('input.search').autocomplete({
        data: {
            "Headset" : null,
            "Wireless Headset" : null,
			"Wired Headset" : null,
			"Headphone" : null,
			"Wireless Headphone" : null,
			"Wired Headphone" : null,
			"Keyboard" : null,
			"Wireless Keyboard" : null,
			"Wired Keyboard" : null,
			"Mechanic Keyboard" : null,
			"Portable Keyboard" : null,
			"Gaming Mouse" : null,
			"Wired Mouse" : null,
			"Wireless Mouse" : null,
			"Razer Mouse" : null,
			"Gaming Mousepad" : null,
			"Gaming Headphone" : null,
			"Processor" : null,
			"intel" : null,
			"Amd" : null,
			"Intel Core i3" : null,
			
        }
    });
    
    
    $('.collapsible').collapsible();
    $('.tabs').tabs();   
    $('.menu').sidenav({edge: 'right'});
	$('.user').sidenav();
	$('.another').sidenav();
    
});

function responsive(x){
	if(x.matches){
		if((document.title) == "Gero"){
			document.getElementById("parallax-img").src="images/main-mobile.png";
			document.getElementById("prod1").classList.remove("s6");
			document.getElementById("prod2").classList.remove("s6");
			document.getElementById("prod3").classList.remove("s6");
			document.getElementById("prod4").classList.remove("s6");
			document.getElementById("prod5").classList.remove("s6");
			document.getElementById("prod6").classList.remove("s6");
			document.getElementById("prod1").classList.add("s12");
			document.getElementById("prod2").classList.add("s12");
			document.getElementById("prod3").classList.add("s12");
			document.getElementById("prod4").classList.add("s12");
			document.getElementById("prod5").classList.add("s12");
			document.getElementById("prod6").classList.add("s12");
		}
		else if(((document.title) == "Terms of Use | Gero")|| (document.title) == "Privacy Policy | Gero"){
			document.getElementById("lang").classList.remove("s11");
			document.getElementById("lang").classList.add("s12");
		}
	}
	else{
		if((document.title) == "Gero"){
			document.getElementById("parallax-img").src="images/main.jpg";
			document.getElementById("prod1").classList.remove("s12");
			document.getElementById("prod2").classList.remove("s12");
			document.getElementById("prod3").classList.remove("s12");
			document.getElementById("prod4").classList.remove("s12");
			document.getElementById("prod5").classList.remove("s12");
			document.getElementById("prod6").classList.remove("s12");
			document.getElementById("prod1").classList.add("s6");
			document.getElementById("prod2").classList.add("s6");
			document.getElementById("prod3").classList.add("s6");
			document.getElementById("prod4").classList.add("s6");
			document.getElementById("prod5").classList.add("s6");
			document.getElementById("prod6").classList.add("s6");
		}
		else if(((document.title) == "Terms of Use | Gero")|| (document.title) == "Privacy Policy | Gero"){
			document.getElementById("lang").classList.remove("s12");
			document.getElementById("lang").classList.add("s11");
		}
		document.getElementById("no-login-mob").style.display="none";
		document.getElementById("login-mob").style.display="none";
	}
}
function mobileMode(a, session){
	if(a.matches){
		if(session != null){
			document.getElementById("no-login-mob").style.display="none";
			document.getElementById("login-mob").style.display="initial";	
			document.getElementById("slide-out-mob").classList.add("menu");
			document.getElementById("slide-out-mob").classList.remove("another");
			document.getElementById("menu").classList.add("right");	
		}
		else{
			document.getElementById("no-login-mob").style.display="initial";
			document.getElementById("login-mob").style.display="none";	
			document.getElementById("menu").classList.remove("right");
			document.getElementById("slide-out-mob").classList.remove("menu");
			document.getElementById("slide-out-mob").classList.add("another");
		}
	}
}
var width = window.matchMedia("(max-width: 700px)")
responsive(width);
width.addListener(responsive);
width.addListener(mobileMode);

/*Dummy Login */
var email = sessionStorage.getItem("email");
if(email != null){
	document.getElementById("no-login").style.display="none";
	document.getElementById("login").style.display="list-item";
	mobileMode(width, email);
} else{
	document.getElementById("no-login").style.display="list-item";
	document.getElementById("login").style.display="none";
	mobileMode(width, email);
	
}

function logout(){
	sessionStorage.clear();
	location.reload();
}
        