import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

function SwipeButton({ label, onClick, variant = 'next' }) {
  const Icon = variant === 'prev' ? FiChevronUp : FiChevronDown;

  return (
    <button type="button" className="swipe-button" onClick={onClick}>
      <span>{label}</span>
      <Icon size={18} />
    </button>
  );
}

export default SwipeButton;
