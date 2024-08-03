import React, { useState } from 'react'
import { Paper, Stack, Typography } from '@mui/material'
import { categories } from '../utils/utils'




const Sidebar = ({setSelected , selected}) => {
  return (
    <Stack sx={{flexDirection:{xs:"row" , md:"column"},
    overflowY:"auto",
    height:{sx:"auto" , md:"95%"}

    }}>
        {categories?.map((value , index)=>{
            return (
                    <button className='category-btn'
                    onClick={()=>{setSelected(value.name)}}
                    style={{
                        backgroundColor: value.name === selected && '#FC1503',
                        color:"white",
                    }}
                    key={index}
                    >
                        <span style={{color : value.name === selected ? "white" : "red",
                          marginRight:"20px"
                        }}>{value?.icon}</span>
                        <span
                        style={{opacity:value.name === selected ? 1 : 0.8}}
                        
                        >{value?.name}</span>
                    </button>
            )    
        })}
    </Stack>
  )
}

export default Sidebar