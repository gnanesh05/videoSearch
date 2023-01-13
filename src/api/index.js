import axios from 'axios'

export const baseParams = {
    part: "snippet",
    maxResults: 5,
    key: "AIzaSyBRWiIzkGmZFpdmez4K5m_NOMxPHWBD79A"
}
const api =  "https://www.googleapis.com/youtube/v3"
export default axios.create({
    baseUrl: api
    
})