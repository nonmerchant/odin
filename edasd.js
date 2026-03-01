(function () {
  // =========================================================================
  // ✅ HOW TO ADD MORE QUESTIONS:
  //
  // Just add new objects to the 'questionsData' array below.
  // Each question must have:
  //   - "q": the question text (string)
  //   - "a": array of 4 answer options (strings)
  //   - "c": the index of the correct answer (0, 1, 2, or 3)
  //
  // Example:
  //   { q: "What is the past tense of 'fly'?", a: ["flew", "flown", "flyed", "was flying"], c: 0 },
  //
  // Add as many as you want — the test will randomly pick 50 each time.
  // Currently there are 100+ questions (I've expanded to 100 for you!)
  // =========================================================================
  const questionsData = [
    // --- 100+ GRAMMAR QUESTIONS (expanded to 100) ---
    {
      q: "By the time we arrived, the film ___.",
      a: [
        "already started",
        "had already started",
        "has already started",
        "was starting",
      ],
      c: 1,
    },
    {
      q: "I wish I ___ so much coffee this morning.",
      a: ["didn't drink", "haven't drunk", "hadn't drunk", "wasn't drinking"],
      c: 2,
    },
    {
      q: "You ___ better see a doctor.",
      a: ["should", "would", "had", "ought"],
      c: 2,
    },
    {
      q: "Hardly ___ entered the room when the phone rang.",
      a: ["I had", "had I", "I was", "did I"],
      c: 1,
    },
    {
      q: "She ___ to music when I saw her.",
      a: ["listened", "was listening", "has listened", "had listened"],
      c: 1,
    },
    {
      q: "If I ___ you, I would apologize.",
      a: ["were", "was", "am", "is"],
      c: 0,
    },
    {
      q: "They ___ living in Paris since 2010.",
      a: ["are", "have been", "will be", "were"],
      c: 1,
    },
    {
      q: "He asked where ___ from.",
      a: ["did I come", "I came", "do I come", "I come"],
      c: 1,
    },
    {
      q: "The project ___ by next Monday.",
      a: ["will finish", "will be finished", "finishes", "has finished"],
      c: 1,
    },
    {
      q: "She's the woman ___ helped me.",
      a: ["who", "which", "whom", "what"],
      c: 0,
    },
    {
      q: "I'm not used ___ up early.",
      a: ["to get", "to getting", "get", "getting"],
      c: 1,
    },
    {
      q: "It's high time we ___ home.",
      a: ["go", "went", "have gone", "are going"],
      c: 1,
    },
    {
      q: "No sooner ___ than it started raining.",
      a: ["we left", "had we left", "we had left", "did we leave"],
      c: 1,
    },
    {
      q: "Each of the students ___ a laptop.",
      a: ["has", "have", "are having", "were having"],
      c: 0,
    },
    {
      q: "He insisted that she ___ there.",
      a: ["go", "goes", "went", "gone"],
      c: 0,
    },
    {
      q: "By next year, they ___ for ten years.",
      a: [
        "will marry",
        "will have been married",
        "have married",
        "will be married",
      ],
      c: 1,
    },
    {
      q: "I'd rather you ___ smoke in here.",
      a: ["don't", "didn't", "won't", "not"],
      c: 1,
    },
    {
      q: "This time next week, I ___ on the beach.",
      a: ["will lie", "will be lying", "am lying", "lie"],
      c: 1,
    },
    {
      q: "She advised me ___ earlier.",
      a: ["to arrive", "arrive", "arriving", "arrived"],
      c: 0,
    },
    {
      q: "The cake tastes as if it ___ sugar.",
      a: ["has no", "had no", "would have no", "is having no"],
      c: 1,
    },
    {
      q: "It was ___ beautiful day that we went out.",
      a: ["so", "such", "so a", "such a"],
      c: 3,
    },
    {
      q: "Not until the rain stopped ___ continue.",
      a: ["we could", "could we", "we can", "can we"],
      c: 1,
    },
    {
      q: "She ought to ___ by now.",
      a: ["arrive", "have arrived", "be arrived", "arriving"],
      c: 1,
    },
    {
      q: "If only I ___ the answer!",
      a: ["know", "knew", "have known", "had known"],
      c: 1,
    },
    {
      q: "He rarely ___ in a bad mood.",
      a: ["is", "are", "does", "has"],
      c: 0,
    },
    {
      q: "They suggested that she ___ earlier.",
      a: ["come", "came", "comes", "has come"],
      c: 0,
    },
    {
      q: "___ the weather, we'll have the party.",
      a: ["regardless", "whatever", "despite", "although"],
      c: 1,
    },
    {
      q: "She walked out ___ saying a word.",
      a: ["by", "without", "with no", "instead"],
      c: 1,
    },
    {
      q: "We ___ there if we had known.",
      a: ["wouldn't go", "wouldn't have gone", "didn't go", "haven't gone"],
      c: 1,
    },
    {
      q: "Your hair needs ___ .",
      a: ["cut", "cutting", "to cut", "be cut"],
      c: 1,
    },
    {
      q: "I'd rather ___ a taxi than walk.",
      a: ["take", "to take", "taking", "took"],
      c: 0,
    },
    {
      q: "He talks as if he ___ everything.",
      a: ["knows", "knew", "had known", "would know"],
      c: 1,
    },
    {
      q: "This is the second time you ___ late.",
      a: ["are", "were", "have been", "had been"],
      c: 2,
    },
    {
      q: "Scarcely ___ when we left.",
      a: [
        "began the party",
        "the party began",
        "did the party begin",
        "had the party begun",
      ],
      c: 3,
    },
    {
      q: "___ you like to join us?",
      a: ["do", "would", "will", "should"],
      c: 1,
    },
    {
      q: "Not only ___ late, but she forgot the book.",
      a: ["she was", "was she", "she is", "is she"],
      c: 1,
    },
    {
      q: "They made me ___ the whole story.",
      a: ["repeat", "to repeat", "repeating", "repeated"],
      c: 0,
    },
    {
      q: "We look forward ___ you soon.",
      a: ["to see", "to seeing", "seeing", "see"],
      c: 1,
    },
    {
      q: "She has a difficult temper, ___ ?",
      a: ["has she", "does she", "hasn't she", "doesn't she"],
      c: 3,
    },
    {
      q: "She ___ like her mother.",
      a: ["is", "looks", "takes after", "resembles to"],
      c: 2,
    },
    {
      q: "He's responsible ___ the project.",
      a: ["with", "of", "for", "about"],
      c: 2,
    },
    {
      q: "She prefers tea ___ coffee.",
      a: ["than", "to", "over", "rather"],
      c: 1,
    },
    {
      q: "I won't go ___ you apologize.",
      a: ["if", "unless", "without", "except"],
      c: 1,
    },
    {
      q: "The longer she waited, ___ impatient she grew.",
      a: ["the more", "more", "the most", "most"],
      c: 0,
    },
    {
      q: "He ___ be at home; the lights are off.",
      a: ["must not", "can't", "shouldn't", "mightn't"],
      c: 1,
    },
    {
      q: "It's time the children ___ in bed.",
      a: ["were", "are", "have been", "will be"],
      c: 0,
    },
    {
      q: "She is ___ to refuse.",
      a: ["too polite", "so polite", "polite enough", "as polite"],
      c: 0,
    },
    {
      q: "He's known ___ a good doctor.",
      a: ["to be", "as", "for", "like"],
      c: 1,
    },
    {
      q: "I remember ___ the door.",
      a: ["lock", "to lock", "locking", "locked"],
      c: 2,
    },
    { q: "We had better ___ now.", a: ["to go", "go", "going", "gone"], c: 1 },
    // ---- ADDITIONAL 50 QUESTIONS (to reach 100) ----
    {
      q: "She ___ English for five years.",
      a: ["teaches", "has been teaching", "is teaching", "was teaching"],
      c: 1,
    },
    {
      q: "If he ___ earlier, he wouldn't have missed the bus.",
      a: ["left", "had left", "would leave", "was leaving"],
      c: 1,
    },
    {
      q: "The children were excited ___ going to the zoo.",
      a: ["for", "about", "with", "of"],
      c: 1,
    },
    {
      q: "I'd rather you ___ quiet.",
      a: ["keep", "kept", "to keep", "keeping"],
      c: 1,
    },
    {
      q: "She apologized ___ being late.",
      a: ["for", "about", "of", "with"],
      c: 0,
    },
    {
      q: "He doesn't enjoy ___ to classical music.",
      a: ["to listen", "listening", "listen", "listened"],
      c: 1,
    },
    {
      q: "The movie was ___ boring that I fell asleep.",
      a: ["so", "such", "very", "too"],
      c: 0,
    },
    {
      q: "I wish you ___ so fast.",
      a: ["don't drive", "wouldn't drive", "didn't drive", "hadn't driven"],
      c: 1,
    },
    {
      q: "She's been working here ___ 2018.",
      a: ["since", "for", "from", "in"],
      c: 0,
    },
    {
      q: "He gave ___ smoking last year.",
      a: ["up", "away", "out", "in"],
      c: 0,
    },
    {
      q: "They ___ married next spring.",
      a: ["are getting", "get", "will have got", "have got"],
      c: 0,
    },
    {
      q: "I'm not sure where ___ on holiday.",
      a: ["to go", "go", "going", "went"],
      c: 0,
    },
    {
      q: "The room needs ___ before the guests arrive.",
      a: ["to clean", "cleaning", "clean", "be cleaned"],
      c: 1,
    },
    {
      q: "If I had more time, I ___ travel more.",
      a: ["would", "will", "can", "may"],
      c: 0,
    },
    {
      q: "She speaks French ___ than I do.",
      a: ["more fluently", "fluently", "most fluently", "fluent"],
      c: 0,
    },
    {
      q: "He's the man ___ car was stolen.",
      a: ["who", "whose", "whom", "which"],
      c: 1,
    },
    {
      q: "I'll call you ___ I arrive.",
      a: ["as soon as", "until", "while", "during"],
      c: 0,
    },
    {
      q: "She's interested ___ learning Japanese.",
      a: ["in", "on", "at", "for"],
      c: 0,
    },
    {
      q: "We've been friends ___ we were children.",
      a: ["since", "for", "from", "during"],
      c: 0,
    },
    {
      q: "He suggested ___ to the cinema.",
      a: ["to go", "going", "go", "went"],
      c: 1,
    },
    {
      q: "The more you practice, ___ you'll become.",
      a: ["better", "the better", "best", "more good"],
      c: 1,
    },
    {
      q: "She's looking forward ___ her birthday.",
      a: ["to celebrate", "to celebrating", "celebrate", "celebrating"],
      c: 1,
    },
    {
      q: "If it rains tomorrow, we ___ the picnic.",
      a: ["cancel", "will cancel", "would cancel", "cancelled"],
      c: 1,
    },
    {
      q: "He's not used ___ in such a cold climate.",
      a: ["to live", "to living", "living", "live"],
      c: 1,
    },
    {
      q: "She's the one ___ won the competition.",
      a: ["which", "who", "whom", "what"],
      c: 1,
    },
    {
      q: "I'd rather you ___ me the truth.",
      a: ["tell", "told", "to tell", "telling"],
      c: 1,
    },
    {
      q: "They're thinking ___ moving to the countryside.",
      a: ["to", "about", "of", "for"],
      c: 1,
    },
    {
      q: "He's been working ___ the problem all day.",
      a: ["on", "in", "at", "with"],
      c: 0,
    },
    {
      q: "She succeeded ___ passing the exam.",
      a: ["to pass", "in passing", "pass", "at passing"],
      c: 1,
    },
    {
      q: "I'd like ___ to the manager, please.",
      a: ["to speak", "speaking", "speak", "spoken"],
      c: 0,
    },
    {
      q: "He's accused ___ stealing the money.",
      a: ["for", "of", "with", "about"],
      c: 1,
    },
    {
      q: "She's capable ___ doing better work.",
      a: ["to do", "of doing", "for doing", "in doing"],
      c: 1,
    },
    {
      q: "We're fed up ___ waiting for the bus.",
      a: ["with", "of", "about", "for"],
      c: 0,
    },
    {
      q: "He insisted ___ paying for the meal.",
      a: ["to", "on", "for", "about"],
      c: 1,
    },
    { q: "She's afraid ___ flying.", a: ["to", "of", "about", "with"], c: 1 },
    {
      q: "They're interested ___ buying a house.",
      a: ["to", "in", "for", "about"],
      c: 1,
    },
    {
      q: "He's responsible ___ looking after the children.",
      a: ["to", "for", "of", "with"],
      c: 1,
    },
    {
      q: "She's worried ___ her exam results.",
      a: ["about", "of", "for", "with"],
      c: 0,
    },
    {
      q: "They're tired ___ working so hard.",
      a: ["from", "of", "with", "about"],
      c: 1,
    },
    {
      q: "He's keen ___ learning languages.",
      a: ["to", "on", "for", "about"],
      c: 1,
    },
    { q: "She's famous ___ her novels.", a: ["by", "for", "of", "with"], c: 1 },
    {
      q: "They're proud ___ their achievements.",
      a: ["of", "for", "with", "about"],
      c: 0,
    },
    {
      q: "He's ashamed ___ what he did.",
      a: ["of", "for", "with", "about"],
      c: 0,
    },
    {
      q: "She's jealous ___ her sister's success.",
      a: ["of", "for", "with", "about"],
      c: 0,
    },
    {
      q: "They're fond ___ classical music.",
      a: ["to", "of", "for", "with"],
      c: 1,
    },
    {
      q: "He's bored ___ watching television.",
      a: ["of", "with", "from", "about"],
      c: 1,
    },
    {
      q: "She's excited ___ going on holiday.",
      a: ["to", "about", "for", "with"],
      c: 1,
    },
    {
      q: "They're worried ___ being late.",
      a: ["about", "of", "for", "with"],
      c: 0,
    },
    { q: "He's scared ___ heights.", a: ["to", "of", "about", "with"], c: 1 },
    {
      q: "She's different ___ her sister.",
      a: ["to", "from", "than", "with"],
      c: 1,
    },
  ];

  // Update counter
  document.getElementById("question-counter-display").innerHTML =
    `📚 <strong>${questionsData.length}</strong> questions in bank · <strong>50 random</strong> per test`;

  // ----- LEADERBOARD (localStorage) -----
  let leaderboard = [];

  function loadLeaderboard() {
    try {
      const stored = localStorage.getItem("grammar_leaderboard_50");
      if (stored) {
        leaderboard = JSON.parse(stored);
      } else {
        leaderboard = [
          { name: "Eleanor", score: 48 },
          { name: "James", score: 45 },
          { name: "Clara", score: 42 },
        ];
      }
    } catch (e) {
      leaderboard = [{ name: "Aria", score: 47 }];
    }
    leaderboard.sort((a, b) => b.score - a.score);
    if (leaderboard.length > 8) leaderboard = leaderboard.slice(0, 8);
  }

  function saveLeaderboard() {
    localStorage.setItem("grammar_leaderboard_50", JSON.stringify(leaderboard));
  }

  function renderLeaderboard() {
    const listEl = document.getElementById("leaderboard-list");
    if (!listEl) return;
    listEl.innerHTML = "";
    if (leaderboard.length === 0) {
      listEl.innerHTML =
        '<div style="padding:16px;background:rgba(255,255,255,0.3);border-radius:60px;">✨ no scores yet</div>';
      return;
    }
    leaderboard.slice(0, 6).forEach((entry, idx) => {
      const li = document.createElement("li");
      li.className = "leaderboard-item";
      li.innerHTML = `
                        <span class="rank-badge">${idx + 1}</span>
                        <span class="player-name">${escapeHtml(entry.name) || "guest"}</span>
                        <span class="player-score">${entry.score}</span>
                    `;
      listEl.appendChild(li);
    });
  }

  function escapeHtml(unsafe) {
    if (!unsafe) return "";
    return unsafe.replace(/[&<>"']/g, function (m) {
      if (m === "&") return "&amp;";
      if (m === "<") return "&lt;";
      if (m === ">") return "&gt;";
      if (m === '"') return "&quot;";
      return "&#039;";
    });
  }

  function addScoreToLeaderboard(playerName, playerScore) {
    const nameTrim = playerName.trim() || "guest";
    leaderboard.push({ name: nameTrim, score: playerScore });
    leaderboard.sort((a, b) => b.score - a.score);
    if (leaderboard.length > 8) leaderboard = leaderboard.slice(0, 8);
    saveLeaderboard();
    renderLeaderboard();
  }

  function resetLeaderboard() {
    leaderboard = [];
    saveLeaderboard();
    renderLeaderboard();
  }

  // ----- state (50 questions, 30 minutes) -----
  let currentQuestions = [];
  let currentIndex = 0;
  let score = 0;
  let timeLeft = 1800; // 30 minutes for 50 questions
  let timerInterval = null;
  let currentPlayerName = "guest";

  // DOM elements
  const entranceScreen = document.getElementById("entrance-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const resultScreen = document.getElementById("result-screen");
  const enterBtn = document.getElementById("enterQuizBtn");
  const restartResultBtn = document.getElementById("restartFromResultBtn");
  const resetLeaderBtn = document.getElementById("resetLeaderboardBtn");
  const playerNameInput = document.getElementById("player-name-input");
  const timerDisplay = document.getElementById("timer-display");
  const progressBar = document.getElementById("progress-bar");
  const questionNumberSpan = document.getElementById("question-number");
  const questionText = document.getElementById("q-text");
  const optionsContainer = document.getElementById("options-container");
  const finalScoreSpan = document.getElementById("final-score");
  const feedbackSpan = document.getElementById("feedback-text");

  function pickRandomQuestions() {
    const shuffled = [...questionsData].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 50); // Always pick 50
  }

  function renderQuestion() {
    if (!currentQuestions.length || currentIndex >= currentQuestions.length)
      return;
    const q = currentQuestions[currentIndex];
    progressBar.style.width = `${(currentIndex / currentQuestions.length) * 100}%`;
    questionNumberSpan.innerText = `Question ${currentIndex + 1}/${currentQuestions.length}`;
    questionText.innerText = q.q;
    optionsContainer.innerHTML = "";
    q.a.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.style.animationDelay = `${idx * 0.08}s`;
      btn.innerText = opt;
      btn.onclick = () => handleAnswer(idx);
      optionsContainer.appendChild(btn);
    });
  }

  function handleAnswer(choice) {
    if (choice === currentQuestions[currentIndex].c) score++;
    currentIndex++;
    if (currentIndex < currentQuestions.length) renderQuestion();
    else finishQuiz();
  }

  function runTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timeLeft--;
      if (timeLeft < 0) timeLeft = 0;
      const m = Math.floor(timeLeft / 60);
      const s = timeLeft % 60;
      timerDisplay.innerText = `${m}:${s < 10 ? "0" : ""}${s}`;
      if (timeLeft <= 0) finishQuiz();
    }, 1000);
  }

  function finishQuiz() {
    clearInterval(timerInterval);
    timerInterval = null;
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    finalScoreSpan.innerText = `${score}`;
    feedbackSpan.innerText = `you got ${score} out of 50`;

    addScoreToLeaderboard(currentPlayerName, score);
  }

  function startQuizFromEntrance() {
    let rawName = playerNameInput.value.trim();
    if (rawName === "") rawName = "guest";
    currentPlayerName = rawName;

    currentIndex = 0;
    score = 0;
    timeLeft = 1800; // 30 minutes
    timerDisplay.innerText = "30:00";
    currentQuestions = pickRandomQuestions();

    entranceScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    resultScreen.classList.add("hidden");

    if (timerInterval) clearInterval(timerInterval);
    runTimer();
    renderQuestion();
  }

  function backToEntrance() {
    clearInterval(timerInterval);
    timerInterval = null;
    quizScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    entranceScreen.classList.remove("hidden");
    renderLeaderboard();
  }

  // Bootstrap
  loadLeaderboard();
  renderLeaderboard();

  // Event listeners
  enterBtn.addEventListener("click", startQuizFromEntrance);
  restartResultBtn.addEventListener("click", backToEntrance);
  resetLeaderBtn.addEventListener("click", resetLeaderboard);

  playerNameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") startQuizFromEntrance();
  });
})();
