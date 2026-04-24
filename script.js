// LOADER
window.addEventListener('load',()=>{
  setTimeout(()=>{
    document.getElementById('loader').classList.add('hide');
  },2000);
});



// NAV
document.getElementById('menuBtn').addEventListener('click',()=>{
  document.getElementById('navList').classList.toggle('active');
});
document.querySelectorAll('#navList a').forEach(a=>a.addEventListener('click',()=>{
  document.getElementById('navList').classList.remove('active');
}));
window.addEventListener('scroll',()=>{
  document.getElementById('nav').classList.toggle('scrolled',window.scrollY>50);
});

// REVEAL
function reveal(){
  document.querySelectorAll('.reveal').forEach(el=>{
    if(el.getBoundingClientRect().top<window.innerHeight-80)el.classList.add('active');
  });
}
window.addEventListener('scroll',reveal);reveal();

// TYPING
const words=['stunning websites.','bold interfaces.','pixel-perfect layouts.','digital experiences.','websites that wow.'];
let wi=0,ci=0,del=false;
const el=document.getElementById('typed');
function type(){
  const w=words[wi];
  if(!del){el.textContent=w.slice(0,++ci);if(ci===w.length){del=true;setTimeout(type,2000);return;}}
  else{el.textContent=w.slice(0,--ci);if(ci===0){del=false;wi=(wi+1)%words.length;}}
  setTimeout(type,del?45:85);
}type();

document.querySelector(".cform").addEventListener("submit",function(e){
  e.preventDefault();
  alert("Message sent!");
});