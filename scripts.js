// fix the decimals like 0.1 showing as 0.0999 repeating

let currentNum = 0;
let nextNum = 0;
let activeOperator = false;
let add = false;
let sub = false;
let mul = false;
let div = false;
let activeDecimal = false;

document.getElementById("display").innerHTML = 0;

function secret() {
	if (document.getElementById("secret").style.display === "block") {
		document.getElementById("secret").style.display = "none";
	} else {
		document.getElementById("secret").style.display = "block";
	}
}

function checkOverflow() {
	// if (document.getElementById("display").innerHTML.length > 8) {
	// 	document.getElementById("display").innerHTML = `${Number.toExponential(
	// 		document.getElementById("display").innerHTML
	// 	).substring(0, 7)}...`;
	// }
	//do later???
}

function addition() {
	if ((activeOperator = true)) {
		equals();
	}
	activeOperator = true;
	add = true;
	sub = false;
	mul = false;
	div = false;
}

function subtract() {
	if ((activeOperator = true)) {
		equals();
	}
	activeOperator = true;
	add = false;
	sub = true;
	mul = false;
	div = false;
}

function multiply() {
	if ((activeOperator = true)) {
		equals();
	}
	activeOperator = true;
	add = false;
	sub = false;
	mul = true;
	div = false;
}

function divide() {
	if ((activeOperator = true)) {
		equals();
	}
	activeOperator = true;
	add = false;
	sub = false;
	mul = false;
	div = true;
}

function percent() {
	currentNum /= 100;
	document.getElementById("display").innerHTML = currentNum;
}

function switchSign() {
	currentNum *= -1;
	document.getElementById("display").innerHTML = currentNum;
}

function equals() {
	if (add === true) {
		let result = currentNum + nextNum;
		document.getElementById("display").innerHTML = result;
		currentNum = result;
		add = false;
	} else if (sub === true) {
		let result = currentNum - nextNum;
		document.getElementById("display").innerHTML = result;
		currentNum = result;
		sub = false;
	} else if (mul === true) {
		let result = currentNum * nextNum;
		document.getElementById("display").innerHTML = result;
		currentNum = result;
		sub = false;
	} else if (div === true) {
		let result = currentNum / nextNum;
		document.getElementById("display").innerHTML = result;
		currentNum = result;
		sub = false;
	}
	activeOperator = false;
	nextNum = 0;
	checkOverflow();
}

function reset() {
	document.getElementById("display").innerHTML = 0;
	currentNum = 0;
	nextNum = 0;
	activeOperator = false;
	activeDecimal = false;
	add = false;
	sub = false;
	mul = false;
	div = false;
}

function decimal() {
	if (activeOperator === true) {
		if (nextNum === 0) {
			if (document.getElementById("display").innerHTML.includes(".") === true) {
				document.getElementById("display").innerHTML = `${nextNum}`;
				activeDecimal = false;
			} else if (
				document.getElementById("display").innerHTML.includes(".") === false
			) {
				document.getElementById("display").innerHTML = `0.`;
			}
			activeDecimal = true;
		} else if (nextNum !== 0) {
			if (document.getElementById("display").innerHTML.includes(".") === true) {
				document.getElementById("display").innerHTML = `${nextNum}`;
				activeDecimal = false;
			} else if (
				document.getElementById("display").innerHTML.includes(".") === false
			) {
				document.getElementById("display").innerHTML = `${nextNum}.`;
			}
			activeDecimal = true;
		}
	} else if (activeOperator === false) {
		if (document.getElementById("display").innerHTML.includes(".") === true) {
			document.getElementById("display").innerHTML = `${currentNum}`;
			activeDecimal = false;
		} else if (
			document.getElementById("display").innerHTML.includes(".") === false
		) {
			document.getElementById("display").innerHTML = `${currentNum}.`;
		}
		activeDecimal = true;
	}
}

function one() {
	if (activeOperator === true && nextNum === 0 && activeDecimal === false) {
		nextNum = 1;
		document.getElementById("display").innerHTML = nextNum;
	} else if (activeDecimal === true) {
		if (activeOperator === true) {
			if (document.getElementById("display").innerHTML.endsWith(".") === true) {
				nextNum = Number(`${nextNum}.1`, 10);
				document.getElementById("display").innerHTML = nextNum;
			} else {
				nextNum = Number(`${nextNum}1`, 10);
				document.getElementById("display").innerHTML = nextNum;
			}
		} else if (activeOperator === false) {
			if (document.getElementById("display").innerHTML.endsWith(".") === true) {
				currentNum = Number(`${currentNum}.1`, 10);
				document.getElementById("display").innerHTML = currentNum;
			} else {
				currentNum = Number(`${currentNum}1`, 10);
				document.getElementById("display").innerHTML = currentNum;
			}
		}
	} else if (activeOperator === true && nextNum !== 0) {
		nextNum = Number.parseInt(`${nextNum}1`, 10);
		document.getElementById("display").innerHTML = nextNum;
	} else if (currentNum === 0) {
		document.getElementById("display").innerHTML = 1;
		currentNum = 1;
	} else if (currentNum !== 0) {
		currentNum = Number.parseInt(`${currentNum}1`, 10);
		document.getElementById("display").innerHTML = currentNum;
	}
	checkOverflow();
}

function two() {
	if (activeOperator === true && nextNum === 0 && activeDecimal === false) {
		nextNum = 2;
		document.getElementById("display").innerHTML = nextNum;
	} else if (activeDecimal === true) {
		if (activeOperator === true) {
			if (document.getElementById("display").innerHTML.endsWith(".") === true) {
				nextNum = Number(`${nextNum}.2`, 10);
				document.getElementById("display").innerHTML = nextNum;
			} else {
				nextNum = Number(`${nextNum}2`, 10);
				document.getElementById("display").innerHTML = nextNum;
			}
		} else if (activeOperator === false) {
			if (document.getElementById("display").innerHTML.endsWith(".") === true) {
				currentNum = Number(`${currentNum}.2`, 10);
				document.getElementById("display").innerHTML = currentNum;
			} else {
				currentNum = Number(`${currentNum}2`, 10);
				document.getElementById("display").innerHTML = currentNum;
			}
		}
	} else if (activeOperator === true && nextNum !== 0) {
		nextNum = Number.parseInt(`${nextNum}2`, 10);
		document.getElementById("display").innerHTML = nextNum;
	} else if (currentNum === 0) {
		document.getElementById("display").innerHTML = 2;
		currentNum = 2;
	} else if (currentNum !== 0) {
		currentNum = Number.parseInt(`${currentNum}2`, 10);
		document.getElementById("display").innerHTML = currentNum;
	}
	checkOverflow();
}

function three() {
	if (activeOperator === true && nextNum === 0 && activeDecimal === false) {
		nextNum = 3;
		document.getElementById("display").innerHTML = nextNum;
	} else if (activeDecimal === true) {
		if (activeOperator === true) {
			if (document.getElementById("display").innerHTML.endsWith(".") === true) {
				nextNum = Number(`${nextNum}.3`, 10);
				document.getElementById("display").innerHTML = nextNum;
			} else {
				nextNum = Number(`${nextNum}3`, 10);
				document.getElementById("display").innerHTML = nextNum;
			}
		} else if (activeOperator === false) {
			if (document.getElementById("display").innerHTML.endsWith(".") === true) {
				currentNum = Number(`${currentNum}.3`, 10);
				document.getElementById("display").innerHTML = currentNum;
			} else {
				currentNum = Number(`${currentNum}3`, 10);
				document.getElementById("display").innerHTML = currentNum;
			}
		}
	} else if (activeOperator === true && nextNum !== 0) {
		nextNum = Number.parseInt(`${nextNum}3`, 10);
		document.getElementById("display").innerHTML = nextNum;
	} else if (currentNum === 0) {
		document.getElementById("display").innerHTML = 3;
		currentNum = 3;
	} else if (currentNum !== 0) {
		currentNum = Number.parseInt(`${currentNum}3`, 10);
		document.getElementById("display").innerHTML = currentNum;
	}
	checkOverflow();
}

function four() {
	if (activeOperator === true && nextNum === 0 && activeDecimal === false) {
		nextNum = 4;
		document.getElementById("display").innerHTML = nextNum;
	} else if (activeDecimal === true) {
		if (activeOperator === true) {
			if (document.getElementById("display").innerHTML.endsWith(".") === true) {
				nextNum = Number(`${nextNum}.4`, 10);
				document.getElementById("display").innerHTML = nextNum;
			} else {
				nextNum = Number(`${nextNum}4`, 10);
				document.getElementById("display").innerHTML = nextNum;
			}
		} else if (activeOperator === false) {
			if (document.getElementById("display").innerHTML.endsWith(".") === true) {
				currentNum = Number(`${currentNum}.4`, 10);
				document.getElementById("display").innerHTML = currentNum;
			} else {
				currentNum = Number(`${currentNum}4`, 10);
				document.getElementById("display").innerHTML = currentNum;
			}
		}
	} else if (activeOperator === true && nextNum !== 0) {
		nextNum = Number.parseInt(`${nextNum}4`, 10);
		document.getElementById("display").innerHTML = nextNum;
	} else if (currentNum === 0) {
		document.getElementById("display").innerHTML = 4;
		currentNum = 4;
	} else if (currentNum !== 0) {
		currentNum = Number.parseInt(`${currentNum}4`, 10);
		document.getElementById("display").innerHTML = currentNum;
	}
	checkOverflow();
}

function five() {
	if (activeOperator === true && nextNum === 0 && activeDecimal === false) {
		nextNum = 5;
		document.getElementById("display").innerHTML = nextNum;
	} else if (activeDecimal === true) {
		if (activeOperator === true) {
			if (document.getElementById("display").innerHTML.endsWith(".") === true) {
				nextNum = Number(`${nextNum}.5`, 10);
				document.getElementById("display").innerHTML = nextNum;
			} else {
				nextNum = Number(`${nextNum}5`, 10);
				document.getElementById("display").innerHTML = nextNum;
			}
		} else if (activeOperator === false) {
			if (document.getElementById("display").innerHTML.endsWith(".") === true) {
				currentNum = Number(`${currentNum}.5`, 10);
				document.getElementById("display").innerHTML = currentNum;
			} else {
				currentNum = Number(`${currentNum}5`, 10);
				document.getElementById("display").innerHTML = currentNum;
			}
		}
	} else if (activeOperator === true && nextNum !== 0) {
		nextNum = Number.parseInt(`${nextNum}5`, 10);
		document.getElementById("display").innerHTML = nextNum;
	} else if (currentNum === 0) {
		document.getElementById("display").innerHTML = 5;
		currentNum = 5;
	} else if (currentNum !== 0) {
		currentNum = Number.parseInt(`${currentNum}5`, 10);
		document.getElementById("display").innerHTML = currentNum;
	}
	checkOverflow();
}

function six() {
	if (activeOperator === true && nextNum === 0 && activeDecimal === false) {
		nextNum = 6;
		document.getElementById("display").innerHTML = nextNum;
	} else if (activeDecimal === true) {
		if (activeOperator === true) {
			if (document.getElementById("display").innerHTML.endsWith(".") === true) {
				nextNum = Number(`${nextNum}.6`, 10);
				document.getElementById("display").innerHTML = nextNum;
			} else {
				nextNum = Number(`${nextNum}6`, 10);
				document.getElementById("display").innerHTML = nextNum;
			}
		} else if (activeOperator === false) {
			if (document.getElementById("display").innerHTML.endsWith(".") === true) {
				currentNum = Number(`${currentNum}.6`, 10);
				document.getElementById("display").innerHTML = currentNum;
			} else {
				currentNum = Number(`${currentNum}6`, 10);
				document.getElementById("display").innerHTML = currentNum;
			}
		}
	} else if (activeOperator === true && nextNum !== 0) {
		nextNum = Number.parseInt(`${nextNum}6`, 10);
		document.getElementById("display").innerHTML = nextNum;
	} else if (currentNum === 0) {
		document.getElementById("display").innerHTML = 6;
		currentNum = 6;
	} else if (currentNum !== 0) {
		currentNum = Number.parseInt(`${currentNum}6`, 10);
		document.getElementById("display").innerHTML = currentNum;
	}
	checkOverflow();
}

function seven() {
	if (activeOperator === true && nextNum === 0 && activeDecimal === false) {
		nextNum = 7;
		document.getElementById("display").innerHTML = nextNum;
	} else if (activeDecimal === true) {
		if (activeOperator === true) {
			if (document.getElementById("display").innerHTML.endsWith(".") === true) {
				nextNum = Number(`${nextNum}.7`, 10);
				document.getElementById("display").innerHTML = nextNum;
			} else {
				nextNum = Number(`${nextNum}7`, 10);
				document.getElementById("display").innerHTML = nextNum;
			}
		} else if (activeOperator === false) {
			if (document.getElementById("display").innerHTML.endsWith(".") === true) {
				currentNum = Number(`${currentNum}.7`, 10);
				document.getElementById("display").innerHTML = currentNum;
			} else {
				currentNum = Number(`${currentNum}7`, 10);
				document.getElementById("display").innerHTML = currentNum;
			}
		}
	} else if (activeOperator === true && nextNum !== 0) {
		nextNum = Number.parseInt(`${nextNum}7`, 10);
		document.getElementById("display").innerHTML = nextNum;
	} else if (currentNum === 0) {
		document.getElementById("display").innerHTML = 7;
		currentNum = 7;
	} else if (currentNum !== 0) {
		currentNum = Number.parseInt(`${currentNum}7`, 10);
		document.getElementById("display").innerHTML = currentNum;
	}
	checkOverflow();
}

function eight() {
	if (activeOperator === true && nextNum === 0 && activeDecimal === false) {
		nextNum = 8;
		document.getElementById("display").innerHTML = nextNum;
	} else if (activeDecimal === true) {
		if (activeOperator === true) {
			if (document.getElementById("display").innerHTML.endsWith(".") === true) {
				nextNum = Number(`${nextNum}.8`, 10);
				document.getElementById("display").innerHTML = nextNum;
			} else {
				nextNum = Number(`${nextNum}8`, 10);
				document.getElementById("display").innerHTML = nextNum;
			}
		} else if (activeOperator === false) {
			if (document.getElementById("display").innerHTML.endsWith(".") === true) {
				currentNum = Number(`${currentNum}.8`, 10);
				document.getElementById("display").innerHTML = currentNum;
			} else {
				currentNum = Number(`${currentNum}8`, 10);
				document.getElementById("display").innerHTML = currentNum;
			}
		}
	} else if (activeOperator === true && nextNum !== 0) {
		nextNum = Number.parseInt(`${nextNum}8`, 10);
		document.getElementById("display").innerHTML = nextNum;
	} else if (currentNum === 0) {
		document.getElementById("display").innerHTML = 8;
		currentNum = 8;
	} else if (currentNum !== 0) {
		currentNum = Number.parseInt(`${currentNum}8`, 10);
		document.getElementById("display").innerHTML = currentNum;
	}
	checkOverflow();
}

function nine() {
	if (activeOperator === true && nextNum === 0 && activeDecimal === false) {
		nextNum = 9;
		document.getElementById("display").innerHTML = nextNum;
	} else if (activeDecimal === true) {
		if (activeOperator === true) {
			if (document.getElementById("display").innerHTML.endsWith(".") === true) {
				nextNum = Number(`${nextNum}.9`, 10);
				document.getElementById("display").innerHTML = nextNum;
			} else {
				nextNum = Number(`${nextNum}9`, 10);
				document.getElementById("display").innerHTML = nextNum;
			}
		} else if (activeOperator === false) {
			if (document.getElementById("display").innerHTML.endsWith(".") === true) {
				currentNum = Number(`${currentNum}.9`, 10);
				document.getElementById("display").innerHTML = currentNum;
			} else {
				currentNum = Number(`${currentNum}9`, 10);
				document.getElementById("display").innerHTML = currentNum;
			}
		}
	} else if (activeOperator === true && nextNum !== 0) {
		nextNum = Number.parseInt(`${nextNum}9`, 10);
		document.getElementById("display").innerHTML = nextNum;
	} else if (currentNum === 0) {
		document.getElementById("display").innerHTML = 9;
		currentNum = 9;
	} else if (currentNum !== 0) {
		currentNum = Number.parseInt(`${currentNum}9`, 10);
		document.getElementById("display").innerHTML = currentNum;
	}
	checkOverflow();
}

function zero() {
	if (activeOperator === true && nextNum === 0 && activeDecimal === false) {
		nextNum = 0;
		document.getElementById("display").innerHTML = nextNum;
	} else if (activeDecimal === true) {
		if (activeOperator === true) {
			if (document.getElementById("display").innerHTML.endsWith(".") === true) {
				nextNum = Number(`${nextNum}.0`, 10);
				document.getElementById("display").innerHTML = nextNum;
			} else {
				nextNum = Number(`${nextNum}0`, 10);
				document.getElementById("display").innerHTML = nextNum;
			}
		} else if (activeOperator === false) {
			if (document.getElementById("display").innerHTML.endsWith(".") === true) {
				currentNum = Number(`${currentNum}.0`, 10);
				document.getElementById("display").innerHTML = currentNum;
			} else {
				currentNum = Number(`${currentNum}0`, 10);
				document.getElementById("display").innerHTML = currentNum;
			}
		}
	} else if (activeOperator === true && nextNum !== 0) {
		nextNum = Number.parseInt(`${nextNum}0`, 10);
		document.getElementById("display").innerHTML = nextNum;
	} else if (currentNum === 0) {
		document.getElementById("display").innerHTML = 0;
		currentNum = 0;
	} else if (currentNum !== 0) {
		currentNum = Number.parseInt(`${currentNum}0`, 10);
		document.getElementById("display").innerHTML = currentNum;
	}
	checkOverflow();
}
