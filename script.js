
const builtInExercises = "[]";
const builtInPrograms = [{"id": "4-day", "name": "4 dagar", "description": "Upper / Lower två varv per vecka.", "days": [{"name": "Dag 1 – Upper", "exercises": ["Bänkpress", "Latsdrag", "Axelpress", "Bicepscurl"]}, {"name": "Dag 2 – Lower", "exercises": ["Knäböj", "Benpress", "Lårcurl", "Vadpress"]}, {"name": "Dag 3 – Upper", "exercises": ["Lutande hantelpress", "Sittande rodd", "Sidolyft", "Triceps pushdown"]}, {"name": "Dag 4 – Lower", "exercises": ["Raka marklyft", "Utfall", "Benspark", "Cable crunch"]}]}, {"id": "5-day", "name": "5 dagar", "description": "Push / Pull / Legs + Upper + Arms.", "days": [{"name": "Dag 1 – Push", "exercises": ["Bänkpress", "Lutande hantelpress", "Axelpress", "Triceps pushdown"]}, {"name": "Dag 2 – Pull", "exercises": ["Marklyft", "Latsdrag", "Skivstångsrodd", "Hammercurl"]}, {"name": "Dag 3 – Legs", "exercises": ["Knäböj", "Benpress", "Lårcurl", "Vadpress"]}, {"name": "Dag 4 – Upper", "exercises": ["Dips", "Pull-ups", "Sidolyft", "Bicepscurl"]}, {"name": "Dag 5 – Arms/Core", "exercises": ["Preacher curl", "French press", "Overhead rope extension", "Ab wheel"]}]}, {"id": "6-day", "name": "6 dagar", "description": "Push / Pull / Legs två varv per vecka.", "days": [{"name": "Dag 1 – Push A", "exercises": ["Bänkpress", "Lutande hantelpress", "Sidolyft", "Triceps pushdown"]}, {"name": "Dag 2 – Pull A", "exercises": ["Marklyft", "Latsdrag", "Sittande rodd", "Bicepscurl"]}, {"name": "Dag 3 – Legs A", "exercises": ["Knäböj", "Benpress", "Lårcurl", "Vadpress"]}, {"name": "Dag 4 – Push B", "exercises": ["Dips", "Chest flyes", "Arnold press", "French press"]}, {"name": "Dag 5 – Pull B", "exercises": ["Pull-ups", "Enarms hantelrodd", "Face pulls", "Hammercurl"]}, {"name": "Dag 6 – Legs B", "exercises": ["Raka marklyft", "Utfall", "Hip thrust", "Cable crunch"]}]}];
const defaultState = {workouts:[],settings:{userName:"",defaultRound:"2.5"},selectedProgramId:null,currentProgramDayIndex:0,activeWorkout:null,customExercises:[],customPrograms:[],editingProgramId:null};

function cloneState(){return JSON.parse(JSON.stringify(defaultState));}
function getState(){const raw=localStorage.getItem("minTraningStateV6"); if(!raw) return cloneState(); try{return {...cloneState(), ...JSON.parse(raw)};}catch{return cloneState();}}
function setState(s){localStorage.setItem("minTraningStateV6", JSON.stringify(s));}
function getAllExercises(){const s=getState(); return [...builtInExercises,...(s.customExercises||[])];}
function getAllPrograms(){const s=getState(); return [...builtInPrograms,...(s.customPrograms||[])];}
function formatKg(v){const n=Number(v||0); const dec=n%1===0?0:1; return new Intl.NumberFormat("sv-SE",{minimumFractionDigits:dec,maximumFractionDigits:2}).format(n)+" kg";}
function formatDateTime(v){return new Intl.DateTimeFormat("sv-SE",{dateStyle:"medium",timeStyle:"short"}).format(new Date(v));}
function roundToStep(v,step){return Math.round(v/step)*step;}
function findProgramById(id){return getAllPrograms().find(p=>p.id===id)||null;}
function getCurrentProgramDay(s){const p=findProgramById(s.selectedProgramId); return p ? p.days[s.currentProgramDayIndex] : null;}
function getLatestExerciseLog(name){const s=getState(); for(const w of s.workouts){const f=w.exercises.find(e=>e.exercise===name); if(f) return f;} return null;}
function getProgressionBoost(reps){if(reps>=15)return 2; if(reps>=13)return 1; return 0;}
function getRecommendationForExercise(name){
  const s=getState(); const log=getLatestExerciseLog(name); if(!log) return null;
  const failure=log.sets[2]; if(!failure || !failure.weight || !failure.reps) return null;
  const step=Number(s.settings.defaultRound||2.5);
  const boost=getProgressionBoost(Number(failure.reps));
  const set3=roundToStep(Number(failure.weight)+boost*step, step);
  const set2=Math.max(0, roundToStep(set3-step, step));
  const set1=Math.max(0, roundToStep(set3-step*2, step));
  return {lastWeight:Number(failure.weight), lastReps:Number(failure.reps), boostSteps:boost, set1,set2,set3};
}
function switchView(id){document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===id)); document.querySelectorAll(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===id));}
document.querySelectorAll(".nav-btn").forEach(b=>b.addEventListener("click",()=>switchView(b.dataset.view)));

function renderDashboard(){
  const s=getState(); const p=findProgramById(s.selectedProgramId); const day=getCurrentProgramDay(s);
  document.getElementById("totalWorkouts").textContent=s.workouts.length;
  document.getElementById("totalExercises").textContent=getAllExercises().length;
  document.getElementById("activeProgramName").textContent=p?p.name:"-";
  document.getElementById("nextWorkoutHeadline").textContent=day?day.name:"Välj ett upplägg för att komma igång";
  document.getElementById("nextWorkoutSubtext").textContent=day?`Nästa övning: ${day.exercises[0]||"-"} • Upplägg: ${p.name}`:"När du valt ett upplägg visas nästa pass och första övningen här.";
  document.getElementById("dashboardProgram").innerHTML=p?`<div class="mini-card"><strong>${p.name}</strong><div>${p.description||""}</div><div>${day?day.name:"-"}</div></div>`:"Inget upplägg valt ännu.";
  document.getElementById("dashboardHistory").innerHTML=s.workouts.length?s.workouts.slice(0,3).map(w=>`<div class="mini-card"><strong>${w.dayName}</strong><div>${formatDateTime(w.createdAt)}</div><div>${w.exercises.length} övningar loggade</div></div>`).join(""):"Ingen historik ännu.";
}

function renderPrograms(){
 const s=getState(); const grid=document.getElementById("programGrid"); const arr=getAllPrograms();
 grid.innerHTML=arr.map(p=>`<article class="program-card ${s.selectedProgramId===p.id?"active-program":""}"><h3>${p.name}</h3><p class="muted">${p.description||""}</p><div class="program-meta">${p.type==="custom"?"Eget 2-veckorsupplägg":"Förinställt upplägg"}</div><ul class="program-day-list">${p.days.map(d=>`<li>${d.name}</li>`).join("")}</ul><div class="button-row" style="margin-top:14px;"><button data-program="${p.id}">${s.selectedProgramId===p.id?"Valt upplägg":"Välj upplägg"}</button>${p.type==="custom"?`<button class="secondary" data-edit="${p.id}">Redigera</button>`:""}</div></article>`).join("");
 grid.querySelectorAll("[data-program]").forEach(btn=>btn.onclick=()=>{const s=getState(); s.selectedProgramId=btn.dataset.program; s.currentProgramDayIndex=0; s.activeWorkout=null; setState(s); renderAll();});
 grid.querySelectorAll("[data-edit]").forEach(btn=>btn.onclick=()=>startEditProgram(btn.dataset.edit));
}

function renderLibrary(){
 const search=document.getElementById("librarySearch").value.trim().toLowerCase();
 const filter=document.getElementById("libraryFilter").value;
 const items=getAllExercises().filter(e=>e.name.toLowerCase().includes(search)&&(filter==="Alla"||e.muscle===filter));
 document.getElementById("exerciseLibrary").innerHTML=items.length?items.map(e=>`<article class="exercise-card"><span class="badge">${e.muscle}</span><h4>${e.name}</h4><p class="muted">${e.note||""}</p></article>`).join(""):'<div class="muted">Inga övningar matchade din sökning.</div>';
}
document.getElementById("librarySearch").addEventListener("input", renderLibrary);
document.getElementById("libraryFilter").addEventListener("change", renderLibrary);
document.getElementById("resetLibrary").onclick=()=>{document.getElementById("librarySearch").value="";document.getElementById("libraryFilter").value="Alla";renderLibrary();};
document.getElementById("addExerciseForm").addEventListener("submit", e=>{e.preventDefault(); const name=document.getElementById("newExerciseName").value.trim(); if(!name) return; const s=getState(); const muscle=document.getElementById("newExerciseMuscle").value; const note=document.getElementById("newExerciseNote").value.trim(); if(getAllExercises().some(x=>x.name.toLowerCase()===name.toLowerCase())){document.getElementById("addExerciseMessage").classList.remove("hidden"); document.getElementById("addExerciseMessage").textContent="Övningen finns redan."; return;} s.customExercises.unshift({name,muscle,note}); setState(s); e.target.reset(); document.getElementById("addExerciseMessage").classList.remove("hidden"); document.getElementById("addExerciseMessage").textContent="Övningen lades till."; renderAll();});

function renderHistory(){
 const s=getState(); const el=document.getElementById("historyList");
 el.innerHTML=s.workouts.length?s.workouts.map(w=>`<article class="history-item"><div class="history-top"><div><strong>${w.dayName}</strong><div>${w.programName}</div></div><div>${formatDateTime(w.createdAt)}</div></div><ul class="simple-list">${w.exercises.map(ex=>`<li><strong>${ex.exercise}</strong> – ${ex.sets.map((set,i)=>`set ${i+1}: ${set.weight||0} kg × ${set.reps||0}`).join(" • ")}${ex.failure?" • failure på set 3":""}</li>`).join("")}</ul></article>`).join(""):"Ingen historik ännu.";
}

function startWorkout(){
 const s=getState(); const p=findProgramById(s.selectedProgramId); const d=getCurrentProgramDay(s); if(!p||!d) return false;
 s.activeWorkout={programId:p.id,programName:p.name,dayName:d.name,currentExerciseIndex:0,currentSetIndex:0,exercises:d.exercises.map(name=>({exercise:name,sets:[{weight:"",reps:""},{weight:"",reps:""},{weight:"",reps:""}],failure:false,note:""}))};
 setState(s); return true;
}
function renderWorkout(){
 const s=getState(); const notReady=document.getElementById("workoutNotReady"); const runner=document.getElementById("workoutRunner"); const complete=document.getElementById("workoutComplete"); complete.classList.add("hidden");
 if(!s.selectedProgramId){notReady.classList.remove("hidden"); runner.classList.add("hidden"); return;}
 if(!s.activeWorkout){notReady.classList.remove("hidden"); runner.classList.add("hidden"); const d=getCurrentProgramDay(s); notReady.innerHTML=`Aktiv dag: <strong>${d?d.name:"-"}</strong>. Tryck på <strong>Starta dagens pass</strong>.`; return;}
 const w=s.activeWorkout; const entry=w.exercises[w.currentExerciseIndex];
 if(!entry){runner.classList.add("hidden"); complete.classList.remove("hidden"); complete.innerHTML=`<strong>Passet är klart.</strong><br>${w.dayName} sparades i historiken.`; return;}
 notReady.classList.add("hidden"); runner.classList.remove("hidden");
 document.getElementById("currentExerciseName").textContent=entry.exercise;
 document.getElementById("currentExerciseMeta").textContent=`${w.dayName} • 3 set per övning`;
 document.getElementById("exerciseProgress").textContent=`${w.currentExerciseIndex+1} / ${w.exercises.length}`;
 const human=w.currentSetIndex+1; document.getElementById("currentSetTitle").textContent=`Set ${human} av 3`; document.getElementById("setStepPill").textContent=`Set ${human}`; document.getElementById("failureWrap").classList.toggle("hidden", human!==3);
 const rec=getRecommendationForExercise(entry.exercise);
 if(!rec){document.getElementById("exerciseRecommendation").innerHTML="Ingen tidigare loggning för den här övningen ännu.";}
 else {
   const prog=rec.boostSteps>0?`<div><strong>Progression:</strong> +${rec.boostSteps} steg på set 3 eftersom du klarade ${rec.lastReps} reps.</div>`:`<div><strong>Progression:</strong> ingen höjning ännu.</div>`;
   document.getElementById("exerciseRecommendation").innerHTML=`<div><strong>Senast:</strong> ${formatKg(rec.lastWeight)} × ${rec.lastReps} reps på failure-setet.</div>${prog}<div style="margin-top:8px;"><strong>Nästa gång:</strong></div><div>Set 1: <strong>${formatKg(rec.set1)}</strong> för <strong>10–12</strong></div><div>Set 2: <strong>${formatKg(rec.set2)}</strong> för <strong>10–12</strong></div><div>Set 3: <strong>${formatKg(rec.set3)}</strong> för <strong>till failure</strong></div>`;
 }
 document.getElementById("setWeight").value=entry.sets[w.currentSetIndex].weight||"";
 document.getElementById("setReps").value=entry.sets[w.currentSetIndex].reps||"";
 document.getElementById("setFailure").checked=human===3;
 document.getElementById("exerciseNote").value=entry.note||"";
 document.getElementById("loggedSetsPreview").innerHTML=entry.sets.map((set,i)=>set.weight||set.reps?`<div>Set ${i+1}: ${set.weight||0} kg × ${set.reps||0} reps</div>`:"").filter(Boolean).join("") || "Inga set loggade ännu.";
}
document.getElementById("startWorkoutBtn").onclick=()=>{if(startWorkout()) renderAll();};
document.getElementById("resetCurrentWorkoutBtn").onclick=()=>{const s=getState(); s.activeWorkout=null; setState(s); renderAll();};
document.getElementById("fillRecommendedBtn").onclick=()=>{const s=getState(); if(!s.activeWorkout) return; const entry=s.activeWorkout.exercises[s.activeWorkout.currentExerciseIndex]; const rec=getRecommendationForExercise(entry.exercise); if(!rec) return; const idx=s.activeWorkout.currentSetIndex; if(idx===0){setWeight.value=rec.set1; setReps.value=12;} if(idx===1){setWeight.value=rec.set2; setReps.value=12;} if(idx===2){setWeight.value=rec.set3; setReps.value=10;}};
document.getElementById("setLoggerForm").addEventListener("submit", e=>{e.preventDefault(); const s=getState(); const w=s.activeWorkout; if(!w) return; const entry=w.exercises[w.currentExerciseIndex]; const idx=w.currentSetIndex; const weight=Number(setWeight.value); const reps=Number(setReps.value); if(!weight||!reps) return; entry.sets[idx]={weight,reps}; entry.note=exerciseNote.value.trim(); if(idx===2){ entry.failure=setFailure.checked; w.currentExerciseIndex += 1; w.currentSetIndex = 0; if(w.currentExerciseIndex>=w.exercises.length){ s.workouts.unshift({programName:w.programName,dayName:w.dayName,exercises:w.exercises,createdAt:new Date().toISOString()}); s.activeWorkout=null; const p=findProgramById(s.selectedProgramId); if(p) s.currentProgramDayIndex=(s.currentProgramDayIndex+1)%p.days.length; } else { s.activeWorkout=w; } } else { w.currentSetIndex += 1; s.activeWorkout=w; } setState(s); renderAll(); });

function createExerciseRow(dayIdx, value=""){const options=getAllExercises().map(e=>`<option value="${e.name}" ${e.name===value?"selected":""}>${e.name}</option>`).join(""); return `<div class="exercise-row"><select name="exercise-${dayIdx}">${options}</select><button type="button" class="outline-btn tiny-btn" data-remove-exercise>Ta bort</button></div>`;}
function attachExerciseButtons(scope=document){scope.querySelectorAll("[data-add-exercise]").forEach(btn=>btn.onclick=()=>{const list=btn.closest(".custom-day-card").querySelector("[data-exercise-list]"); list.insertAdjacentHTML("beforeend", createExerciseRow(btn.dataset.dayidx)); attachExerciseButtons(list.parentElement);}); scope.querySelectorAll("[data-remove-exercise]").forEach(btn=>btn.onclick=()=>{const list=btn.closest("[data-exercise-list]"); if(list.querySelectorAll(".exercise-row").length>1) btn.closest(".exercise-row").remove();});}
function renderBuilder(freq, existingDays=null){switchView("programs"); const c=document.getElementById("customProgramDays"); c.innerHTML=""; for(let i=0;i<freq*2;i++){const week=Math.floor(i/freq)+1; const pass=(i%freq)+1; const idx=`d${i}`; const day=existingDays?existingDays[i]:null; const rows=(day&&day.exercises&&day.exercises.length?day.exercises:["Bänkpress","Latsdrag","Axelpress","Bicepscurl"]).map(ex=>createExerciseRow(idx, ex)).join(""); const card=document.createElement("div"); card.className="custom-day-card"; card.innerHTML=`<h4>Vecka ${week} – Pass ${pass}</h4><div class="form-grid"><label class="full">Passnamn<input type="text" name="dayName-${idx}" value="${day?day.name.replace(/^Vecka \d+ – /,''):''}" placeholder="Till exempel Bröst + Rygg" /></label><label>Muskelgrupp 1<select name="muscle1-${idx}"><option value="Bröst">Bröst</option><option value="Rygg">Rygg</option><option value="Ben">Ben</option><option value="Axlar">Axlar</option><option value="Armar">Armar</option><option value="Mage">Mage</option></select></label><label>Muskelgrupp 2<select name="muscle2-${idx}"><option value="">Ingen</option><option value="Bröst">Bröst</option><option value="Rygg">Rygg</option><option value="Ben">Ben</option><option value="Axlar">Axlar</option><option value="Armar">Armar</option><option value="Mage">Mage</option></select></label><div class="full"><strong>Övningar</strong><div data-exercise-list>${rows}</div><div class="button-row" style="margin-top:10px;"><button type="button" class="secondary tiny-btn" data-add-exercise data-dayidx="${idx}">Lägg till övning</button></div></div></div>`; c.appendChild(card);} document.getElementById("customProgramBuilder").classList.remove("hidden"); attachExerciseButtons(c);}
function resetEditor(){const s=getState(); s.editingProgramId=null; setState(s); customProgramTitle.textContent="Skapa eget 2-veckorsupplägg"; saveProgramBtn.textContent="Spara eget upplägg"; cancelEditProgramBtn.classList.add("hidden"); customProgramBuilder.classList.add("hidden"); customProgramDays.innerHTML="";}
function startEditProgram(id){const s=getState(); const p=(s.customPrograms||[]).find(x=>x.id===id); if(!p)return; s.editingProgramId=id; setState(s); customProgramTitle.textContent="Redigera eget upplägg"; saveProgramBtn.textContent="Spara ändringar"; cancelEditProgramBtn.classList.remove("hidden"); customProgramName.value=p.name; customProgramFrequency.value=String(p.days.length/2); renderBuilder(Number(customProgramFrequency.value), p.days);}
customProgramSetupForm.addEventListener("submit", e=>{e.preventDefault(); renderBuilder(Number(customProgramFrequency.value));});
cancelEditProgramBtn.addEventListener("click", resetEditor);
customProgramBuilder.addEventListener("submit", e=>{e.preventDefault(); const s=getState(); const freq=Number(customProgramFrequency.value); const name=customProgramName.value.trim()||"Eget upplägg"; const days=[]; for(let i=0;i<freq*2;i++){const week=Math.floor(i/freq)+1; const pass=(i%freq)+1; const idx=`d${i}`; const dayName=e.target.querySelector(`[name="dayName-${idx}"]`).value.trim()||`Pass ${pass}`; const m1=e.target.querySelector(`[name="muscle1-${idx}"]`).value; const m2=e.target.querySelector(`[name="muscle2-${idx}"]`).value; const exercises=[...e.target.querySelectorAll(`[name="exercise-${idx}"]`)].map(el=>el.value).filter(Boolean); days.push({name:`Vecka ${week} – ${dayName}`, muscles:[m1,m2].filter(Boolean), exercises}); } let edited=false; if(s.editingProgramId){ s.customPrograms=s.customPrograms.map(p=>p.id===s.editingProgramId?{...p,name,description:`Eget tvåveckorsupplägg • ${freq} pass per vecka`,type:"custom",days}:p); s.selectedProgramId=s.editingProgramId; edited=true; } else { const id="custom-"+Date.now(); s.customPrograms.unshift({id,name,description:`Eget tvåveckorsupplägg • ${freq} pass per vecka`,type:"custom",days}); s.selectedProgramId=id; } s.currentProgramDayIndex=0; s.activeWorkout=null; s.editingProgramId=null; setState(s); customProgramMessage.classList.remove("hidden"); customProgramMessage.textContent=edited?"Upplägget uppdaterades.":"Eget upplägg sparades och valdes."; resetEditor(); renderAll(); switchView("programs"); });

settingsForm.addEventListener("submit", e=>{e.preventDefault(); const s=getState(); s.settings.defaultRound=defaultRound.value; s.settings.userName=userName.value.trim(); setState(s); settingsMessage.classList.remove("hidden"); settingsMessage.textContent="Inställningarna sparades."; renderAll();});
clearHistory.onclick=()=>{const s=getState(); s.workouts=[]; s.activeWorkout=null; setState(s); renderAll();};
exportData.onclick=()=>{const s=getState(); const blob=new Blob([JSON.stringify(s,null,2)],{type:"application/json"}); const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download="min-traning-data.json"; a.click(); URL.revokeObjectURL(url);};
function renderAll(){ userName.value=getState().settings.userName||""; defaultRound.value=getState().settings.defaultRound||"2.5"; renderDashboard(); renderPrograms(); renderLibrary(); renderHistory(); renderWorkout(); }
renderAll();
