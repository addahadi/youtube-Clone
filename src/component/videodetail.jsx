import React, { useEffect , useState } from 'react'
import { Box , Stack , Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import { FetchData } from '../utils/api'
import { useParams } from 'react-router'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Videos from './vidios'
const VedioDetail = () => {
  const Id  = useParams()
  const [getvideo, setGetvideo] = useState([])
  const [relatedVideos, setRelatedVideos] = useState([])

  
  useEffect(()=>{
    FetchData(`videos?part=snippet,statistics&id=${Id.id}`).then((data)=>{
      setGetvideo(data.items[0])
    })  
    FetchData(`search?relatedToVideoId=${Id.id}&part=snippet&type=video&maxResults=10`).then((data)=>{
      setRelatedVideos(data.items)
    })
  },[Id.id])


  return (
    <Box minHeight="95vh">
      <Stack direction={{xs:"column" , md:"row"}}>
        <Box flex="1" p="10px" >
          <Box  sx={{position:"sticky" , top:"86px",width:"100"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${Id.id}`}
            className="React-player" controls
            />
            <Typography variant='h6'mt="20px" color="white">
              {getvideo?.snippet?.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant='body1' color="white" mt="20px" 
              fontWeight="bold"
              >
                <CheckCircleIcon sx={{fontSize:"18px" , color:"gray" ,mr:"10px"}}/>
                {getvideo?.snippet?.channelTitle}</Typography>
              <Typography color="grey" mt="20px" fontWeight="bold">
                {getvideo?.statistics?.viewCount}<span style={{marginLeft:"10px"}}>Views</span>
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Box  px={2} py={{md:1 ,xs:5}} justifyContent="center" alignItems="center">
            <Videos vedios={relatedVideos} direction="column"/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VedioDetail