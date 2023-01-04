import '../styles/feed.css'
import { InstagramEmbed } from 'react-social-media-embed'

export const Feed = () => {

  return(

<div id='feed-info'>
  <div>
  <p>Follow me on Instagram for more cuteness</p>
  </div>

  <div id='instabox'>
    <InstagramEmbed url="https://www.instagram.com/p/CQUZZw_FqeX/?utm_source=ig_web_copy_link"/>
  </div>
  </div>
  )
}
