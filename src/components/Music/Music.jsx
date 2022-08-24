
// import React, { Component } from 'react'


// export default class Music extends Component {
//     state = {
//     name: 'Anna'
//     }

// onNameChange =(event)=> {
//   this.setState({name: event.target.value})
// }
// //НЕПРАВИЛЬНО ИЗМЕНЯТЬ СТЕЙТ НАПРЯМУЮ
// //  changeName =(event)=> {
// //   this.state.name = event.target.value
// //   console.log(this.state.name)
// // }

//   render() {
//     return (
//       <div>
//         <input type="text"
//          onChange={this.onNameChange}
//          />
// <p>Hello, {this.state.name}</p>
//       </div>
//     )
//   }
// }

import React from 'react'
import Song from './Songs/Song'
import Crazy from './Two_Feet_-_Think_Im_Crazy_71135146.mp3'
import fire from './Two_Feet_-_Fire_In_My_Head_72998827.mp3'
import pink from './Two_Feet_-_Pink_68745494.mp3'
import nightmares from './Two_Feet_-_Nightmares_72911025.mp3'


export default function Music() {
  let songData = [
    {id: 1, imgSrc: 'https://avatars.yandex.net/get-music-content/3334966/4de92ddd.a.12092301-1/m1000x1000?webp=false', songSrc: `${Crazy}`, songName: "Two Feet - I think I'm Crazy"},
    {id: 2, imgSrc: 'https://avatars.yandex.net/get-music-content/2427101/e56d565b.a.13198617-1/m1000x1000?webp=false', songSrc: `${fire}`, songName: "Two Feet - Fire in my head"},
    {id: 3, imgSrc: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/92/38/32/9238328b-0505-0d0a-c5a1-218e1b9e3f3e/20UMGIM03281.rgb.jpg/1200x1200bf-60.jpg', songSrc: `${pink}`, songName: "Two Feet -Pink"},
    {id: 4, imgSrc: 'https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/a9/6d/d1/a96dd1f4-a6f7-f1e0-fb2c-b9504987bd32/5056167162209_1.jpg/600x600bf-60.jpg', songSrc: `${nightmares}`, songName: "Two Feet - Nightmares"},
    
  ]

  let [playerMode, setPlayerMode] = React.useState({playing: false})

  // let handleClick = () =>{
  //   if(playerMode.playing) {
  //   setPlayerMode({playing: false})
  //   } else {
  //     setPlayerMode({playing: true})
  //   }
  // }

  let handleClick = () =>{
    setPlayerMode({playing: !playerMode.playing })
  }
  return (
    <div style={{margin: '10px'}} className='container'> 
    <div className='row'>
    {songData.map(song => <Song imgSrc = {song.imgSrc} id = {song.id} songName = {song.songName} songSrc = {song.songSrc} handleClick = {handleClick} playing = {playerMode.playing}/>
      )}
      </div>
       
     
       
    </div>
    
  

  )
}
