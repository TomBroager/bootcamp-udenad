// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	function hils(navn){
		console.log('Hej med dig, ' + navn);
		console.log(`Hej med dig, ${navn}`); // anbefalede måde at indsætte parameter på
		console.log(`Hej med dig,
		
		${navn}`);
	};
	
	hils('Tom');

}); // Afslutter: DOMContentLoaded