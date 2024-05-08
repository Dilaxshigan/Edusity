import React from 'react'
import './VideoPlayer.css'

import Play_video from '../../assets/img/Ad-video.mp4'

const VideoPlayer = ({playState, setPlayState}) => {
  return (
    <div className='video-player'>
        <video src={Play_video} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer
