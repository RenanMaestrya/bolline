let pageAnswer = document.getElementsByClassName('decif').item(HTMLCollection).innerHTML.trim().toLowerCase().replace(/\s+/g, '');

const btn = document.querySelector('#button');

const formC = document.querySelector('.form-control');

const possivel = "caçadores de recompensas";

const travaLingua = "trava-lingua";

const voltar = "voltar ao inicio";

btn.addEventListener('click', function(e){
    e.preventDefault();
    const aw = document.querySelector('#answer');
    const awValue = aw.value.trim().toLowerCase().replace(/\s+/g, '');

    if(awValue === pageAnswer){
        window.location.href = page;
    }else if(awValue == possivel.toLocaleLowerCase().trim().replace(/\s+/g, '').replace(/\.|\-/g, '')){
        window.alert('Você é apenas um!');
        return;
    }else if(awValue == travaLingua.toLocaleLowerCase().trim().replace(/\s+/g, '').replace(/\.|\-/g, '') ){
        window.alert('Você foi traído denovo!');
        return;
    }else if(awValue == voltar.toLocaleLowerCase().trim().replace(/\s+/g, '').replace(/\.|\-/g, '') ){
        window.location.href = 'index.html';
    }
    else{
        formC.className = 'form-control error';
    }
})

const inputAw = document.querySelector('#answer');

inputAw.addEventListener('keydown', function(){
    formC.className = 'form-control';
})