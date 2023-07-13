'use client'

import NavLink from "./navlink";

 let content = {
   home: {
       title: "Home",
         description: "This is the home page.",
   },
   cv: {
         title: "CV",
         description: "This is the CV page.",
   },
   projects: {
         title: "Projects",
         description: "This is the projects page.",
   }
 }

export default function Sidebar() {
  return (
    <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-fit h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full items-center flex opacity-80 overflow-y-auto">
      <ul className="space-y-2 font-medium">
         {Object.entries(content).map(([slug, {title, description}]) => (
            <NavLink key={slug} title={title} description={description} />
         ))}
      </ul>
   </div>
</aside>

  )
}
