import { Pause, Play } from "./Player.jsx"
import { usePlayerStore } from "../store/musicStore.js"


export function CardButtonPlay({id}){
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic
  } = usePlayerStore(state => state)


  const isPlayingPlaylist = isPlaying 
    
      const handleClick = () => {
        if (isPlayingPlaylist) {
          setIsPlaying(false)
          return
        }
    
        fetch(`/api/info-playlist.json?id=${id}`)
        .then(res => res.json())
        .then(data => {
          const { songs, playlist } = data
  
        setIsPlaying(true)
        setCurrentMusic({ songs, playlist, song: songs[0] })
        })
      }

    return (
        <button onClick={handleClick} className="play-button rounded-full bg-green-500 p-4">
            {isPlayingPlaylist ? <Pause /> : <Play />}

        </button>
    )
}