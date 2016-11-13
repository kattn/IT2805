
/* List of all pages to be searched */
const pages = [
	"familie.html", "forskningsgruppen.html", "helse.html", "index.html", 
	"lenker.html", "materiell.html",	"media.html", "nytt", "publikasjoner.html", 
	"sponsorer.html" ];

var xhr = [];
var txt = [];

/*var iframe = document.createElement("IFRAME");
iframe.setAttribute("display","none");
document.getElementsByTagName("BODY")[0].appendChild(iframe);*/

/* Search collect all the text of all pages into txt[] */
/* Not very effective since all text is stored in memory, but do be done in time */
/* it was need. */
for(var i = 0, len = pages.length; i < len; i++){
		xhr[i] = new XMLHttpRequest();
		xhr[i].onreadystatechange = function () {
        	if(this.readyState == 4 && this.status == 200) {
            	console.log("Readystate change");
        	}
    	};
		xhr[i].open("GET", "../"+pages[i], true);
		console.log(i);
		xhr[i].send();
}

/* Event listener to search button and focus + enter */
document.getElementById("search").addEventListener("click",
function(event){
	event.preventDefault();
	console.log("Submit clicked.");

	var finds = [];

	for(var i = 0, len = pages.length; i < len; i++){
		finds.push(searchPage(xhr[i].responseText,document.getElementById("txt").value));
	}

	
});


/* Search a page for the giveN search term and returns all placements for it*/
function searchPage(cont, searchTerm){

	console.log("hello")

	var placements = [];
	var placement = cont.search(searchTerm);

	/* Find all the placments of the search term and add them to the array */
	while(placement != -1){
		placements.push(placement);
		cont = cont.substr(placement)[1];
		placement = cont.search(searchTerm);
	}

	return placements;
}