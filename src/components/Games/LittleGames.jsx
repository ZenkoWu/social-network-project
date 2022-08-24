// import React from 'react'

// export default function LittleGames() {
//  let h =<p>Мы загадали рандомное число в диапозоне от 0 до 100;
//  Попробуйте угадать его не более, чем за 10 попыток:</p>

//     let [num, setNum] = React.useState(h)
//     let number = React.createRef()

    
//     let h3 = React.createRef()
  
//     function getRandomBetween(min, max) {
//       return Math.floor(Math.random() * (max - min + 1) + min)
//     }
//     let random = getRandomBetween(0, 100)
//     let i;
//     let guessNum = number
  
//     let Guess = () => {
      
//       for (i = 1; i <= 10; i++) {
//        if (guessNum > random) {
        
//       } else if (guessNum < random) {
        
//       } 
//       else {
//       //  (`Вы угадали число за ${i} попыток! Это ${random}`)
       
//       } 
//       guessNum = 'Введите другое число :)'
//       }
      
//       if (i > 10) {
//         // (`Количество попыток исчерпано, попробуйте еще раз :( Рандомное число: ${random}`)
//       }
  
//     }
  
//     let changeH = ()=> {
//         if(guessNum > random) {
//             let h = 'Слишком большое число, введите другое'
//             setNum({h})
            
//         }
//       console.log(num)
//     }
//         return (
//             <div  style={{margin: '20px'}}> 
//             <h3 ref={h3}>{num}</h3>
//               {/* {guessNum < random ? <p>Слишком маленькое значение, введите другое:</p>
//                : guessNum > random ?  <p>Слишком большое значение, введите другое:</p> 
//               : <p>`Вы угадали число за ${i} попыток! Это ${random}`</p> } */}
            
//                 <input placeholder="Введите число..." ref={number}></input>
//                 <button onClick={changeH}>Guess</button>
//             </div>
//         )
// }


import React, { Component } from 'react'
import GuessRandomNumber from './GuessRandomNumber'


export default class LittleGames extends Component {

  
  render() {
    return (
    <div>
      <GuessRandomNumber/>
    </div>
    )
  }
}
