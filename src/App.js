import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import MyAccount from './MyAccount';
import UploadImage from './UploadImage.jsx';
import EditProfile from './EditProfile';
import Notifications from './Notifications';
import Settings from './Settings';
import TopNavBar from './TopNavBar';
import CurrentAiContext from './CurrentAiContext';
import ImageUploads from './ImageUploads';
// import { useAuth0 } from "@auth0/auth0-react";
// import axios from 'axios'

function App() {
  const [currentAi, setCurrentAi] = useState('')
  const value = useMemo(
    () => ({ currentAi , setCurrentAi }),
    [currentAi]
  )
  
  // const { isAuthenticated } = useAuth0();
  
  return (
    <CurrentAiContext.Provider value={value}>
      <Router>
        <TopNavBar/>
          <div className='content'>
            <Routes>
              {/* <Route exact path="/" render={() => isAuthenticated ? <HomePage /> : <LoginPage />
              }/> */}
              <Route path='/' element={ <HomePage/> }/>
              <Route path='/notifications' element={ <Notifications/> } />
              <Route path='/foryou'/>
              <Route path='/createpost' element ={<UploadImage/>}/>
              <Route path='/messages'/>
              <Route path='/settings' element={ <Settings/> } />
              <Route path='/myaccount' element={<MyAccount/>} />
              <Route path='/editprofile' element={ <EditProfile/> } />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/imageuploads' element ={<ImageUploads/>}/>
            </Routes>
          </div>
      </Router>
    </CurrentAiContext.Provider>
  );
}

export default App;
