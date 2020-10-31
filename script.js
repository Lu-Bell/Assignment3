//VARIABLES
const appState = {
//const question = document.getElementById("question");
//const choices = document.getElementById("choice-text");
score : 0,
questions_left : 0,
current_question : 0,
availableQuestions : {},

correct_bonus : 10,
maxQuestions : 20

}

let questions = [];
//Elements
document.addEventListener('DOMContentLoaded', () => {


  //widget_html = render_view("#post_view1");

  //document.querySelector("#app_widget").innerHTML = widget_html;

  create_main_view(1)

  document.querySelector("#app_widget").onclick = (e) => {
    handle_vote(e)
  }

});

const create_main_view = async (q_index) => {
  const data = await fetch('https://my-json-server.typicode.com/Lu-Bell/QuizApi/db')
  const model = await data.json()
  const html_ele = render_view(model, "#post_view1")
  document.querySelector("#app_widget").innerHTML = html_ele;
}

const create_question_view = async (q_index) => {
  const data = await fetch('https://my-json-server.typicode.com/Lu-Bell/QuizApi/db')
  const model = await data.json()
  const html_ele = render_view(model, '#quiz_view')
  document.querySelector("#app_widget").innerHTML = html_ele;

  document.querySelector("#app_widget").onclick = (e) => {
    handle_questions_vote(e)
  }
}



const create_question_view2 = async (q_index) => {
  const data = await fetch('https://my-json-server.typicode.com/Lu-Bell/QuizApi/db')
  const model = await data.json()
  const html_ele = render_view(model, '#quiz_view2')
  document.querySelector("#app_widget").innerHTML = html_ele;

  document.querySelector("#app_widget").onclick = (e) => {
    handle_questions_vote(e)
  }
}



const render_view = (model, view) => {
  template_source = document.querySelector(view).innerHTML

  var template = Handlebars.compile(template_source);

  console.log(model)

  var html_ele = template(model)

  return html_ele;
}
/*
--> IF USER PRESSED THE PYTHON BUTTON THEN PYTHON VIEW SHOULD APPEAR
--> AFTER THEY ANSWER EACH QUESTION THE USER SHOULD BE TOLD WHETHER THEY ARE RIGHT OR WRONG IN A DIFFERENT VIEW
THEN THE NEXT WUESTION SHOULD APPEAR AND THE SCORE SHOULD BE ADDED AND CURRENT QUESTION SHOULD BE COUNTED AND REMOVED(NO REPETITION)
*/

const handle_vote = (e) => {
    if (e.target.dataset.vote == "python")
    {
      console.log("py")
      create_question_view(1)
    } else if (e.target.dataset.vote == "java")
    {
      console.log("jav")
      create_question_view2(1)
    }
  }

  const handle_questions_vote = (e) => {
    if (e.target.dataset.number == 1)
    {
    appState.score += 1;
    console.log("clicked")
    create_question_view(1)
    } else if (e.target.dataset.number == 2)
    {
    create_question_view(1)
    console.log("clicked")
    }
    else if (e.target.dataset.number == 3)
    {
    create_question_view(1)
    console.log("clicked")
    }
    else if (e.target.dataset.number == 4)
    {
    create_question_view(1)
    console.log("clicked")
    }
    }

    function updateQuestion(){

    }