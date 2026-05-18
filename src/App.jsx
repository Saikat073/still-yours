import { useEffect, useRef, useState } from 'react';

import Navbar from './components/Nav.jsx';
import AudioPlayer from './components/AudioPlayer.jsx';
import SwipeButton from './components/SwipeButton.jsx';

import IntroPage from './pages/IntroPage.jsx';
import HomePage from './pages/HomePage.jsx';
import MemoryPage from './pages/MemoryPage.jsx';
import FinalPage from './pages/FinalPage.jsx';

import pic1 from './assets/pic1.jpg';
import pic2 from './assets/pic2.jpeg';
import pic3 from './assets/pic3.jpg';
import pic4 from './assets/pic4.jpeg';
import pic5 from './assets/pic5.jpeg';
import pic6 from './assets/pic6.jpeg';
import pic7 from './assets/pic7.jpg';
import pic8 from './assets/pic8.mp4';

import song1 from './assets/music/song1.mp3';
import song2 from './assets/music/song2.mp3';
import song3 from './assets/music/song3.mp3';
import song4 from './assets/music/song4.mp3';
import song5 from './assets/music/song5.mp3';
import song6 from './assets/music/song6.mp3';
import song7 from './assets/music/song7.mp3';
import song8 from './assets/music/song8.mp3';
import song9 from './assets/music/song9.mp3';

import './styles.css';

const memoryStories = [
  {
    id: 'A QUIET MEMORY',
    title: 'Where My Heart Still Waits',
    quote:
      'Some memories still glow softly in my heart. I remember how safe your presence felt, and how easily you became my favorite part of every moment. Even now, a part of me still waits where we once felt infinite together.',
    image: pic1,
    reverse: false,
  },
  {
    id: 'memory-2',
    title: 'Silent Sunrise',
    quote:
      'Even in the quietest moments, my heart still searched for the warmth your smile once gave me.',
    image: pic2,
    reverse: true,
  },
  {
    id: 'memory-3',
    title: 'Warm Whispers',
    quote:
      'I thought time would quiet my feelings, but somehow your absence only made them louder. Every memory still finds its way back to me, softly reminding me of everything I should have said when you were still here beside me.',
    image: pic3,
    reverse: false,
  },
  {
    id: 'memory-4',
    title: 'Starlit Confession',
    quote:
      'I still whisper apologies into quiet nights, hoping somehow they find their way back to your heart. Because even now, loving you feels more natural than forgetting you ever could.',
    image: pic4,
    reverse: true,
  },
  {
    id: 'memory-5',
    title: 'Rose-Colored Dawn',
    quote:
      'Moonlight reminds me of the warmth I miss in your arms. I hope I can bring you back to our light.',
    image: pic5,
    reverse: false,
  },
  {
    id: 'memory-6',
    title: 'Gentle Forgiveness',
    quote:
      'I am sorry for the shadows. I want to be your morning light and the comfort in every new day.',
    image: pic6,
    reverse: true,
  },
  {
    id: 'memory-7',
    title: 'Forever Promise',
    quote:
      'Even when the sky is gray, I promise my love will always find the brightest path back to you.',
    image: pic7,
    reverse: false,
  },
  {
    id: 'memory-8',
    title: 'Sunset Promise',
    quote:
      'Between the glow of golden skies and the hush of evening, I keep wondering how to hold your heart more gently.',
    video: pic8,
    reverse: true,
  },
];

function App() {
  const pageRefs = useRef([]);
  const pageListRef = useRef(null);

  const [activePage, setActivePage] = useState(0);

  // INTRO SCREEN STATE
  const [entered, setEntered] = useState(false);

  const audioPlaylist = [
    { src: song1, volume: 0.65 },
    { src: song2, volume: 0.55 },
    { src: song3, volume: 0.7 },
    { src: song4, volume: 0.6 },
    { src: song5, volume: 0.72 },
    { src: song6, volume: 0.55 },
    { src: song7, volume: 0.8 },
    { src: song8, volume: 0.68 },
    { src: song9, volume: 0.7 },
  ];

  const finalPageIndex = memoryStories.length + 1;

  useEffect(() => {
    pageRefs.current = pageRefs.current.slice(0, memoryStories.length + 2);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => {
      try {
        scrollToSection(0);
        setActivePage(0);
      } catch (e) {}
    }, 50);

    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pageIndex = Number(entry.target.dataset.index);

            if (!Number.isNaN(pageIndex)) {
              setActivePage(pageIndex);
            }
          }
        });
      },
      { threshold: 0.55 }
    );

    pageRefs.current.forEach((section, index) => {
      if (section) {
        section.dataset.index = index;
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index) => {
    setActivePage(index);

    const section = pageRefs.current[index];
    const container = pageListRef.current;

    if (section && container) {
      const sectionRect = section.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      const offset =
        sectionRect.top - containerRect.top + container.scrollTop;

      container.scrollTo({
        top: Math.max(0, Math.floor(offset)),
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = pageListRef.current;

    if (!container) return;

    const onWheel = (e) => {
      e.preventDefault();
    };

    const onTouchMove = (e) => {
      e.preventDefault();
    };

    container.addEventListener('wheel', onWheel, {
      passive: false,
    });

    container.addEventListener('touchmove', onTouchMove, {
      passive: false,
    });

    return () => {
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  // INTRO SCREEN FIRST
  if (!entered) {
    return <IntroPage onEnter={() => setEntered(true)} />;
  }

  return (
    <div className="app">
      <Navbar
        onNavigate={scrollToSection}
        finalPageIndex={finalPageIndex}
      />

      <AudioPlayer
        playlist={audioPlaylist}
        activeIndex={activePage}
      />

      <main
        ref={pageListRef}
        className="page-list"
        aria-hidden={false}
      >
        {/* HOME PAGE */}
        <section
          ref={(el) => (pageRefs.current[0] = el)}
          className="section section--hero"
        >
          <HomePage onNext={() => scrollToSection(1)} />
        </section>

        {/* MEMORY PAGES */}
        {memoryStories.map((memory, index) => (
          <section
            key={memory.id}
            ref={(el) => (pageRefs.current[index + 1] = el)}
            className="section section--memory"
          >
            <MemoryPage
              memory={memory}
              index={index + 1}
            />

            <div className="section-actions section-actions--split">

              <div>
                <SwipeButton
                  label="Previous memory ❤️"
                  variant="prev"
                  onClick={() => scrollToSection(index)}
                />
              </div>

              <div>
                <SwipeButton
                  label={
                    index + 1 < memoryStories.length
                      ? 'Click Here ❤️'
                      : 'Final Apology ❤️'
                  }
                  onClick={() => scrollToSection(index + 2)}
                />
              </div>

            </div>
          </section>
        ))}

        {/* FINAL PAGE */}
        <section
          ref={(el) =>
            (pageRefs.current[memoryStories.length + 1] = el)
          }
          className="section section--final"
        >
          <FinalPage onTop={() => scrollToSection(0)} />

          <div
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1000,
            }}
          >
            <SwipeButton
              label="Previous page ❤️"
              variant="prev"
              onClick={() =>
                scrollToSection(memoryStories.length)
              }
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;