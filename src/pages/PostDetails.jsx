import React from 'react';
import { HiMiniCalendarDays } from 'react-icons/hi2';
import { HiEye } from 'react-icons/hi2';
import { useParams } from 'react-router';
import postsData from '../postsData';

export default function PostDetails() {
  let { postID: postSlug } = useParams();
  const selectedPost = postsData.find(post => post.slug === postSlug);

  if (!selectedPost) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-white text-xl">Post not found!</div>
      </div>
    );
  }

  return (
    <div className="post max-w-screen-md mx-auto p-4 my-30 bg-slate-800 rounded-lg">
      <div className="post__title relative text-white font-bold text-2xl before:content-[''] before:absolute before:top-1/2 before:-left-5 before:w-1.5 before:h-9 before:bg-cyan-500 before:rounded before:bg-gradient-to-br before:from-sky-500 before:to-cyan-400 before:-translate-y-[25px] border-b-2 border-gray-700 pb-4">
        {selectedPost.title}
      </div>
      <div className="post__author flex items-center gap-4 mt-4 text-gray-300">
        <span className="flex items-center gap-2 text-xl">
          {/* <HiMiniUser /> */}
          <img src={selectedPost.author.avatar} alt="" className="w-6 h-6 rounded-full" />
          {selectedPost.author.name}
        </span>
        <span className="flex items-center gap-2 text-xl">
          <HiMiniCalendarDays />
          {selectedPost.publishDate}
        </span>
        <span className="flex items-center gap-2 text-xl">
          <HiEye />
          {selectedPost.views.toLocaleString()}
        </span>
      </div>
      <div className="post__banner my-6 rounded-md overflow-hidden">
        {selectedPost.banner ? <img src={selectedPost.banner} alt={selectedPost.title} className="w-full h-auto" loading="lazy" /> : null}
      </div>
      <div className="post__description text-2xl/8">{selectedPost.longDescription}</div>
    </div>
  );
}
