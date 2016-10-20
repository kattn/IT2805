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
	"<a href=\"media.html\">Studien i media</a><br>" +
	"<a href=\"publikasjoner.html\">Publikasjoner</a><br>" +
	"<a href=\"sponsorer.html\">Sponsorer</a>" + 
	"<div id=\"kontakt\">" +
	"<p>Kontakt:</p>" +
	"<p>petur.juliusson@k2.uib.no</p>" +
	"<p>91767373</p>" +
	"</div>" +
	"<img src=\"img/helsebergen_logo.png\" alt=\"logo helsebergen\">" +
	"<img src=\"img/uib_logo.png\" alt=\"logo uib\">";