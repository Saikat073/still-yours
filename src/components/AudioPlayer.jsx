import { useEffect, useRef } from 'react';

// Reusable audio player that automatically switches tracks when the active page changes.
function AudioPlayer({ playlist, activeIndex }) {
  const audioRef = useRef(null);
  const defaultVolume = 0.7;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = defaultVolume;
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const currentTrack = playlist[activeIndex];
    if (!currentTrack) return;

    const targetVolume = typeof currentTrack.volume === 'number' ? currentTrack.volume : defaultVolume;
    const nextSourceUrl = currentTrack.src.toString();

    const fadeTo = (target) =>
      new Promise((resolve) => {
        const steps = 10;
        const change = (target - audio.volume) / steps;
        let current = 0;

        const interval = setInterval(() => {
          current += 1;
          audio.volume = Math.max(0, Math.min(1, audio.volume + change));
          if (current >= steps) {
            clearInterval(interval);
            resolve();
          }
        }, 30);
      });

    const startAudio = async () => {
      const currentSource = audio.src || '';
      const sameSource = currentSource && currentSource.includes(nextSourceUrl);

      try {
        if (!sameSource) {
          await fadeTo(0);
          audio.src = nextSourceUrl;
          audio.currentTime = 0;
          await audio.play();
        }

        await fadeTo(targetVolume);
      } catch (error) {
        console.warn('Audio playback issue:', error);
      }
    };

    startAudio();
  }, [activeIndex, playlist]);

  return <audio ref={audioRef} hidden />;
}

export default AudioPlayer;
