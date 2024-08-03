import React from 'react'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router'
import { Box } from '@mui/material'
import { FetchData } from '../utils/api'
import Cardchannel from './Cardchannel'
import Videos from './vidios'
const Channel = () => {
  const Id = useParams()
  const [channel, setChannel] = useState(null)
  const [video, setVideo] = useState([])
  useEffect(()=>{
    if( Id ){
      FetchData(`channels?part=snippet&id=${Id.id}`).then((data)=>{
        setChannel(data.items[0])
      })
      FetchData(`search?channelId=${Id.id}&order=date`).then((data)=>{
        setVideo(data.items)
      })
    } 
  },[Id])
  return (
    <Box
    minHeight="95vh"
    >
      <Box>
      <div 
      style={{
        height:"300px",
        zIndex:10,
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(215,131,255,1) 0%, rgba(0,212,255,1) 100%)',
      }}      
      />
      <Cardchannel channel = {channel} marginTop="-63px" />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{mr:{sm:"100px"}}} />
        <Videos vedios = {video}/>
      </Box>
    </Box>
  )
}

export default Channel