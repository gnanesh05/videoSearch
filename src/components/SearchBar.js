import React,{useState} from 'react'
import { TextField, Paper } from '@mui/material'

const SearchBar = ({onFormSubmit}) => {
 const [search, setSearch] = useState("")

  const handleChange = (event)=>{
      console.log(event.target.value)
      setSearch(event.target.value)

  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    onFormSubmit(search)

}
  return (
   <Paper elevation={6} style={{padding: "1%"}}>
     <form onSubmit={handleSubmit}>
         <TextField fullWidth id="standard-basic" label="Search" variant="standard" onChange={handleChange}></TextField>
     </form>
   </Paper>       
  )
}

export default SearchBar