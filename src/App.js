import React from "react"
import { Route, Routes } from 'react-router-dom'
import AllMeetups from './pages/AllMeetups'
import NewMeetup from './pages/NewMeetup'
import Favourites from './pages/Favourites'
import Layout from "./components/layout/Layout"

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />} exact/>
        <Route path="/new-meetups" element={<NewMeetup />}/>
        <Route path="/favourites" element={<Favourites />}/>
      </Routes>
    </Layout>
  );
}

export default App;
