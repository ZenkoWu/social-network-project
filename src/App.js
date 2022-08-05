import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

function App(props) {

  return (
    <BrowserRouter>
   <div className='wrapper'> 
     <HeaderContainer/> 
     <NavBar/>
     <div className='contentStyles'> 
     <Routes>
     <Route path="/dialogs/*" element = {<DialogsContainer/>}/>
      <Route path="/profile/:userId" element = {<ProfileContainer/>}/>
      <Route path="/profile/*" element = {<ProfileContainer/>}/>
      <Route path="/news" element = {<News/>}/>
      <Route path="/music" element = {<Music/>}/>
      <Route path="/settings" element = {<Settings/>}/>
      <Route path="/findUsers" element = {<FindUsersContainer/>}/>
      <Route path="/login" element = {<Login/>}/>
     </Routes>
     </div>
   </div>
   </BrowserRouter>
  );
  
}

export default App;