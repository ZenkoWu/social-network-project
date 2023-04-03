import React, { useEffect } from 'react'
import GuessRandomNumber from './GuessRandomNumber'

const LittleGames = () => {
    useEffect(() => {document.title = 'Games'}, [])

    return (
        <div>
            <GuessRandomNumber/>
        </div>
    )
}

export default LittleGames;