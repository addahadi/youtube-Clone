import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/utils'
import Searchbar from './searchbar'
const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" p={2}
    sx={{position:"sticky" , background:"#000" , 
      justifyContent:"space-between",
      top:"0px"
    }}
    
    >
      <Link to="/" style={{display:"flex" , alignItems:"center" , }}>
        <img src={logo} alt="youtube"   height={45} />
      </Link>
      <Searchbar/>
    </Stack>
  )
}

export default Navbar