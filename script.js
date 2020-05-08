const form = document.querySelector('form');
const testMail = /.+@.+\..+/g;

form.addEventListener('submit',(e)=>{
    if(form.elements.firstName.value===''){
        e.preventDefault();
        document.querySelector('.errorFirstName').style.display = 'block';
        document.getElementById('firstName').classList.add('errorBorder');
        document.querySelector('.icon1').style.visibility = "visible";
        document.getElementById('firstName').classList.add('transparentPlaceholder');

    }
    if(form.elements.lastName.value===''){
        e.preventDefault();
        document.querySelector('.errorLastName').style.display = 'block';
        document.getElementById('lastName').classList.add('errorBorder');
        document.querySelector('.icon2').style.visibility = "visible";
        document.getElementById('lastName').classList.add('transparentPlaceholder');

    }
    if(form.elements.pwd.value===''){
        e.preventDefault();
        document.querySelector('.errorPassword').style.display = 'block';
        document.getElementById('pwd').classList.add('errorBorder');
        document.querySelector('.icon4').style.visibility = "visible";
        document.getElementById('pwd').classList.add('transparentPlaceholder');

    }
    if(testMail.test(form.elements.mail.value)===false){
        e.preventDefault();
        document.querySelector('.errorEmail').style.display = 'block';
        document.getElementById('mail').classList.add('errorBorder');
        document.querySelector('.icon3').style.visibility = "visible";
        document.getElementById('mail').placeholder = "email@example/com";
        document.getElementById('mail').classList.add('redPlaceholder');

    }
})