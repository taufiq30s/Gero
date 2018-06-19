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
})

        