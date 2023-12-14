const urlparams=new URLSearchParams(window.location.search);
const email=urlparams.get('mail');
document.getElementById('span-1').textContent=email;
document.getElementById('btn').addEventListener('click',()=>{
    window.location.href='index.html';
})
