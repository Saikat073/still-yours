import MemoryCard from '../components/MemoryCard.jsx';
import { motion } from 'framer-motion';

function MemoryPage({ memory, index }) {
  return (
    <div className="memory-page">
      
      <motion.div
        className="memory-page__headline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span>A SOFT REMINDER</span>
        <h2>{memory.title}</h2>
      </motion.div>

      <MemoryCard
        title={memory.title}
        quote={memory.quote}
        image={memory.image}
        video={memory.video}
        reverse={memory.reverse}
      />

    </div>
  );
}

export default MemoryPage;