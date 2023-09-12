/* CONSEGNA
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
*/

/* SVOLGIMENTO 
1- Creare ciclo FOR che stampi da 1 a 100.
2- Creare un IF per i multipli di 3 che stampi “Fizz”.
3- Creare un IF per i multipli di 5 che stampi “Buzz”.
4- Creare un IF per i multipli di 3 && 5 che stampi “FizzBuzz”.
--RICORDA!!--
**Come faccio a sapere se un numero è divisibile per un altro?**
Quando il modulo(%) di quel numero da resto 0.
*/
const boxContainer = document.querySelector('.box-container');

for (let i = 1; i <= 100; i++){
  const box = document.createElement('div')
  box.className = box ;

  if (!(i % 3) && !(i % 5)){
    box.classList.add('red-box');
    box.textContent('FizzBuzz')
  }
  else if(!(i % 3)){
    box.classList.add('green-box');
    box.textContent('Buzz')
  }
  else if (!(i % 5)){
    box.classList.add('yellow-box');
    box.textContent('Fizz')
  }
  else{
    box.classList.add('blue-box');
    box.append(i);
  }

  boxContainer.append(box)

}