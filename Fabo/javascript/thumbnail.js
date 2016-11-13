
var images = document.getElementsByClassName("bilde_media1");

for (var i = 0, len = images.length; i < len; i++){
	images[i].addEventListener('mouseover', function (event) {
		this.setAttribute("class", "bilde_media2");
	});
	
	images[i].addEventListener('mouseout', function (event) {
		this.setAttribute("class", "bilde_media1");
});

}