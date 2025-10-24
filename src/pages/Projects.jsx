const projects = [
  {
    id: 1,
    title: "Project A",
    overview: "Short overview about Project A.",
    github: "https://github.com/kozmanashvili/123",
    vercel: "https://123-mauve-gamma.vercel.app",
  },
  {
    id: 2,
    title: "Project B",
    overview: "Short overview about Project B.",
    github: "https://github.com/your/repo-b",
    vercel: "https://your-app-b.vercel.app",
  },
  {
    id: 3,
    title: "Project C",
    overview: "Short overview about Project C.",
    github: "https://github.com/your/repo-c",
    vercel: "https://your-app-c.vercel.app",
  },
];

export default function Projects() {
  return (
    <div className="page">
      <h1>Projects</h1>
      <ul className="projects">
        {projects.map((p) => (
          <li key={p.id} className="project-card">
            <div className="project-thumb" aria-hidden>
              ⚛️
            </div>
            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.overview}</p>
              <div className="links">
                <a href={p.github} target="_blank" rel="noreferrer">
                  github
                </a>
                <a href={p.vercel} target="_blank" rel="noreferrer">
                  vercel
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
