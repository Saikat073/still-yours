import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Intro.css';

const particles = [
  { left: '10%', top: '18%', size: '7px', delay: '0s', duration: '10.2s', x: '-20px', y: '80px' },
  { left: '34%', top: '15%', size: '5px', delay: '0.4s', duration: '9.8s', x: '16px', y: '90px' },
  { left: '72%', top: '20%', size: '6px', delay: '0.9s', duration: '10s', x: '-12px', y: '100px' },
  { left: '19%', top: '32%', size: '4px', delay: '1.2s', duration: '10.3s', x: '22px', y: '105px' },
  { left: '86%', top: '35%', size: '8px', delay: '0.7s', duration: '10.1s', x: '-34px', y: '88px' },
  { left: '50%', top: '8%', size: '9px', delay: '0.2s', duration: '9.9s', x: '0px', y: '120px' },
  { left: '14%', top: '72%', size: '6px', delay: '0.5s', duration: '10.2s', x: '18px', y: '-90px' },
  { left: '80%', top: '72%', size: '4px', delay: '1.0s', duration: '9.7s', x: '-22px', y: '-72px' },
  { left: '60%', top: '58%', size: '5px', delay: '1.4s', duration: '10s', x: '34px', y: '-100px' },
  { left: '28%', top: '85%', size: '6px', delay: '1.8s', duration: '10.2s', x: '-12px', y: '-132px' },
];

const rays = [
  { left: '15%', top: '10%', rotate: '-18deg', delay: '0s', duration: '12s' },
  { left: '82%', top: '8%', rotate: '-38deg', delay: '1.8s', duration: '10.5s' },
  { left: '22%', top: '82%', rotate: '22deg', delay: '0.6s', duration: '11.2s' },
];

function Intro({ onFinish, soundSrc }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const phaseOne = window.setTimeout(() => setPhase(1), 2600);
    const phaseTwo = window.setTimeout(() => setPhase(2), 5200);
    const phaseThree = window.setTimeout(() => setPhase(3), 8200);
    const finish = window.setTimeout(() => onFinish(), 10000);

    return () => {
      window.clearTimeout(phaseOne);
      window.clearTimeout(phaseTwo);
      window.clearTimeout(phaseThree);
      window.clearTimeout(finish);
    };
  }, [onFinish]);

  useEffect(() => {
    if (!soundSrc) {
      return undefined;
    }

    const audio = new Audio(soundSrc);
    audio.volume = 0.7;
    audio.loop = false;
    audio.play().catch(() => {
      // Autoplay may be blocked until user interacts.
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [soundSrc]);

  const handleSkip = () => {
    try {
      localStorage.setItem('skipIntro', 'true');
    } catch (e) {
      // ignore
    }
    onFinish();
  };

  const introText =
    phase === 0
      ? 'Some people become your home.'
      : phase === 1
      ? 'I never wanted us to become strangers.'
      : 'And somehow… I still choose you.';

  return (
    <motion.div
      className="intro-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      <div className="intro-vignette" />
      <div className="intro-background" />
      <div className="intro-fog" />
      <div className="intro-rays">
        {rays.map((ray, index) => (
          <span
            key={index}
            className="intro-ray"
            style={{
              left: ray.left,
              top: ray.top,
              transform: `rotate(${ray.rotate})`,
              animationDelay: ray.delay,
              animationDuration: ray.duration,
            }}
          />
        ))}
      </div>

      <div className="intro-particles">
        {particles.map((particle, index) => (
          <span
            key={index}
            className={`intro-particle ${phase === 3 ? 'intro-particle--burst' : ''}`}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              '--particle-x': particle.x,
              '--particle-y': particle.y,
            }}
          />
        ))}
      </div>

      <div className="intro-content">
        <motion.div
          className={`intro-heart-shell ${phase >= 1 ? 'intro-heart-shell--active' : ''}`}
          animate={{
            scale: phase === 0 ? 0.88 : phase === 1 ? 1.02 : phase === 2 ? 1.08 : 1.18,
            rotate: phase === 3 ? [0, -1.2, 0.8, -0.8, 0] : [0, 0],
          }}
          transition={{ duration: 2.8, ease: 'easeInOut' }}
        >
          <div className={`intro-heart ${phase >= 1 ? 'intro-heart--visible' : ''} ${phase === 3 ? 'intro-heart--burst' : ''}`}>
            <span className="intro-heart-shape">💔</span>
            <span className={`intro-crack ${phase >= 2 ? 'intro-crack--active' : ''}`} />
            <span className={`intro-crack intro-crack--angle ${phase >= 2 ? 'intro-crack--active' : ''}`} />
          </div>

          <div className={`intro-halo ${phase >= 1 ? 'intro-halo--visible' : ''}`} />
        </motion.div>

        <motion.div
          className="intro-text"
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: 'easeOut', delay: 0.4 }}
        >
          <p className={`intro-line ${phase === 0 ? 'intro-line--primary' : phase === 1 ? 'intro-line--secondary' : 'intro-line--final'}`}>
            {introText}
          </p>
        </motion.div>

        <button type="button" className="intro-skip" onClick={handleSkip} aria-label="Skip intro">
          Skip intro
        </button>
      </div>

      <div className={`intro-flash ${phase === 3 ? 'intro-flash--active' : ''}`} />
    </motion.div>
  );
}

export default Intro;
