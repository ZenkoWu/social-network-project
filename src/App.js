import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile'; 
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {

  return (
    <BrowserRouter>
   <div className='wrapper'> 
     <Header/> 
     <NavBar/>
     <div className='contentStyles'> 
     <Routes>
     <Route path="/dialogs/*" element = {<DialogsContainer store = {props.store}
    //  dialogData = {props.state.messagesPage.dialogData} 
    //  messageData = {props.state.messagesPage.messageData} dispatch = {props.dispatch} 
    //  newMessageText = {props.state.messagesPage.newMessageText}
     />}/>
      <Route path="/profile" element = {<Profile store = {props.store}
      // postData = {props.state.profilePage.postData} dispatch = {props.dispatch} newPostText = {props.state.profilePage.newPostText}
      />}/>
      <Route path="/news" element = {<News/>}/>
      <Route path="/music" element = {<Music/>}/>
      <Route path="/settings" element = {<Settings/>}/>
     </Routes>
     </div>
   </div>
   </BrowserRouter>
  );
}

export default App;