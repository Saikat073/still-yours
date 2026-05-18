import { motion } from 'framer-motion';

function MemoryCard({ title, quote, image, video, reverse }) {
  return (
    <div className={`memory-card ${reverse ? 'memory-card--reverse' : ''}`}>
      
      <motion.div
        className="memory-card__photo"
        initial={{ opacity: 0, x: reverse ? 80 : -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >

        {video ? (
          <video
            src={video}
            controls
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img src={image} alt={title} />
        )}

      </motion.div>

      <motion.div
        className="memory-card__panel"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
      >
        <h3>{title}</h3>
        <p>{quote}</p>
      </motion.div>
    </div>
  );
}

export default MemoryCard;