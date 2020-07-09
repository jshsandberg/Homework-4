//start quiz button click event listener;
let timeFun;

const start = document.getElementById("start");
// .addEventListener("click", ()=>{
//     timeFun = setInterval(timer, 1000);
//     start.remove()
//     appendQ();

//});
const qDiv = document.getElementById("qDiv");
const aDiv = document.getElementById("aDiv");
const msg = document.getElementById("msg")
const fDiv = document.getElementById(`fDiv`);
let current = 0;
let time = 60;
let answer = 0;
const qArray= [
    {
        q: "What is my LEAST favorite topping for pizza?",
        a: ["Pineapple", "Tire", "Pepperoni", "Olives"],
        c: "Tire"
    },
    {
        q: "Who is my least favorite brother?",
        a: ["Jacob Sandberg", "Jacob Sandberg", "Jacob Sandberg", "Jacob Sandberg"],
        c: "Jacob Sandberg"
    },
    {
        q: "Whats the difference between a moodle and padoodle?",
        a: ["Skadoodle", "Nothing", "One starts with M and the other a P", "One is a verb and the other is a noun"],
        c: "Skadoodle"
    },
    {
        q: "How awesome is this quiz from a scale of 1 to 5?",
        a: ["5", "Perfect", "10", "Josh is an amazing person and human being"],
        c: "Josh is an amazing person and human being"
    },
    {
        q: "What is green and round?",
        a: ["Circular Grass", "Green Wheel", "The Sun", "A circular picture of slime"],
        c: "Green Wheel"
    },
    {
        q: "Great Work! Let's see how you did!",
        a: ``,
        c: ""
    }
]

start.addEventListener("click", ()=>{
    timeFun = setInterval(timer, 1000);
    start.remove()
    appendQ();

})
aDiv.addEventListener("click", function(event){
    checkAnswer(event.target.textContent)
})



function appendQ(){
    aDiv.innerHTML = ""
    qDiv.textContent = qArray[current].q;
    qDiv.setAttribute(`class`, `qBtn`);
    for(let i = 0;i<qArray[current].a.length; i++){
       const btn = document.createElement("button");
       btn.textContent = qArray[current].a[i];
       aDiv.appendChild(btn);
       btn.setAttribute(`class`, "button")
    }  
}

function checkAnswer(str){
    if(qArray[current].c === str){
        answer += 1;
        console.log(answer)
        msg.textContent = "CORRECT!";
        
    }else{
        msg.textContent = "WRONG!";
        time - 5000
    }
    current ++;
    appendQ();
    setTimeout(()=>msg.textContent = "", 1500)
}

function timer(){
    document.getElementById("time").textContent = time;
    time--;
    if(time === -1){
        let fdiv = answer
        fDiv.textContent = "You got $(answer) right!";
       clearInterval(timeFun);
       document.createElement(`button`);
    }
}

console.log(answer)



