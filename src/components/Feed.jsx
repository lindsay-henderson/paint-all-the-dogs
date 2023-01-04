import '../styles/feed.css'
import { InstagramEmbed } from 'react-social-media-embed'
import { Button } from '@mui/material'

export const Feed = () => {

  return(

<div id='feed-info'>
  <div id='stay-in-touch'>
    <h2>Let's stay in touch</h2>
    <h3>Collab ideas?</h3> 
    <h3>Questions?</h3> 
    <h3>Cookie recipes?</h3>
    <Button className='button' variant="contained" size='large'><a href="mailto:paintallthedogs@gmail.com?subject=subject&body=content"><p>Email Me</p></a></Button>
  </div>
  <div id='instabox'>
    <InstagramEmbed url="https://www.instagram.com/p/CQUZZw_FqeX/?utm_source=ig_web_copy_link"/>
  </div>
  </div>
  )
}
