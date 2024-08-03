import React from 'react'
import { Box , Stack , Paper , Card  , Typography} from '@mui/material'

import { useState , useEffect } from 'react'
import Sidebar from './sidebar'
import { FetchData } from '../utils/api'
import Videos from './vidios'

const Feed = () => {
  const [selected, setSelected] = useState("New")
  const [vedio, setVedio] = useState([])
  
  useEffect(()=>{
    FetchData(`search?part=snippet&q=${selected}`).then((data)=> {
      setVedio(data.items)
    })
  },[selected])
  return (
    <Stack sx={{
      flexDirection:{sx:"column" , md:"row"}

    }}>
      <Box sx={{height:{sx:'auto' , md :"92vh"},
      borderRight:"1px solid #3d3d3d" , px:{sx:0 , md : 2}
      }}
      >
        <Sidebar selected={selected} setSelected={setSelected}/>
        <Typography className='copyright'
        variant='body2'
        sx={{mt:1.5 , color:"#fff"}}
        >
          Copyright 2024 youtube
        </Typography>
        
      </Box>
      <Box p={2} sx={{overflowY:"auto"  , height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight="bold" mb={2}
        sx={{color:"white"}}
        >
          {selected}
          <span  style={{color:'#F31503',marginLeft:"10px"}}>videos</span>
        </Typography>
        <Videos vedios = {vedio}/>
      </Box>

    </Stack>
  )
}

export default Feed