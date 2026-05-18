function Home() {
  return (
    <>
      <header className="hero">
        <div>
          <p className="eyebrow">Welcome to your new React website</p>
          <h1>Build fast, modern pages with React</h1>
          <p>
            This starter website is now using React Router for multiple pages.
            Navigate between home, about, and contact sections.
          </p>
        </div>
      </header>

      <section className="content-section">
        <div className="features">
          <article>
            <h2>Clean structure</h2>
            <p>Organize content with reusable React components and scoped styles.</p>
          </article>
          <article>
            <h2>Fast performance</h2>
            <p>Vite delivers instant builds and hot module replacement for development.</p>
          </article>
          <article>
            <h2>Responsive design</h2>
            <p>Your site works on desktop, tablet, and mobile devices.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default Home;
