
const DB={"programs": [{"id": "p4", "name": "4 dagar", "description": "Upper/Lower, 4 pass", "type": "standard", "frequency": 4, "weeks": 1, "days": [{"name": "Dag 1 – Upper", "exercises": ["Bänkpress", "Latsdrag", "Axelpress", "Bicepscurl"]}, {"name": "Dag 2 – Lower", "exercises": ["Knäböj", "Rumänska marklyft", "Liggande lårcurl", "Vadpress"]}, {"name": "Dag 3 – Upper", "exercises": ["Lutande hantelpress", "Sittande rodd", "Sidolyft", "Triceps pushdown"]}, {"name": "Dag 4 – Lower", "exercises": ["Knäböj", "Rumänska marklyft", "Benspark", "Vadpress"]}]}, {"id": "p5", "name": "5 dagar", "description": "Push/Pull/Legs + Upper + Armar", "type": "standard", "frequency": 5, "weeks": 1, "days": [{"name": "Dag 1 – Push", "exercises": ["Bänkpress", "Lutande hantelpress", "Axelpress", "Triceps pushdown"]}, {"name": "Dag 2 – Pull", "exercises": ["Latsdrag", "Sittande rodd", "Skivstångsrodd", "Hammercurl"]}, {"name": "Dag 3 – Ben", "exercises": ["Knäböj", "Rumänska marklyft", "Liggande lårcurl", "Vadpress"]}, {"name": "Dag 4 – Upper", "exercises": ["Dips", "Pull-ups", "Sidolyft", "Bicepscurl"]}, {"name": "Dag 5 – Armar/Mage", "exercises": ["Preacher curl", "French press", "Overhead rope extension", "Ab wheel"]}]}, {"id": "p6", "name": "6 dagar", "description": "3 veckors rotation", "type": "standard", "frequency": 6, "weeks": 3, "days": [{"name": "Vecka 1 – Rygg", "exercises": ["Latsdrag", "Sittande rodd", "Pullover"]}, {"name": "Vecka 1 – Bröst", "exercises": ["Bänkpress", "Lutande hantelpress", "Pec deck"]}, {"name": "Vecka 1 – Ben/Vader", "exercises": ["Knäböj", "Rumänska marklyft", "Liggande lårcurl", "Vadpress"]}, {"name": "Vecka 1 – Triceps", "exercises": ["Triceps pushdown", "French press", "Close grip bench press"]}, {"name": "Vecka 1 – Biceps/Mage", "exercises": ["Bicepscurl", "Hammercurl", "Preacher curl", "Cable crunch"]}, {"name": "Vecka 1 – Axlar", "exercises": ["Axelpress", "Sidolyft", "Omvänd pec deck"]}, {"name": "Vecka 2 – Rygg", "exercises": ["Pull-ups", "Enarms hantelrodd", "Rakarms pulldown"]}, {"name": "Vecka 2 – Bröst", "exercises": ["Lutande bänkpress", "Hantelpress", "Cable fly"]}, {"name": "Vecka 2 – Ben/Vader", "exercises": ["Knäböj", "Rumänska marklyft", "Liggande lårcurl", "Vadpress"]}, {"name": "Vecka 2 – Triceps", "exercises": ["Overhead rope extension", "Dips", "Triceps kickback"]}, {"name": "Vecka 2 – Biceps/Mage", "exercises": ["Preacher curl", "Incline dumbbell curl", "Hammercurl", "Hängande benlyft"]}, {"name": "Vecka 2 – Axlar", "exercises": ["Arnold press", "Hantellyft åt sidan", "Face pull"]}, {"name": "Vecka 3 – Rygg", "exercises": ["T-bar row", "Smalt latsdrag", "Seal row"]}, {"name": "Vecka 3 – Bröst", "exercises": ["Dips", "Lutande Smithpress", "Pec deck"]}, {"name": "Vecka 3 – Ben/Vader", "exercises": ["Knäböj", "Rumänska marklyft", "Liggande lårcurl", "Vadpress"]}, {"name": "Vecka 3 – Triceps", "exercises": ["Close grip bench press", "Enarms pushdown", "Overhead rope extension"]}, {"name": "Vecka 3 – Biceps/Mage", "exercises": ["EZ-bar curl", "Concentration curl", "Incline dumbbell curl", "Russian twists"]}, {"name": "Vecka 3 – Axlar", "exercises": ["Militärpress", "Kabellyft åt sidan", "Reverse fly"]}]}, {"id": "excel4", "name": "Excelprogram 4 veckor", "description": "Redigerbart 4-veckorsupplägg", "type": "custom", "frequency": 3, "weeks": 4, "days": [{"name": "Vecka 1 – Pass 1", "exercises": ["Bänkpress", "Lutande hantelpress", "Hantelflyes", "Pushdowns", "Overhead extension", "Sidolyft"]}, {"name": "Vecka 1 – Pass 2", "exercises": ["Latsdrag / chins", "Skivstångsrodd", "Kabelrodd", "Skivstångscurl", "Lutande hantelcurl"]}, {"name": "Vecka 1 – Pass 3", "exercises": ["Knäböj", "Rumänska marklyft (RDL)", "Vadpress", "Crunch"]}, {"name": "Vecka 2 – Pass 1", "exercises": ["Bänkpress", "Lutande hantelpress", "Hantelflyes", "Pushdowns", "Overhead extension", "Sidolyft"]}, {"name": "Vecka 2 – Pass 2", "exercises": ["Latsdrag / chins", "Skivstångsrodd", "Kabelrodd", "Skivstångscurl", "Lutande hantelcurl"]}, {"name": "Vecka 2 – Pass 3", "exercises": ["Knäböj", "Rumänska marklyft (RDL)", "Vadpress", "Crunch"]}, {"name": "Vecka 3 – Pass 1", "exercises": ["Smal bänkpress", "Pushdowns", "Overhead extension", "Bänkpress", "Hantelflyes", "Sidolyft"]}, {"name": "Vecka 3 – Pass 2", "exercises": ["Skivstångscurl", "Lutande hantelcurl", "Kabelcurl", "Latsdrag", "Rodd"]}, {"name": "Vecka 3 – Pass 3", "exercises": ["Knäböj", "Rumänska marklyft (RDL)", "Vadpress", "Crunch"]}, {"name": "Vecka 4 – Pass 1", "exercises": ["Axelpress", "Sidolyft", "Omvända flyes", "Lutande bänk", "Hantelflyes", "Pushdowns"]}, {"name": "Vecka 4 – Pass 2", "exercises": ["Skivstångscurl", "Hantelcurl", "Kabelcurl", "Latsdrag", "Rodd"]}, {"name": "Vecka 4 – Pass 3", "exercises": ["Knäböj", "Rumänska marklyft (RDL)", "Vadpress", "Crunch"]}]}], "exercises": [{"name": "Bänkpress", "muscle": "Bröst"}, {"name": "Lutande hantelpress", "muscle": "Bröst"}, {"name": "Pec deck", "muscle": "Bröst"}, {"name": "Dips", "muscle": "Bröst"}, {"name": "Hantelpress", "muscle": "Bröst"}, {"name": "Cable fly", "muscle": "Bröst"}, {"name": "Lutande bänkpress", "muscle": "Bröst"}, {"name": "Lutande Smithpress", "muscle": "Bröst"}, {"name": "Hantelflyes", "muscle": "Bröst"}, {"name": "Lutande bänk", "muscle": "Bröst"}, {"name": "Latsdrag", "muscle": "Rygg"}, {"name": "Sittande rodd", "muscle": "Rygg"}, {"name": "Pull-ups", "muscle": "Rygg"}, {"name": "Enarms hantelrodd", "muscle": "Rygg"}, {"name": "Pullover", "muscle": "Rygg"}, {"name": "Rakarms pulldown", "muscle": "Rygg"}, {"name": "Smalt latsdrag", "muscle": "Rygg"}, {"name": "T-bar row", "muscle": "Rygg"}, {"name": "Seal row", "muscle": "Rygg"}, {"name": "Skivstångsrodd", "muscle": "Rygg"}, {"name": "Kabelrodd", "muscle": "Rygg"}, {"name": "Latsdrag / chins", "muscle": "Rygg"}, {"name": "Rodd", "muscle": "Rygg"}, {"name": "Knäböj", "muscle": "Ben"}, {"name": "Rumänska marklyft", "muscle": "Ben"}, {"name": "Rumänska marklyft (RDL)", "muscle": "Ben"}, {"name": "Benspark", "muscle": "Ben"}, {"name": "Liggande lårcurl", "muscle": "Ben"}, {"name": "Lårcurl", "muscle": "Ben"}, {"name": "Vadpress", "muscle": "Ben"}, {"name": "Raka marklyft", "muscle": "Ben"}, {"name": "Utfall", "muscle": "Ben"}, {"name": "Axelpress", "muscle": "Axlar"}, {"name": "Sidolyft", "muscle": "Axlar"}, {"name": "Omvänd pec deck", "muscle": "Axlar"}, {"name": "Arnold press", "muscle": "Axlar"}, {"name": "Hantellyft åt sidan", "muscle": "Axlar"}, {"name": "Face pull", "muscle": "Axlar"}, {"name": "Militärpress", "muscle": "Axlar"}, {"name": "Kabellyft åt sidan", "muscle": "Axlar"}, {"name": "Reverse fly", "muscle": "Axlar"}, {"name": "Omvända flyes", "muscle": "Axlar"}, {"name": "Triceps pushdown", "muscle": "Armar"}, {"name": "Pushdowns", "muscle": "Armar"}, {"name": "French press", "muscle": "Armar"}, {"name": "Overhead rope extension", "muscle": "Armar"}, {"name": "Overhead extension", "muscle": "Armar"}, {"name": "Close grip bench press", "muscle": "Armar"}, {"name": "Smal bänkpress", "muscle": "Armar"}, {"name": "Triceps kickback", "muscle": "Armar"}, {"name": "Enarms pushdown", "muscle": "Armar"}, {"name": "Bicepscurl", "muscle": "Armar"}, {"name": "Hammercurl", "muscle": "Armar"}, {"name": "Preacher curl", "muscle": "Armar"}, {"name": "Incline dumbbell curl", "muscle": "Armar"}, {"name": "Skivstångscurl", "muscle": "Armar"}, {"name": "Lutande hantelcurl", "muscle": "Armar"}, {"name": "Kabelcurl", "muscle": "Armar"}, {"name": "Hantelcurl", "muscle": "Armar"}, {"name": "EZ-bar curl", "muscle": "Armar"}, {"name": "Concentration curl", "muscle": "Armar"}, {"name": "Cable crunch", "muscle": "Mage"}, {"name": "Ab wheel", "muscle": "Mage"}, {"name": "Hängande benlyft", "muscle": "Mage"}, {"name": "Russian twists", "muscle": "Mage"}, {"name": "Crunch", "muscle": "Mage"}]};

const MUSCLE_GROUPS=["Bröst","Rygg","Axlar","Biceps","Triceps","Framsida lår","Baksida lår","Säte","Vader","Mage/bål"];
function inferredMuscles(name,legacyMuscle){
 const n=String(name||"").toLowerCase();
 const profile=(...pairs)=>pairs.map(([muscle,percent])=>({muscle,percent}));
 if(/bänkpress|hantelpress|smithpress|dips|fly|pec deck|lutande bänk/.test(n))return profile(["Bröst",65],["Triceps",20],["Axlar",15]);
 if(/axelpress|militärpress|arnold/.test(n))return profile(["Axlar",65],["Triceps",25],["Bröst",10]);
 if(/sidolyft|kabellyft|omvänd pec|reverse fly|omvända flyes|face pull/.test(n))return profile(["Axlar",80],["Rygg",20]);
 if(/latsdrag|pull-up|chins|rodd|t-bar|seal row|pullover|pulldown/.test(n))return profile(["Rygg",70],["Biceps",25],["Axlar",5]);
 if(/knäböj|utfall/.test(n))return profile(["Framsida lår",45],["Säte",35],["Baksida lår",10],["Mage/bål",10]);
 if(/rumänska|raka marklyft|rdl/.test(n))return profile(["Baksida lår",45],["Säte",35],["Rygg",15],["Mage/bål",5]);
 if(/benspark/.test(n))return profile(["Framsida lår",100]);
 if(/lårcurl/.test(n))return profile(["Baksida lår",100]);
 if(/vadpress/.test(n))return profile(["Vader",100]);
 if(/triceps|pushdown|french press|overhead extension|overhead rope|kickback|smal bänk|close grip/.test(n))return profile(["Triceps",85],["Bröst",10],["Axlar",5]);
 if(/biceps|curl|preacher|hammer|ez-bar|concentration/.test(n))return profile(["Biceps",85],["Rygg",15]);
 if(/crunch|ab wheel|benlyft|russian twist/.test(n))return profile(["Mage/bål",100]);
 const map={Ben:"Framsida lår",Armar:"Biceps",Mage:"Mage/bål"};
 return profile([map[legacyMuscle]||legacyMuscle||"Övrigt",100]);
}
function normalizeExercise(ex){
 const muscles=Array.isArray(ex?.muscles)&&ex.muscles.length?ex.muscles:inferredMuscles(ex?.name,ex?.muscle);
 const cleaned=muscles.map(x=>({muscle:String(x.muscle||"Övrigt"),percent:Math.max(0,Number(x.percent||0))})).filter(x=>x.percent>0);
 const total=cleaned.reduce((sum,x)=>sum+x.percent,0)||100;
 const normalized=cleaned.map((x,i)=>({...x,percent:i===cleaned.length-1?100-cleaned.slice(0,-1).reduce((sum,y)=>sum+Math.round(y.percent/total*100),0):Math.round(x.percent/total*100)}));
 return {...ex,muscle:normalized[0]?.muscle||"Övrigt",muscles:normalized};
}
DB.exercises=DB.exercises.map(normalizeExercise);

const KEY="minTraningStateV95";
const OLD_KEYS=["minTraningStateV941","minTraningStateV94","minTraningStateV932","minTraningStateV93","minTraningStateV92","minTraningStateV8"];
const defaults={version:"9.6.6",workouts:[],settings:{rounding:"2.5",increasePercent:"5",restSeconds:"90",soundEnabled:true,recoveryDays:"4"},selectedProgramId:null,dayIndex:0,active:null,customExercises:[],customPrograms:[],editing:null};

const byId=id=>document.getElementById(id);
const todayTitle=byId("todayTitle"), todaySub=byId("todaySub"), todayExercises=byId("todayExercises");
const workoutCount=byId("workoutCount"), customCount=byId("customCount"), startFromHome=byId("startFromHome");
const programList=byId("programList"), programSetup=byId("programSetup"), programName=byId("programName");
const frequency=byId("frequency"), weeks=byId("weeks"), cancelEdit=byId("cancelEdit");
const programBuilder=byId("programBuilder"), builderDays=byId("builderDays");
const workoutInfo=byId("workoutInfo"), startWorkout=byId("startWorkout"), resetWorkout=byId("resetWorkout");
const runner=byId("runner"), exerciseTitle=byId("exerciseTitle"), exerciseStep=byId("exerciseStep");
const lastResult=byId("lastResult"), recommended=byId("recommended"), coach=byId("coach");
const setForm=byId("setForm"), weight=byId("weight"), reps=byId("reps"), failureLabel=byId("failureLabel");
const failure=byId("failure"), fillRecommendation=byId("fillRecommendation"), loggedSets=byId("loggedSets");
const setStatus=byId("setStatus"), restTimer=byId("restTimer"), timerDisplay=byId("timerDisplay"), timerMessage=byId("timerMessage");
const pauseTimer=byId("pauseTimer"), restartTimer=byId("restartTimer"), skipTimer=byId("skipTimer");
const exerciseForm=byId("exerciseForm"), exerciseName=byId("exerciseName"), muscle=byId("muscle"), primaryPercent=byId("primaryPercent"), secondaryMuscle=byId("secondaryMuscle"), secondaryPercent=byId("secondaryPercent");
const exerciseSearch=byId("exerciseSearch"), exerciseList=byId("exerciseList");
const clearHistory=byId("clearHistory"), historyList=byId("historyList");
const statsRange=byId("statsRange"), statsPeriodText=byId("statsPeriodText"), recoveryCoach=byId("recoveryCoach"), priorityCoach=byId("priorityCoach"), coachInsights=byId("coachInsights"), exerciseStats=byId("exerciseStats"), muscleStats=byId("muscleStats");
const rounding=byId("rounding"), increasePercent=byId("increasePercent");
const exportData=byId("exportData"), importData=byId("importData"), settingsMessage=byId("settingsMessage");
const restSeconds=byId("restSeconds"), soundEnabled=byId("soundEnabled"), testSound=byId("testSound"), recoveryDays=byId("recoveryDays");
const calendarTitle=byId("calendarTitle"), calendarGrid=byId("calendarGrid"), calendarDetails=byId("calendarDetails"), calendarPrev=byId("calendarPrev"), calendarNext=byId("calendarNext");
const exportCsv=byId("exportCsv"), exportExcel=byId("exportExcel");

const clone=x=>JSON.parse(JSON.stringify(x));
function load(){
  let raw=localStorage.getItem(KEY);
  if(raw){try{return normalize(JSON.parse(raw));}catch{}}
  for(const oldKey of OLD_KEYS){
    const old=localStorage.getItem(oldKey);
    if(old){try{localStorage.setItem(oldKey+"-backup-"+Date.now(),old);const migrated=normalize({...defaults,...JSON.parse(old),version:"9.6.6"});localStorage.setItem(KEY,JSON.stringify(migrated));return migrated;}catch{}}
  }
  return clone(defaults);
}
function normalize(s){return {...clone(defaults),...s,settings:{...defaults.settings,...(s.settings||{})},customPrograms:Array.isArray(s.customPrograms)?s.customPrograms:[],customExercises:Array.isArray(s.customExercises)?s.customExercises:[],workouts:Array.isArray(s.workouts)?s.workouts:[]};}
function save(s){localStorage.setItem(KEY,JSON.stringify(normalize(s)));}
function state(){return load();}
function allExercises(){const s=state();return [...DB.exercises,...s.customExercises.map(normalizeExercise)];}
function allPrograms(){const s=state();const built=DB.programs.filter(p=>!s.customPrograms.some(c=>c.id===p.id));return [...built,...s.customPrograms];}
function findProgram(id){return allPrograms().find(p=>p.id===id);}
function currentDay(s=state()){const p=findProgram(s.selectedProgramId);return p?.days?.[s.dayIndex]||null;}
function roundWeight(v){const step=Number(state().settings.rounding||2.5);return Math.round(v/step)*step;}
function formatKg(v){return new Intl.NumberFormat("sv-SE",{maximumFractionDigits:2}).format(Number(v||0))+" kg";}
function escapeHtml(v){return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));}
function navigate(id){document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===id));document.querySelectorAll(".nav").forEach(b=>b.classList.toggle("active",b.dataset.view===id));}
document.querySelectorAll(".nav").forEach(b=>b.addEventListener("click",()=>navigate(b.dataset.view)));
function lastExerciseResult(name){for(const w of state().workouts){const found=w.exercises?.find(e=>e.exercise===name);if(found)return found;}return null;}
function recommendation(name){
  const last=lastExerciseResult(name); if(!last)return null;
  const final=last.sets?.[2]; if(!final?.weight||!final?.reps)return null;
  const settings=state().settings; const minStep=Number(settings.rounding||2.5); const pct=Number(settings.increasePercent||5)/100;
  let target=Number(final.weight);
  if(Number(final.reps)>=7) target=roundWeight(target+Math.max(target*pct,minStep));
  else if(Number(final.reps)<5) target=Math.max(0,roundWeight(target-minStep));
  const change=target-Number(final.weight);
  return {change,sets:[{weight:roundWeight(target*0.8),label:"12 reps"},{weight:roundWeight(target*0.9),label:"10 reps"},{weight:target,label:"5–7 reps"}]};
}
function resultTable(sets,labels=false){if(!sets)return"Ingen data";return '<div class="dataRow"><b>Set</b><b>Vikt</b><b>Reps</b></div>'+sets.map((s,i)=>`<div class="dataRow"><span>Set ${i+1}</span><span>${formatKg(s.weight)}</span><span>${labels?s.label:(s.reps||0)+" reps"}</span></div>`).join("");}
function renderHome(){const s=state(),p=findProgram(s.selectedProgramId),d=currentDay(s);todayTitle.textContent=d?d.name:"Välj ett upplägg";todaySub.textContent=p?`Upplägg: ${p.name}`:"";todayExercises.innerHTML=d?`<ul>${d.exercises.map(x=>`<li>${escapeHtml(x)}</li>`).join("")}</ul>`:"";workoutCount.textContent=s.workouts.length;customCount.textContent=s.customPrograms.length;}
function renderPrograms(){const s=state();programList.innerHTML=allPrograms().map(p=>`<div class="program"><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.description||"")}</p><p>${p.days.length} pass</p><div class="buttonRow"><button data-select="${p.id}">${s.selectedProgramId===p.id?"Valt":"Välj"}</button><button class="secondary" data-edit="${p.id}">Redigera</button>${p.type==="custom"?`<button class="danger" data-delete="${p.id}">Radera</button>`:""}</div></div>`).join("");
document.querySelectorAll("[data-select]").forEach(b=>b.onclick=()=>{const s=state();s.selectedProgramId=b.dataset.select;s.dayIndex=0;s.active=null;save(s);render();});
document.querySelectorAll("[data-edit]").forEach(b=>b.onclick=()=>editProgram(b.dataset.edit));
document.querySelectorAll("[data-delete]").forEach(b=>b.onclick=()=>{const s=state();s.customPrograms=s.customPrograms.filter(p=>p.id!==b.dataset.delete);if(s.selectedProgramId===b.dataset.delete)s.selectedProgramId=null;save(s);render();});
}
function buildExerciseRow(dayIndex,value=""){return `<div class="exerciseRow"><select name="exercise-${dayIndex}">${allExercises().map(e=>`<option${e.name===value?" selected":""}>${escapeHtml(e.name)}</option>`).join("")}</select><button type="button" class="secondary removeExercise">Ta bort</button></div>`;}
function wireBuilder(){document.querySelectorAll(".addExercise").forEach(b=>b.onclick=()=>{b.previousElementSibling.insertAdjacentHTML("beforeend",buildExerciseRow(b.dataset.index));wireBuilder();});document.querySelectorAll(".removeExercise").forEach(b=>b.onclick=()=>b.parentElement.remove());}
function buildProgram(freq,weeksCount,data=null){builderDays.innerHTML="";for(let i=0;i<freq*weeksCount;i++){const d=data?.[i]||{name:`Pass ${i+1}`,exercises:["Bänkpress","Latsdrag","Axelpress"]};builderDays.insertAdjacentHTML("beforeend",`<div class="day"><label>Passnamn<input name="day-${i}" value="${escapeHtml(d.name)}"></label><div>${d.exercises.map(x=>buildExerciseRow(i,x)).join("")}</div><button type="button" class="secondary addExercise" data-index="${i}">Lägg till övning</button></div>`);}programBuilder.classList.remove("hidden");wireBuilder();}
function editProgram(id){const original=findProgram(id);if(!original)return;const s=state();let p=s.customPrograms.find(x=>x.id===id);if(!p){p=clone(original);p.type="custom";p.description=(p.description||"")+" • Redigerad";s.customPrograms.push(p);}s.editing=id;save(s);programName.value=p.name;frequency.value=p.frequency||Math.min(6,p.days.length);weeks.value=p.weeks||Math.ceil(p.days.length/Number(frequency.value));cancelEdit.classList.remove("hidden");buildProgram(Number(frequency.value),Number(weeks.value),p.days);}
function saveProgram(e){e.preventDefault();const name=programName.value.trim();if(!name)return;const freq=Number(frequency.value),weekCount=Number(weeks.value),days=[];for(let i=0;i<freq*weekCount;i++){const title=document.querySelector(`[name="day-${i}"]`).value.trim()||`Pass ${i+1}`;const ex=[...document.querySelectorAll(`[name="exercise-${i}"]`)].map(x=>x.value).filter(Boolean);if(!ex.length){alert(`Passet "${title}" måste ha minst en övning.`);return;}days.push({name:title,exercises:ex});}const s=state();if(s.editing){s.customPrograms=s.customPrograms.map(p=>p.id===s.editing?{...p,name,frequency:freq,weeks:weekCount,days,type:"custom"}:p);s.selectedProgramId=s.editing;s.editing=null;}else{const id="custom-"+Date.now();s.customPrograms.push({id,name,description:"Eget upplägg",type:"custom",frequency:freq,weeks:weekCount,days});s.selectedProgramId=id;}save(s);programBuilder.classList.add("hidden");cancelEdit.classList.add("hidden");render();}
function startSession(){const s=state();if(s.active&&!confirm("Det finns redan ett pågående pass. Vill du ersätta det?"))return false;const p=findProgram(s.selectedProgramId),d=currentDay(s);if(!p||!d){alert("Välj först ett upplägg.");return false;}s.active={programName:p.name,dayName:d.name,currentExerciseIndex:0,currentSetIndex:0,exercises:d.exercises.map(x=>({exercise:x,sets:[{},{},{}],failure:false}))};save(s);return true;}
let timerInterval=null;
function timerState(){const s=state();return s.restTimer||null;}
function saveTimer(t){const s=state();s.restTimer=t;save(s);}
function formatTime(sec){sec=Math.max(0,Math.ceil(sec));return `${String(Math.floor(sec/60)).padStart(2,"0")}:${String(sec%60).padStart(2,"0")}`;}
let audioContext=null;
function unlockAudio(){try{const C=window.AudioContext||window.webkitAudioContext;if(!C)return false;if(!audioContext)audioContext=new C();if(audioContext.state==="suspended")audioContext.resume();return true;}catch{return false;}}
function beep(force=false){if(!force&&!state().settings.soundEnabled)return;try{if(!unlockAudio())return;const o=audioContext.createOscillator(),g=audioContext.createGain();o.connect(g);g.connect(audioContext.destination);o.frequency.value=880;g.gain.setValueAtTime(.2,audioContext.currentTime);g.gain.exponentialRampToValueAtTime(.001,audioContext.currentTime+.55);o.start();o.stop(audioContext.currentTime+.55);}catch{}}
function clearTimerInterval(){if(timerInterval){clearInterval(timerInterval);timerInterval=null;}}
function startRestTimer(seconds=Number(state().settings.restSeconds||90)){unlockAudio();const t={endAt:Date.now()+seconds*1000,duration:seconds,pausedRemaining:null,finishedNotified:false};saveTimer(t);updateTimerUI();clearTimerInterval();timerInterval=setInterval(updateTimerUI,250);setTimeout(()=>restTimer.scrollIntoView({behavior:"smooth",block:"center"}),30);}
function stopRestTimer(){clearTimerInterval();const s=state();s.restTimer=null;save(s);updateTimerUI();}
function pauseOrResumeTimer(){const t=timerState();if(!t)return;if(t.pausedRemaining!=null){t.endAt=Date.now()+t.pausedRemaining*1000;t.pausedRemaining=null;pauseTimer.textContent="Pausa";}else{t.pausedRemaining=Math.max(0,(t.endAt-Date.now())/1000);pauseTimer.textContent="Återuppta";}saveTimer(t);updateTimerUI();}
function updateTimerUI(){const t=timerState();if(!t){restTimer.classList.add("hidden");clearTimerInterval();return;}restTimer.classList.remove("hidden");let remaining=t.pausedRemaining!=null?t.pausedRemaining:(t.endAt-Date.now())/1000;remaining=Math.max(0,remaining);timerDisplay.textContent=formatTime(remaining);pauseTimer.textContent=t.pausedRemaining!=null?"Återuppta":"Pausa";const finished=remaining<=0;restTimer.classList.toggle("finished",finished);timerMessage.textContent=finished?"Vilan är klar – nästa set!":(t.pausedRemaining!=null?"Timern är pausad":"Vila inför nästa set");if(finished&&!t.finishedNotified){t.finishedNotified=true;saveTimer(t);beep();clearTimerInterval();}}
function renderWorkout(){const s=state(),p=findProgram(s.selectedProgramId),d=currentDay(s);workoutInfo.innerHTML=p?`Valt upplägg: <b>${escapeHtml(p.name)}</b> • ${escapeHtml(d?.name||"")}`:"Inget upplägg valt";if(!s.active){runner.classList.add("hidden");return;}runner.classList.remove("hidden");const w=s.active,e=w.exercises[w.currentExerciseIndex];if(!e){runner.classList.add("hidden");return;}exerciseTitle.textContent=e.exercise;exerciseStep.textContent=`Övning ${w.currentExerciseIndex+1} av ${w.exercises.length}`;const last=lastExerciseResult(e.exercise),rec=recommendation(e.exercise);lastResult.innerHTML=last?resultTable(last.sets):"Ingen tidigare loggning";recommended.innerHTML=rec?resultTable(rec.sets,true):"Ingen rekommendation ännu";recommended.closest(".panel").classList.toggle("recommendedFocus",Boolean(rec));coach.textContent=rec?(rec.change>0?"Vikten höjs.":rec.change<0?"Vikten sänks.":"Vikten behålls."):"Logga ett pass för att få rekommendation.";const idx=w.currentSetIndex;setStatus.textContent=`Set ${idx+1} av 3${idx===2?" – failure-set":""}`;setStatus.classList.toggle("failureMode",idx===2);failureLabel.classList.toggle("hidden",idx!==2);failure.checked=Boolean(e.failure&&idx===2);weight.value=e.sets[idx].weight||"";reps.value=e.sets[idx].reps||"";loggedSets.innerHTML=e.sets.map((x,i)=>x.weight?`<div>Set ${i+1}: ${x.weight} kg × ${x.reps}</div>`:"").join("");}
function saveSet(e){e.preventDefault();const s=state(),w=s.active;if(!w)return;const item=w.exercises[w.currentExerciseIndex],idx=w.currentSetIndex;item.sets[idx]={weight:Number(weight.value),reps:Number(reps.value)};let completed=false;if(idx===2){item.failure=failure.checked;w.currentExerciseIndex++;w.currentSetIndex=0;if(w.currentExerciseIndex>=w.exercises.length){s.workouts.unshift({programName:w.programName,dayName:w.dayName,createdAt:new Date().toISOString(),exercises:w.exercises});s.active=null;s.restTimer=null;completed=true;const p=findProgram(s.selectedProgramId);if(p)s.dayIndex=(s.dayIndex+1)%p.days.length;}}else w.currentSetIndex++;save(s);if(!completed)startRestTimer();else stopRestTimer();render();}
function renderLibrary(){const q=exerciseSearch.value.toLowerCase();exerciseList.innerHTML=allExercises().filter(e=>e.name.toLowerCase().includes(q)).map(e=>`<div class="exercise"><b>${escapeHtml(e.name)}</b><div class="muscleChips">${e.muscles.map(x=>`<span>${escapeHtml(x.muscle)} ${x.percent}%</span>`).join("")}</div></div>`).join("");}
function renderHistory(){const s=state();historyList.innerHTML=s.workouts.map(w=>`<div class="program"><b>${escapeHtml(w.dayName)}</b><br>${new Date(w.createdAt).toLocaleString("sv-SE")}<ul>${w.exercises.map(e=>`<li>${escapeHtml(e.exercise)}: ${e.sets.map((x,i)=>`set ${i+1} ${x.weight||0}×${x.reps||0}`).join(", ")}</li>`).join("")}</ul></div>`).join("")||"Ingen historik";}
function percentChange(oldVal,newVal){return oldVal?((newVal-oldVal)/oldVal)*100:0;}
function validSets(exercise){return (exercise?.sets||[]).filter(s=>Number.isFinite(Number(s?.weight))&&Number(s?.weight)>=0&&Number.isFinite(Number(s?.reps))&&Number(s?.reps)>0);}
function setVolume(set){return Number(set?.weight||0)*Number(set?.reps||0);}
function exerciseNameOf(e){return String(e?.exercise||e?.name||"Okänd övning");}
function exerciseProfile(name){return normalizeExercise(allExercises().find(e=>e.name===name)||{name,muscle:"Övrigt"}).muscles;}
function exerciseMuscle(name){return exerciseProfile(name)[0]?.muscle||"Övrigt";}
function localDayKey(date){const d=new Date(date);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;}
function startOfWeek(date){const d=new Date(date);d.setHours(0,0,0,0);const day=(d.getDay()+6)%7;d.setDate(d.getDate()-day);return d;}
function formatNumber(v,digits=0){return new Intl.NumberFormat("sv-SE",{maximumFractionDigits:digits}).format(Number(v||0));}
function filteredWorkouts(){const range=String(statsRange?.value||"90"),cutoff=range==="all"?0:Date.now()-Number(range)*86400000;return (state().workouts||[]).filter(w=>{const t=Date.parse(w?.createdAt);return Number.isFinite(t)&&t>=cutoff;});}
function daysAgoText(timestamp){
 if(!timestamp)return "Ingen data";
 const days=Math.max(0,Math.floor((Date.now()-timestamp)/86400000));
 if(days===0)return "Idag";
 if(days===1)return "Igår";
 return `${days} dagar sedan`;
}
function muscleStatus(timestamp){
 if(!timestamp)return {label:"Ingen data",className:"statusNeutral",icon:"⚪"};
 const days=Math.max(0,Math.floor((Date.now()-timestamp)/86400000));
 if(days<=3)return {label:"Nyligen tränad",className:"statusFresh",icon:"🟢"};
 if(days<=7)return {label:"Börjar bli dags",className:"statusSoon",icon:"🟡"};
 return {label:"Länge sedan",className:"statusStale",icon:"🔴"};
}
function weeklyStreak(workouts){
 const trainedWeeks=new Set(workouts.map(w=>localDayKey(startOfWeek(new Date(w.createdAt)))));
 let cursor=startOfWeek(new Date()),streak=0;
 let key=localDayKey(cursor);
 if(!trainedWeeks.has(key)){cursor.setDate(cursor.getDate()-7);key=localDayKey(cursor);}
 while(trainedWeeks.has(key)){streak++;cursor.setDate(cursor.getDate()-7);key=localDayKey(cursor);}
 return streak;
}


function clamp(value,min,max){return Math.max(min,Math.min(max,value));}
function recoveryBaseScore(days){
 if(days===null)return 100;
 const fullDays=Math.max(3,Math.min(7,Number(state().settings.recoveryDays||4)));
 if(days<=0)return 20;
 if(days>=fullDays)return 100;
 return Math.round(20+(80*days/fullDays));
}
function recoveryStatus(score,hasHistory){
 if(!hasHistory)return {label:"Ingen historik",className:"recoveryNeutral",icon:"⚪"};
 if(score>=80)return {label:"Redo",className:"recoveryReady",icon:"🟢"};
 if(score>=50)return {label:"Återhämtar sig",className:"recoveryProgress",icon:"🟡"};
 return {label:"Behöver vila",className:"recoveryRest",icon:"🔴"};
}
function calculateRecovery(allHistory){
 const excludedMuscles=new Set(["Övrigt","Säte"]);
 const muscleNames=[...new Set(allExercises().flatMap(e=>e.muscles||[]).map(x=>x.muscle).filter(Boolean).filter(name=>!excludedMuscles.has(name)))];
 const sevenDaysAgo=Date.now()-7*86400000;
 const thirtyDaysAgo=Date.now()-30*86400000;
 const stats=Object.fromEntries(muscleNames.map(name=>[name,{latestDate:0,sets7:0,volume7:0,sessions7:new Set(),sessions30:new Set()}]));

 allHistory.forEach((w,workoutIndex)=>{
   const date=Date.parse(w?.createdAt);if(!Number.isFinite(date))return;
   const touched7=new Set(),touched30=new Set();
   (w.exercises||[]).forEach(e=>{
     const sets=validSets(e);
     exerciseProfile(exerciseNameOf(e)).forEach(({muscle,percent})=>{
       if(!stats[muscle])return;
       const factor=percent/100;
       if(sets.length)stats[muscle].latestDate=Math.max(stats[muscle].latestDate,date);
       if(date>=sevenDaysAgo&&sets.length){
         stats[muscle].sets7+=sets.length*factor;
         stats[muscle].volume7+=sets.reduce((sum,set)=>sum+setVolume(set),0)*factor;
         touched7.add(muscle);
       }
       if(date>=thirtyDaysAgo&&sets.length)touched30.add(muscle);
     });
   });
   touched7.forEach(muscle=>stats[muscle].sessions7.add(workoutIndex));
   touched30.forEach(muscle=>stats[muscle].sessions30.add(workoutIndex));
 });

 const activeVolumes=muscleNames.map(name=>stats[name].volume7).filter(v=>v>0);
 const avgVolume=activeVolumes.length?activeVolumes.reduce((a,b)=>a+b,0)/activeVolumes.length:0;
 const activeSets=muscleNames.map(name=>stats[name].sets7).filter(v=>v>0);
 const avgSets=activeSets.length?activeSets.reduce((a,b)=>a+b,0)/activeSets.length:0;

 const recovery=muscleNames.map(name=>{
   const data=stats[name],hasHistory=Boolean(data.latestDate);
   const days=hasHistory?Math.max(0,Math.floor((Date.now()-data.latestDate)/86400000)):null;
   let score=recoveryBaseScore(days);
   const volumeRatio=avgVolume>0?data.volume7/avgVolume:0;
   const setRatio=avgSets>0?data.sets7/avgSets:0;
   const loadPenalty=Math.max(0,volumeRatio-1)*13+Math.max(0,setRatio-1)*8+Math.max(0,data.sessions7.size-2)*6;
   score=Math.round(clamp(score-loadPenalty,5,100));
   if(!hasHistory)score=100;
   const status=recoveryStatus(score,hasHistory);
   let loadLabel="Ingen belastning";
   let loadClass="loadNone";
   if(data.sets7>0){
     if(volumeRatio>1.35||data.sessions7.size>=3){loadLabel="Hög belastning";loadClass="loadHigh";}
     else if(volumeRatio>=.7){loadLabel="Normal belastning";loadClass="loadNormal";}
     else{loadLabel="Låg belastning";loadClass="loadLow";}
   }
   return {name,score,status,days,hasHistory,latestDate:data.latestDate,sets7:data.sets7,volume7:data.volume7,sessions7:data.sessions7.size,sessions30:data.sessions30.size,loadLabel,loadClass};
 }).sort((a,b)=>b.score-a.score||(b.days??999)-(a.days??999)||a.name.localeCompare(b.name,"sv"));

 return recovery;
}

function scoreProgramDays(program,recovery){
 const excludedMuscles=new Set(["Övrigt","Säte"]);
 if(!program?.days?.length)return [];
 const recoveryByMuscle=Object.fromEntries(recovery.map(item=>[item.name,item]));
 const top=recovery.slice(0,3);
 return program.days.map((day,index)=>{
   const profile=(day.exercises||[]).flatMap(name=>exerciseProfile(name)).filter(x=>!excludedMuscles.has(x.muscle));
   const totalWeight=profile.reduce((sum,x)=>sum+x.percent,0)||1;
   const weightedRecovery=profile.reduce((sum,{muscle,percent})=>sum+(recoveryByMuscle[muscle]?.score||0)*percent,0)/totalWeight;
   const topCoverage=top.reduce((sum,item,rank)=>{
     const share=profile.filter(x=>x.muscle===item.name).reduce((a,x)=>a+x.percent,0);
     return sum+Math.min(1,share/100)*(rank===0?10:rank===1?6:3);
   },0);
   const match=Math.round(clamp(weightedRecovery+topCoverage,0,100));
   const status=match>=80?{icon:"🟢",label:"Bra match",className:"matchGood"}:match>=55?{icon:"🟡",label:"OK match",className:"matchOkay"}:{icon:"🔴",label:"Låg match",className:"matchLow"};
   const muscleShares={};
   profile.forEach(({muscle,percent})=>muscleShares[muscle]=(muscleShares[muscle]||0)+percent);
   const focus=Object.entries(muscleShares).map(([muscle,share])=>({muscle,share,recovery:recoveryByMuscle[muscle]?.score||0})).sort((a,b)=>b.recovery-a.recovery||b.share-a.share).slice(0,3);
   const strongest=focus[0];
   const reason=strongest?`${strongest.muscle} ${strongest.recovery}% recovery och ${Math.round(strongest.share)}% av passets muskelprofil.`:"Ingen tydlig muskelprofil.";
   return {index,name:day.name,exercises:day.exercises,match,status,focus,reason};
 }).sort((a,b)=>b.match-a.match||a.index-b.index);
}

function buildRecoveryCoach(allHistory){
 if(!recoveryCoach)return;
 const excludedMuscles=new Set(["Övrigt","Säte"]);
 const recovery=calculateRecovery(allHistory);
 const recommendedMuscle=recovery[0];
 const program=findProgram(state().selectedProgramId);
 const matchedDays=scoreProgramDays(program,recovery);
 const recommendedDay=matchedDays[0]||null;

 const exerciseSuggestions=recommendedMuscle
   ?allExercises().map(ex=>({name:ex.name,share:(ex.muscles||[]).filter(x=>x.muscle===recommendedMuscle.name).reduce((sum,x)=>sum+x.percent,0)})).filter(x=>x.share>0).sort((a,b)=>b.share-a.share||a.name.localeCompare(b.name,"sv")).slice(0,4)
   :[];

 const whyText=recommendedMuscle
   ?(!recommendedMuscle.hasHistory
      ?`${recommendedMuscle.name} saknar tidigare loggad träning och är därför fullt redo.`
      :`${recommendedMuscle.name} har ${recommendedMuscle.score}% återhämtning, tränades ${daysAgoText(recommendedMuscle.latestDate).toLowerCase()} och har ${recommendedMuscle.loadLabel.toLowerCase()} senaste sju dagarna.`)
   :"Logga träningspass för att få en personlig rekommendation.";

 const recommendationHtml=recommendedMuscle?`<section class="recoveryRecommendation">
   <div class="recoveryRecommendationMain">
     <small>DAGENS MUSKELGRUPP</small>
     <h4>${escapeHtml(recommendedMuscle.name)}</h4>
     <p>${escapeHtml(whyText)}</p>
     ${recommendedDay?`<div class="recoveryWorkout"><span>Bäst matchande pass</span><b>${escapeHtml(recommendedDay.name)} · ${recommendedDay.match}%</b><small>${escapeHtml(recommendedDay.reason)}</small></div>`:""}
     ${!recommendedDay&&exerciseSuggestions.length?`<div class="recoveryExercises"><b>Föreslagna övningar</b><span>${exerciseSuggestions.map(x=>escapeHtml(x.name)).join(" · ")}</span></div>`:""}
   </div>
   <div class="recoveryRing" style="--recovery:${recommendedMuscle.score}"><strong>${recommendedMuscle.score}%</strong><span>recovery</span></div>
   ${recommendedDay?`<button type="button" id="chooseRecoveryWorkout" data-day-index="${recommendedDay.index}">Välj passet</button>`:""}
 </section>`:"";

 const rows=recovery.map(item=>`<article class="recoveryDashboardRow ${item.status.className}">
   <div class="recoveryDashboardIdentity">
     <span class="recoveryLight" aria-hidden="true"></span>
     <div><b>${escapeHtml(item.name)}</b><small>${item.status.icon} ${item.status.label}</small></div>
   </div>
   <div class="recoveryDashboardProgress">
     <div class="recoveryDashboardMeter"><div style="width:${item.score}%"></div></div>
     <strong>${item.score}%</strong>
   </div>
   <div class="recoveryDashboardFact"><small>Senast tränad</small><b>${item.hasHistory?daysAgoText(item.latestDate):"Ingen historik"}</b></div>
   <div class="recoveryDashboardFact"><small>Set / 7 dagar</small><b>${formatNumber(item.sets7,1)}</b></div>
   <div class="recoveryDashboardFact"><small>Pass / 30 dagar</small><b>${item.sessions30}</b></div>
   <div class="recoveryDashboardFact"><small>Belastning</small><span class="${item.loadClass}">${escapeHtml(item.loadLabel)}</span></div>
 </article>`).join("");

 recoveryCoach.innerHTML=`${recommendationHtml}
 <div class="recoveryDashboardHeading"><div><small>ALLA MUSKELGRUPPER</small><h4>Recovery Dashboard</h4></div><span>${recovery.length} muskelgrupper</span></div>
 <div class="recoveryDashboard">${rows}</div>
 <p class="recoveryNote">Recovery-poängen är en träningsindikator baserad på loggad historik och ersätter inte medicinsk bedömning eller kroppens egna signaler.</p>`;

 const button=byId("chooseRecoveryWorkout");
 if(button)button.onclick=()=>{const s=state();s.dayIndex=Number(button.dataset.dayIndex)||0;s.active=null;save(s);render();navigate("home");};
}

function buildPriorityCoach(periodWorkouts,allHistory){
 const excludedMuscles=new Set(["Övrigt","Säte"]);
 const recovery=calculateRecovery(allHistory);
 const recoveryByMuscle=Object.fromEntries(recovery.map(item=>[item.name,item]));
 const top=recovery.slice(0,3);
 const program=findProgram(state().selectedProgramId);
 const matchedDays=scoreProgramDays(program,recovery);

 const trainedSets=Object.fromEntries(recovery.map(item=>[item.name,0]));
 periodWorkouts.forEach(w=>(w.exercises||[]).forEach(e=>{const sets=validSets(e).length;exerciseProfile(exerciseNameOf(e)).forEach(({muscle,percent})=>{if(muscle in trainedSets)trainedSets[muscle]+=sets*(percent/100);});}));
 const values=Object.values(trainedSets),maxSets=Math.max(0,...values),minSets=Math.min(...values),balanceRatio=maxSets?minSets/maxSets:1;
 const balance=balanceRatio>=.7?{label:"Bra balans",className:"balanceGood",text:"Setvolymen är relativt jämnt fördelad."}:balanceRatio>=.4?{label:"Viss obalans",className:"balanceOkay",text:"Några muskelgrupper får tydligt mindre träning."}:{label:"Tydlig obalans",className:"balanceNeedsWork",text:"Prioritera återhämtade muskelgrupper som fått mindre träning."};

 const medals=["🥇","🥈","🥉"];
 const priorityHtml=top.map((item,index)=>{const reason=!item.hasHistory?"Ingen tidigare träning registrerad":`${item.score}% återhämtad · ${daysAgoText(item.latestDate)} · ${item.loadLabel}`;return `<article class="priorityItem"><div class="priorityRank">${medals[index]}</div><div class="priorityMain"><b>${escapeHtml(item.name)}</b><span>${escapeHtml(reason)}</span></div><div class="priorityScore"><strong>${item.score}%</strong><small>recovery</small></div></article>`;}).join("");
 const bestDay=matchedDays[0]||null;
 const workoutHtml=program?`<div class="coachTodaySummary"><div><small>REKOMMENDERAT IDAG</small><h4>${bestDay?escapeHtml(bestDay.name):"Inget pass tillgängligt"}</h4><p>${bestDay?"Passet matchar bäst mot de mest återhämtade muskelgrupperna just nu.":""}</p></div>${bestDay?`<div class="coachTodayScore"><strong>${bestDay.match}%</strong><span>matchning</span></div>`:""}</div><div class="workoutMatchesHeader"><div><small>ALLA PASS I ${escapeHtml(program.name).toUpperCase()}</small><h4>Matchning mot återhämtningen</h4></div><span>${matchedDays.length} pass</span></div><div class="workoutMatchList">${matchedDays.map((day,rank)=>`<article class="workoutMatch ${day.status.className}"><div class="workoutMatchRank">#${rank+1}</div><div class="workoutMatchMain"><div class="workoutMatchTitle"><h4>${escapeHtml(day.name)}</h4><span class="matchStatus">${day.status.icon} ${day.status.label}</span></div><p>${day.exercises.map(escapeHtml).join(" · ")}</p><div class="matchReason">${escapeHtml(day.reason)}</div>${day.focus.length?`<small>Bäst återhämtat i passet: ${day.focus.map(x=>`${escapeHtml(x.muscle)} ${x.recovery}%`).join(" · ")}</small>`:""}</div><div class="workoutMatchScore"><strong>${day.match}%</strong><span>matchning</span></div><button type="button" class="chooseMatchedWorkout" data-day-index="${day.index}">Välj passet</button></article>`).join("")}</div>`:`<div class="nextWorkout"><div><small>REKOMMENDATION</small><h4>Träna ${top.map(x=>escapeHtml(x.name)).join(", ")||"hela kroppen"}</h4><p>Välj ett upplägg för att jämföra passen mot din aktuella återhämtning.</p></div></div>`;
 priorityCoach.innerHTML=`<div class="priorityCoachLayout"><section class="priorityWorkoutSection">${workoutHtml}<div class="balanceSummary ${balance.className}"><b>${balance.label}</b><span>${balance.text}</span></div></section><section><div class="coachRecoveryLink"><small>MEST ÅTERHÄMTADE</small><h4>Recovery-prioritet</h4><p>Samma återhämtningsdata används här som i Recovery Coach ovan.</p></div><div class="priorityList">${priorityHtml}</div></section></div>`;
 document.querySelectorAll(".chooseMatchedWorkout").forEach(button=>button.onclick=()=>{const s=state();s.dayIndex=Number(button.dataset.dayIndex)||0;s.active=null;save(s);render();navigate("home");});
}

function renderStats(){
 const workouts=filteredWorkouts();
 const allHistory=(state().workouts||[]).filter(w=>Number.isFinite(Date.parse(w?.createdAt)));
 const range=String(statsRange?.value||"90");
 const periodLabel=range==="all"?"hela träningshistoriken":`de senaste ${range} dagarna`;
 statsPeriodText.textContent=`Visar ${periodLabel}. ${workouts.length} pass hittades.`;
 const exerciseMap={},muscleMap={};
 let totalSets=0;
 workouts.forEach((w,workoutIndex)=>{
   const date=new Date(w.createdAt);if(Number.isNaN(date.getTime()))return;
   const dayKey=localDayKey(date);
   (w.exercises||[]).forEach(e=>{
     const name=exerciseNameOf(e),sets=validSets(e),muscle=exerciseMuscle(name);
     totalSets+=sets.length;
     const ex=exerciseMap[name]||(exerciseMap[name]={name,muscle,workoutIds:new Set(),sets:0,records:[],latestDate:0,latestSets:[],maxWeight:0,firstWeight:null,lastWeight:null,firstDate:null,lastDate:null});
     ex.workoutIds.add(`${dayKey}-${workoutIndex}`);ex.sets+=sets.length;ex.records.push({date:date.getTime(),sets});
     if(date.getTime()>ex.latestDate){ex.latestDate=date.getTime();ex.latestSets=sets;}
     sets.forEach(s=>{ex.maxWeight=Math.max(ex.maxWeight,Number(s.weight||0));});
     const working=[...sets].reverse().find(x=>Number(x.weight)>0);
     if(working){const t=date.getTime(),weight=Number(working.weight);if(ex.firstDate===null||t<ex.firstDate){ex.firstDate=t;ex.firstWeight=weight;}if(ex.lastDate===null||t>ex.lastDate){ex.lastDate=t;ex.lastWeight=weight;}}
     exerciseProfile(name).forEach(({muscle,percent})=>{const factor=percent/100;const m=muscleMap[muscle]||(muscleMap[muscle]={name:muscle,workouts:new Set(),sets:0,latestDate:0,exercises:new Set()});m.workouts.add(`${dayKey}-${workoutIndex}`);m.sets+=sets.length*factor;m.latestDate=Math.max(m.latestDate,date.getTime());m.exercises.add(name);});
   });
 });
 const exercises=Object.values(exerciseMap),muscles=Object.values(muscleMap);
 const topExercise=[...exercises].sort((a,b)=>b.workoutIds.size-a.workoutIds.size||b.sets-a.sets)[0];
 const topMuscle=[...muscles].sort((a,b)=>b.sets-a.sets)[0];
 const latestWorkout=[...allHistory].sort((a,b)=>Date.parse(b.createdAt)-Date.parse(a.createdAt))[0];
 const streak=weeklyStreak(allHistory);

 buildRecoveryCoach(allHistory);
 buildPriorityCoach(workouts,allHistory);
 const insights=[];
 if(streak>=2)insights.push(`🔥 Du har tränat ${streak} veckor i rad.`);
 if(topMuscle)insights.push(`💪 Mest tränade muskelgrupp: ${escapeHtml(topMuscle.name)} (${formatNumber(topMuscle.sets,1)} set under perioden).`);
 const improving=exercises.filter(e=>e.firstWeight>0&&e.lastWeight>e.firstWeight&&e.firstDate!==e.lastDate).sort((a,b)=>percentChange(a.firstWeight,a.lastWeight)-percentChange(b.firstWeight,b.lastWeight)).pop();
 if(improving)insights.push(`📈 ${escapeHtml(improving.name)} har ökat från ${formatKg(improving.firstWeight)} till ${formatKg(improving.lastWeight)}.`);
 const stale=[...muscles].filter(m=>(Date.now()-m.latestDate)/86400000>7).sort((a,b)=>a.latestDate-b.latestDate)[0];
 if(stale)insights.push(`⚠️ ${escapeHtml(stale.name)} tränades senast ${daysAgoText(stale.latestDate).toLowerCase()}.`);
 if(!insights.length)insights.push(workouts.length?"💡 Fortsätt logga pass så blir coachens insikter tydligare.":"💡 Logga ditt första pass för att få personliga insikter.");
 coachInsights.innerHTML=insights.slice(0,4).map(x=>`<div class="coachInsight">${x}</div>`).join("");
 const maxMuscle=Math.max(1,...muscles.map(m=>m.sets));
 muscleStats.innerHTML=muscles.length?`<div class="muscleGrid">${muscles.sort((a,b)=>b.sets-a.sets).map(m=>{const status=muscleStatus(m.latestDate);return`<article class="metricCard"><div class="metricHeader"><div><small class="metricLabel">Muskelgrupp</small><b>${escapeHtml(m.name)}</b><div class="statsSub">Senast tränad: ${daysAgoText(m.latestDate)}</div></div><span class="muscleStatus ${status.className}">${status.icon} ${status.label}</span></div><div class="barTrack"><div class="barFill" style="width:${Math.max(4,m.sets/maxMuscle*100)}%"></div></div><div class="metricFacts"><span><b>${m.workouts.size}</b> pass</span><span><b>${formatNumber(m.sets,1)}</b> set</span><span><b>${m.exercises.size}</b> olika övningar</span></div></article>`;}).join("")}</div>`:'<div class="statsEmpty">Ingen muskelgruppsstatistik för vald period.</div>';
 exerciseStats.innerHTML=exercises.length?`<div class="exerciseStatsGrid">${exercises.sort((a,b)=>b.workoutIds.size-a.workoutIds.size||b.latestDate-a.latestDate).map(e=>{const hasTrend=e.firstWeight>0&&e.lastWeight>0&&e.firstDate!==e.lastDate,change=hasTrend?percentChange(e.firstWeight,e.lastWeight):0,trend=hasTrend?`${change>0?"+":""}${change.toFixed(1)}%`:"–",trendClass=change>0?"trendUp":change<0?"trendDown":"";const latest=e.latestSets.length?e.latestSets.map(s=>`${formatNumber(s.weight,2)}×${s.reps}`).join(", "):"Ingen registrering";return`<article class="exerciseStatCard"><div class="metricHeader"><div><b>${escapeHtml(e.name)}</b><div class="statsSub">${escapeHtml(e.muscle)}</div></div><span class="${trendClass}">${trend}</span></div><div class="exerciseFacts coachExerciseFacts"><div><small>Pass</small><strong>${e.workoutIds.size}</strong></div><div><small>Högsta vikt</small><strong>${e.maxWeight?formatKg(e.maxWeight):"–"}</strong></div><div><small>Senast tränad</small><strong>${daysAgoText(e.latestDate)}</strong></div></div><div class="latestResult"><small>Senast loggade resultat</small><strong>${escapeHtml(latest)}</strong></div><div class="weightTrend">${hasTrend?`${formatKg(e.firstWeight)} → ${formatKg(e.lastWeight)}`:"Mer data behövs för vikttrend"}</div></article>`;}).join("")}</div>`:'<div class="statsEmpty">Ingen övningsstatistik för vald period.</div>';
}


let calendarCursor=new Date(new Date().getFullYear(),new Date().getMonth(),1);
function workoutsByDay(){
 const map={};
 (state().workouts||[]).forEach(w=>{const d=new Date(w?.createdAt);if(Number.isNaN(d.getTime()))return;const key=localDayKey(d);(map[key]||(map[key]=[])).push(w);});
 return map;
}
function workoutVolume(w){return (w.exercises||[]).reduce((sum,e)=>sum+validSets(e).reduce((a,set)=>a+setVolume(set),0),0);}
function renderCalendarDetails(key){
 const items=workoutsByDay()[key]||[];
 if(!items.length){calendarDetails.innerHTML='<div class="statsEmpty">Ingen träning registrerad denna dag.</div>';return;}
 const date=new Date(key+'T12:00:00');
 calendarDetails.innerHTML=`<h4>${date.toLocaleDateString("sv-SE",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}</h4>${items.map(w=>`<article class="calendarWorkout"><div class="metricHeader"><div><b>${escapeHtml(w.dayName||"Träningspass")}</b><div class="statsSub">${escapeHtml(w.programName||"")}</div></div><strong>${formatNumber(workoutVolume(w))} kg-volym</strong></div><ul>${(w.exercises||[]).map(e=>`<li><b>${escapeHtml(exerciseNameOf(e))}</b>: ${validSets(e).map((set,i)=>`set ${i+1} ${formatNumber(set.weight,2)}×${set.reps}`).join(", ")}</li>`).join("")}</ul></article>`).join("")}`;
}
function renderCalendar(){
 if(!calendarGrid)return;
 const year=calendarCursor.getFullYear(),month=calendarCursor.getMonth(),byDay=workoutsByDay();
 calendarTitle.textContent=calendarCursor.toLocaleDateString("sv-SE",{month:"long",year:"numeric"});
 const first=new Date(year,month,1),last=new Date(year,month+1,0),offset=(first.getDay()+6)%7,cells=[];
 for(let i=0;i<offset;i++)cells.push('<div class="calendarDay calendarEmpty" aria-hidden="true"></div>');
 for(let day=1;day<=last.getDate();day++){
   const date=new Date(year,month,day),key=localDayKey(date),items=byDay[key]||[],sets=items.reduce((sum,w)=>sum+(w.exercises||[]).reduce((a,e)=>a+validSets(e).length,0),0);
   cells.push(`<button type="button" class="calendarDay${items.length?" hasWorkout":""}${key===localDayKey(new Date())?" today":""}" data-calendar-day="${key}"><span>${day}</span>${items.length?`<b>${items.length} ${items.length===1?"pass":"pass"}</b><small>${sets} set</small>`:""}</button>`);
 }
 calendarGrid.innerHTML=cells.join("");
 document.querySelectorAll('[data-calendar-day]').forEach(button=>button.onclick=()=>{document.querySelectorAll('[data-calendar-day]').forEach(x=>x.classList.remove('selected'));button.classList.add('selected');renderCalendarDetails(button.dataset.calendarDay);});
}
function csvCell(value){const text=String(value??"");return /[;"\n]/.test(text)?`"${text.replace(/"/g,'""')}"`:text;}
function exportRows(){
 const rows=[["Datum","Program","Pass","Övning","Muskelgrupp","Set","Vikt (kg)","Reps","Failure-set","Setvolym"]];
 (state().workouts||[]).slice().sort((a,b)=>Date.parse(a.createdAt)-Date.parse(b.createdAt)).forEach(w=>(w.exercises||[]).forEach(e=>validSets(e).forEach((set,i)=>rows.push([new Date(w.createdAt).toLocaleString("sv-SE"),w.programName||"",w.dayName||"",exerciseNameOf(e),exerciseMuscle(exerciseNameOf(e)),i+1,set.weight,set.reps,e.failure&&i===2?"Ja":"Nej",setVolume(set)]))));
 return rows;
}
function downloadBlob(blob,filename){const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),0);}
function exportCsvFile(){const csv='\ufeff'+exportRows().map(row=>row.map(csvCell).join(';')).join('\r\n');downloadBlob(new Blob([csv],{type:'text/csv;charset=utf-8'}),'min-traning-v9.6.6-historik.csv');}
function crc32(bytes){let c=-1;for(const b of bytes){c^=b;for(let k=0;k<8;k++)c=(c>>>1)^((c&1)?0xedb88320:0);}return (c^-1)>>>0;}
function u16(n){return [n&255,(n>>>8)&255];}function u32(n){return [n&255,(n>>>8)&255,(n>>>16)&255,(n>>>24)&255];}
function zipStore(files){
 const enc=new TextEncoder(),chunks=[],central=[];let offset=0;
 Object.entries(files).forEach(([name,text])=>{const n=enc.encode(name),data=typeof text==='string'?enc.encode(text):text,crc=crc32(data);const local=new Uint8Array([...u32(0x04034b50),...u16(20),...u16(0),...u16(0),...u16(0),...u16(0),...u32(crc),...u32(data.length),...u32(data.length),...u16(n.length),...u16(0),...n]);chunks.push(local,data);central.push(new Uint8Array([...u32(0x02014b50),...u16(20),...u16(20),...u16(0),...u16(0),...u16(0),...u16(0),...u32(crc),...u32(data.length),...u32(data.length),...u16(n.length),...u16(0),...u16(0),...u16(0),...u16(0),...u32(0),...u32(offset),...n]));offset+=local.length+data.length;});
 const centralSize=central.reduce((s,x)=>s+x.length,0),end=new Uint8Array([...u32(0x06054b50),...u16(0),...u16(0),...u16(central.length),...u16(central.length),...u32(centralSize),...u32(offset),...u16(0)]);return new Blob([...chunks,...central,end],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
}
function xmlEscape(v){return String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function sheetXml(rows){return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetData>${rows.map((row,r)=>`<row r="${r+1}">${row.map((v,c)=>{const ref=String.fromCharCode(65+c)+(r+1);return typeof v==='number'?`<c r="${ref}"><v>${v}</v></c>`:`<c r="${ref}" t="inlineStr"><is><t>${xmlEscape(v)}</t></is></c>`;}).join('')}</row>`).join('')}</sheetData></worksheet>`;}
function exportExcelFile(){
 const history=exportRows(),workouts=state().workouts||[],muscle={};let volume=0;
 workouts.forEach(w=>(w.exercises||[]).forEach(e=>{const m=exerciseMuscle(exerciseNameOf(e));const sets=validSets(e);muscle[m]=(muscle[m]||0)+sets.length;volume+=sets.reduce((s,x)=>s+setVolume(x),0);}));
 const stats=[["Nyckeltal","Värde"],["Totalt antal pass",workouts.length],["Total träningsvolym",volume],["" ,""],["Muskelgrupp","Antal set"],...Object.entries(muscle).sort((a,b)=>b[1]-a[1])];
 const files={'[Content_Types].xml':'<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/worksheets/sheet2.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/></Types>','_rels/.rels':'<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>','xl/workbook.xml':'<?xml version="1.0" encoding="UTF-8"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="Historik" sheetId="1" r:id="rId1"/><sheet name="Statistik" sheetId="2" r:id="rId2"/></sheets></workbook>','xl/_rels/workbook.xml.rels':'<?xml version="1.0" encoding="UTF-8"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet2.xml"/></Relationships>','xl/worksheets/sheet1.xml':sheetXml(history),'xl/worksheets/sheet2.xml':sheetXml(stats)};
 downloadBlob(zipStore(files),'min-traning-v9.6.6-export.xlsx');
}

function render(){renderHome();renderPrograms();renderWorkout();renderLibrary();renderHistory();renderCalendar();renderStats();const s=state();rounding.value=s.settings.rounding;increasePercent.value=s.settings.increasePercent;restSeconds.value=s.settings.restSeconds;soundEnabled.checked=Boolean(s.settings.soundEnabled);recoveryDays.value=String(s.settings.recoveryDays||"4");updateTimerUI();}
programSetup.onsubmit=e=>{e.preventDefault();buildProgram(Number(frequency.value),Number(weeks.value));};
programBuilder.onsubmit=saveProgram;
cancelEdit.onclick=()=>{const s=state();s.editing=null;save(s);programBuilder.classList.add("hidden");cancelEdit.classList.add("hidden");};
startFromHome.onclick=()=>{if(startSession()){navigate("workout");render();}};
startWorkout.onclick=()=>{if(startSession())render();};
resetWorkout.onclick=()=>{const s=state();if(s.active&&confirm("Avsluta det pågående passet?")){s.active=null;save(s);render();}};
setForm.addEventListener("pointerdown",unlockAudio,{once:false});
setForm.onsubmit=saveSet;
fillRecommendation.onclick=()=>{const s=state(),w=s.active;if(!w)return;const item=w.exercises[w.currentExerciseIndex],r=recommendation(item.exercise);if(!r)return;const idx=w.currentSetIndex;weight.value=r.sets[idx].weight;reps.value=idx===0?12:idx===1?10:6;};
exerciseSearch.oninput=renderLibrary;
exerciseForm.onsubmit=e=>{e.preventDefault();const name=exerciseName.value.trim();if(!name)return;const s=state();if(allExercises().some(x=>x.name.toLowerCase()===name.toLowerCase())){alert("Övningen finns redan.");return;}const p1=Number(primaryPercent.value),p2=Number(secondaryPercent.value||0);if(p1+p2!==100){alert("Muskelpåverkan måste tillsammans bli 100 %.");return;}const muscles=[{muscle:muscle.value,percent:p1}];if(p2>0&&secondaryMuscle.value)muscles.push({muscle:secondaryMuscle.value,percent:p2});s.customExercises.push(normalizeExercise({name,muscle:muscle.value,muscles}));save(s);e.target.reset();render();};
clearHistory.onclick=()=>{if(confirm("Rensa hela träningshistoriken?")){const s=state();s.workouts=[];save(s);render();}};
statsRange.onchange=renderStats;
rounding.onchange=()=>{const s=state();s.settings.rounding=rounding.value;save(s);};
increasePercent.onchange=()=>{const s=state();s.settings.increasePercent=increasePercent.value;save(s);};
recoveryDays.onchange=()=>{const s=state();s.settings.recoveryDays=recoveryDays.value;save(s);renderStats();};
calendarPrev.onclick=()=>{calendarCursor=new Date(calendarCursor.getFullYear(),calendarCursor.getMonth()-1,1);renderCalendar();};
calendarNext.onclick=()=>{calendarCursor=new Date(calendarCursor.getFullYear(),calendarCursor.getMonth()+1,1);renderCalendar();};
exportCsv.onclick=exportCsvFile;
exportExcel.onclick=exportExcelFile;

pauseTimer.onclick=pauseOrResumeTimer;
restartTimer.onclick=()=>startRestTimer(Number(state().settings.restSeconds||90));
skipTimer.onclick=stopRestTimer;
restSeconds.onchange=()=>{const s=state();s.settings.restSeconds=restSeconds.value;save(s);};
soundEnabled.onchange=()=>{const s=state();s.settings.soundEnabled=soundEnabled.checked;save(s);unlockAudio();};
testSound.onclick=()=>{unlockAudio();beep(true);};
exportData.onclick=()=>{const blob=new Blob([JSON.stringify(state(),null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download="min-traning-v9.6.6-backup.json";a.click();URL.revokeObjectURL(url);};
importData.onchange=e=>{const file=e.target.files[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const parsed=JSON.parse(reader.result);if(!Array.isArray(parsed.workouts)||!parsed.settings)throw new Error();localStorage.setItem(KEY+"-backup-"+Date.now(),JSON.stringify(state()));save(normalize(parsed));settingsMessage.textContent="Importen lyckades.";render();}catch{settingsMessage.textContent="Filen är inte en giltig Min Träning-backup.";}};reader.readAsText(file);};
render();
if(timerState()&&timerState().pausedRemaining==null)timerInterval=setInterval(updateTimerUI,250);
