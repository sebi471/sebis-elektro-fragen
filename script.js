
const STORAGE_KEY = "sebis_elektro_progress";
let state = { topic: null, index: 0, correct: 0 };

function saveProgress() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function loadProgress() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) state = JSON.parse(saved);
}
function resetProgress(topic) { state = { topic, index: 0, correct: 0 }; saveProgress(); }

function renderTopics() {
  const app = document.getElementById("app");
  app.innerHTML = "<h2>Wähle ein Thema</h2>";
  const container = document.createElement("div");
  container.className = "topic-list";
  Object.keys(QUESTIONS).forEach(topic => {
    const btn = document.createElement("button");
    btn.textContent = topic + " (" + QUESTIONS[topic].length + " Fragen)";
    btn.onclick = () => { resetProgress(topic); renderQuestion(); };
    container.appendChild(btn);
  });
  app.appendChild(container);
}

function renderQuestion() {
  const topicData = QUESTIONS[state.topic];
  if (!topicData || state.index >= topicData.length) { renderResult(); return; }
  const qObj = topicData[state.index];
  const app = document.getElementById("app");
  app.innerHTML = "";
  const progress = document.createElement("div");
  progress.className = "progress";
  progress.textContent = `Frage ${state.index+1} von ${topicData.length}`;
  app.appendChild(progress);
  const h2 = document.createElement("h2");
  h2.textContent = qObj.q;
  app.appendChild(h2);

  qObj.options.forEach((opt, idx) => {
    const div = document.createElement("div");
    div.className = "option";
    div.textContent = opt;
    div.onclick = () => handleAnswer(div, idx);
    app.appendChild(div);
  });

  const explain = document.createElement("p");
  explain.id = "explanation";
  explain.style.display = "none";
  explain.style.marginTop = "0.5rem";
  app.appendChild(explain);
}

function handleAnswer(el, idx) {
  const topicData = QUESTIONS[state.topic];
  const qObj = topicData[state.index];
  const opts = document.querySelectorAll(".option");
  opts.forEach((o,i)=> {
    o.onclick = null;
    if (i === qObj.correct) o.classList.add("correct");
    else if (i === idx) o.classList.add("wrong");
  });
  if (idx === qObj.correct) state.correct++;
  document.getElementById("explanation").textContent = qObj.explanation;
  document.getElementById("explanation").style.display = "block";
  saveProgress();
  setTimeout(()=>{ state.index++; saveProgress(); renderQuestion(); }, 1200);
}

function renderResult() {
  const app = document.getElementById("app");
  const total = QUESTIONS[state.topic].length;
  const percent = Math.round(state.correct/total*100);
  app.innerHTML = `<h2>Ergebnis</h2>
    <p>Du hast ${state.correct} von ${total} Fragen richtig (${percent}%).</p>
    <button onclick="renderTopics()">Zurück zur Themenauswahl</button>`;
  localStorage.removeItem(STORAGE_KEY);
}

window.addEventListener("load", () => {
  loadProgress();
  if (state.topic && QUESTIONS[state.topic]) renderQuestion();
  else renderTopics();
});
