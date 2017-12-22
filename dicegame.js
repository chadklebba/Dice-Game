"use strict"

//  ________.__            __          __________.__                    __________              
// /   _____|  |__  __ ___/  |_        \__    ___|  |__   ____          \______   \ _______  ___
// \_____  \|  |  \|  |  \   __\  ______ |    |  |  |  \_/ __ \   ______ |    |  _//  _ \  \/  /
// /        |   Y  |  |  /|  |   /_____/ |    |  |   Y  \  ___/  /_____/ |    |   (  <_> >    < 
///_______  |___|  |____/ |__|           |____|  |___|  /\___  >         |______  /\____/__/\_ \
//        \/     \/                                   \/     \/                 \/            \/

let boardNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let gotUserChoice;
let rolledNumber;
let choiceArray;
let test = 1;

function getDiceSides(){
	let possibleDice = [4,6,8,10,12,20];
	let promptDiceSides = prompt(boardNumbers +"\r\n"+"Which die would you like to roll? (sides: 4,6,8,10,12,20)");
	let numberOfSides;
	for (let i=0; i<=5; i++){
		numberOfSides = (promptDiceSides == possibleDice[i])
		if 	(numberOfSides === true){
		return promptDiceSides	
		}

	}
		if (numberOfSides == false) {
		alert ("That was an incorrect number of sides!");
		return getDiceSides();
		}
}

function rollDie(numberOfSides) {
    let roll = Math.floor(Math.random() * numberOfSides) + 1;
    return roll;
}

function sumChoices(total, num){
	return total + num;
}

function getUserChoice(){
	let numberChoice =  prompt("You rolled a " + rolledNumber + 
		". Which numbers would you like to close?" 
		+ "\r\n" + "If you want to close multiple numbers, please seperate them with a comma:"
		+ "\r\n" + "If you cannot close anymore numbers, please type in 0:" + "\r\n" + boardNumbers);
	return numberChoice
}

function checkIfXd(array){
		array = array.split(",");
		for (let i=0; i<array.length; i++){
			let number = parseInt(array[i],10);
			if (boardNumbers[number-1] == "X"){
				return false;
			}
		return array;	
		}
}

function testNumberChoice(numberChoice){
	let totalChoice;
	if (numberChoice == 0){
		totalChoice = 0;
		return totalChoice;
		}
	choiceArray = numberChoice.split(",");
	for (let i = 0; i < choiceArray.length; i++){
		choiceArray[i] = parseInt(choiceArray[i], 10);
		}
		totalChoice =  (choiceArray.reduce(sumChoices));
		gotUserChoice = totalChoice;
		return totalChoice;
	}

function runGame(){
 	let shutBox = 
 	"                                       |S|H|U|T| |T|H|E| |B|O|X|" + "\r\n" +
	"Instructions:" + "\r\n" +
	"Choose which die that you want to roll.  You are trying to close all of the numbers on the board. For example, if you roll an 8, you can close any remaining numbers that are equal to 8. You can close the 8, you could close the 5 and the 3, you could close the 6 and the 2, etc.  When you can no longer close any more numbers, the remaining numbers are added up and that is your score.  Try to close all the numbers or get the lowest score.";
	alert(shutBox);
	while (test != 0){
		let testOne = false;
		rolledNumber = rollDie(getDiceSides());
		while(testOne == false){
			gotUserChoice = getUserChoice();
			if (gotUserChoice == "0"){
				break;
			}
			testOne = checkIfXd(gotUserChoice);
			if (testOne == false){
				alert ("You have already closed one of your numbers, please try again");
			}
			}
			test = testNumberChoice(gotUserChoice);
			if (test == 0){
			break;
		}
		testUserChoice(test);
		}
	finishGame();
}

function testUserChoice(){
	for(let i = 0; i<rolledNumber; i++){
		if(gotUserChoice == 0){
			break;
		}
		else if (rolledNumber == gotUserChoice){
			removeNumbers(choiceArray);
			return;
			}
		else {
			alert ("Those numbers do not equal the number you rolled, please try again");
			gotUserChoice = testNumberChoice(getUserChoice());
			if (gotUserChoice == 0){
				finishGame();
			}
		}
	}
	return;
}

function removeNumbers(choices){
	for(let i=0; i<choices.length; i++){
	let	number = boardNumbers.indexOf(choices[i]);
	boardNumbers[number] = "X";
	}
}

function finishGame(){
	let finalScore;
	for(let i = 0; i < boardNumbers.length; i++){
		if (boardNumbers[i]=== "X"){
			boardNumbers.splice(i,1);
			i--;
		}
	}
	for(let i = 0; i < boardNumbers.length; i++){
		boardNumbers[i] = parseInt(boardNumbers[i], 10);
	}
	finalScore = (boardNumbers.reduce(sumChoices));
	if (finalScore == 0){
		alert("!!!!You shut all of the numbers!!!!");
	}
	alert("Your Final Score is " + finalScore + "!");
	let i = 0
	while(i < 2){
		let answer = prompt("Would you like to play again? (y/n)");
		if(answer==="y"){
			location.reload();
			break;
		}
		else if(answer==="n"){
			alert("Thank you for playing!");
			exit();
			
		}
		
	}
}

runGame();






