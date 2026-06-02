import "./Blog.css";

export default function Blog() {
  return (
    <div className="blog-page">
      <div className="blog-overlay" />

      <div className="blog-container">
        <h1 className="blog-title">STOVE - News</h1>

        <p className="blog-subtitle">
          Latest updates about Lana Del Rey
        </p>

        <div className="blog-list">

          <article className="blog-card">
            <h3>New single released</h3>
            <p>
              “Henry, Come On” opens a new chapter in the STOVE universe,
              blending nostalgia and cinematic emotion.
            </p>
          </article>

          <article className="blog-card">
            <h3>Album production</h3>
            <p>
              The STOVE project explores memory, home and dreamlike storytelling
              with vintage sound design.
            </p>
          </article>

        </div>
      </div>
    </div>
  );
}