import { useEffect, useRef, useState } from 'react';

import {
  FiPlay,
  FiPause,
  FiHeart
} from 'react-icons/fi';

function MusicPlayer({ src }) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.6;

      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Autoplay blocked', err);
        });
    }
  }, [src]);

  const togglePlayback = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn('Playback blocked');
      }
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src={src}
        preload="auto"
      />

      <button
        className="music-player__button"
        onClick={togglePlayback}
      >
        {isPlaying ? <FiPause /> : <FiPlay />}

        <span>
          {isPlaying ? 'Pause' : 'Play'}
        </span>
      </button>

      <div className="music-player__icon">
        <FiHeart />
      </div>
    </div>
  );
}

export default MusicPlayer;