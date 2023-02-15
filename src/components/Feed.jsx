import '../styles/feed.css'
// import { InstagramEmbed } from 'react-social-media-embed'
import { Button } from '@mui/material'

export const Feed = () => {

  return(

<div id='feed-info'>
    <h2>Let's stay in touch</h2>
    <h3 className='desktop'>Collab Ideas? | Questions? | Cookie Recipes?</h3>
    <h3 className='mobile'>Collab Ideas? | Questions? <br/> Cookie Recipes?</h3>
  
  <div id='instabox'>
    <Button className='button' variant="contained" size='large'><a href="mailto:paintallthedogs@gmail.com?subject=subject&body=content"><p>Email Me</p></a></Button>
    <a href='https://www.instagram.com/paintallthedogs/' ><img src='./instagram.png' alt='instagram logo' /></a>
  </div>
  </div>
  )
}
