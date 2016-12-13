$(function() {
    var images = ['../img/gif/1.gif', '../img/gif/test-waterfall-2.gif', '../img/gif/test-waterfall-3.gif'];
 	 $('.background-image').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'
 	});
});
