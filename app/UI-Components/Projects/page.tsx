"use client";
import Link from "next/link";
import ProjectsData from "@/app/mockData/Projects.json"
import Newsletter from "../Index/Newsletter/page";
export default function Projects() {
  return (
    <>
      <div className="section-bg text-white flex flex-col">
        <h1 className="text-8xl GolosText pt-10"><p>Projects</p></h1>
        <div className="flex items-center text-xl mt-3">
          <Link href={"/"} className="hover:text-(--prim) transition-all duration-300">Home</Link>
          <i className="ri-arrow-right-wide-fill mt-1" />
          <h2 className="GolosText">Projects</h2>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%] py-30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ProjectsData.map((project, index) => (
            <div key={index}>
              <div className="project-card group">
                <Link href={`/UI-Components/Projects/${project.id}`}>
                  <div className="project-image relative w-full h-[550px] overflow-hidden rounded-2xl cursor-pointer">
                    <div className="project-img w-full h-full bg-cover group-hover:scale-110 transition-all duration-500 bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
                    <div className="absolute top-5 left-5 flex gap-2 z-50">
                      {project.tags.map((tag, index) => (
                        <div key={index} className="bg-white/20 backdrop-blur-sm text-white border border-gray-300 px-4 py-1 rounded-full hover:bg-(--prim) hover:border-transparent transition-all duration-300">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
                <div className="project-info my-5">
                  <Link href={`/UI-Components/Projects/${project.id}`}>
                    <h2 className="GolosText font-semibold text-4xl hover:text-(--prim) transition-all duration-300">{project.title}</h2>
                  </Link>
                  <h5 className="GolosText text-2xl mt-2">{project.location}</h5>
                  <p className="GolosText text-md text-gray-700">{project.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Newsletter />
    </>
  )
}

