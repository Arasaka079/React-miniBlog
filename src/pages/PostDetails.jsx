import React from 'react';
import { useParams } from 'react-router';
import postsData from '../postsData';

export default function PostDetails() {
  let { postID: postSlug } = useParams();
  const selectedPost = postsData.find(post => post.slug === postSlug);

  console.log(selectedPost);
  return (
    <div className="post max-w-screen-lg mx-auto p-4 mt-10 bg-slate-800 rounded-lg">
      <div className="post__banner"></div>
    </div>
  );
}
