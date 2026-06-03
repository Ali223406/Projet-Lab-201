import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

export default function Blog() {
  return (
    <div className="blog-page">
      <h1>STOVE — Blog</h1>

      <div className="blog-list">

        <Link to="/article-1" className="blog-card">
          <h2>ARTICLE 01</h2>
          <p>Bienvenue à la maison : entrez dans l'univers de « Stove »</p>
        </Link>

        <Link to="/article-2" className="blog-card">
          <h2>ARTICLE 02</h2>
          <p>Les trois portes de « Stove » : décryptage des singles</p>
        </Link>

      </div>
    </div>
  );
}