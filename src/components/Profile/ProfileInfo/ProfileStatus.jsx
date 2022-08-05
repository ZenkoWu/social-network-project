// import React, { Component } from 'react'


// export default class ProfileStatus extends React.Component {
   

//     state = {
//       editMode: false.valueOf,
//       status: this.props.status
//     }

//     activateEditMode=()=> {
//         this.setState({editMode: true})
//     }

//     deactivateEditMode =()=>{
//         this.setState({editMode: false})
//         this.props.updateStatus(this.state.status)
//     }

//     onStatusChange = (e)=> {
//       this.setState(
//         {status: e.currentTarget.value })
//     }

  
//   render() {
//     return (
//       <div>
//          {!this.state.editMode ? 
//            <div>
//              <span>Status: {this.props.status || 'add status...'}  </span>  
//              <span onClick={ this.activateEditMode} className="fa-solid fa-pen" style={{color: '#1c7f93'}}></span>
//            </div> : 
//          <div><input type="text" value={this.state.status} 
//          autoFocus={true}
//          onBlur={this.deactivateEditMode}
//          onChange={this.onStatusChange} /></div>
//          }
//       </div>
//     )
//   }
// }



import React, { Component } from 'react'


export default class ProfileStatus extends React.Component {
   

    state = {
      editMode: false.valueOf,
      
    }

    activateEditMode=()=> {
        this.setState({editMode: true})
    }

    deactivateEditMode =()=>{
        this.setState({editMode: false})
      
    }

  
  render() {
    return (
      <div>
         {!this.state.editMode ? 
           <div>
             <span>Status: {this.props.status}  </span>  
             <span onClick={ this.activateEditMode} className="fa-solid fa-pen" style={{color: '#1c7f93'}}></span>
           </div> : 
         <div><input type="text" value={this.props.status} 
        
         onBlur={this.deactivateEditMode}
        /></div>
         }
      </div>
    )
  }
}

