// random computer's choice
function getComputerChoice() {
	const randomNumber = Math.floor(Math.random() * 3);

	switch (randomNumber) {
		case 0:
			return "rock";
		case 1:
			return "paper";
		case 2:
			return "scissor";
	}
}

function playRound(playerSelection, computerSelection) {
	const playerSelected = playerSelection.toLowerCase();

	// Show what is selected
	console.log(`Player selected: ${playerSelected}`);
	console.log(`Computer selected: ${computerSelection}`);

	// DRAW
	if (playerSelected === computerSelection) {
		console.log("Result: Draw! Both get 1 point");
		return "DRAW";
	}

	// player: ROCK
	if (playerSelected === "rock") {
		if (computerSelection === "paper") {
			console.log("Result: You lose! Computer gets 3 points");
			return "LOSE";
		} else if (computerSelection === "scissor") {
			console.log("Result: You win! You gets 3 points");
			return "WIN";
		}
	}
	// player: PAPER
	if (playerSelected === "paper") {
		if (computerSelection === "scissor") {
			console.log("Result: You lose! Computer gets 3 points");
			return "LOSE";
		} else if (computerSelection === "rock") {
			console.log("Result: You win! You gets 3 points");
			return "WIN";
		}
	}
	// player: SCISSOR
	if (playerSelected === "scissor") {
		if (computerSelection === "rock") {
			console.log("Result: You lose! Computer gets 3 points");
			return "LOSE";
		} else if (computerSelection === "paper") {
			console.log("Result: You win! You gets 3 points");
			return "WIN";
		}
	}
}

// MAIN FUNC
function game() {
	let playerScore = 0;
	let computerScore = 0;

	for (let i = 0; i < 5; i++) {
		const result = playRound(
			prompt("Choose your weapon!: "),
			getComputerChoice()
		);
		switch (result) {
			case "WIN":
				playerScore += 3;
				break;
			case "LOSE":
				computerScore += 3;
				break;
			case "DRAW":
				playerScore++;
				computerScore++;
				break;
		}
		console.log(`Player: ${playerScore}\nComputer: ${computerScore}`);
	}

	// returns message
	function finalResult() {
		if (playerScore > computerScore) {
			return "YOU WIN";
		} else if (playerScore === computerScore) {
			return "DRAW";
		} else if (playerScore < computerScore) {
			return "YOU LOSE";
		}
	}

	console.log(
		`Player Score: ${playerScore}\nComputer Score: ${computerScore}\nFINAL SCORE: ${finalResult()}`
	);
}

game();
