import Button from "../Button/Button";
import React, { useState } from 'react';

const newPost = (props) => {
  return <div>
    <div >
      <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg" />
      {props.text}
      {/* <div className={styles.likes}>
        {props.likesCount} likes
      </div> */}
    </div>
  </div>
}

// const News = (props) => {
//     let newsText = React.createRef()

//     let [state, setState] = React.useState([])



//     let onShare = function() {
//       return setState(() => state.push({id: 1, text: newsText.current.value}))

//     }


//     return (
//         <div  style={{margin: '20px'}}> 
//             <textarea ref={newsText} style={{marginBottom: '10px', width: '500px', backgroundColor: 'rgb(247 244 244)'}} placeholder='Share news!'></textarea>
//             <Button func = {onShare} task = 'Share news'/>
//             {/* {state.map(post => <newPost text = {post.text}/>)} */}
//         </div>
//     )
// }


class New extends React.Component {
 state = {
    followMode: false
 }


    //  onFollow = () => {
    // this.setState({followMode: true})
    // }

    // onUnfollow = () => {
    //     this.setState({followMode: false})
    //     }

        // onChangeFollowMode =() =>{
        //   if(this.state.followMode) {
        //     this.setState({followMode: false})
        //   } else {
        //     this.setState({followMode: true})
        //   }
        // }

         onChangeFollowMode =() => this.setState({followMode: !this.state.followMode})
        

    render() {
        return (
            <div  style={{margin: '20px'}}>
            {this.state.followMode ?  <div> 
            {/* <textarea ref={newsText} style={{marginBottom: '10px', width: '500px', backgroundColor: 'rgb(247 244 244)'}} placeholder='Share news!'></textarea> */}
            <Button func = {this.onChangeFollowMode} task = 'Unfollow'/>
            {/* {state.map(post => <newPost text = {post.text}/>)} */}
        </div>
        : <Button func = {this.onChangeFollowMode} task = 'Follow'/>}
            </div>
        )
    }

}






// class News extends React.Component {
//   newText = React.createRef()
//   state = {
//     count: 0,
//     text: []
//   }
//   onPush = () => {
//     let curCou = this.state.count
//     curCou++
//     this.setState(
//       // { text: this.newText.current.value }
//       {count: curCou }
    
//       )
//       console.log(this.state.count)
//   }

//   addComment =() => {
//   let texts = this.newText.current.value
//   let addtext = this.state.text
//   addtext.push(texts)
//    this.setState({
//     text: addtext
//    })
//    this.newText.current.value= ''
//   }

//   render() {
//     return (
//       <div style={{ margin: '20px' }}>
//         {/* <input type="text" placeholder="Enter text..." ref={this.newText} /> */}
//         <button onClick={this.onPush}>Push</button>
//         <ul>
        
//           {/* {this.state.map(post => <li>{post.text}</li>)} */}

//         </ul>
//         <div>{ this.state.count}</div>
//         <div>
//           <div>
//             <textarea ref={this.newText} ></textarea>
//           </div>
//           <div><button onClick={this.addComment}>Add Comment</button></div>
//           <ul>
//             {this.state.text.map((text, index) => <li key = {index}>{text}</li>)}
//           </ul>
//         </div>

//       </div>
//     )
//   }

// }

// export default News;






 
export default function News() {

  let [state, setState] = React.useState({textBody: ''})
  let onNewBodyChange =(text)=> {
    setState({textBody: text})
   
  }

  
  let newtext = React.createRef()
  let onTextareaChange = ()=>{
    let text = newtext.current.value
   onNewBodyChange(text)

  }
  return (
    <div>
      <textarea onChange={onTextareaChange} value={state.textBody} ref ={newtext}></textarea>
    </div>
  )
}
