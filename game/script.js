const questions = [
    {
      question: "ما هو لون التفاحة؟",
      answers: ["أزرق", "أخضر", "أحمر"],
      correctAnswer: "C"
    },
    {
      question: "كم عدد قارات العالم؟",
      answers: ["5", "7", "6"],
      correctAnswer: "B"
    }
  ];
  
  let currentQuestionIndex = 0;
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    const buttons = document.querySelectorAll("button");
    buttons[0].textContent = currentQuestion.answers[0];
    buttons[1].textContent = currentQuestion.answers[1];
    buttons[2].textContent = currentQuestion.answers[2];
  }
  
  function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (answer === correctAnswer) {
      document.getElementById("result").textContent = "مبروك يا ماما! إنتي أحلى حاجة في حياتي ❤️";
    } else {
      document.getElementById("result").textContent = "أجابتك خطأ، حاول مرة أخرى!";
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      setTimeout(() => {
        loadQuestion();
        document.getElementById("result").textContent = "";
      }, 1500); // زيادة الوقت قليلاً لإعطاء فرصة للرسالة بأن تظهر بوضوح
    } else {
      document.getElementById("question-container").innerHTML = "<p>انتهت اللعبة! شكراً على اللعب! <h6><a href='../index.html' class='btn btn-danger'>ارجعي لصفحة التهنئة مره أخرى</a></h6> </p>";
    }
  }
  
  loadQuestion();
  