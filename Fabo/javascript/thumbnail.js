
var images = document.getElementsByClassName("bilde_media1");

console.log(images);
console.log(typeof images);
console.log(typeof images[0]);
for (var i = 0, len = images.length; i < len; i++){
	images[i].addEventListener('mouseover', function (event) {
		images[i].setAttribute("class", "bilde_media2");
	});

}

/*
images.addEventListener('mouseout', function (event){
	images.ClassName="bilde_media1";

});
*/