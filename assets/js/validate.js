let pageAnswer = document.getElementsByClassName('decif').item(HTMLCollection).innerHTML;

const btn = document.querySelector('#button');

const formC = document.querySelector('.form-control');

btn.addEventListener('click', function(e){
    e.preventDefault();
    const aw = document.querySelector('#answer');
    const awValue = aw.value.trim();

    if(awValue === pageAnswer){
        window.location.href = page;
    }else{
        formC.className = 'form-control error';
    }
})

const inputAw = document.querySelector('#answer');

inputAw.addEventListener('keydown', function(){
    formC.className = 'form-control';
})