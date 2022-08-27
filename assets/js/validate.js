let pageAnswer = document.getElementsByClassName('decif').item(HTMLCollection).innerHTML;

const btn = document.querySelector('#button');
const aw = document.querySelector('#answer');

btn.addEventListener('click', function(e){
    e.preventDefault();
    const aw = document.querySelector('#answer');
    const awValue = aw.value;

    if(awValue === pageAnswer){
        window.location.href = page;
    }else{
        alert('errado');
    }
})







