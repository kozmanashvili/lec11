export default function Home() {
  return (
    <div className="page">
      <h1>Home</h1>
      <section className="home">
        <div className="avatar" aria-hidden>
          🙂
        </div>
        <div>
          <p>
            Random info about yourself. Add a short bio, tech stack, and what
            you enjoy building.
          </p>
          <div className="contact">
            <div>
              <strong>GitHub:</strong> <a href="https://github.com/" target="_blank" rel="noreferrer">your-handle</a>
            </div>
            <div>
              <strong>Email:</strong> you@example.com
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
