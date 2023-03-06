/*
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno:  :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/



const playDom = document.getElementById('play');

const resetDom = document.getElementById('reset');

const logoDom = document.getElementById('logoname');

const gridDOm = document.getElementById('grid');

const selectDom = document.getElementById('difficulty');
const easyDom = document.getElementById('easy');
const hardDom = document.getElementById('hard');
const crazyDom = document.getElementById('crazy');



//Creo i quadratini con cliclo for  

playDom.addEventListener('click', //Evento click per la griglia di partenza 

  function(){
    gridDOm.classList.add('show');

    if(selectDom.value == 1){ //difficoltà 1 => 100 caselle, divise in 10 caselle per 10 righe

      for (let i = 1; i <= 100; i ++){
      
        const square = newSquareGenerator('square', 'easy');
      
        square.addEventListener('click',
          function(){
            this.classList.toggle('clicked');
            console.log(i);
          }
        )
      
        gridDOm.append(square);
      
        square.innerHTML = `<div>${i}</div>`;
      
        playDom.addEventListener('click', //Reset gioco se riclicclo Play
      
          function(){
            square.classList.remove('clicked');
          }
        )
    
      }
    
    }else if(selectDom.value == 2){ //difficoltà 2 => 81 caselle,  9 caselle per 9 righe
    
      for (let i = 1; i <= 81; i ++){
      
        const square = newSquareGenerator('square', 'hard');
      
        square.addEventListener('click',
          function(){
            this.classList.toggle('clicked');
            console.log(i);
          }
        )
      
        gridDOm.append(square);
      
        square.innerHTML = `<div>${i}</div>`;
      
        playDom.addEventListener('click', //Reset gioco se riclicclo Play
      
          function(){
            square.classList.remove('clicked');
          }
        )
      
        resetDom.addEventListener('click',   //Reset gioco se clicco Reset
      
          function(){
            square.classList.remove('clicked');
          }
        )
      }
    
    }else if(selectDom.value == 3){ //con difficoltà 3 => 49 caselle,  in 7 caselle per 7 righe
    
      for (let i = 1; i <= 49; i ++){
      
        const square = newSquareGenerator('square', 'crazy');
      
        square.addEventListener('click',
          function(){
            this.classList.toggle('clicked');
            console.log(i);
          }
        )
      
        gridDOm.append(square);
      
        square.innerHTML = `<div>${i}</div>`;
      
        playDom.addEventListener('click', //Reset gioco se riclicclo Play
      
          function(){
            square.classList.remove('clicked');
          }
        )
      
        resetDom.addEventListener('click',   //Reset gioco se clicco Reset
      
          function(){
            square.classList.remove('clicked');
          }
        )
      }
    }
  }
)

resetDom.addEventListener('click',   //Reset gioco se clicco Reset
      
  function(){
    gridDOm.classList.remove('show');
  }
)


logoDom.addEventListener('click', //Reset griglia
  
  function(){
    gridDOm.classList.remove('show');
  }
)







//FUNZIONI

// function removeClass(element, classe) {
//   element.classList.remove(classe);
//   return element;
// }


function newSquareGenerator(classe, classe2){
  const element = document.createElement('div');
  element.classList.add(classe);
  element.classList.add(classe2);
  return element;
}






