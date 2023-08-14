import { useState } from "react"
import "./../assets/scss/video.scss"

function Video({code}){
  const [isVideo, setVideo] = useState(false)

  return (
    <div className="video-wrapper">
      {
        isVideo
        ? <iframe width="560" height="315" src={`https://www.youtube.com/embed/${code}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
        : <>
          <img src={`https://img.youtube.com/vi/${code}/sddefault.jpg`} alt="" onError={(event)=>{
            event.target.onerror = null
            event.target.src = `https://img.youtube.com/vi/${code}/sddefault.jpg`
          }} />
          <button type="button" className="video-play-btn" onClick={()=>{setVideo(true)}}></button>  
        </>
      }
    </div>
  )
}

export default Video