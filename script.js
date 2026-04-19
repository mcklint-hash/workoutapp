const exerciseLibraryData = [
{name:"Bänkpress",muscle:"Bröst",note:"Klassisk pressövning för bröst, axlar och triceps."},
{name:"Lutande hantelpress",muscle:"Bröst",note:"Bra för övre bröst och stabilitet."},
{name:"Chest flyes",muscle:"Bröst",note:"Isolationsövning med fokus på stretch."},
{name:"Push-ups",muscle:"Bröst",note:"Enkel kroppsviktsövning som passar alla nivåer."},
{name:"Dips",muscle:"Bröst",note:"Tung kroppsviktsövning som även tar triceps."},
{name:"Cable cross",muscle:"Bröst",note:"Bra kontaktövning för bröstet."},
{name:"Maskinpress",muscle:"Bröst",note:"Stabil pressövning för kontrollerad belastning."},
{name:"Pec deck",muscle:"Bröst",note:"Isolerar bröstet med jämn belastning."},

{name:"Marklyft",muscle:"Rygg",note:"Tung helkroppsövning med stort ryggfokus."},
{name:"Skivstångsrodd",muscle:"Rygg",note:"Bygger tjocklek i ryggen."},
{name:"Latsdrag",muscle:"Rygg",note:"Bra vertikal dragövning."},
{name:"Sittande rodd",muscle:"Rygg",note:"Kontrollerad övning för mitten av ryggen."},
{name:"Pull-ups",muscle:"Rygg",note:"Kroppsviktsövning för lats och övre rygg."},
{name:"Face pulls",muscle:"Rygg",note:"Bra för övre rygg och skulderstabilitet."},
{name:"Enarms hantelrodd",muscle:"Rygg",note:"Fin stretch och bra kontakt sida för sida."},
{name:"Straight arm pulldown",muscle:"Rygg",note:"Isolerar latsen bra."},
{name:"T-bar row",muscle:"Rygg",note:"Tung rodd för ryggtjocklek."},
{name:"Chins",muscle:"Rygg",note:"Vertikal dragövning med mer bicepsfokus."},

{name:"Knäböj",muscle:"Ben",note:"Basövning för lår, säte och bål."},
{name:"Benpress",muscle:"Ben",note:"Bra komplement till knäböj."},
{name:"Raka marklyft",muscle:"Ben",note:"Fokus på baksida lår och säte."},
{name:"Utfall",muscle:"Ben",note:"Bygger balans och benstyrka."},
{name:"Benspark",muscle:"Ben",note:"Isolerar framsida lår."},
{name:"Lårcurl",muscle:"Ben",note:"Isolerar baksida lår."},
{name:"Hip thrust",muscle:"Ben",note:"Mycket bra för säte."},
{name:"Vadpress",muscle:"Ben",note:"För vader."},
{name:"Bulgarian split squat",muscle:"Ben",note:"Tuff enbensövning för ben och säte."},
{name:"Hack squat",muscle:"Ben",note:"Maskinövning med fokus på framsida lår."},

{name:"Axelpress",muscle:"Axlar",note:"Basövning för främre och mellersta axeln."},
{name:"Sidolyft",muscle:"Axlar",note:"Isolerar mellersta delen av axeln."},
{name:"Omvänd pec deck",muscle:"Axlar",note:"Bra för baksida axel."},
{name:"Arnold press",muscle:"Axlar",note:"Variation av press med lång rörelsebana."},
{name:"Front raises",muscle:"Axlar",note:"Isolerar främre axeln."},
{name:"Cable lateral raises",muscle:"Axlar",note:"Konstant spänning för sidodelten."},
{name:"Shrugs",muscle:"Axlar",note:"Övning för traps."},
{name:"Upright row",muscle:"Axlar",note:"Träffar axlar och traps."},

{name:"Bicepscurl",muscle:"Armar",note:"Klassisk bicepsövning."},
{name:"Hammercurl",muscle:"Armar",note:"Tränar biceps och underarm."},
{name:"Preacher curl",muscle:"Armar",note:"Stabil curlövning med strikt teknik."},
{name:"Incline dumbbell curl",muscle:"Armar",note:"Ger lång stretch i biceps."},
{name:"Triceps pushdown",muscle:"Armar",note:"Stabil och enkel tricepsövning."},
{name:"French press",muscle:"Armar",note:"Tyngre tricepsövning."},
{name:"Overhead rope extension",muscle:"Armar",note:"Bra stretch för triceps."},
{name:"Close grip bench press",muscle:"Armar",note:"Tung tricepsövning."},

{name:"Cable crunch",muscle:"Mage",note:"Bra för belastad magträning."},
{name:"Hängande benlyft",muscle:"Mage",note:"Utmanande övning för bål och höftböjare."},
{name:"Plankan",muscle:"Mage",note:"Stabilitetsövning för hela bålen."},
{name:"Ab wheel",muscle:"Mage",note:"Tung bålövning med lång rörelse."},
{name:"Russian twists",muscle:"Mage",note:"Rotationsövning för mage."},
{name:"Dead bug",muscle:"Mage",note:"Bra kontrollövning för bålen."}
];

const programs = [
{id:"4-day",name:"4 dagar",description:"Upper / Lower två varv per vecka.",days:[
{name:"Dag 1 – Upper",exercises:["Bänkpress","Latsdrag","Axelpress","Bicepscurl"]},
{name:"Dag 2 – Lower",exercises:["Knäböj","Benpress","Lårcurl","Vadpress"]},
{name:"Dag 3 – Upper",exercises:["Lutande hantelpress","Sittande rodd","Sidolyft","Triceps pushdown"]},
{name:"Dag 4 – Lower",exercises:["Raka marklyft","Utfall","Benspark","Cable crunch"]}
]},
{id:"5-day",name:"5 dagar",description:"Push / Pull / Legs + Upper + Arms.",days:[
{name:"Dag 1 – Push",exercises:["Bänkpress","Lutande hantelpress","Axelpress","Triceps pushdown"]},
{name:"Dag 2 – Pull",exercises:["Marklyft","Latsdrag","Skivstångsrodd","Hammercurl"]},
{name:"Dag 3 – Legs",exercises:["Knäböj","Benpress","Lårcurl","Vadpress"]},
{name:"Dag 4 – Upper",exercises:["Dips","Pull-ups","Sidolyft","Bicepscurl"]},
{name:"Dag 5 – Arms/Core",exercises:["Preacher curl","French press","Overhead rope extension","Ab wheel"]}
]},
{id:"6-day",name:"6 dagar",description:"Push / Pull / Legs två varv per vecka.",days:[
{name:"Dag 1 – Push A",exercises:["Bänkpress","Lutande hantelpress","Sidolyft","Triceps pushdown"]},
{name:"Dag 2 – Pull A",exercises:["Marklyft","Latsdrag","Sittande rodd","Bicepscurl"]},
{name:"Dag 3 – Legs A",exercises:["Knäböj","Benpress","Lårcurl","Vadpress"]},
{name:"Dag 4 – Push B",exercises:["Dips","Chest flyes","Arnold press","French press"]},
{name:"Dag 5 – Pull B",exercises:["Pull-ups","Enarms hantelrodd","Face pulls","Hammercurl"]},
{name:"Dag 6 – Legs B",exercises:["Raka marklyft","Utfall","Hip thrust","Cable crunch"]}
]}
];

const defaultState = {
  workouts: [],
  settings: { userName:"", defaultRound:"2.5", defaultSafety:"0" },
  selectedProgramId: null,
  currentProgramDayIndex: 0,
  activeWorkout: null
};

function cloneDefaultState(){ return JSON.parse(JSON.stringify(defaultState)); }
function getState(){
  const raw = localStorage.getItem("minTraningStateV3");
  if(!raw) return cloneDefaultState();
  try { return { ...cloneDefaultState(), ...JSON.parse(raw) }; }
  catch { return cloneDefaultState(); }
}
function setState(state){ localStorage.setItem("minTraningStateV3", JSON.stringify(state)); }

function formatDateTime(iso){
  const d = new Date(iso);
  return new Intl.DateTimeFormat("sv-SE",{dateStyle:"medium",timeStyle:"short"}).format(d);
}
function formatKg(v){
  const n = Number(v || 0);
  const dec = n % 1 === 0 ? 0 : 1;
  return new Intl.NumberFormat("sv-SE",{minimumFractionDigits:dec, maximumFractionDigits:2}).format(n) + " kg";
}
function roundToStep(value, step){ return Math.round(value / step) * step; }
function calculateStartWeight(weight, reps, rounding, safety){
  const estimated1RM = weight * (1 + reps / 30);
  const estimated12RM = estimated1RM / 1.4;
  const safeWeight = Math.max(0, estimated12RM - safety);
  const roundedWeight = roundToStep(safeWeight, rounding);
  return { estimated1RM, estimated12RM, roundedWeight };
}
function findProgramById(id){ return programs.find(p => p.id === id) || null; }
function getCurrentProgramDay(state){
  const program = findProgramById(state.selectedProgramId);
  if(!program) return null;
  return program.days[state.currentProgramDayIndex] || null;
}
function getLatestExerciseLog(exerciseName){
  const state = getState();
  for(const workout of state.workouts){
    const found = workout.exercises.find(item => item.exercise === exerciseName);
    if(found) return found;
  }
  return null;
}
function getRecommendationForExercise(exerciseName){
  const state = getState();
  const lastLog = getLatestExerciseLog(exerciseName);
  if(!lastLog) return null;
  const failureSet = lastLog.sets[2];
  if(!failureSet || !failureSet.weight || !failureSet.reps) return null;
  const result = calculateStartWeight(
    Number(failureSet.weight),
    Number(failureSet.reps),
    Number(state.settings.defaultRound || 2.5),
    Number(state.settings.defaultSafety || 0)
  );
  return {
    lastWeight: Number(failureSet.weight),
    lastReps: Number(failureSet.reps),
    recommendedWeight: result.roundedWeight,
    targetReps: 12
  };
}

function switchView(viewId){
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === viewId));
  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.view === viewId));
}
document.querySelectorAll(".nav-btn").forEach(btn => btn.addEventListener("click", () => switchView(btn.dataset.view)));

function renderDashboard(){
  const state = getState();
  document.getElementById("totalWorkouts").textContent = state.workouts.length;
  document.getElementById("totalExercises").textContent = exerciseLibraryData.length;
  const activeProgram = findProgramById(state.selectedProgramId);
  document.getElementById("activeProgramDays").textContent = activeProgram ? activeProgram.name : "-";

  const dashboardProgram = document.getElementById("dashboardProgram");
  if(!activeProgram){
    dashboardProgram.textContent = "Inget upplägg valt ännu.";
  } else {
    const currentDay = getCurrentProgramDay(state);
    dashboardProgram.innerHTML = `<div class="mini-card"><strong>${activeProgram.name}</strong><div>${activeProgram.description}</div><div>${currentDay ? currentDay.name : "-"}</div></div>`;
  }

  const dashboardHistory = document.getElementById("dashboardHistory");
  if(state.workouts.length === 0){
    dashboardHistory.textContent = "Ingen historik ännu.";
  } else {
    dashboardHistory.innerHTML = state.workouts.slice(0,3).map(item => `<div class="mini-card"><strong>${item.dayName}</strong><div>${formatDateTime(item.createdAt)}</div><div>${item.exercises.length} övningar loggade</div></div>`).join("");
  }
}

function renderPrograms(){
  const state = getState();
  const grid = document.getElementById("programGrid");
  grid.innerHTML = programs.map(program => `
    <article class="program-card ${state.selectedProgramId === program.id ? "active-program" : ""}">
      <h3>${program.name}</h3>
      <p class="muted">${program.description}</p>
      <ul class="program-day-list">${program.days.map(day => `<li>${day.name}</li>`).join("")}</ul>
      <div class="button-row" style="margin-top:14px;">
        <button type="button" data-program="${program.id}">${state.selectedProgramId === program.id ? "Valt upplägg" : "Välj upplägg"}</button>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll("button[data-program]").forEach(button => {
    button.addEventListener("click", () => {
      const state = getState();
      state.selectedProgramId = button.dataset.program;
      state.currentProgramDayIndex = 0;
      state.activeWorkout = null;
      setState(state);
      renderAll();
    });
  });
}

function renderLibrary(){
  const search = document.getElementById("librarySearch").value.trim().toLowerCase();
  const filter = document.getElementById("libraryFilter").value;
  const container = document.getElementById("exerciseLibrary");
  const items = exerciseLibraryData.filter(item => item.name.toLowerCase().includes(search) && (filter === "Alla" || item.muscle === filter));
  container.innerHTML = items.map(item => `<article class="exercise-card"><span class="badge">${item.muscle}</span><h4>${item.name}</h4><p class="muted">${item.note}</p></article>`).join("");
  if(items.length === 0) container.innerHTML = '<div class="muted">Inga övningar matchade din sökning.</div>';
}
document.getElementById("librarySearch").addEventListener("input", renderLibrary);
document.getElementById("libraryFilter").addEventListener("change", renderLibrary);
document.getElementById("resetLibrary").addEventListener("click", () => {
  document.getElementById("librarySearch").value = "";
  document.getElementById("libraryFilter").value = "Alla";
  renderLibrary();
});

function renderHistory(){
  const state = getState();
  const list = document.getElementById("historyList");
  if(state.workouts.length === 0){
    list.textContent = "Ingen historik ännu.";
    list.classList.add("muted");
    return;
  }
  list.classList.remove("muted");
  list.innerHTML = state.workouts.map(workout => `
    <article class="history-item">
      <div class="history-top">
        <div><strong>${workout.dayName}</strong><div>${workout.programName}</div></div>
        <div>${formatDateTime(workout.createdAt)}</div>
      </div>
      <ul class="simple-list">
        ${workout.exercises.map(ex => `<li><strong>${ex.exercise}</strong> – ${ex.sets.map((s,i)=>`set ${i+1}: ${s.weight || 0} kg × ${s.reps || 0}`).join(" • ")}${ex.failure ? " • failure på set 3" : ""}</li>`).join("")}
      </ul>
    </article>
  `).join("");
}

function startTodayWorkout(){
  const state = getState();
  const program = findProgramById(state.selectedProgramId);
  const day = getCurrentProgramDay(state);
  if(!program || !day) return false;

  state.activeWorkout = {
    programId: program.id,
    programName: program.name,
    dayIndex: state.currentProgramDayIndex,
    dayName: day.name,
    currentExerciseIndex: 0,
    currentSetIndex: 0,
    exercises: day.exercises.map(name => ({
      exercise: name,
      sets: [{weight:"", reps:""},{weight:"", reps:""},{weight:"", reps:""}],
      failure: false,
      note: ""
    }))
  };
  setState(state);
  return true;
}

function renderLoggedSetsPreview(entry){
  const preview = document.getElementById("loggedSetsPreview");
  const rows = entry.sets
    .map((set, i) => set.weight || set.reps ? `<div>Set ${i+1}: ${set.weight || 0} kg × ${set.reps || 0} reps</div>` : "")
    .filter(Boolean);
  preview.innerHTML = rows.length ? rows.join("") : "Inga set loggade ännu.";
}

function renderWorkoutRunner(){
  const state = getState();
  const notReady = document.getElementById("workoutNotReady");
  const runner = document.getElementById("workoutRunner");
  const complete = document.getElementById("workoutComplete");
  complete.classList.add("hidden");

  if(!state.selectedProgramId){
    notReady.classList.remove("hidden");
    runner.classList.add("hidden");
    notReady.innerHTML = 'Välj först ett upplägg under fliken <strong>Upplägg</strong>, och tryck sedan på <strong>Starta dagens pass</strong>.';
    return;
  }

  if(!state.activeWorkout){
    notReady.classList.remove("hidden");
    runner.classList.add("hidden");
    const day = getCurrentProgramDay(state);
    notReady.innerHTML = `Aktiv dag: <strong>${day ? day.name : "-"}</strong>. Tryck på <strong>Starta dagens pass</strong>.`;
    return;
  }

  const activeWorkout = state.activeWorkout;
  const exerciseEntry = activeWorkout.exercises[activeWorkout.currentExerciseIndex];

  if(!exerciseEntry){
    runner.classList.add("hidden");
    notReady.classList.add("hidden");
    complete.classList.remove("hidden");
    complete.innerHTML = `<strong>Passet är klart.</strong><br>${activeWorkout.dayName} sparades i historiken.`;
    return;
  }

  notReady.classList.add("hidden");
  runner.classList.remove("hidden");

  document.getElementById("currentExerciseName").textContent = exerciseEntry.exercise;
  document.getElementById("currentExerciseMeta").textContent = `${activeWorkout.dayName} • 3 set per övning`;
  document.getElementById("exerciseProgress").textContent = `${activeWorkout.currentExerciseIndex + 1} / ${activeWorkout.exercises.length}`;

  const currentSetHuman = activeWorkout.currentSetIndex + 1;
  document.getElementById("currentSetTitle").textContent = `Set ${currentSetHuman} av 3`;
  document.getElementById("setStepPill").textContent = `Set ${currentSetHuman}`;
  document.getElementById("saveSetBtn").textContent = currentSetHuman === 3 ? "Spara set 3 och gå vidare" : "Spara set";

  const failureWrap = document.getElementById("failureWrap");
  failureWrap.classList.toggle("hidden", currentSetHuman !== 3);

  const rec = getRecommendationForExercise(exerciseEntry.exercise);
  const recBox = document.getElementById("exerciseRecommendation");
  if(!rec){
    recBox.innerHTML = "Ingen tidigare loggning för den här övningen ännu.";
  } else {
    recBox.innerHTML = `<strong>Senast:</strong> ${formatKg(rec.lastWeight)} × ${rec.lastReps} reps på failure-setet.<br><strong>Rekommenderat nu:</strong> ${formatKg(rec.recommendedWeight)} × ${rec.targetReps} reps.`;
  }

  const currentSet = exerciseEntry.sets[activeWorkout.currentSetIndex];
  document.getElementById("setWeight").value = currentSet.weight || "";
  document.getElementById("setReps").value = currentSet.reps || "";
  document.getElementById("setFailure").checked = currentSetHuman === 3;
  document.getElementById("exerciseNote").value = exerciseEntry.note || "";

  renderLoggedSetsPreview(exerciseEntry);
}

document.getElementById("startWorkoutBtn").addEventListener("click", () => {
  if(startTodayWorkout()) renderAll();
});

document.getElementById("resetCurrentWorkoutBtn").addEventListener("click", () => {
  const state = getState();
  state.activeWorkout = null;
  setState(state);
  renderAll();
});

document.getElementById("fillRecommendedBtn").addEventListener("click", () => {
  const state = getState();
  if(!state.activeWorkout) return;
  const entry = state.activeWorkout.exercises[state.activeWorkout.currentExerciseIndex];
  const rec = getRecommendationForExercise(entry.exercise);
  if(!rec) return;
  document.getElementById("setWeight").value = rec.recommendedWeight;
  document.getElementById("setReps").value = rec.targetReps;
});

document.getElementById("setLoggerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const state = getState();
  const workout = state.activeWorkout;
  if(!workout) return;

  const entry = workout.exercises[workout.currentExerciseIndex];
  const setIndex = workout.currentSetIndex;
  const weight = Number(document.getElementById("setWeight").value);
  const reps = Number(document.getElementById("setReps").value);
  const note = document.getElementById("exerciseNote").value.trim();

  if(!weight || !reps) return;

  entry.sets[setIndex] = { weight, reps };
  entry.note = note;

  if(setIndex === 2){
    entry.failure = document.getElementById("setFailure").checked;
    workout.currentExerciseIndex += 1;
    workout.currentSetIndex = 0;

    if(workout.currentExerciseIndex >= workout.exercises.length){
      const completedWorkout = {
        programId: workout.programId,
        programName: workout.programName,
        dayName: workout.dayName,
        exercises: workout.exercises,
        createdAt: new Date().toISOString()
      };
      state.workouts.unshift(completedWorkout);
      state.activeWorkout = null;
      const program = findProgramById(state.selectedProgramId);
      if(program){
        state.currentProgramDayIndex = (state.currentProgramDayIndex + 1) % program.days.length;
      }
    } else {
      state.activeWorkout = workout;
    }
  } else {
    workout.currentSetIndex += 1;
    state.activeWorkout = workout;
  }

  setState(state);
  renderAll();
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
  state.activeWorkout = null;
  setState(state);
  renderAll();
});

document.getElementById("exportData").addEventListener("click", () => {
  const state = getState();
  const blob = new Blob([JSON.stringify(state, null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "min-traning-data.json";
  link.click();
  URL.revokeObjectURL(url);
});

function loadSettingsIntoForm(){
  const state = getState();
  document.getElementById("userName").value = state.settings.userName || "";
  document.getElementById("defaultRound").value = state.settings.defaultRound || "2.5";
  document.getElementById("defaultSafety").value = state.settings.defaultSafety || "0";
}

function renderAll(){
  loadSettingsIntoForm();
  renderDashboard();
  renderPrograms();
  renderLibrary();
  renderHistory();
  renderWorkoutRunner();
}

renderAll();
