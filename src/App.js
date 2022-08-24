import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FindUsersContainer from './components/FindUsers/FindUsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import LittleGames from './components/Games/LittleGames';
import Food from './components/Food/Food';
import Lunch from './components/Food/Lunch';
import Dinner from './components/Food/Dinner';
import Breakfast from './components/Food/Breakfast';
import Meal from './components/Food/Meal';
import AllFoodList from './components/Food/AllFoodList';
import Erorr from './components/Food/Erorr';
import Smooth from './components/Food/Smooth';


function App(props) {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <HeaderContainer />
        <NavBar />
        <div className='contentStyles'>
          <Routes>
            <Route path="/" element = {<ProfileContainer/>}/>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/profile/*" element={<ProfileContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/findUsers" element={<FindUsersContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/games" element={<LittleGames />} />
            <Route path="food" element={<Food/>}>
              <Route path="" element={<AllFoodList />}/>
              <Route path="breakfast" element={<Breakfast />}/>
              <Route path="smooth" element={<Smooth />}/>
              <Route path="lunch" element={<Lunch />}/>
              <Route path="dinner" element={<Dinner />}/>
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );

}

export default App;




