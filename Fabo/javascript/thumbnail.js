
var images = document.getElementsByTagName("img");

console.log(images)

for (var i = 0, len = images.length; i < len; i++){
	console.log(images[i]);
	images[i].addEventListener('mouseover', function (event) {
		this.setAttribute("class", "bilde_media2");
	});
	
	images[i].addEventListener('mouseout', function (event) {
		this.setAttribute("class", "bilde_media1");
});

}