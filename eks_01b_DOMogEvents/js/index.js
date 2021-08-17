// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

	let number = 5;
	let maxNumber = 10;
	let minNumber = 0;
	let plusBtn = document.querySelector('#btn-count-increase');
	let minusBtn = document.querySelector('#btn-count-decrease');
	let textCountElement = document.querySelector('#text-count');

	
	function updateNumber() {
		textCountElement.textContent = number;
	};

	updateNumber();
	
	plusBtn.addEventListener('click', () => {
		if(number < maxNumber){
			number++;
			updateNumber();
		};
	});
	
	minusBtn.addEventListener('click', () => {
		if(number > minNumber){
			number--;
			updateNumber();
		};
	});

}); // Afslutter: DOMContentLoaded