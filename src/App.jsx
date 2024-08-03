import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import { Box } from '@mui/material'
import VedioDetail from './component/videodetail'
import SearchFeed from './component/search'
import Channel from './component/channel'
import Navbar from './component/navbar'
import Feed from './component/feed'
function App() {
  return (
    <BrowserRouter>
     <Box bgcolor='#000'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Feed/>} />
        <Route path="/video/:id" element={<VedioDetail/>} />
        <Route path="/channel/:id" element={<Channel/>} />

        <Route path="/search/:searchTerm" element={<SearchFeed/>} />
      </Routes>
     </Box>
    </BrowserRouter>
  )
}

export default App
