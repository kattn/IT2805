
/*Kode inspirert og hentet fra http://www.w3schools.com/howto/howto_js_topnav.asp*/
function responsiveFunction(){
	var x = document.getElementById("myNavbar");
	if (x.className === "navbar") {
		x.className += " responsive";
	}
	else{
		x.className = "navbar";
	}
}

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
