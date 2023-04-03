import React, { useEffect, useMemo, useState } from 'react'

const gameImg = 'https://sun9-50.userapi.com/impg/hFrH1LlmkYA0zhpKSPY2ob_iWi3u5-kNDuuoEQ/40LOjnvSYYE.jpg?size=604x604&quality=96&sign=0edf0b1b853d84ff445ce55b674a8177&type=album'

const getRandomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)


const GuessRandomNumber=()=> {
    const [isGuessed, setIsGuesed] = useState('')
    const [counter, setCounter] = useState(10)
    const [playMode, setPlayMode] = useState(false)

    useEffect(()=> {
        
    }, [])

    const random = useMemo(()=> getRandomBetween(0, 100), [])
    console.log(random)

    const onPlay = () => {
        setPlayMode(true)
        // random = getRandomBetween(0, 100)
        // console.log(random)
    }
    
    const onReload=()=> {
        guessNum.current.value = ''
        random = getRandomBetween(0, 100)
        setCounter(10)
        setIsGuesed('')
    }

    const closeGame =()=> {
        setPlayMode(false)
        onReload()
    }
    

    const guessNum = React.createRef()
    
    const onNumberGuess=(number)=> {
    
        if (counter > 1) {

            if(number < random && number != '') {
                setIsGuesed(`Число ${number} слишком маленькое! `)
                setCounter(prev => prev-1) 
                guessNum.current.value = ''
            } 
            else if(number > random && number != '') {
                setIsGuesed(`Число ${number} слишком большое! `)
                setCounter(prev => prev-1) 
                guessNum.current.value = ''
            } 
            else if(number == random && number != '') {
                setIsGuesed(`Вы угадали число за ${counter} попыток! Это число ${random}.`)
            } 

            

        } 
        else if(counter == 1) {
            setIsGuesed(`Количество попыток исчерпано, попробуйте еще раз :( Загаданное число: ${random}`)
        }
    }
      
    return (
        <div style={{width:'100%', textAlign: 'center', marginTop: '20px'}}> 
            {
                playMode ? 
                    <div> 
                        <h4 className='px-5 py-3'>
                            {`Мы загадали рандомное число в диапозоне от 0 до 100.
                            Попробуйте угадать его не более, чем за 10 попыток:`}
                        </h4>

                        <input 
                            type="text" 
                            ref={guessNum} 
                            placeholder='Введите число'
                            className=''
                            onKeyUp={(event) => event.code === 'Enter' ? onNumberGuess(guessNum.current.value) : null}
                        />
                        <span>
                            <button className='btn btn-primary' onClick={()=> onNumberGuess(guessNum.current.value)}>
                               {' Guess'}
                            </button>
                        </span>
                        <div>{isGuessed}</div>

                        <div style={{color:'#cd4a27', fontWeight: 'bold'}}>
                           {` Осталось ${counter} попыток`}
                        </div>
                        <span onClick={onReload}>
                            <i class="fa-solid fa-arrow-rotate-right" style={{marginRight: '20px'}}/>
                        </span>
                        <button onClick={closeGame} className="btn btn-primary" >
                            {'Close Game'}
                        </button>
                    </div>

                : 
                    <div style={{width:'100%', textAlign: 'center', marginTop: '20px'}}>
                        <div>
                            <img 
                                src={gameImg} 
                                style={{width:'15rem'}}
                            />
                        </div>
                        <button 
                            onClick={onPlay} 
                            className="btn btn-primary mt-3" 
                        >
                            {'Play Game'}
                        </button>
                    </div>
            }
        </div>
    )
}

export default GuessRandomNumber;