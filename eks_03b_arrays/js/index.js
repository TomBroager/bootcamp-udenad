// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	let drengeNavneArray = ['Hans', 'Bjarne', 'Kaj'];
	let pigeNavneArray = ['Hanne', 'Søs', 'Ann'];
	  
    function myFunc(array){
        array.forEach(navn => {
            let listItem = document.createElement('li');
            document.querySelector('#liste').appendChild(listItem);
            listItem.textContent = navn;
            listItem.style.listStyle = 'none';
        });
    };
    
    myFunc(pigeNavneArray);
    myFunc(drengeNavneArray);

}); // Afslutter: DOMContentLoaded