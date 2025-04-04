import React from 'react';
import postsData from '../postsData';
import { Link } from 'react-router';

export default function ShowBlogPosts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 max-w-screen-xl mx-auto p-4 place-items-center mt-15">
      {postsData.map(({ id, slug, title, author: { name: authorName, avatar: authorAvatar }, publishDate, shortDescription, banner }) => (
        <div key={id} className="w-[350px]">
          <div className="post flex flex-col bg-slate-800 p-3 rounded-lg w-full h-[470px]">
            <div className="post__banner flex-shrink-0">
              <img src={banner} alt="" className="object-cover object-center rounded-md w-full h-[180px]" />
            </div>
            <div className="post__content flex flex-col flex-grow">
              <h1 className="post__title text-lg mt-4 relative font-bold before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-17 before:h-[4px] before:rounded-md before:bg-gradient-to-br before:from-sky-500 before:to-cyan-400 before:-translate-y-1/2">
                {title}
              </h1>
              <p className="post__description text-gray-400 mt-5 text-wrap line-clamp-3">{shortDescription}</p>
              <div className="mt-auto">
                <div className="post__author text-gray-400 mt-5 text-sm flex justify-between items-center gap-2 border-b-2 border-gray-700 pb-4">
                  <span className="text-gray-300 flex items-center gap-2">
                    <img src={authorAvatar} alt="" className="w-6 h-6 rounded-full" />
                    {authorName}
                  </span>
                  <span className="text-gray-300">{publishDate}</span>
                </div>
                <Link to={`/postDetails/${slug}`}>
                  <button className="w-full px-5 py-2 mt-4 bg-sky-500 rounded-sm text-2xl hover:cursor-pointer hover:bg-cyan-400 transition-all">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
