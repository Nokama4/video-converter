import React from 'react'
import videojs from 'video.js'
import qualitySelector from 'videojs-hls-quality-selector'
import qualityLevels from 'videojs-contrib-quality-levels'

const VideoPlayer = (video, onReady: Function) => {
  
  console.log(video);
  
  
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
          responsive: true,
          fluid: true,
          sources: [
            {
              src: `https://cdn-carine.s3.eu-west-3.amazonaws.com/nft/${video.video.id}/${video.video.filename}.m3u8`,
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
  }, [videoRef])

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