const body = document.body;

function changeBG() {
	const input = document.getElementById('bGColor');
	body.style.backgroundColor = input.value;
}

const createEls = () => {
	const target = document.getElementById('loops');
	const loops = Math.ceil(Math.random() * 10);
	target.replaceChildren();
	for (let i = 0; i <= loops; i++) {
		const newEl = document.createElement('div');
		newEl.innerHTML = i;
		newEl.style.margin = '10px';
		target.appendChild(newEl);
	}
}
