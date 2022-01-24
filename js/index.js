const menu_toggle = document.querySelector(".menu-toggle");
const container = document.querySelector(".container");
const navbar = document.getElementById('navbar');

menu_toggle.addEventListener("click", () => {
	container.classList.toggle("active");

	if (navbar.style.display == 'none') {

	 	navbar.style.display = 'block';

	}else {

		navbar.style.display = 'none';
		
} 
})

