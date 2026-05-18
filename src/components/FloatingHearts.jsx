import { motion } from 'framer-motion';

const heartPositions = [10, 20, 32, 48, 60, 74, 88];

function FloatingHearts() {
  return (
    <div className="floating-hearts">
      {heartPositions.map((left, index) => (
        <motion.span
          key={index}
          className="floating-heart"
          style={{ left: `${left}%`, bottom: `${10 + index * 6}%` }}
          animate={{ y: ['0%', '-130%'], opacity: [0.8, 0] }}
          transition={{ duration: 5 + index * 0.4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
        />
      ))}
    </div>
  );
}

export default FloatingHearts;
