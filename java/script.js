menu.onclick = function myFunction() {
	var x = document.getElementById('menu1')
	var y = document.getElementById('menu2')

	if (x.className === "menu1") {
		x.className += "responsive";
	} else {
		x.className = "menu1";
	}

	if (x.className === "menu2") {
		x.className += "responsive"
	} else {
		x.className = "menu2"
	}


}

