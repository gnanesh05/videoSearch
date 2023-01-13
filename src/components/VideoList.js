import { Grid } from '@mui/material'
import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {
 
  return (
    <div>
        
            <Grid spacing={10}>
                {
                     videos.map((video, id)=>(
                        <VideoItem key={id} video={video} onVideoSelect={onVideoSelect} />      
                     ))
                }
            </Grid>    
           
        
    </div>
  )
}

export default VideoList