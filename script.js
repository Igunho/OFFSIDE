const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const bar = document.getElementById('loadbar');
const ponta = document.getElementById('ponta');
const btn = document.getElementById('pause');
const despaused = btn.firstElementChild;
const paused = btn.lastElementChild;
const loadpai = document.getElementById('resizer');

let i = 0;
let o = 0;

function befimage(){
    if(i === 1){
     img2.setAttribute('hidden', 'true');
     img1.removeAttribute('hidden');
     i--;
    }else if(i === 2){
     img3.setAttribute('hidden', 'true');
     img2.removeAttribute('hidden');
     i--;
    }
    bar.style.animation = 'none';
    void bar.offsetWidth;
    bar.style.animation = null;

    ponta.style.animation = 'none';
    void ponta.offsetWidth;
    ponta.style.animation = null;
}

function nextimage(){
    if(i === 0){
     img1.setAttribute('hidden', 'true');
     img2.removeAttribute('hidden');
     i++;   
    }else if(i === 1){
     img2.setAttribute('hidden', 'true');
     img3.removeAttribute('hidden');
     i++;
    }else if(i === 2){
     img3.setAttribute('hidden', 'true');
     img1.removeAttribute('hidden');
     i = 0;
    }
    
    bar.style.animation = 'none';
    void bar.offsetWidth;
    bar.style.animation = null;

    ponta.style.animation = 'none';
    void ponta.offsetWidth;
    ponta.style.animation = null;
}

function pause(){
    if(o === 0){
        bar.classList.add("pause");
        ponta.classList.add("pause");
        o++;
        despaused.setAttribute('hidden', 'true');
        paused.removeAttribute('hidden');
    } else{
        bar.classList.remove('pause');
        ponta.classList.remove('pause');
        o--;
        paused.setAttribute('hidden', 'true');
        despaused.removeAttribute('hidden');
        
    }
    
}

ponta.addEventListener('animationend', () => {
    bar.style.animation = 'none';
    void bar.offsetWidth;
    bar.style.animation = null;

    ponta.style.animation = 'none';
    void ponta.offsetWidth;
    ponta.style.animation = null;

    nextimage();
});

    const squares = [];
    const popup = document.createElement('div');
    const barra = document.createElement('div'); 
    const btnx = document.createElement('div');

    //cria as classes e os filhos
    popup.classList.add('load');
    popup.innerHTML = 'Loading...'
    popup.appendChild(barra);
    popup.appendChild(btnx);
    // btnx.innerHTML = "X";
    
    barra.classList.add('barracareg');
    btnx.classList.add('btnx');
    let a = 0;

function load(){
    loadpai.appendChild(popup);
    popup.removeAttribute('hidden');
    let vau = setInterval( function proc() {
            const square = document.createElement('div');
            square.classList.add('square');
            barra.appendChild(square);  
            squares.push(square);
            a++;

             if( a >= 11){
        clearInterval(vau);
        window.location.href = ""
   } }, 800);
}

btnx.addEventListener('click', function close(){
    popup.setAttribute('hidden', 'true')
});


