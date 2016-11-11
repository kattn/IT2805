document.getElementsByTagName("HEADER")[0].innerHTML = 
	"<ul class=\"navbar\" id=\"myNavbar\">" +
		"<li class=\"icon\">"+
			"<a href=\"javascript:void(0);\" style=\"font-size:60pt;\" onclick=\"responsiveFunction()\">☰</a>"+
		"</li>"+
		"<li id= \"fabo_studien_knapp\" class=\"dropdown\" onclick=\"dropdownFunction(false)\">" +
			//"<a href=\"index.html\" class=\"dropbtn\">FABO-studien</a>" +
			"<a href=\"#\" class=\"dropbtn\">FABO-studien</a>"+
			"<div class=\"dropdowncnt\">" +
				"<a href=\"index.html\">Om Studien</a>" +
				"<a href=\"forskningsgruppen.html\">Forskningsgruppen</a>" +
			"</div>" +
		"</li>" +
	
		"<li id = \"materiell_knapp\" class=\"dropdown\" onclick=\"dropdownFunction(true)\">" +
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
			"<input id=\"searchBarCnt\" type=\"text\" name=\"searchBar\" placeholder=\"Search...\">"+
		"</form>"+
	"</ul>" +
	"</a>";

/*var list = document.createElement("UL");
list.setAttributeNode(document.createAttribute("class").value = "navbar");
var li = document.createElement("LI")*/

document.getElementsByTagName("FOOTER")[0].innerHTML = 
	"<table class=\"footerTable\"> " +
		"<tr> " +
			"<td>Annet</td> " +
			"<td>Kontakt</td> " +
			"<td rowspan=\"5\"><img id=\"logo\" src=\"img/logos.png\" alt=\"logo uib and helseBergen\"></td> " +
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
			"<td>Tlf.: 99999999</td> " +
		"</tr> " +
		"<tr> " +
			"<td><a href=\"sponsorer.html\">Sponsorer</a></td> " +
			"<td></td>"+
		"</tr> "+
	"</table>" +

	"<div id=\"smallScreenFooter\">"+
		"<div id=\"annetSmall\">"+
			"<p>Annet</p>"+
			"<a class=\"a_tag_annet\" href=\"media.html\">Studien i media</a>"+
			"<a class=\"a_tag_annet\" href=\"publikasjoner.html\">Publikasjoner</a>"+
			"<a class=\"a_tag_annet\" href=\"sponsorer.html\">Sponsorer</a>"+
		"</div>"+
		"<div id=\"kontaktSmall\">"+
			"<p>Kontakt</p>"+
			"<p>Mail: petur.juliusson@k2.uib.no</p>"+
			"<p>Tlf.: xxxxxxxx</p>"+
		"</div>"+
		"<div id=\"picCellSmall\">"+
			"<img id=\"logoSmall\" src=\"img/logos.png\" alt=\"logo uib and helseBergen\">"+
		"</div>"+
	"</div>";



