import React from 'react'
import { Box, Typography} from '@mui/material'

import { useState , useEffect } from 'react'
import { FetchData } from '../utils/api'
import Videos from './vidios'
import { useParams } from 'react-router'
import { Search } from '@mui/icons-material'
const SearchFeed = () => {
  const Id = useParams()
  const [searchResult, setSearchResult] = useState([])
  useEffect(()=>{
    FetchData(`search?part=snippet&q=${Id.searchTerm}`).then((data)=>{
      setSearchResult(data.items)
    })
  },[Id.searchTerm])
  return (
    <Box p={2} sx={{overflowY:"auto"  , height:'90vh', }}>
      <Typography variant='h5' fontWeight="bold" mb={2}
      sx={{color:"white"}}
      >
        searched for : {Id.searchTerm}
        <span  style={{color:'#F31503',marginLeft:"10px" , }}>videos</span>
      </Typography>
      <Videos vedios = {searchResult}/>
     </Box>

  )
}

export default SearchFeed