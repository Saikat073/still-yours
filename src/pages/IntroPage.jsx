import { useEffect, useRef, useState } from "react";
import "./../Intro.css";
import introMusic from "../assets/music/intro.mp3";

export default function IntroPage({ onEnter }) {

  const [showSecond, setShowSecond] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {

    // SHOW SECOND TEXT
    const timer1 = setTimeout(() => {
      setShowSecond(true);
    }, 2500);

    // SHOW BUTTON
    const timer2 = setTimeout(() => {
      setShowButton(true);
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };

  }, []);

  // START MUSIC AFTER BUTTON CLICK
  const handleEnter = async () => {

    if (audioRef.current) {

      audioRef.current.volume = 0.5;

      try {

        // PLAY MUSIC
        await audioRef.current.play();

        // WAIT BEFORE ENTERING WEBSITE
        setTimeout(() => {
          onEnter();
        }, 4000);

      } catch (err) {
        console.log("Audio play blocked");

        // ENTER ANYWAY
        onEnter();
      }
    }
  };

  return (
    <div className="intro-container">

      {/* INTRO MUSIC */}
      <audio
        ref={audioRef}
        src={introMusic}
      />

      <div className="intro-content">

        <h1 className="fade-text main-text">
          I didn’t know how to say this...
        </h1>

        {showSecond && (
          <p className="fade-text second-text">
            So I made this instead.
          </p>
        )}

        {showButton && (
          <button
            className="heart-button"
            onClick={handleEnter}
          >
            Open my heart ❤️
          </button>
        )}

      </div>
    </div>
  );
}