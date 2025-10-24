import { Link, useParams } from "react-router-dom";

const hobbyDetails = {
  chess: {
    title: "Playing Chess",
    text:
      "I like chess because it trains strategic thinking. I play a few times a week online and with friends.",
  },
  reading: {
    title: "Reading Books",
    text:
      "Reading helps me relax and learn new things. I aim for at least one chapter a day.",
  },
  soccer: {
    title: "Playing Soccer",
    text:
      "Weekend games with friends keep me active and improve teamwork.",
  },
  watching: {
    title: "Watching Movies/Shows",
    text:
      "I enjoy sci-fi and documentaries. It's a nice way to unwind in the evenings.",
  },
};

export default function HobbyDetail() {
  const { id } = useParams();
  const data = hobbyDetails[id];

  if (!data) {
    return (
      <div className="page">
        <p>Hobby not found.</p>
        <Link to="/hobby" className="btn">Back</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to="/hobby" className="btn">← Back</Link>
      <h1>{data.title}</h1>
      <p>{data.text}</p>
    </div>
  );
}
