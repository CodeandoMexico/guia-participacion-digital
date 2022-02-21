let links = document.querySelectorAll(".category__link");

for (const link of links) {
	link.innerHTML = link.innerHTML.charAt(0).toUpperCase() + link.innerHTML.slice(1);
}