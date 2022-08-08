// $100 buttons
let button100List = document.querySelectorAll('.btn100');

// $200 buttons
let button200List = document.querySelectorAll('.btn200');

// $400 buttons
let button400List = document.querySelectorAll('.btn400');

// $600 buttons
let button600List = document.querySelectorAll('.btn600');

// $800 buttons
let button800List = document.querySelectorAll('.btn800');

let questionDisplay = document.querySelector('#questionDisplay');
let answerArea = document.querySelector('#answerArea');
let submitButton = document.querySelector('#submitButton');
let moneyBag = document.querySelector('#moneyBag');
let one100$Questions = [];
let two200$Questions = [];
let four400$Questions = [];
let six600$Questions = [];
let eight800$Questions = [];
let dataForSubmit = [];
let dataForMoneyBag = [];
let score = 0;
let scoreCtr = 0;
let clicked = false;


// Puling data out of file
let readJeopardyData = async () => {
    let rawJeopardyData = await fetch('jeopardy.json');
    let data = await rawJeopardyData.json();
    // console.log(data);

    // This organizes the data by $ value
    let groupedData = _.groupBy(data, 'value');
    one100$Questions = groupedData.$100;
    two200$Questions = groupedData.$200;
    four400$Questions = groupedData.$400;
    six600$Questions = groupedData.$600;
    eight800$Questions = groupedData.$800;
}
readJeopardyData();




/*
EVENT LISTENERS 
*/

// Submit Button
submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    clicked = false;
    if (answerArea.value.toLowerCase() === dataForSubmit.toLowerCase()) {
        scoreCtr += score;
        alert('Congrats ! You made some Money!');
        moneyBag.innerText = `Money Bag: $${scoreCtr}`;
        questionDisplay.innerText = ''
        answerArea.value = '';
    } else if (answerArea.value.toLowerCase() !== dataForSubmit.toLowerCase()) {
        alert('Incorrect');
        console.log(score);
        scoreCtr -= score;
        console.log(scoreCtr);
        moneyBag.innerText = `Money Bag: $${scoreCtr}`;
        questionDisplay.innerText = ''
        answerArea.value = '';
    }
});



// $100 Buttons
for (let button100 of button100List) {
    let banana = () => {
        if (button100.style.opacity === '') {
            button100.style.opacity = '0.5';
        } else {
            button100.style.opacity = '';
        }
    }
    button100.addEventListener('mouseenter', banana);
    button100.addEventListener('mouseout', banana);


    button100.addEventListener('click', () => {
        if (clicked === false) {
            if (button100.innerText === '$100') {
                let randomQuestion = (arr) => {
                    let randomNumber = Math.ceil(Math.random() * 2009); // randomINumber is the index number that comes out of this formula. Giving us new random question
                    button100.removeEventListener('mouseenter', banana);
                    button100.removeEventListener('mouseout', banana);

                    //  Adds the value
                    if (button100.innerText === '$100') {
                        clicked = true;
                        score = 0;
                        score += 100;
                        console.log(score);
                        button100.innerText = 'X';
                    }
                    // Fades out button after clicked
                    if (button100.style.opacity === '') {
                        button100.style.opacity = '0.5';
                    }
                    console.log(arr[randomNumber]);
                    questionDisplay.innerText = `Category: ${arr[randomNumber].category} || ${arr[randomNumber].question}`
                    dataForMoneyBag = button100.innerText;
                    dataForSubmit = arr[randomNumber].answer;
                }
                randomQuestion(one100$Questions);
            }
        }
    })
}


// $200 Buttons
for (let button200 of button200List) {
    let banana = () => {
        if (button200.style.opacity === '') {
            button200.style.opacity = '0.5';
        } else {
            button200.style.opacity = '';
        }
    };
    button200.addEventListener('mouseenter', banana);
    button200.addEventListener('mouseout', banana);

    button200.addEventListener('click', () => {
        if (clicked === false) {
            if (button200.innerText === '$200') {
                let randomQuestion = (arr) => {
                    let randomNumber = Math.ceil(Math.random() * 6890); // randomItem is the index number that comes out of this 
                    button200.removeEventListener('mouseenter', banana);
                    button200.removeEventListener('mouseout', banana);

                    // Adds value to MoneyBag
                    if (button200.innerText === '$200') {
                        clicked = true;
                        score = 0;
                        score += 200;
                        console.log(score);
                        button200.innerText = 'X';
                    }
                    // Fades out button after clicked
                    if (button200.style.opacity === '') {
                        button200.style.opacity = '0.5';
                    }
                    console.log(arr[randomNumber]);
                    questionDisplay.innerText = `Category: ${arr[randomNumber].category} || ${arr[randomNumber].question}`
                    dataForMoneyBag = button200.innerText;
                    dataForSubmit = arr[randomNumber].answer;
                }
                randomQuestion(two200$Questions);
            }

        }
    })
}


// $400 Buttons
for (let button400 of button400List) {
    let banana = () => {
        if (button400.style.opacity === '') {
            button400.style.opacity = '0.5';
        } else {
            button400.style.opacity = '';
        }
    }
    button400.addEventListener('mouseenter', banana);
    button400.addEventListener('mouseout', banana);


    button400.addEventListener('click', () => {
        if (clicked === false) {
            if (button400.innerText === '$400') {
                let randomQuestion = (arr) => {
                    let randomNumber = Math.ceil(Math.random() * 9610); // randomItem is the index number that comes out of this 
                    button400.removeEventListener('mouseenter', banana);
                    button400.removeEventListener('mouseout', banana);

                    // Adds value to MoneyBag
                    if (button400.innerText === '$400') {
                        clicked = true;
                        score = 0;
                        score += 400;
                        console.log(score);
                        button400.innerText = 'X';
                    }

                    // Fades out button after clicked
                    if (button400.style.opacity === '') {
                        button400.style.opacity = '0.5';
                    }
                    console.log(arr[randomNumber]);
                    questionDisplay.innerText = `Category: ${arr[randomNumber].category} || ${arr[randomNumber].question}`
                    dataForMoneyBag = button400.innerText;
                    dataForSubmit = arr[randomNumber].answer;
                }
                randomQuestion(four400$Questions);
            }
        }
    })
}


// $600 Buttons
for (let button600 of button600List) {
    let banana = () => {
        if (button600.style.opacity === '') {
            button600.style.opacity = '0.5';
        } else {
            button600.style.opacity = '';
        }
    }
    button600.addEventListener('mouseenter', banana);
    button600.addEventListener('mouseout', banana);


    button600.addEventListener('click', () => {
        if (clicked === false) {
            if (button600.innerText === '$600') {
                let randomQuestion = (arr) => {
                    let randomNumber = Math.ceil(Math.random() * 4652); // randomItem is the index number that comes out of this 
                    button600.removeEventListener('mouseenter', banana);
                    button600.removeEventListener('mouseout', banana);

                    // Adds value to MoneyBag
                    if (button600.innerText === '$600') {
                        clicked = true
                        score = 0;
                        score += 600;
                        console.log(score);
                        button600.innerText = 'X';
                    }

                    // Fades out button after clicked
                    if (button600.style.opacity === '') {
                        button600.style.opacity = '0.5';
                    }
                    console.log(arr[randomNumber]);
                    questionDisplay.innerText = `Category: ${arr[randomNumber].category} || ${arr[randomNumber].question}`
                    dataForMoneyBag = button600.innerText;
                    dataForSubmit = arr[randomNumber].answer;
                }
                randomQuestion(six600$Questions);
            }
        }
    })
}


// $800 Buttons
for (let button800 of button800List) {
    let banana = () => {
        if (button800.style.opacity === '') {
            button800.style.opacity = '0.5';
        } else {
            button800.style.opacity = '';
        }
    }
    button800.addEventListener('mouseenter', banana);
    button800.addEventListener('mouseout', banana);

    button800.addEventListener('click', () => {
        if (clicked === false) {
            if (button800.innerText === '$800') {
                let randomQuestion = (arr) => {
                    let randomNumber = Math.ceil(Math.random() * 7293) // randomItem is the index number that comes out of this 
                    button800.removeEventListener('mouseenter', banana);
                    button800.removeEventListener('mouseout', banana);

                    // Adds value to MoneyBag
                    if (button800.innerText === '$800') {
                        clicked = true;
                        score = 0;
                        score += 800;
                        console.log(score);
                        button800.innerText = 'X';
                    }

                    // Fades out button after clicked
                    if (button800.style.opacity === '') {
                        button800.style.opacity = '0.5';
                    }
                    console.log(arr[randomNumber]);
                    questionDisplay.innerText = `Category: ${arr[randomNumber].category} || ${arr[randomNumber].question}`
                    dataForMoneyBag = button800.innerText;
                    dataForSubmit = arr[randomNumber].answer;
                }
                randomQuestion(eight800$Questions);
            }
        }
    })
}