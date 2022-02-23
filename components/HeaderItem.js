import React from 'react'

export default function HeaderItem({ Icon, title }) {
  return (
    <div>
      <div className="group flex w-12 cursor-pointer flex-col items-center hover:text-white sm:w-20">
        <Icon className="mb-1 h-8 w-8 group-hover:animate-bounce" />
        <p className=" tracking-widest opacity-0 group-hover:opacity-100 ">
          {title}
        </p>
      </div>
    </div>
  )
}
