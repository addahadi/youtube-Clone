import React from 'react'
import { Paper , IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router';
import { useState } from 'react';
const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  function handlesubmit(e){
    e.preventDefault()
    console.log(searchTerm)
    if(searchTerm){
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }
  return (
    <Paper 
    elevation={12}
    component="form"
    onSubmit={handlesubmit}
    sx={{
        border:"1px solid #e3e3e3e",
        pl:2,
        boxShadow:"none",
        mr:{sm:5},
    }}
    >
        <input className='search-bar'
        placeholder='Search ...'
        value={searchTerm}
        onChange={(e)=>{
          setSearchTerm(e.target.value)
        }}

        />
        <IconButton type="submit" 
        sx={{p:"10px" }}
        color='red'
        
        >
            <SearchIcon />
        </IconButton>
    </Paper>
  )
}

export default Searchbar