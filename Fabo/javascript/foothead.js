document.getElementsByTagName("HEADER")[0].innerHTML = 
	"<a href=\"index.html\">" +
		"<img src=\"img/headerbilde.png\" alt=\"header\">" +
	"</a>" + 
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
				"<a href=\"helse.html\">For hestesøstre</a>" +
				"<a href=\"familie.html\">For familie</a>" +
			"</div>" +
		"</li>" +	
		"<li><a href=\"lenker.html\">Lenker</a></li>" +
		"<li><a href=\"nytt.html\">Nytt fra studien</a></li>" +
	"</ul>";

document.getElementsByTagName("FOOTER")[0].innerHTML = 
	"<table class=\"footerTable\"> " +
		"<tr> " +
			"<td><a href=\"media.html\">Studien i media</a></td> " +
			"<td>Kontakt:</td> " +
			"<td rowspan=\"3\"><img id=\"hbergen\" src=\"img/helsebergen_logo.png\" alt=\"logo helsebergen\"></td> " +
			"<td rowspan=\"3\"><img id=\"uib\" src=\"img/uib_logo.png\" alt=\"logo uib\"></td> " +
		"</tr> " +
		"<tr> " +
			"<td><a href=\"publikasjoner.html\">Publikasjoner</a></td> " +
			"<td>Mail: petur.juliusson@k2.uib.no</td> " +
		"</tr> " +
		"<tr> " +
			"<td><a href=\"sponsorer.html\">Sponsorer</a></td> " +
			"<td>Tlf.: 91767373</td> " +
		"</tr> " +
	"</table>";