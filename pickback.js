

let stone = document.getElementById("rock");
let sheet = document.getElementById("paper");
let blade = document.getElementById("scissor");

let oppoRandom = Math.floor(Math.random()*3);


function result() {

if (document.getElementById('rock').checked == true) {
	let stone = "Rock";
	document.getElementById("yourhand").innerHTML = `You pick: ${stone}`;
		if (oppoRandom == 0) {
			document.getElementById("outcome").innerHTML = `Same pick, try gain!`;
		} else if(oppoRandom == 1){
			document.getElementById("outcome").innerHTML = `You Lose :(`;
		} else if(oppoRandom == 2){
			document.getElementById("outcome").innerHTML = `You Win!`;
		}else{
			console.log("Error");
		}
	} else if(document.getElementById('paper').checked == true){
		let sheet = "Paper";
		document.getElementById("yourhand").innerHTML = `You pick: ${sheet}`;
			if (oppoRandom == 0) {
			document.getElementById("outcome").innerHTML = `You Win!`;
			} else if(oppoRandom == 1){
				document.getElementById("outcome").innerHTML = `Same pick, try gain!`;
			} else if(oppoRandom == 2){
				document.getElementById("outcome").innerHTML = `You Lose :(`;
			}else{
				console.log("Error");
			}
		} else if (document.getElementById('scissor').checked == true) {
			let blade = "Scissor";
			document.getElementById("yourhand").innerHTML = `You pick: ${blade}`;
				if (oppoRandom == 0) {
				document.getElementById("outcome").innerHTML = `You Lose :(`;
				} else if(oppoRandom == 1){
					document.getElementById("outcome").innerHTML = `You Win!`;
				} else if(oppoRandom == 2){
					document.getElementById("outcome").innerHTML = `Same pick, try gain!`;
				}else{
					console.log("Error");
				}
					}else{
					console.log("Error");
					};

if (oppoRandom == 0) {
	let stone = "Rock";
	document.getElementById("opponent").innerHTML = `Opponent's hand is: ${stone}`;
	} 
		else if (oppoRandom == 1) {
			let sheet = "Paper";
		document.getElementById("opponent").innerHTML = `Opponent's hand is: ${sheet}`;
			} 
			else if (oppoRandom == 2) {
				let blade = "Scissor";
			document.getElementById("opponent").innerHTML = `Opponent's hand is: ${blade}`;
			} 
				else {
				console.log("Error");
				}; 
		
}

