import Router from 'next/router'
import React from 'react'
import requests from '../utils/requests'

function Nav() {
  return (
    <nav className="relative">
      <div className="flex space-x-10 overflow-y-hidden overflow-x-scroll whitespace-nowrap px-10 text-2xl scrollbar-hide sm:space-x-20 sm:px-20">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => Router.push(`/?genre=${key}`)}
            className="last-pr-24 duration:100ms transform cursor-pointer transition hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 h-10 w-1/12 bg-gradient-to-l from-[#06202A]" />
    </nav>
  )
}

export default Nav
