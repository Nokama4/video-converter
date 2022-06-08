import React from 'react'
import videojs from 'video.js'
import qualitySelector from 'videojs-hls-quality-selector'
import qualityLevels from 'videojs-contrib-quality-levels'

const VideoPlayer = (src: string, options: any, onReady: Function) => {
  
  const videoRef = React.useRef(null)
  const playerRef = React.useRef<any>(null)

  React.useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current
      if (!videoElement) return
      videojs.registerPlugin('qualityLevels', qualityLevels)
      videojs.registerPlugin('hlsQualitySelector', qualitySelector)

      const player = (playerRef.current = videojs(
        videoElement,
        {
          autoplay: false,
          controls: true,
          // responsive,
          // fluid,
          sources: [
            {
              src,
              //withCredentials: true
              // type: 'application/x-mpegURL'
            }
          ]
        },
        () => {
          onReady && onReady(player)
        }
      ))

      player.hlsQualitySelector({ displayCurrentQuality: true })
    } else {
      // you can update player here [update player through props]
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [options, videoRef])

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current

    return () => {
      if (player) {
        player.dispose()
        playerRef.current = null
      }
    }
  }, [playerRef])

  return (
    <div data-vjs-player>
      <video ref={videoRef} className='video-js vjs-big-play-centered' />
    </div>
  )
}

export default VideoPlayer