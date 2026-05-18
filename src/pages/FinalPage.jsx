import { motion } from 'framer-motion';

function FinalPage({ onTop }) {
  return (
    <div className="final-panel">
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        I’m Sorry ❤️
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
      >
        I know I made mistakes, and maybe words alone can’t fix everything instantly.
But if love means trying again, understanding each other, and holding on even after hard moments… then I still choose you. Every single time.
      </motion.p>

      

      <motion.button
        type="button"
        className="glow-button"
        onClick={onTop}
        whileHover={{ scale: 1.03, boxShadow: '0 28px 70px rgba(255, 27, 153, 0.4)' }}
        transition={{ duration: 0.25 }}
      >
        Read This Again 💌
      </motion.button>
    </div>
  );
}

export default FinalPage;
