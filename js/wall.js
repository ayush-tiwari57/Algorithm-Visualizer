//Wall

// function for setting wall attribute
export function setWallAttribute(event) {
	// console.log(event);
	if (event.target.classList.contains('node')) {
		let node = document.querySelector('.node');
		const row = event.target.getAttribute('row');
		const col = event.target.getAttribute('col');
		event.target.classList.toggle('wall');
		console.log('clicked');
	}
	if (event.target.classList.contains('wall')) {
		event.target.setAttribute('wall', 1);
	} else {
		event.target.setAttribute('wall', 0);
	}
}

//End Wall