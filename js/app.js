(function IIEF() {
  function accordion() {
    let boxs = document.querySelectorAll(".accordion-item");
    let questions = document.querySelectorAll(".accordion-q");
    let answers = document.querySelectorAll(".accordion-a");
    let answerHeight = [];

    answers.forEach((answer) => {
      answerHeight.push(answer.scrollHeight);
    });

    questions.forEach((question, key) => {
      question.addEventListener("click", (e) => {
        let questionBoxParent = question.parentElement;
        if (questionBoxParent.classList.contains("accordion-open")) {
          questionBoxParent.classList.remove("accordion-open");
          answers[key].style.height = "0px";
          questions[key].setAttribute("aria-expanded", "false");
        } else {
          boxs.forEach((box, index) => {
            if (box.classList.contains("accordion-open")) {
              box.classList.remove("accordion-open");
              answers[index].style.height = "0px";
              questions[index].setAttribute("aria-expanded", "false");
            }
          });

          questionBoxParent.classList.add("accordion-open");
          answers[key].style.height = answerHeight[key] + "px";
          questions[key].setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  window.addEventListener("load", init);

  function init() {
    accordion();
  }
})();
