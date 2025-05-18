"use client"
import { useEffect, useState, useRef } from "react"
import HomeScreen from "./site/page"

const audioTracks = [
  '/assets/audios/Bunny.mp3',
  '/assets/audios/OrbMovement.mp3',
  '/assets/audios/DemonSlayer.mp3',
  '/assets/audios/NarutoShippuden.mp3',
  '/assets/audios/DragonBall.mp3'
]

export default function Home() {
  const [showAudioPrompt, setShowAudioPrompt] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audioPermission = localStorage.getItem('audioPermission')
    
    if (audioPermission === 'granted') {
      startAudioPlaylist()
    } else {
      const timer = setTimeout(() => {
        setShowAudioPrompt(true)
      }, 2000)
      
      return () => clearTimeout(timer)
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const startAudioPlaylist = () => {
    if (audioRef.current) {
      audioRef.current.pause()
    }

    const audio = new Audio(audioTracks[currentTrackIndex])
    audio.volume = 0.3
    audio.loop = false
    
    audio.addEventListener('ended', handleTrackEnd)
    
    const playPromise = audio.play()
    
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log("Erreur de lecture audio:", error)
        setShowAudioPrompt(true)
      })
    }
    
    audioRef.current = audio
  }

  const handleTrackEnd = () => {
    setCurrentTrackIndex(prev => {
      const nextIndex = (prev + 1) % audioTracks.length
      return nextIndex
    })
  }

  useEffect(() => {
    if (audioRef.current) {
      startAudioPlaylist()
    }
  }, [currentTrackIndex])

  const handleAllowAudio = () => {
    localStorage.setItem('audioPermission', 'granted')
    setShowAudioPrompt(false)
    startAudioPlaylist()
  }

  const handleDenyAudio = () => {
    localStorage.setItem('audioPermission', 'denied')
    setShowAudioPrompt(false)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
  }

  return (
    <div>
      {showAudioPrompt && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)',
          zIndex: 1000,
          maxWidth: '300px'
        }}>
          <p>Souhaitez-vous activer la musique dambiance ?</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button 
              onClick={handleAllowAudio}
              style={{
                padding: '8px 16px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Autoriser
            </button>
            <button 
              onClick={handleDenyAudio}
              style={{
                padding: '8px 16px',
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Refuser
            </button>
          </div>
        </div>
      )}
      <HomeScreen />
    </div>
  )
}