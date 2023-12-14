document.getElementById('btm').addEventListener('click',()=>{

    const email=document.getElementById('email-input').value;
    const emailregex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailregex.test(email)){
        window.location.href='subcribe.html?mail='+encodeURIComponent(email);
        

    }
    else{
        document.getElementById('invalid-error').style.display='flex'
        document.getElementById('email-input').style.backgroundColor='rgb(244, 134, 134)';
        document.getElementById('email-input').style.color='red';
    }

});
