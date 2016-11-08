document.getElementsByTagName("HEADER")[0].innerHTML = 
	"<ul class=\"navbar\">" +
		"<li class=\"dropdown\">" +
			"<a href=\"#\" class=\"dropbtn\">FABO-studien</a>" +
			"<div class=\"dropdowncnt\">" +
				"<a href=\"index.html\">Om Studien</a>" +
				"<a href=\"forskningsgruppen.html\">Forskningsgruppen</a>" +
			"</div>" +
		"</li>" +
	
		"<li class=\"dropdown\">" +
			"<a href=\"#\" class=\"dropbtn\">Materiell</a>" +
			"<div class=\"dropdowncnt\">" +
				"<a href=\"helse.html\">For helsesøstre</a>" +
				"<a href=\"familie.html\">For familie</a>" +
			"</div>" +
		"</li>" +
		"<li><a href=\"lenker.html\">Lenker</a></li>" +
		"<li><a href=\"nytt.html\">Nytt fra studien</a></li>" +

		//Searchbar
		"<form id=\"searchBar\">"+
			"<input id=\"searchBarCnt\" type=\"text\" name=\"searchBar\" placeholder=\"Search...\""+
		"</form>"+
	"</ul>" +
	"</a>";

/*var list = document.createElement("UL");
list.setAttributeNode(document.createAttribute("class").value = "navbar");
var li = document.createElement("LI")*/

document.getElementsByTagName("FOOTER")[0].innerHTML = 
	"<table class=\"footerTable\"> " +
		"<tr> " +
			"<td id=\"annet\">Annet</td> " +
			"<td id=\"kontakt\">Kontakt</td> " +
			"<td id=\"picCell\" rowspan=\"5\"><img id=\"logo\" src=\"img/logos.png\" alt=\"logo uib and helseBergen\"></td> " +
		"</tr> " +
		"<tr> " +
			"<td><div id=\"borderAnnet\"></div></td> " +
			"<td><div id=\"borderKontakt\"></div></td> " +
		"</tr> " +
		"<tr> " +
			"<td><a href=\"media.html\">Studien i media</a></td> " +
			"<td>Mail: petur.juliusson@k2.uib.no</td> " +
		"</tr> " +
		"<tr> " +
			"<td><a href=\"publikasjoner.html\">Publikasjoner</a></td> " +
			"<td>Tlf.: 91767373</td> " +
		"</tr> " +
		"<tr> " +
			"<td><a href=\"sponsorer.html\">Sponsorer</a></td> " +
			"<td></td>"+
		"</tr> "+
	"</table>";


