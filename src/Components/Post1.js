import React from 'react';
// import './post.css';  // Import the CSS file for the post component
import image1 from '../Components/JS.png';
function Post1() {
  return (
    <div className="post">
      <img src={image1} alt="JavaScript Tutorial" className="post-image" />
      <div className="post-content">
        <h2>JavaScript</h2>
        <p>
          JavaScript is the world most popular lightweight, interpreted compiled programming language. It is also known
          as scripting language for web pages. It is well-known for the development of web pages, many non-browser
          environments also use it. JavaScript can be used for Client-side developments as well as Server-side
          developments.
        </p>
        <button className="read-more">Read More</button>
      </div>
    </div>
  );
}

export default Post1;

