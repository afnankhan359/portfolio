const menu=document.getElementById('menu');
const nav=document.getElementById('nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('show')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  document.getElementById('formStatus').textContent='Demo form submitted. Connect an email service before publishing to receive messages.';
  e.target.reset();
});