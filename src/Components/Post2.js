import React from 'react';
// import './post.css';  // Import the CSS file for the post component
import image2 from '../Components/datast.jpeg';

function Post2() {
  return (
    <div className="post">
      <img src={image2} alt="Data Structure" className="post-image" />
      <div className="post-content">
        <h2>Data Structure</h2>
        <p>
        Data structures are the fundamental building blocks of computer programming. They define how data is organized, stored, and manipulated within a program. Understanding data structures is very important for developing efficient and effective algorithms. In this tutorial, we will explore the most commonly used data structures, including arrays, linked lists, stacks, queues, trees, and graphs.
        </p>
        <button className="read-more">Read More</button>
      </div>
    </div>
  );
}

export default Post2;
