import React from 'react';
import { Link } from 'react-router';

export default function Home() {
  return (
    <div className="bg-slate-800 max-w-[1280px] h-90 m-auto mt-20 rounded-lg flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-9xl">My Mini Blog</h1>
        <Link to="/blogs">
          <button className="px-6 py-3 bg-sky-500 rounded-sm text-5xl hover:cursor-pointer hover:bg-cyan-400 transition-all">Blogs</button>
        </Link>
      </div>
    </div>
  );
}
