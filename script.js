const exerciseLibraryData = [
  { name: "Bänkpress", muscle: "Bröst", note: "Klassisk pressövning för bröst, axlar och triceps." },
  { name: "Lutande hantelpress", muscle: "Bröst", note: "Bra för övre bröst och stabilitet." },
  { name: "Chest flyes", muscle: "Bröst", note: "Isolationsövning med fokus på stretch." },
  { name: "Knäböj", muscle: "Ben", note: "Basövning för lår, säte och bål." },
  { name: "Benpress", muscle: "Ben", note: "Bra komplement till knäböj." },
  { name: "Raka marklyft", muscle: "Ben", note: "Fokus på baksida lår och säte." },
  { name: "Marklyft", muscle: "Rygg", note: "Tung helkroppsövning med stort ryggfokus." },
  { name: "Skivstångsrodd", muscle: "Rygg", note: "Bygger tjocklek i ryggen." },
  { name: "Latsdrag", muscle: "Rygg", note: "Bra vertikal dragövning." },
  { name: "Sittande rodd", muscle: "Rygg", note: "Kontrollerad övning för mitten av ryggen." },
  { name: "Axelpress", muscle: "Axlar", note: "Basövning för främre och mellersta axeln." },
  { name: "Sidolyft", muscle: "Axlar", note: "Isolerar mellersta delen av axeln." },
  { name: "Omvänd pec deck", muscle: "Axlar", note: "Bra för baksida axel." },
  { name: "Bicepscurl", muscle: "Armar", note: "Klassisk bicepsövning." },
  { name: "Hammercurl", muscle: "Armar", note: "Tränar biceps och underarm." },
  { name: "Triceps pushdown", muscle: "Armar", note: "Stabil och enkel tricepsövning." },
  { name: "French press", muscle: "Armar", note: "Tyngre tricepsövning." },
  { name: "Cable crunch", muscle: "Mage", note: "Bra för belastad magträning." },
  { name: "Hängande benlyft", muscle: "Mage", note: "Utmanande övning för bål och höftböjare." }
];

const defaultState = {
  workouts: [],
  recommendations: [],
  settings: {
    userName: "",
    defaultRound: "2.5",
    defaultSafety: "0"
  }
};

function getState() {
  const raw = localStorage.getItem("minTraningState");
  if (!raw) return structuredClone(defaultState);
  try {
    return { ...structuredClone(defaultState), ...JSON.parse(raw) };
  } catch {
    return structuredClone(defaultState);
  }
}

function setState(state) {
  localStorage.setItem("minTraningState", JSON.stringify(state));
}

function formatDateTime(iso) {
  const date = new Date(iso);
  return new Intl.DateTimeFormat("sv-SE", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(date);
}

function formatKg(value) {
  const number = Number(value);
  const decimals = number % 1 === 0 ? 0 : 1;
  return new Intl.NumberFormat("sv-SE", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: 2
  }).format(number) + " kg";
}

function roundToStep(value, step) {
  return Math.round(value / step) * step;
}

function calculateStartWeight(weight, reps, rounding, safety) {
  const estimated1RM = weight * (1 + reps / 30);
  const estimated12RM = estimated1RM / 1.4;
  const safeWeight = Math.max(0, estimated12RM - safety);
  const roundedWeight = roundToStep(safeWeight, rounding);
  return { estimated1RM, estimated12RM, roundedWeight };
}

function switchView(viewId) {
  document.querySelectorAll(".view").forEach(view => {
    view.classList.toggle("active", view.id === viewId);
  });

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === viewId);
  });
}

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => switchView(btn.dataset.view));
});

function renderDashboard() {
  const state = getState();
  document.getElementById("totalWorkouts").textContent = state.workouts.length;
  document.getElementById("totalExercises").textContent = exerciseLibraryData.length;
  document.getElementById("savedRecommendations").textContent = state.recommendations.length;

  const dashboardRecommendations = document.getElementById("dashboardRecommendations");
  if (state.recommendations.length === 0) {
    dashboardRecommendations.textContent = "Inga rekommendationer sparade ännu.";
  } else {
    dashboardRecommendations.innerHTML = state.recommendations.slice(0, 3).map(item => `
      <div class="mini-card">
        <strong>${item.exercise || "Namnlös övning"}</strong>
        <div>${formatKg(item.weight)} för 12 reps</div>
      </div>
    `).join("");
  }

  const dashboardHistory = document.getElementById("dashboardHistory");
  if (state.workouts.length === 0) {
    dashboardHistory.textContent = "Ingen historik ännu.";
  } else {
    dashboardHistory.innerHTML = state.workouts.slice(0, 3).map(item => `
      <div class="mini-card">
        <strong>${item.exercise}</strong>
        <div>${item.muscle}</div>
        <div>${formatDateTime(item.createdAt)}</div>
      </div>
    `).join("");
  }

  const latestWorkoutPreview = document.getElementById("latestWorkoutPreview");
  if (state.workouts.length === 0) {
    latestWorkoutPreview.textContent = "Inget sparat ännu.";
  } else {
    const latest = state.workouts[0];
    latestWorkoutPreview.innerHTML = `
      <div class="mini-card">
        <strong>${latest.exercise}</strong>
        <div>Muskelgrupp: ${latest.muscle}</div>
        <div>Failure-set: ${latest.failureSet > 0 ? "Set " + latest.failureSet : "Inget markerat"}</div>
        <div>${formatDateTime(latest.createdAt)}</div>
      </div>
    `;
  }
}

function renderLibrary() {
  const search = document.getElementById("librarySearch").value.trim().toLowerCase();
  const filter = document.getElementById("libraryFilter").value;
  const container = document.getElementById("exerciseLibrary");

  const items = exerciseLibraryData.filter(item => {
    const matchSearch = item.name.toLowerCase().includes(search);
    const matchFilter = filter === "Alla" || item.muscle === filter;
    return matchSearch && matchFilter;
  });

  container.innerHTML = items.map(item => `
    <article class="exercise-card">
      <span class="badge">${item.muscle}</span>
      <h4>${item.name}</h4>
      <p class="muted">${item.note}</p>
    </article>
  `).join("");

  if (items.length === 0) {
    container.innerHTML = '<div class="muted">Inga övningar matchade din sökning.</div>';
  }
}

document.getElementById("librarySearch").addEventListener("input", renderLibrary);
document.getElementById("libraryFilter").addEventListener("change", renderLibrary);
document.getElementById("resetLibrary").addEventListener("click", () => {
  document.getElementById("librarySearch").value = "";
  document.getElementById("libraryFilter").value = "Alla";
  renderLibrary();
});

function renderHistory() {
  const state = getState();
  const list = document.getElementById("historyList");

  if (state.workouts.length === 0) {
    list.textContent = "Ingen historik ännu.";
    list.classList.add("muted");
    return;
  }

  list.classList.remove("muted");
  list.innerHTML = state.workouts.map(item => {
    const setRows = item.sets
      .filter(set => set.weight || set.reps)
      .map((set, index) => `<li>Set ${index + 1}: ${set.weight || 0} kg × ${set.reps || 0} reps</li>`)
      .join("");

    return `
      <article class="history-item">
        <div class="history-top">
          <div>
            <strong>${item.exercise}</strong>
            <div>${item.muscle}</div>
          </div>
          <div>${formatDateTime(item.createdAt)}</div>
        </div>
        <ul class="simple-list">${setRows || "<li>Inga set sparade.</li>"}</ul>
        <div><strong>Failure-set:</strong> ${item.failureSet > 0 ? "Set " + item.failureSet : "Inget markerat"}</div>
        ${item.note ? `<div><strong>Anteckning:</strong> ${item.note}</div>` : ""}
      </article>
    `;
  }).join("");
}

function getLatestFailureWorkout() {
  const state = getState();
  return state.workouts.find(item => {
    if (!item.failureSet) return false;
    const failure = item.sets[item.failureSet - 1];
    return failure && failure.weight && failure.reps;
  });
}

document.getElementById("fillDemoWorkout").addEventListener("click", () => {
  document.getElementById("workoutExercise").value = "Bänkpress";
  document.getElementById("workoutMuscle").value = "Bröst";
  document.getElementById("set1Weight").value = "70";
  document.getElementById("set1Reps").value = "12";
  document.getElementById("set2Weight").value = "75";
  document.getElementById("set2Reps").value = "10";
  document.getElementById("set3Weight").value = "80";
  document.getElementById("set3Reps").value = "8";
  document.getElementById("set4Weight").value = "80";
  document.getElementById("set4Reps").value = "7";
  document.getElementById("failureSet").value = "4";
  document.getElementById("workoutNote").value = "Sista setet till failure.";
});

document.getElementById("workoutForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const sets = [1, 2, 3, 4].map(n => ({
    weight: Number(document.getElementById(`set${n}Weight`).value),
    reps: Number(document.getElementById(`set${n}Reps`).value)
  }));

  const entry = {
    exercise: document.getElementById("workoutExercise").value.trim(),
    muscle: document.getElementById("workoutMuscle").value,
    sets,
    failureSet: Number(document.getElementById("failureSet").value),
    note: document.getElementById("workoutNote").value.trim(),
    createdAt: new Date().toISOString()
  };

  if (!entry.exercise) return;

  const state = getState();
  state.workouts.unshift(entry);
  setState(state);

  const feedback = document.getElementById("workoutFeedback");
  feedback.classList.remove("hidden");
  feedback.textContent = "Passet sparades i historiken.";
  event.target.reset();

  renderAll();
});

document.getElementById("calculatorForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const exercise = document.getElementById("calcExercise").value.trim();
  const weight = Number(document.getElementById("calcWeight").value);
  const reps = Number(document.getElementById("calcReps").value);
  const rounding = Number(document.getElementById("calcRound").value);
  const safety = Number(document.getElementById("calcSafety").value);

  if (!weight || !reps) return;

  const result = calculateStartWeight(weight, reps, rounding, safety);
  const resultBox = document.getElementById("calcResult");

  resultBox.classList.remove("hidden");
  resultBox.innerHTML = `
    <h3>${exercise ? "Rekommendation för " + exercise : "Rekommenderad startvikt"}</h3>
    <div class="result-grid">
      <div class="result-row"><span>Failure-set</span><strong>${formatKg(weight)} × ${reps} reps</strong></div>
      <div class="result-row"><span>Uppskattat 1RM</span><strong>${formatKg(result.estimated1RM)}</strong></div>
      <div class="result-row"><span>Uppskattad 12-repsvikt</span><strong>${formatKg(result.estimated12RM)}</strong></div>
      <div class="result-row"><span>Startvikt nästa pass</span><strong>${formatKg(result.roundedWeight)}</strong></div>
    </div>
    <div class="button-row" style="margin-top: 14px;">
      <button type="button" id="saveRecommendationBtn">Spara rekommendation</button>
    </div>
  `;

  document.getElementById("saveRecommendationBtn").addEventListener("click", () => {
    const state = getState();
    state.recommendations.unshift({
      exercise: exercise || "Namnlös övning",
      weight: result.roundedWeight,
      createdAt: new Date().toISOString()
    });
    setState(state);
    renderAll();
  });
});

document.getElementById("useLatestFailure").addEventListener("click", () => {
  const latest = getLatestFailureWorkout();
  if (!latest) {
    const resultBox = document.getElementById("calcResult");
    resultBox.classList.remove("hidden");
    resultBox.innerHTML = "<strong>Det finns inget sparat failure-set ännu.</strong>";
    return;
  }

  const failure = latest.sets[latest.failureSet - 1];
  const state = getState();
  document.getElementById("calcExercise").value = latest.exercise;
  document.getElementById("calcWeight").value = failure.weight;
  document.getElementById("calcReps").value = failure.reps;
  document.getElementById("calcRound").value = state.settings.defaultRound;
  document.getElementById("calcSafety").value = state.settings.defaultSafety;
});

document.getElementById("settingsForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const state = getState();
  state.settings = {
    userName: document.getElementById("userName").value.trim(),
    defaultRound: document.getElementById("defaultRound").value,
    defaultSafety: document.getElementById("defaultSafety").value
  };
  setState(state);

  const msg = document.getElementById("settingsMessage");
  msg.classList.remove("hidden");
  msg.textContent = "Inställningarna sparades.";
  renderAll();
});

document.getElementById("clearHistory").addEventListener("click", () => {
  const state = getState();
  state.workouts = [];
  setState(state);
  renderAll();
});

document.getElementById("exportData").addEventListener("click", () => {
  const state = getState();
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "min-traning-data.json";
  link.click();
  URL.revokeObjectURL(url);
});

function loadSettingsIntoForm() {
  const state = getState();
  document.getElementById("userName").value = state.settings.userName || "";
  document.getElementById("defaultRound").value = state.settings.defaultRound || "2.5";
  document.getElementById("defaultSafety").value = state.settings.defaultSafety || "0";
  document.getElementById("calcRound").value = state.settings.defaultRound || "2.5";
  document.getElementById("calcSafety").value = state.settings.defaultSafety || "0";
}

function renderAll() {
  loadSettingsIntoForm();
  renderDashboard();
  renderLibrary();
  renderHistory();
}

renderAll();
