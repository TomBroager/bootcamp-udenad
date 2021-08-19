// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {
	
	hils();

	function hils(){
		console.log('Hej med dig!');
	};

}); // Afslutter: DOMContentLoaded