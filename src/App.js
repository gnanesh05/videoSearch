import React,{useState, useEffect} from 'react'
import Grid from '@mui/material/Grid'
import {baseParams} from './api/index.js'
import SearchBar from './components/SearchBar.js'
import VideoDetails from './components/VideoDetails.js'
import VideoList from './components/VideoList.js'
import axios from 'axios'


const App = () => {
  const[search, setSearch] = useState("")
  const[videos, setVideos] = useState([])
  const[selectedVideo, setSelectedVideo] = useState("")
  
  useEffect(() => {
    
    console.log(videos)
    console.log(selectedVideo)
    
  },[search])
  const handleSubmit = async(search)=>{
    console.log(search)
    const response = await axios({
    method: "GET",
    url: "https://www.googleapis.com/youtube/v3/search",
    params:{
      ...baseParams,
      q: search
    }
   
    })
    setSearch(search)
    const items = response.data.items
    console.log(items)
    setVideos(items)
    setSelectedVideo(items[0])
   
  }

  const onVideoSelect = (video)=>{
    selectedVideo(video)
  }
  return (
    <Grid justify="center" container spacing={16}>
      <Grid item xs={12}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit}/>
          </Grid>
          <Grid item xs={8}>
            <VideoDetails video= {selectedVideo}/>
          </Grid>

          <Grid item xs={4}>
            <VideoList videos = {videos} onVideoSelect={onVideoSelect}/>
          </Grid>

        </Grid>

      </Grid>

    </Grid>

  )
}

export default App