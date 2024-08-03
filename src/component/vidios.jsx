

import React from 'react'

import { Box, Stack } from '@mui/material'

import VideoCard from './videocard'

import Cardchannel from './Cardchannel'


const Videos = ({vedios , direction}) => {
  return (
    <Stack direction={direction || "row"} justifyContent="start" gap={2} flexWrap="wrap">
      {vedios.map((value , index)=>{
        return (
          <Box key= {index}>
            {value.id.videoId && <VideoCard video = {value} />}
            {value.id.channelId && <Cardchannel channel = {value} />}
          </Box>
        )
      })}
    </Stack>
  )
}

export default Videos