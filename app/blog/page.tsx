"use client";

import { useState } from "react";
import Image from "next/image";

const blogs = [
  {
    img: "/a.png",
    title:
      "Now There is a Pacemaker in the Bladder, Which Controls Urine Flow.",
    desc:
      "Urinary problems like urinary incontinence, overactive bladder...",
    content:
      "Urinary problems such as incontinence and bladder control issues are common. A bladder pacemaker helps regulate urine flow and improves quality of life significantly.",
  },
  {
    img: "/b.png",
    title:
      "Searching for a Neurologist in Jaipur? Here’s Your Detailed Overview",
    desc:
      "Have you noticed sudden tremors or shaking...",
    content:
      "Neurological symptoms like tremors, headaches, and memory issues should not be ignored. Early consultation improves diagnosis and treatment outcomes.",
  },
  {
    img: "/c.png",
    title:
      "Passionate about Brain Care – Top Neurology Doctor in Jaipur",
    desc:
      "Brain health is often ignored until symptoms appear...",
    content:
      "Brain health is essential. Regular checkups and early diagnosis help prevent serious neurological disorders and improve overall well-being.",
  },
  {
    img: "/12.png",
    title:
      "Advanced Treatment for Parkinson Disease in Jaipur",
    desc:
      "Parkinson’s Disease affects movement...",
    content:
      "Parkinson’s Disease causes tremors and stiffness. Advanced treatments like DBS significantly improve patient lifestyle and mobility.",
  },
];

export default function BlogGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full py-20 px-6 bg-gradient-to-br from-[#f7f9fc] via-blue-50 to-white">
      
      <h2 className="text-3xl font-semibold text-center mb-14 text-slate-800">
        Latest Blogs
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {blogs.map((blog, i) => {
          const isOpen = openIndex === i;

          return (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-white/70 backdrop-blur-lg border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500"
            >
              
              {/* image */}
              <div className="relative w-full h-[220px]">
                <Image
                  src={blog.img}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800 line-clamp-2">
                  {blog.title}
                </h3>

                {/* short desc */}
                <p className="text-sm text-slate-500 mt-2">
                  {blog.desc}
                </p>

                {/* full content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-slate-600">
                    {blog.content}
                  </p>
                </div>

                {/* button */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : i)
                  }
                  className="mt-4 text-sm font-medium text-teal-600 border border-teal-600 px-4 py-1.5 rounded-full hover:bg-teal-600 hover:text-white transition"
                >
                  {isOpen ? "Show Less ↑" : "Read More →"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}