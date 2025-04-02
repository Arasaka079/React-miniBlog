import React from 'react';

import { HiMiniChatBubbleBottomCenterText } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <div className="nav bg-gradient-to-br from-sky-500 to-cyan-400 ">
        <div className="nav-wrapper flex justify-between items-center h-14 max-w-[1280px] m-auto">
          <div className="nav-logo flex items-center gap-3 text-2xl font-bold">
            <span>
              <HiMiniChatBubbleBottomCenterText />
            </span>
            <h4>Mini Blog</h4>
          </div>
          <div className="nav-link flex justify-center items-center font-bold">
            <NavLink to="/" className={({ isActive }) => `nav-btn ${isActive ? 'bg-slate-900 rounded-md transition-all' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/blogs" className={({ isActive }) => `nav-btn ${isActive ? 'bg-slate-900 rounded-md transition-all' : ''}`}>
              Blogs
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
