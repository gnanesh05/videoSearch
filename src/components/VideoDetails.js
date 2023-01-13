import React from 'react'
import { Paper, Typography } from '@mui/material'

const VideoDetails = ({video}) => {
console.log(video)
  return (
    <>
     <Paper elevation={6} style={{height: '100%'}}>
       {video? 
       <>
        
       <iframe frameBorder="0" height="100%" width="100%" title="Video Player" 
       src={`https://www.youtube.com/embed/${video.id.videoId}`} />
        <Paper elevation={6} style={{height: '70%'}}>
            <Typography variant='h4'>{video.snippet.title} - {video.snippet.channeTitle}</Typography>
            <Typography variant='subtitle1'>{video.snippet.channeTitle}</Typography>
            <Typography variant='subtitle2'>{video.snippet.description}</Typography>
        </Paper>
       </>
         : <> No videos</> } 
     </Paper>
     
    </>
  )
}

export default VideoDetails