// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	let navnArray = ['Hans', 'Bjarne', 'Kaj'];

	
	navnArray.forEach(navn => {
		let listItem = document.createElement('li');
		document.querySelector('#liste').appendChild(listItem);
		listItem.innerHTML = navn;
		listItem.style.listStyle = 'none';
	});

}); // Afslutter: DOMContentLoaded