export default function About() {
  return (
    <>
      <h1 className="page-title">About Me</h1>
      <div className="divider" />

      <p>
        I’m Fatima Hamid, a full-stack developer focused on building
        scalable, API-driven applications with clean architecture and
        predictable UI behavior.
      </p>

      <div className="card">
        <h3>What I Do</h3>
        <p>
          I design and build modern web applications using React and
          Node.js, with a strong focus on data flow, async handling,
          and user experience.
        </p>
      </div>

      <div className="card">
        <h3>How I Approach Problems</h3>
        <p>
          I prioritize clarity, maintainability, and long-term scalability.
          I design systems to grow — not just to ship.
        </p>
      </div>

      <div className="card">
        <h3>Current Focus</h3>
        <p>
          • Frontend architecture<br/>
          • Backend integration<br/>
          • Performance-aware UI<br/>
          • Clean developer experience
        </p>
      </div>
    </>
  );
}
