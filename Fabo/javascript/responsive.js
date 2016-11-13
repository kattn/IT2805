
/*Kode inspirert og hentet fra http://www.w3schools.com/howto/howto_js_topnav.asp*/

/* Legger til responsive i klasse navnet for css for mobil/nettbrett */
function responsiveFunction(){
	var x = document.getElementById("myNavbar");
	if (x.className === "navbar") {
		x.className += " responsive";
	}
	else{
		x.className = "navbar";
	}
}

/* Legger til responsive i klasse navnet for css for mobil/nettbrett.
Her også basert på hvilke under meny som åpnes */
function dropdownFunction(isMateriell){
	var x;
	if(isMateriell){
		x = document.getElementById("materiell_knapp");
	}
	else{
		x = document.getElementById("fabo_studien_knapp");

	}
	
	if (x.className === "dropdown") {
		x.className += " responsive";
	}
	else{
		x.className = "dropdown";
	}
}
