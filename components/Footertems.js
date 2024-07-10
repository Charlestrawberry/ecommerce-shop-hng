"use client"
import React from "react";

const Footertems = ({ Links, title }) => {
  return (
    <>
    <ul>
      <h1 className="mb-1 font-bold ">{title}</h1>
      {Links.map((Link, i) => (
        <li key={i}>
            <div className='font-normal hover:text-teal-700 text-sm cursor-pointer leading-6 ' href={Link.link}>{Link.name}</div>
        </li>
      ))}
    </ul>
    </>
  );
};

export default Footertems;
