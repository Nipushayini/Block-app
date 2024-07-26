import React from 'react';
import Post1 from './Post1';
import Post2 from './Post2';
import Post3 from './Post3';
import Post4 from './Post4';

// import './posts.css';  // Import the CSS file for the Posts component

function Posts() {
  return (
    <div>
      <Post1></Post1>
      <Post2></Post2>
      <Post3></Post3>
      <Post4></Post4>

    </div>
  );
}

export default Posts;
// <div className='recent-posts'>
//   <h2>Recent Posts</h2>
//   <ul>
//     <li><a href="/Post1">JavaScript</a></li>
//     <li><a href="/Post2">Data Structure</a></li>
//     <li><a href="/Post3">Algorithm</a></li>
//     <li><a href="/Post4">Computer Network</a></li>
//   </ul>