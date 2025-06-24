
const STORAGE_KEY='sebis_progress';
let progress=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}');
const app=document.getElementById('app');
const statsDiv=document.getElementById('stats');
const backBtn=document.getElementById('backBtn');
let correct=0,wrong=0,open=0;

function saveProgress(){localStorage.setItem(STORAGE_KEY,JSON.stringify(progress));}
function updateStats(){statsDiv.textContent=`✅ ${correct} ❌ ${wrong} 📋 ${open}`;}
function buildTopics(){
  app.innerHTML='';backBtn.style.display='none';correct=wrong=open=0;updateStats();
  Object.keys(questions).forEach(t=>{
    const card=document.createElement('div');
    card.className='topic-card';
    card.innerHTML=`<img src="img/${t.toLowerCase().replace(/ /g,'_')}.png"><p>${t}</p>`;
    card.onclick=()=>startQuiz(t);app.appendChild(card);
  });
}
function startQuiz(topic){
  backBtn.style.display='block';let idx=(progress[topic]?.index)||0, correctCount=progress[topic]?.correct||0, wrongCount=progress[topic]?.wrong||0;
  const list=[...questions[topic]];correct=correctCount;wrong=wrongCount;open=list.length-idx;updateStats();show();
  function show(){
    if(idx>=list.length){
      app.innerHTML=`<h2>Fertig!</h2><p>✅ ${correct} ❌ ${wrong}</p><button onclick="buildTopics()">Zurück</button>`;
      progress[topic]={correct,wrong,index:idx};saveProgress();backBtn.style.display='none';return;
    }
    const q=list[idx];
    app.innerHTML=`<h2>${idx+1}/${list.length}: ${q.q}</h2>`;
    q.options.forEach((opt,i)=>{
      const btn=document.createElement('div');btn.className='option';btn.textContent=opt;
      btn.onclick=()=>{if(btn.classList.contains('done'))return;
        btn.classList.add('done');
        if(i===q.correct){btn.classList.add('correct');correct++;}
        else{btn.classList.add('wrong');wrong++;}
        idx++;open--;updateStats();
        progress[topic]={correct,wrong,index:idx};saveProgress();
        setTimeout(show,600);
      };app.appendChild(btn);
    });
    const exp=q.explanation;
    if(exp){const expBox=document.createElement('div');expBox.innerHTML='<em>Erklärung: '+exp+'</em>';expBox.style.marginTop='1rem';app.appendChild(expBox);}
  }
}
backBtn.onclick=()=>{buildTopics();};
document.addEventListener('DOMContentLoaded',buildTopics);
