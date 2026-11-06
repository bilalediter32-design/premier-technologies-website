const menuToggle=document.getElementById('menuToggle');
const mainNav=document.getElementById('mainNav');
menuToggle.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'✕':'☰';});
document.querySelectorAll('.main-nav a').forEach(link=>link.addEventListener('click',()=>{mainNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰';}));
let currentLang='en';
const langToggle=document.getElementById('langToggle');
langToggle.addEventListener('click',()=>{
  currentLang=currentLang==='en'?'ur':'en';
  document.documentElement.lang=currentLang;
  document.body.classList.toggle('rtl',currentLang==='ur');
  document.querySelectorAll('[data-en][data-ur]').forEach(el=>{el.innerHTML=el.dataset[currentLang];});
  langToggle.textContent=currentLang==='en'?'اردو':'English';
});
document.getElementById('year').textContent=new Date().getFullYear();
