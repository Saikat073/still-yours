import { motion } from 'framer-motion';
import FloatingHearts from '../components/FloatingHearts.jsx';
import SwipeButton from '../components/SwipeButton.jsx';

function HomePage({ onNext }) {
  return (
    <div className="hero-frame">
      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          Some Apologies Arrive Too Late.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
        >
          I miss you in every quiet moment.
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          I know I cannot undo the moments that hurt you, and maybe words alone are not enough to heal everything between us. But if love still remembers the quiet little things, then I hope it remembers how deeply I cared for you too. Every memory with you still lives gently inside my heart, and every silence reminds me of what I almost lost. I am truly sorry for the pain I caused. If I could, I would go back and hold your heart more carefully, more patiently, and with all the love you deserved from me from the very beginning.
        </motion.p>
      </div>

      <FloatingHearts />
      <SwipeButton label="Swipe for Memories ❤️" onClick={onNext} />
    </div>
  );
}

export default HomePage;
