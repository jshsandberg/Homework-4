const start = document.querySelector(`#start`);
let answers = parseInt(0);
const prompt = document.createElement(`h1`);
const qst = document.getElementById(`#question`);
const button = document.createElement(`button`); 
const button2 = document.createElement(`button`); 
const button3 = document.createElement(`button`); 
const button4 = document.createElement(`button`); 
const buttonreset5 = document.createElement(`button`);
const button6 = document.createElement(`button`);
const button7= document.createElement(`button`);
const button8 = document.createElement(`button`);
const button9 = document.createElement(`button`);
const button10 = document.createElement(`button`);
const button11 = document.createElement(`button`);
const button12 = document.createElement(`button`);
const button13 = document.createElement(`button`);
const button14 = document.createElement(`button`);
const buttonreset15 = document.createElement(`button`);
const button16 = document.createElement(`button`);
const button17 = document.createElement(`button`);
const button18 = document.createElement(`button`);
const button19 = document.createElement(`button`);
const buttonreset20 = document.createElement(`button`);
const button21 = document.createElement(`button`);
const button22 = document.createElement(`button`);
const button23 = document.createElement(`button`);
const button24 = document.createElement(`button`);
const buttonreset25 = document.createElement(`button`);

// const reset = document.getElementById(`reset`);
//start.addEventListener( `click`, questions, changetext);

start.addEventListener(`click`, () => {
    questions();
    start.remove();
    //changetext();
});



function questions(){

    //let str = `Which one is my LEAST favorite topping for pizza?`;
    //let rep = str.replace(``)

    
    // const rep = header.replace(`Here we will be asking you some INSANELY hard questions, think you are ready for it?`, `Which one is my LEAST favorite pizza topping?`);
    // document.getElementById(`question`).innerHTML = rep;

    //document.getElementById(`question`).getElementsByTagName('h2').innerHTML = 'Application Forms'

    //header.innerHTML = "Hello";

    //let prompt = document.createElement(`h1`);
    prompt.innerHTML = "Which one is my LEAST favorite pizza topping?";
    document.getElementById(`promptQuestion`).appendChild(prompt);

    let tag = document.createElement(`h3`);
    //let text = document.createTextNode(`Pineapple`);
    //tag.appendChild(text);
    tag.appendChild(button);
    button.innerHTML = "Pineapple";
    document.getElementById(`newQuestions`).appendChild(tag);

    let tag2 = document.createElement(`h3`);
    //let text2 = document.createTextNode(`Pepperoni`);
    //tag2.appendChild(text2);
    tag2.appendChild(button2);
    button2.innerHTML = "Pepperoni";
    document.getElementById(`newQuestions2`).appendChild(tag2);

    let tag3 = document.createElement(`h3`);
    //let text3 = document.createTextNode(`Cheese`);
    //tag3.appendChild(text3);
    tag3.appendChild(button3);
    button3.innerHTML = "Cheese";
    document.getElementById(`newQuestions3`).appendChild(tag3);

    let tag4 = document.createElement(`h3`);
    //let text4 = document.createTextNode(`Tire`);
    //tag4.appendChild(text4);
    tag4.appendChild(button4);
    button4.innerHTML = "Tire";
    document.getElementById(`newQuestions4`).appendChild(tag4);

    let tag5 = document.createElement(`h3`);
    //let text5 = document.createTextNode(`Tire`);
    //tag5.appendChild(text5);
    tag5.appendChild(buttonreset5);
    buttonreset5.innerHTML = "Next Question";
    document.getElementById(`newQuestions5`).appendChild(tag5);
}
//function pineapple (){
//    alert()
//}

button.addEventListener(`click`, function(event){
    alert(`WRONG! Nice going idiot, I LOVE PINEAPPLE!`)
    alert(`You got ${answers} correct!`)
    button.remove();
    button2.remove();  
    button3.remove();
    button4.remove();

})

button2.addEventListener(`click`, function(event){
    alert(`WRONG! Nice going idiot, I LOVE PEPPERONI!`)
    alert(`You got ${answers} correct!`)
    button.remove();
    button2.remove();  
    button3.remove();
    button4.remove();
})

button3.addEventListener(`click`, function(event){
    alert(`WRONG! Nice going idiot, I LOVE CHEESE!`)
    alert(`You got ${answers} correct!`)
    button.remove();
    button2.remove();  
    button3.remove();
    button4.remove();
})

button4.addEventListener(`click`, function(event){
    alert(`You are right!! I do not like tire's on my pizza!`);
    answers += 1
    alert(`You got ${answers} correct!`)
    button.remove();
    button2.remove();  
    button3.remove();
    button4.remove();
})
// if (button4.clicked == true) {
//     console.log(`hello`);
//     prompt(`Great Job`);
//} 
// function changetext(){
//     //header = document.getElementById(`#question`);
//     qst.innerHTML = "hello";
//     console.log(`hello`);
// }

buttonreset5.addEventListener(`click`, function(event){
    //const reset = document.getElementById(`reset`);
    button.remove();
    button2.remove();  
    button3.remove();
    button4.remove();
    buttonreset5.remove();
    prompt.remove();
    question2();
})

function question2(){
    let prompt2 = document.createElement(`h1`);
    prompt2.innerHTML = "Who is my LEAST favorite brother?";
    document.getElementById(`promptQuestion`).appendChild(prompt2);

    let tag = document.createElement(`h3`);
    //let text = document.createTextNode(`Pineapple`);
    //tag.appendChild(text);
    tag.appendChild(button6);
    button6.innerHTML = "Jacob Sandberg";
    document.getElementById(`newQuestions`).appendChild(tag);

    let tag2 = document.createElement(`h3`);
    //let text2 = document.createTextNode(`Pepperoni`);
    //tag2.appendChild(text2);
    tag2.appendChild(button7);
    button7.innerHTML = "Jacob Sandberg";
    document.getElementById(`newQuestions2`).appendChild(tag2);

    let tag3 = document.createElement(`h3`);
    //let text3 = document.createTextNode(`Cheese`);
    //tag3.appendChild(text3);
    tag3.appendChild(button8);
    button8.innerHTML = "Jacob Sandberg";
    document.getElementById(`newQuestions3`).appendChild(tag3);

    let tag4 = document.createElement(`h3`);
    //let text4 = document.createTextNode(`Tire`);
    //tag4.appendChild(text4);
    tag4.appendChild(button9);
    button9.innerHTML = "Jacob Sandberg";
    document.getElementById(`newQuestions4`).appendChild(tag4);

    let tag5 = document.createElement(`h3`);
    //let text5 = document.createTextNode(`Tire`);
    //tag5.appendChild(text5);
    tag5.appendChild(buttonreset15);
    buttonreset15.innerHTML = "Next Question";
    document.getElementById(`newQuestions5`).appendChild(tag5);

    button6.addEventListener(`click`, function(event){
        alert(`CORRECT!`);
        answers += 1
        alert(`You got ${answers} correct!`)
        button6.remove();
        button7.remove();  
        button8.remove();
        button9.remove();
        buttonreset5.remove()
        })

    button7.addEventListener(`click`, function(event){
        alert(`CORRECT!`);
        answers += 1
        alert(`You got ${answers} correct!`)
        button6.remove();
        button7.remove();  
        button8.remove();
        button9.remove();
        buttonreset5.remove()
        })

    button8.addEventListener(`click`, function(event){
        alert(`CORRECT!`);
        answers += 1
        alert(`You got ${answers} correct!`)
        button6.remove();
        button7.remove();  
        button8.remove();
        button9.remove();
        buttonreset5.remove()
        })
    
    button9.addEventListener(`click`, function(event){
        alert(`CORRECT!`);
        answers += 1
        alert(`You got ${answers} correct!`)
        button6.remove();
        button7.remove();  
        button8.remove();
        button9.remove();
        buttonreset5.remove()
        })

    buttonreset15.addEventListener(`click`, function(event){
        //const reset = document.getElementById(`reset`);
        button6.remove();
        button7.remove();  
        button8.remove();
        button9.remove();
        buttonreset15.remove()
        //let h1 = document.createElement(`h1`);
        document.getElementById(`promptQuestion`).innerHTML = `<h1>Whats the difference between Moodle and a Padoodle?</h1>`;
        //h1.innerHTML = `hello`;
        question3();
    })
}
   
function question3(){
        let tag = document.createElement(`h3`);
    //let text = document.createTextNode(`Pineapple`);
    //tag.appendChild(text);
    tag.appendChild(button10);
    button10.innerHTML = "One of them starts with a P and the other with a M";
    document.getElementById(`newQuestions`).appendChild(tag);

    let tag2 = document.createElement(`h3`);
    //let text2 = document.createTextNode(`Pepperoni`);
    //tag2.appendChild(text2);
    tag2.appendChild(button11);
    button11.innerHTML = "Skadoodle!";
    document.getElementById(`newQuestions2`).appendChild(tag2);

    let tag3 = document.createElement(`h3`);
    //let text3 = document.createTextNode(`Cheese`);
    //tag3.appendChild(text3);
    tag3.appendChild(button12);
    button12.innerHTML = "One is a verb and the other is a noun";
    document.getElementById(`newQuestions3`).appendChild(tag3);

    let tag4 = document.createElement(`h3`);
    //let text4 = document.createTextNode(`Tire`);
    //tag4.appendChild(text4);
    tag4.appendChild(button13);
    button13.innerHTML = "Nothing";
    document.getElementById(`newQuestions4`).appendChild(tag4);

    let tag5 = document.createElement(`h3`);
    //let text5 = document.createTextNode(`Tire`);
    //tag5.appendChild(text5);
    tag5.appendChild(button14);
    button14.innerHTML = "Next Question";
    document.getElementById(`newQuestions5`).appendChild(tag5);
    

    button10.addEventListener(`click`, function(event){
        alert(`Incorrect`);
        alert(`You got ${answers} correct!`)
        button10.remove();
        button11.remove();
        button12.remove();
        button13.remove();
        //button14.remove();
        })

    button11.addEventListener(`click`, function(event){
        alert(`CORRECT!`);
        answers += 1
        alert(`You got ${answers} correct!`)
        button10.remove();
        button11.remove();
        button12.remove();
        button13.remove();
        //button14.remove();
        //console.log(`hello1`)
        })

    button12.addEventListener(`click`, function(event){
        alert(`Incorrect`);
        alert(`You got ${answers} correct!`)
        button10.remove();
        button11.remove();
        button12.remove();
        button13.remove();
        //button14.remove();
        })
    
    button13.addEventListener(`click`, function(event){
        alert(`Incorrect`);
        alert(`You got ${answers} correct!`)
        button10.remove();
        button11.remove();
        button12.remove();
        button13.remove();
        //button14.remove();
        })

    button14.addEventListener(`click`, function(event){
        button10.remove();
        button11.remove();
        button12.remove();
        button13.remove();
        button14.remove();
        document.getElementById(`promptQuestion`).innerHTML = `<h1>If you dig a 6 foot hole, how deep is it?</h1>`;
        question4();
        
    })

    function question4(){

        let tag = document.createElement(`h3`);
        //let text = document.createTextNode(`Pineapple`);
        //tag.appendChild(text);
        tag.appendChild(button16);
        button16.innerHTML = "Like 30 feet";
        document.getElementById(`newQuestions`).appendChild(tag);
    
        let tag2 = document.createElement(`h3`);
        //let text2 = document.createTextNode(`Pepperoni`);
        //tag2.appendChild(text2);
        tag2.appendChild(button17);
        button17.innerHTML = "6 feet";
        document.getElementById(`newQuestions2`).appendChild(tag2);
    
        let tag3 = document.createElement(`h3`);
        //let text3 = document.createTextNode(`Cheese`);
        //tag3.appendChild(text3);
        tag3.appendChild(button18);
        button18.innerHTML = "2 yards";
        document.getElementById(`newQuestions3`).appendChild(tag3);
    
        let tag4 = document.createElement(`h3`);
        //let text4 = document.createTextNode(`Tire`);
        //tag4.appendChild(text4);
        tag4.appendChild(button19);
        button19.innerHTML = "One human length deep";
        document.getElementById(`newQuestions4`).appendChild(tag4);
    
        let tag5 = document.createElement(`h3`);
        //let text5 = document.createTextNode(`Tire`);
        //tag5.appendChild(text5);
        tag5.appendChild(buttonreset20);
        buttonreset20.innerHTML = "Next Question";
        document.getElementById(`newQuestions5`).appendChild(tag5);
        
        button16.addEventListener(`click`, function(event){
            alert(`CORRECT!`);
            answers += 1
            alert(`You got ${answers} correct!`)
            button16.remove();
            button17.remove();
            button18.remove();
            button19.remove();
            //button14.remove();
            //console.log(`hello1`)
            })

        button17.addEventListener(`click`, function(event){
            alert(`Incorrect`);
            alert(`You got ${answers} correct!`)
            button16.remove();
            button17.remove();
            button18.remove();
            button19.remove();
            //button14.remove();
            })
    
        button18.addEventListener(`click`, function(event){
            alert(`Incorrect`);
            alert(`You got ${answers} correct!`)
            button16.remove();
            button17.remove();
            button18.remove();
            button19.remove();
            //button14.remove();
            })
        
        button19.addEventListener(`click`, function(event){
            alert(`Incorrect`);
            alert(`You got ${answers} correct!`)
            button16.remove();
            button17.remove();
            button18.remove();
            button19.remove();
            //button14.remove();
            })
    
        buttonreset20.addEventListener(`click`, function(event){
            button16.remove();
            button17.remove();
            button18.remove();
            button19.remove();
            buttonreset20.remove()
            document.getElementById(`promptQuestion`).innerHTML = `<h1>On a scale from 1 to 5, how good is this quiz?</h1>`;
            question5();
            
        })
    }

    function question5(){

        let tag = document.createElement(`h3`);
        //let text = document.createTextNode(`Pineapple`);
        //tag.appendChild(text);
        tag.appendChild(button21);
        button21.innerHTML = "5";
        document.getElementById(`newQuestions`).appendChild(tag);
    
        let tag2 = document.createElement(`h3`);
        //let text2 = document.createTextNode(`Pepperoni`);
        //tag2.appendChild(text2);
        tag2.appendChild(button22);
        button22.innerHTML = "Perfect";
        document.getElementById(`newQuestions2`).appendChild(tag2);
    
        let tag3 = document.createElement(`h3`);
        //let text3 = document.createTextNode(`Cheese`);
        //tag3.appendChild(text3);
        tag3.appendChild(button23);
        button23.innerHTML = "10";
        document.getElementById(`newQuestions3`).appendChild(tag3);
    
        let tag4 = document.createElement(`h3`);
        //let text4 = document.createTextNode(`Tire`);
        //tag4.appendChild(text4);
        tag4.appendChild(button24);
        button24.innerHTML = "Josh Sandberg is an amazing person. Sometimes I wish I could be him for a day, just to see what it is like! If only...";
        document.getElementById(`newQuestions4`).appendChild(tag4);
    
        let tag5 = document.createElement(`h3`);
        //let text5 = document.createTextNode(`Tire`);
        //tag5.appendChild(text5);
        tag5.appendChild(buttonreset25);
        buttonreset25.innerHTML = "Next Question";
        document.getElementById(`newQuestions5`).appendChild(tag5);
        
        button21.addEventListener(`click`, function(event){
            alert(`Not good enough`);
            
            alert(`You got ${answers} correct!`)
            button21.remove();
            button22.remove();
            button23.remove();
            button24.remove();
            //button14.remove();
            //console.log(`hello1`)
            })

        button22.addEventListener(`click`, function(event){
            alert(`You can choose better`);
            alert(`You got ${answers} correct!`)
            button21.remove();
            button22.remove();
            button23.remove();
            button24.remove();
            //button14.remove();
            })
    
        button23.addEventListener(`click`, function(event){
            alert(`That is a good choice, but it is not the best one out there.`);
            alert(`You got ${answers} correct!`)
            button21.remove();
            button22.remove();
            button23.remove();
            button24.remove();
            //button14.remove();
            })
        
        button24.addEventListener(`click`, function(event){
            alert(`Me too bro, me too...`);
            answers += 1
            alert(`You got ${answers} correct!`)
            button21.remove();
            button22.remove();
            button23.remove();
            button24.remove();
            //button14.remove();
            })
    
        buttonreset25.addEventListener(`click`, function(event){
            button21.remove();
            button22.remove();
            button23.remove();
            button24.remove();
            buttonreset25.remove()
            document.getElementById(`promptQuestion`).innerHTML = `<h1>Lets see how you did!!!</h1>`;
            finalanswers();
            
        })
    }
}
