var cssh3 = document.querySelector("h3");
var csscolor1 = document.querySelector(".color1");
var csscolor2 = document.querySelector(".color2");
var cssbody = document.getElementById("gradient");

function setGradient(){
	cssbody.style.background = 
	"linear-gradient(to right," + csscolor1.value + 
	", " + csscolor2.value + ")";

	cssh3.textContent = cssbody.style.background + ";";
}

csscolor1.addEventListener("input", setGradient);
csscolor2.addEventListener("input", setGradient);