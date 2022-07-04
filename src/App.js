
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile'; 
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {

  return (
    <BrowserRouter>
   <div className='wrapper'> 
     <Header/> 
     <NavBar/>
     <div className='contentStyles'> 
     <Routes>
     <Route path="/dialogs/*" element = {<Dialogs dialogData = {props.state.messagesPage.dialogData} messageData = {props.state.messagesPage.messageData}/>}/>
      <Route path="/profile" element = {<Profile postData = {props.state.profilePage.postData} addPost = {props.addPost}/>}/>
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
