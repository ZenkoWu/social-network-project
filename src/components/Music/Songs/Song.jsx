import React from 'react'
import styles from '../Music.module.css'
import Crazy from '../Two_Feet_-_Think_Im_Crazy_71135146.mp3'


export default function Song(props) {
  return (
        <div className={styles.selectedSong}> 
          <div className={styles.imgOfSelectedSong}>
          <a href={props.songSrc} style={{color: 'black', width: '50px'}} onClick={props.handleClick}> <img src={props.imgSrc}/></a>
          </div>
          <div>
            <div>
              <div className={styles.descriptionOfSelectedSong}>
                <a href="">{props.songName}</a>
              </div>
              {/* <button onClick={props.handleClick}>ch</button> */}
               <div> 
                  <a href={props.songSrc}  
                  // onClick={(e=> e.preventDefault())} 
                  style={{color: 'rgb(0, 155, 223)', width: '50px'}}>
                  {!props.playing ? 
                     <i class="fa-solid fa-play fa-2x " onClick={props.handleClick}></i>
                     : <i class="fa-solid fa-pause fa-2x" onClick={props.handleClick}></i>}</a>
                  </div>
                   <div> 
                   
                   </div> 
             
            </div>
   </div>
   </div>
  )
}

 {/* <audio src={Crazy} controls loop>
      </audio> */}
     
      {/* <div>  
      <p >Two Feet - Fire in my head</p>
      <audio src={fire} controls loop>
      </audio>
      </div> */}
