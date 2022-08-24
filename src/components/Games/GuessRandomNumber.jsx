import React, { Component } from 'react'

export default class GuessRandomNumber extends Component {
  state = {
    guessMode: '',
    counter: 10,
    playMode: false,
  }

  onPlay = () => {
    this.setState({playMode: true})
  }

  closeGame = () => {
    this.setState({playMode: false})
  }

  getRandomBetween = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1) + min)
  
  }

  onReload =() => {

   
   }

   random = this.getRandomBetween(0, 100)

   guessNum = React.createRef()

   onNumberGuess=()=> {
     let number = this.guessNum.current.value

     if (this.state.counter > 1) {
       if(number < this.random && number != '') {
         this.setState({guessMode: `Число ${number} слишком маленькое! `,
         counter: this.state.counter - 1})
         this.guessNum.current.value = ''
         console.log(this.state.counter)
       } else if(number > this.random && number != '') {
           this.setState({guessMode: `Число ${number} слишком большое!`, 
           counter: this.state.counter - 1})
           this.guessNum.current.value = ''
           console.log(this.state.counter)
       } else if(number == this.random && number != '') {
           this.setState({guessMode: `Вы угадали число за ${this.state.counter} попыток! Это число ${this.random}.`})
           this.guessNum.current.value = ''
       } 

     } else if(this.state.counter = 1) {
        this.setState({guessMode: `Количество попыток исчерпано, попробуйте еще раз :( Загаданное число: ${this.random}`,
        counter: this.state.counter - 1})
        this.guessNum.current.value = ''
    }
   }
  

  render() {
    return (
      <div style={{width:'100%', textAlign: 'center', marginTop: '20px'}}> 
        {this.state.playMode ? 
          <div> 
            <h4>
              Мы загадали рандомное число в диапозоне от 0 до 100.
              Попробуйте угадать его не более, чем за 10 попыток:
            </h4>
            <input type="text" ref={this.guessNum} placeholder='Введите число'
               onKeyUp = {(event) => event.code === 'Enter' ? this.onNumberGuess() : null}/>
            <span ><button className='btn btn-primary' onClick={this.onNumberGuess}>Guess</button></span>
            <div>{this.state.guessMode}</div>
            <div style={{color:'#cd4a27', fontWeight: 'bold'}}>Осталось {this.state.counter} попыток</div>
            <span onClick={this.onReload}><i class="fa-solid fa-arrow-rotate-right" style={{marginRight: '20px'}}></i></span>
            <button onClick={this.closeGame} className="btn btn-primary" >Close Game</button>
          </div>

        : <div style={{width:'100%', textAlign: 'center', marginTop: '20px'}}>
            <div>
              <img src='https://sun9-50.userapi.com/impg/hFrH1LlmkYA0zhpKSPY2ob_iWi3u5-kNDuuoEQ/40LOjnvSYYE.jpg?size=604x604&quality=96&sign=0edf0b1b853d84ff445ce55b674a8177&type=album'
              style={{width:'200px', }}/>
            </div>
            <button onClick={this.onPlay} className="btn btn-primary" style={{ margin: '10px'}}>Play Game</button>
          </div>}
      </div>
    )
  }
}








 

  

