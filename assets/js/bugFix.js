let links = document.querySelectorAll(".category__link");

for (const link of links) {
	console.log(link.innerHTML);
	link.innerHTML = link.innerHTML.charAt(0).toUpperCase() + link.innerHTML.slice(1);
	console.log(link.innerHTML);
}

console.log("I am running");