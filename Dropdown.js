function dropdownFunc () {
document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
	if (!e.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; 1 < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}