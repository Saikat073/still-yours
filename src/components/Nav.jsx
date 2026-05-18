import { FiChevronDown, FiHeart } from 'react-icons/fi';

function Navbar({ onNavigate, finalPageIndex }) {
  return (
    <header className="navbar navbar--minimal">
      <div className="navbar__brand">
        <span className="navbar__logo">❤️</span>
        <div>
          <strong>Romantic Apology</strong>
          <p>Love story in gentle scrolls</p>
        </div>
      </div>

      <div className="navbar__links" aria-hidden>
        <button type="button" onClick={() => onNavigate(0)}>
          Home
        </button>
        <button type="button" onClick={() => onNavigate(1)}>
          Memories
        </button>
        <button type="button" onClick={() => onNavigate(finalPageIndex)}>
          I’m Sorry
        </button>
        <span className="navbar__badge">
          <FiHeart /> Every page is yours
        </span>
      </div>
    </header>
  );
}

export default Navbar;
