import React, { Component } from 'react'


export default class ProfileStatus extends React.Component {
   

    state = {
      editMode: false,
      status: this.props.status
    }

    activateEditMode=()=> {
        this.setState({editMode: true})
    }

    deactivateEditMode =()=>{
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e)=> {
      this.setState(
        {status: e.currentTarget.value })
    }

    componentDidUpdate(prevProps, prevState){
      if(prevProps.status !== this.props.status) {
        this.setState({
          status: this.props.status
        }
        )
      }
    }

  
  render() {
    return (
      <div>
         {!this.state.editMode ? 
           <div>
             <span>Status: {this.props.status || 'add status...'}  </span>  
             <span onClick={ this.activateEditMode} className="fa-solid fa-pen" style={{color: '#1c7f93'}}></span>
           </div> : 
         <div><input type="text" value={this.state.status} 
         autoFocus={true}
         onBlur={this.deactivateEditMode}
         onChange={this.onStatusChange} /></div>
         }
      </div>
    )
  }
}


