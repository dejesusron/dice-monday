function createDice(number) {
	const dotPositionMatrix = {
		1: [
			[50, 50]
		],
		2: [
			[20, 20],
			[80, 80]
		],
		3: [
			[20, 20],
			[50, 50],
			[80, 80]
		],
		4: [
			[20, 20],
			[20, 80],
			[80, 20],
			[80, 80]
		],
		5: [
			[20, 20],
			[20, 80],
			[50, 50],
			[80, 20],
			[80, 80]
		],
		6: [
			[20, 20],
			[20, 80],
			[50, 20],
			[50, 80],
			[80, 20],
			[80, 80]
		]
	};

	const dice = document.createElement("div");

	dice.classList.add("dice");

	for (const dotPosition of dotPositionMatrix[number]) {
		const dot = document.createElement("div");

		dot.classList.add("dice-dot");
		dot.style.setProperty("--top", dotPosition[0] + "%");
		dot.style.setProperty("--left", dotPosition[1] + "%");
		dice.appendChild(dot);
	}

	return dice;
}

function randomizeDice(diceContainer, numberOfDice) {
	diceContainer.innerHTML = "";

	for (let i = 0; i < numberOfDice; i++) {
		const random = Math.floor((Math.random() * 6) + 1);
		const dice = createDice(random);

        switch (random) {
            case 1:
                diceResult.textContent = '1: Thankful';
                break;
            case 2:
                diceResult.textContent = '2: Interesting';
                break;
            case 3:
                diceResult.textContent = '3: Funny';
                break;
            case 4:
                diceResult.textContent = '4: Surprise';
                break;
            case 5:
                diceResult.textContent = '5: Love';
                break;
            case 6:
                diceResult.textContent = '6: Happy';
                break;
            default:
                console.log("Error dice number");
        }

		diceContainer.appendChild(dice);
	}
}

const NUMBER_OF_DICE = 1;
const diceContainer = document.querySelector(".dice-container");
const diceResult = document.querySelector(".dice-result");
const btnRollDice = document.querySelector(".btn-roll-dice");

randomizeDice(diceContainer, NUMBER_OF_DICE);

btnRollDice.addEventListener("click", () => {
	const interval = setInterval(() => {
		randomizeDice(diceContainer, NUMBER_OF_DICE);
	}, 100);

	setTimeout(() => clearInterval(interval), 1000);
});