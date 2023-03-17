import './App.css'
import { Routes, Route } from 'react-router'
import Error from './pages/Error'
import NotFound from './pages/NotFound'
import DetailsGroups from './pages/DetailsGroup'
// pages
import Home from './pages/Home.jsx'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import Group from './pages/Group'
import Profile from './pages/Profile'
import GroupEdit from './pages/GroupEdit'

import IsPrivate from './components/IsPrivate'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <Profile />
            </IsPrivate>
          }
        />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/groups/:groupId" element={<DetailsGroups />} />
        <Route
          path="/groups"
          element={
            <IsPrivate>
              <Group />
            </IsPrivate>
          }
        />
        <Route
          path="/groups/:groupId/edit"
          element={
            <IsPrivate>
              <GroupEdit />
            </IsPrivate>
          }
        />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
