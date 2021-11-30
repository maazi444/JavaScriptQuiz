
let questions = [
  {
    id: 1,
    question: "What is the full form of RAM?",
    answer: "Random Access Memory",
    options: [
        "Random Access Monitor",
        "Random Alternating Machine",
        "Random Access Memory",
        "None"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
        "Central Processing Unit",
        "Cooling and Power Unit",
        "Central Power Unit",
        "None"
    ]
  },
  {
    id: 3,
    question: "What is the full form of E-Mail?",
    answer: "Electronic Mail",
    options: [
        "Electric Mail",
        "Electronic Mail",
        "Engine Mail",
        "None"
    ]
  },
  {
    id: 4,
    question: "Which one is mobile operating system?",
    answer: "Android",
    options: [
        "DOS",
        "Windows",
        "Linux",
        "Android"
    ]
  },
  {
    id: 5,
    question: "Which one is Computer operating system?",
    answer: "Windows",
    options: [
        "Android",
        "IOS",
        "Windows",
        "None"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
