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
	
	function calcNumber(direction){
		if(direction === 'inc'){
			if(number < maxNumber){
				number++;
				updateNumber();
			};
		} else if(direction === 'dec'){
			if(number > minNumber){
				number--;
				updateNumber();
			};
		}
	};
	
	plusBtn.addEventListener('click', () => calcNumber('inc'));
	
	minusBtn.addEventListener('click', () => calcNumber('dec'));
}); // Afslutter: DOMContentLoaded