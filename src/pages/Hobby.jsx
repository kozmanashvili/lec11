import { Link } from "react-router-dom";

const hobbies = [
  { id: "chess", title: "playing chess" },
  { id: "reading", title: "reading book" },
  { id: "soccer", title: "playing soccer" },
  { id: "watching", title: "watching" },
];

export default function Hobby() {
  return (
    <div className="page">
      <h1>Hobby</h1>
      <div className="hobby-grid">
        {hobbies.map((h) => (
          <div key={h.id} className="hobby-card">
            <h3>{h.title}</h3>
            <Link to={`/hobby/${h.id}`} className="btn">
              show more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
