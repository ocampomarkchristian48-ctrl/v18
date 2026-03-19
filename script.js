// ================== QUESTIONS ==================
let topics = {

probability: [
{q:"P(red) if 5 red, 5 blue?", a:["1/2","1/5","2/5","3/5"], c:0},
{q:"Coin tails?", a:["1/2","1/3","1/4","1"], c:0},
{q:"Die >4?", a:["1/6","1/3","1/2","2/3"], c:1},
{q:"Pick king?", a:["1/52","1/13","1/4","1/26"], c:1},
{q:"Green (2/10)?", a:["1/10","1/5","2/5","1/2"], c:1},

{q:"P(odd)?", a:["1/2","1/3","2/3","1/6"], c:0},
{q:"P(head)?", a:["1/2","1/4","1/3","1"], c:0},
{q:"P(>3)?", a:["1/2","1/3","2/3","1/6"], c:0},
{q:"P(ace)?", a:["1/13","1/4","1/52","1/26"], c:0},
{q:"P(red card)?", a:["1/2","1/4","1/13","1"], c:0},

{q:"P(6)?", a:["1/6","1/2","1/3","1/4"], c:0},
{q:"P(even)?", a:["1/2","1/3","1/6","2/3"], c:0},
{q:"P(not 1)?", a:["5/6","1/6","1/2","1/3"], c:0},
{q:"P(blue)?", a:["1/2","1/3","1/4","2/3"], c:0},
{q:"P(heart)?", a:["1/4","1/13","1/52","1/2"], c:0},

{q:"P(black)?", a:["1/2","1/4","1/13","1"], c:0},
{q:"P(queen)?", a:["1/13","1/4","1/52","1/26"], c:0},
{q:"P(spade)?", a:["1/4","1/2","1/13","1"], c:0},
{q:"P(number card)?", a:["9/13","1/2","1/4","1"], c:0},
{q:"P(face card)?", a:["3/13","1/4","1/2","1/13"], c:0}
],

group: [
{q:"All dogs are animals. Max is dog?", a:["Animal","Cat","Bird","Plant"], c:0},
{q:"All cats meow. Tom is cat?", a:["Meow","Bark","Fly","Swim"], c:0},
{q:"All birds fly?", a:["Fly","Swim","Walk","Sleep"], c:0},
{q:"All fish swim?", a:["Swim","Fly","Run","Jump"], c:0},
{q:"All humans think?", a:["Think","Sleep","Jump","Cry"], c:0},

{q:"Group has identity?", a:["Yes","No","Maybe","None"], c:0},
{q:"Closure?", a:["Yes","No","Half","None"], c:0},
{q:"Associative?", a:["Yes","No","None","Half"], c:0},
{q:"Inverse?", a:["Yes","No","None","Half"], c:0},
{q:"Set of numbers?", a:["Group","Animal","Car","Tree"], c:0},

{q:"Operation?", a:["Combine","Split","Jump","Run"], c:0},
{q:"Binary?", a:["2 inputs","3 inputs","1 input","none"], c:0},
{q:"Z under +?", a:["Group","Not","Maybe","None"], c:0},
{q:"Identity of +?", a:["0","1","-1","2"], c:0},
{q:"Inverse of 5?", a:["-5","5","0","1"], c:0},

{q:"Closure example?", a:["2+2=4","2+2=5","2+2=3","none"], c:0},
{q:"Associative?", a:["same","different","none","half"], c:0},
{q:"Group law?", a:["Yes","No","None","Half"], c:0},
{q:"Element?", a:["Member","Animal","Food","None"], c:0},
{q:"Set?", a:["Collection","Single","None","Empty"], c:0}
],

predicate: [
{q:"All birds fly. Tweety?", a:["Fly","Swim","Run","Jump"], c:0},
{q:"All dogs bark. Max?", a:["Bark","Meow","Fly","Sleep"], c:0},
{q:"If rain → wet?", a:["Wet","Dry","Hot","Cold"], c:0},
{q:"If study → pass?", a:["Pass","Fail","Sleep","Eat"], c:0},
{q:"All cats meow?", a:["Meow","Bark","Fly","Jump"], c:0},

{q:"∀ means?", a:["All","Some","None","One"], c:0},
{q:"∃ means?", a:["Exist","All","None","Zero"], c:0},
{q:"Predicate?", a:["Statement","Number","Word","None"], c:0},
{q:"Logic?", a:["Thinking","Running","Jumping","None"], c:0},
{q:"Truth?", a:["True/False","Number","Word","None"], c:0},

{q:"If A→B?", a:["Implication","Union","Set","None"], c:0},
{q:"Negation?", a:["Not","Yes","All","None"], c:0},
{q:"AND?", a:["Conjunction","OR","NOT","NONE"], c:0},
{q:"OR?", a:["Disjunction","AND","NOT","NONE"], c:0},
{q:"Truth table?", a:["Logic table","Math","Word","None"], c:0},

{q:"Domain?", a:["Set","Word","None","Number"], c:0},
{q:"Variable?", a:["x","1","A","None"], c:0},
{q:"Constant?", a:["Fixed","Change","None","All"], c:0},
{q:"Predicate example?", a:["P(x)","1","A","None"], c:0},
{q:"Logic system?", a:["Rules","Game","Food","None"], c:0}
],

counting: [
{q:"2+3 ways?", a:["5","6","4","3"], c:0},
{q:"Permutation?", a:["Order","No order","None","Half"], c:0},
{q:"Combination?", a:["No order","Order","None","Half"], c:0},
{q:"3!?", a:["6","3","9","1"], c:0},
{q:"5!?", a:["120","60","24","10"], c:0},

{q:"nPr?", a:["Permutation","Combination","None","Half"], c:0},
{q:"nCr?", a:["Combination","Permutation","None","Half"], c:0},
{q:"0!?", a:["1","0","None","2"], c:0},
{q:"4!?", a:["24","12","8","6"], c:0},
{q:"6!?", a:["720","120","60","30"], c:0},

{q:"Order matters?", a:["Permutation","Combination","None","Half"], c:0},
{q:"Order not matter?", a:["Combination","Permutation","None","Half"], c:0},
{q:"Ways?", a:["Count","Add","Minus","None"], c:0},
{q:"Counting?", a:["Ways","None","Math","Food"], c:0},
{q:"Total?", a:["Sum","Minus","None","Half"], c:0},

{q:"Tree diagram?", a:["Visual","None","Food","Word"], c:0},
{q:"Multiply rule?", a:["Yes","No","None","Half"], c:0},
{q:"Add rule?", a:["Yes","No","None","Half"], c:0},
{q:"Sample space?", a:["All outcomes","One","None","Half"], c:0},
{q:"Event?", a:["Outcome","None","Food","Half"], c:0}
]

};

// ================== GAME ==================
let currentSet = [];
let currentQuestion = 0;
let score = 0;

// RANDOM 5
function getRandomQuestions(topic){
let arr = [...topics[topic]];
arr.sort(()=>Math.random()-0.5);
return arr.slice(0,5);
}

// SELECT TOPIC
function selectTopic(topic){
currentSet = getRandomQuestions(topic);
currentQuestion = 0;
score = 0;

document.getElementById("topicScreen").classList.add("hidden");
document.getElementById("quizScreen").classList.remove("hidden");

showQuestion();
}

// SHOW QUESTION
function showQuestion(){
let q = currentSet[currentQuestion];

document.getElementById("question").innerText = q.q;

let answersDiv = document.getElementById("answers");
answersDiv.innerHTML = "";

q.a.forEach((ans,index)=>{
let btn = document.createElement("button");
btn.innerText = ans;
btn.classList.add("answerBtn");

btn.onclick = ()=>selectAnswer(btn,index);

answersDiv.appendChild(btn);
});
}

// ANSWER
function selectAnswer(btn,index){
let q = currentSet[currentQuestion];
let buttons = document.querySelectorAll(".answerBtn");

buttons.forEach(b=>b.disabled=true);

if(index === q.c){
btn.classList.add("correct");
score++;
}else{
btn.classList.add("wrong");
buttons[q.c].classList.add("correct");
}

document.getElementById("nextBtn").classList.remove("hidden");
}

// NEXT
function nextQuestion(){
currentQuestion++;

document.getElementById("nextBtn").classList.add("hidden");

if(currentQuestion < currentSet.length){
showQuestion();
}else{
showResult();
}
}

// RESULT
function showResult(){
document.getElementById("quizScreen").classList.add("hidden");
document.getElementById("resultScreen").classList.remove("hidden");

let percent = Math.round((score/5)*100);

document.getElementById("resultScore").innerText = "Score: "+percent+"%";

if(percent >= 70){
document.getElementById("resultTitle").innerText = "PASSED 🎉";
}else{
document.getElementById("resultTitle").innerText = "FAILED ❌";
}
}

// RETRY
function retryGame(){
location.reload();
}
