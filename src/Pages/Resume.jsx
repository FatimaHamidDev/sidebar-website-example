export default function Resume() {
  return (
    <>
      <h1 className="page-title">Resume</h1>
      <div className="section-divider" />

      <div className="card">
        <h3>Experience</h3>
        <p>
          Full-Stack Developer working with React, Node.js, Express,
          and MongoDB to build production-ready systems.
        </p>
      </div>

      <div className="card">
        <h3>Technical Skills</h3>
        <p>
          Frontend: React, JavaScript, UI Architecture<br/>
          Backend: Node.js, REST APIs, Authentication<br/>
          Database: MongoDB<br/>
          Tools: Git, GitHub, API Testing
        </p>
      </div>

      <div className="card">
        <h3>Strengths</h3>
        <p>
          System thinking, async data handling, clean abstractions,
          and user-first performance decisions.
        </p>
      </div>
    </>
  );
}
