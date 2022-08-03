// $100 buttons
let button100 = document.querySelector('#button-100');
let button101 = document.querySelector('#button-101');
let button102 = document.querySelector('#button-102');
let button103 = document.querySelector('#button-103');
let button104 = document.querySelector('#button-104');


// $200 buttons
let button200 = document.querySelector('#button-200');
let button201 = document.querySelector('#button-201');
let button202 = document.querySelector('#button-202');
let button203 = document.querySelector('#button-203');
let button204 = document.querySelector('#button-204');


// $400 buttons
let button400 = document.querySelector('#button-400');
let button401 = document.querySelector('#button-401');
let button402 = document.querySelector('#button-402');
let button403 = document.querySelector('#button-403');
let button404 = document.querySelector('#button-404');


// $600 buttons
let button600 = document.querySelector('#button-600');
let button601 = document.querySelector('#button-601');
let button602 = document.querySelector('#button-602');
let button603 = document.querySelector('#button-603');
let button604 = document.querySelector('#button-604');


// $800 buttons
let button800 = document.querySelector('#button-800');
let button801 = document.querySelector('#button-801');
let button802 = document.querySelector('#button-802');
let button803 = document.querySelector('#button-803');
let button804 = document.querySelector('#button-804');


let questionDisplay = document.querySelector('#questionDisplay');
let answerArea = document.querySelector('#answerArea');
let submitButton = document.querySelector('#submitButton');



let one100$Questions = [];
let two200$Questions = [];
let four400$Questions = [];
let six600$Questions = [];
let eight800$Questions = [];
let dataForSubmit = [];




// Puling data out of file
let readJeopardyData = async () => {
    let rawJeopardyData = await fetch('jeopardy.json')
    let data = await rawJeopardyData.json();
    // console.log(data);

    // This organizes the data by $ value
    let groupedData = _.groupBy(data, 'value');
    // All my $200 questions
    // console.log(groupedData.$100);
    one100$Questions = groupedData.$100;
    two200$Questions = groupedData.$200;
    four400$Questions = groupedData.$400;
    six600$Questions = groupedData.$600;
    eight800$Questions = groupedData.$800;

    // console.log('$100 questions');
    // console.log(one100$Questions);
    // console.log('$200 questions');
    // console.log(two200$Questions);
    // console.log('$400 questions');
    // console.log(four400$Questions);
    // console.log('$600 questions');
    // console.log(six600$Questions);
    console.log('$800 questions');
    console.log(eight800$Questions);
}
readJeopardyData();




/*
EVENT LISTENERS 
*/

// Submit Button
submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    // console.log(answerArea.innerText)
    // console.log(arr[randomNumber].answer)
    if (answerArea.value === dataForSubmit) {
        alert('You got the right answer');
        console.log('You got the right answer');
        questionDisplay.innerText = ''
        answerArea.value = '';
    } else if (answerArea.value !== dataForSubmit) {
        alert('You are wrong');
        console.log('You are wrong');
        questionDisplay.innerText = ''
        answerArea.value = '';
    }
});



// Function used for the hover in and hover out feature
let banana = () => {
    if (button100.style.opacity === '') {
        button100.style.opacity = '0.5';
    } else {
        button100.style.opacity = '';
    }
}



// $100 Buttons
button100.addEventListener('mouseenter', banana);
button100.addEventListener('mouseout', banana);

button100.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 2009) // randomItem is the index number that comes out of this 
        button100.removeEventListener('mouseenter', banana);
        button100.removeEventListener('mouseout', banana);
            if (button100.style.opacity === '') {
                button100.style.opacity = '0.5';
            }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(one100$Questions)
});


button101.addEventListener('mouseenter', banana);
button101.addEventListener('mouseout', banana);

button101.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 2009) // randomItem is the index number that comes out of this 
        button101.removeEventListener('mouseenter', banana);
        button101.removeEventListener('mouseout', banana);
         if (button101.style.opacity === '') {
             button101.style.opacity = '0.5';
         }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(one100$Questions)
});



button102.addEventListener('mouseenter', banana);
button102.addEventListener('mouseout', banana);

button102.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 2009) // randomItem is the index number that comes out of this 
        button102.removeEventListener('mouseenter', banana);
        button102.removeEventListener('mouseout', banana);
        if (button102.style.opacity === '') {
            button102.style.opacity = '0.5';
        }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(one100$Questions)
});


button103.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 2009) // randomItem is the index number that comes out of this 
        button103.removeEventListener('mouseenter', banana);
        button103.removeEventListener('mouseout', banana);
        if (button103.style.opacity === '') {
            button103.style.opacity = '0.5';
        }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(one100$Questions)
});


button104.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 2009) // randomItem is the index number that comes out of this 
        button104.removeEventListener('mouseenter', banana);
        button104.removeEventListener('mouseout', banana);
        if (button104.style.opacity === '') {
            button104.style.opacity = '0.5';
        }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(one100$Questions)
});




// $200 Buttons
button200.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 6890) // randomItem is the index number that comes out of this 
        button200.removeEventListener('mouseenter', banana);
        button200.removeEventListener('mouseout', banana);
        if (button200.style.opacity === '') {
            button200.style.opacity = '0.5';
        }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(two200$Questions)
});


button201.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 6890) // randomItem is the index number that comes out of this 
         button201.removeEventListener('mouseenter', banana);
         button201.removeEventListener('mouseout', banana);
          if (button201.style.opacity === '') {
              button201.style.opacity = '0.5';
          }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(two200$Questions)
});


button202.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 6890) // randomItem is the index number that comes out of this 
         button202.removeEventListener('mouseenter', banana);
         button202.removeEventListener('mouseout', banana);
          if (button202.style.opacity === '') {
              button202.style.opacity = '0.5';
          }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(two200$Questions)
});


button203.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 6890) // randomItem is the index number that comes out of this 
         button203.removeEventListener('mouseenter', banana);
         button203.removeEventListener('mouseout', banana);
          if (button203.style.opacity === '') {
              button203.style.opacity = '0.5';
          }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(two200$Questions)
});


button204.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 6890) // randomItem is the index number that comes out of this 
         button204.removeEventListener('mouseenter', banana);
         button204.removeEventListener('mouseout', banana);
          if (button204.style.opacity === '') {
              button204.style.opacity = '0.5';
          }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(two200$Questions)
});



// $400 Buttons
button400.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 9610) // randomItem is the index number that comes out of this 
         button400.removeEventListener('mouseenter', banana);
         button400.removeEventListener('mouseout', banana);
          if (button400.style.opacity === '') {
              button400.style.opacity = '0.5';
          }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(four400$Questions)
});


button401.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 9610) // randomItem is the index number that comes out of this 
        button401.removeEventListener('mouseenter', banana);
        button401.removeEventListener('mouseout', banana);
        if (button401.style.opacity === '') {
            button401.style.opacity = '0.5';
        }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(four400$Questions)
});


button402.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 9610) // randomItem is the index number that comes out of this 
        button402.removeEventListener('mouseenter', banana);
        button402.removeEventListener('mouseout', banana);
        if (button402.style.opacity === '') {
            button402.style.opacity = '0.5';
        }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(four400$Questions)
});


button403.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 9610) // randomItem is the index number that comes out of this 
        button403.removeEventListener('mouseenter', banana);
        button403.removeEventListener('mouseout', banana);
        if (button403.style.opacity === '') {
            button403.style.opacity = '0.5';
        }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(four400$Questions)
});


button404.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 9610) // randomItem is the index number that comes out of this 
        button404.removeEventListener('mouseenter', banana);
        button404.removeEventListener('mouseout', banana);
        if (button404.style.opacity === '') {
            button404.style.opacity = '0.5';
        }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(four400$Questions)
});


// $600 Buttons
button600.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 4652) // randomItem is the index number that comes out of this 
        button600.removeEventListener('mouseenter', banana);
        button600.removeEventListener('mouseout', banana);
        if (button600.style.opacity === '') {
            button600.style.opacity = '0.5';
        }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(six600$Questions)
});


button601.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 4652) // randomItem is the index number that comes out of this 
        button601.removeEventListener('mouseenter', banana);
        button601.removeEventListener('mouseout', banana);
        if (button601.style.opacity === '') {
            button601.style.opacity = '0.5';
        }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(six600$Questions)
});


button602.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 4652) // randomItem is the index number that comes out of this
        button602.removeEventListener('mouseenter', banana);
        button602.removeEventListener('mouseout', banana);
        if (button602.style.opacity === '') {
            button602.style.opacity = '0.5';
        }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(six600$Questions)
});


button603.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 4652) // randomItem is the index number that comes out of this 
        button603.removeEventListener('mouseenter', banana);
        button603.removeEventListener('mouseout', banana);
        if (button603.style.opacity === '') {
            button603.style.opacity = '0.5';
        }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(six600$Questions)
});


button604.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 4652) // randomItem is the index number that comes out of this 
        button604.removeEventListener('mouseenter', banana);
        button604.removeEventListener('mouseout', banana);
        if (button604.style.opacity === '') {
            button604.style.opacity = '0.5';
        }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(six600$Questions)
});


// $800 Buttons
button800.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 7293) // randomItem is the index number that comes out of this 
        button800.removeEventListener('mouseenter', banana);
        button800.removeEventListener('mouseout', banana);
        if (button800.style.opacity === '') {
            button800.style.opacity = '0.5';
        }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(eight800$Questions)
});


button801.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 7293) // randomItem is the index number that comes out of this 
        button801.removeEventListener('mouseenter', banana);
        button801.removeEventListener('mouseout', banana);
        if (button801.style.opacity === '') {
            button801.style.opacity = '0.5';
        }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(eight800$Questions)
});


button802.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 7293) // randomItem is the index number that comes out of this 
        button802.removeEventListener('mouseenter', banana);
        button802.removeEventListener('mouseout', banana);
        if (button802.style.opacity === '') {
            button802.style.opacity = '0.5';
        }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(eight800$Questions)
});


button803.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 7293) // randomItem is the index number that comes out of this 
        button803.removeEventListener('mouseenter', banana);
        button803.removeEventListener('mouseout', banana);
        if (button803.style.opacity === '') {
            button803.style.opacity = '0.5';
        }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(eight800$Questions)
});


button804.addEventListener('click', () => {
    let randomQuestion = (arr) => {
        let randomNumber = Math.ceil(Math.random() * 7293) // randomItem is the index number that comes out of this 
        button804.removeEventListener('mouseenter', banana);
        button804.removeEventListener('mouseout', banana);
        if (button804.style.opacity === '') {
            button804.style.opacity = '0.5';
        }
        console.log(arr[randomNumber])
        questionDisplay.innerText = arr[randomNumber].question;

        dataForSubmit = arr[randomNumber].answer
    }
    randomQuestion(eight800$Questions)
});