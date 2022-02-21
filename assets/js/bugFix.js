let links = document.querySelectorAll(".category__link");

for(const link of links) {
	console.log(link.innerHTML);
	const str = link.innerHTML;
	let flag = false;
	if(str.includes("/")) {
		const arr = str.split("/");
		flag = true;
	}
	else {
		const arr = str.split(" ");
	}
	for (var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}

	if(flag) link.innerHTML = arr.join("/");
	else link.innerHTML = arr.join(" ");
	
	console.log(link.innerHTML);
}

console.log("I am running");