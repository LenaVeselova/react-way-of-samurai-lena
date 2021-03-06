import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from "./components/News/News";
import Settings from './components/Settings/Settings'
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
    const {dialogsPage, profilePage} = props.state;

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <Dialogs state={dialogsPage} />} />
                    <Route path='/profile' render={ () => <Profile posts={profilePage.posts} />} />
                    <Route path='/news' compopnent={ () => <News/>} />
                    <Route path='/music' render={ () => <Music/>} />
                    <Route path='/settings' render={ () => <Settings/>} />
                </div>
            </div>
        </BrowserRouter>)
}

export default App;