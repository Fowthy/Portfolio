'use client'

import Link from "next/link";

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
   // first prevent the default behavior
   e.preventDefault();
   // get the href and remove everything before the hash (#)
   const href = e.currentTarget.href;
   const targetId = href.replace(/.*\#/, "");
   // get the element by id and use scrollIntoView
   const elem = document.getElementById(targetId);
   elem?.scrollIntoView({
     behavior: "smooth",
   });
 };

export default function Sidebar() {
  return (
    <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-fit h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full items-center flex opacity-80 overflow-y-auto">
      <ul className="space-y-2 font-medium">
        <li>
            <Link href="#home" onClick={handleScroll} className="flex items-center p-2 duration-300 transition-all text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
            </Link>
         </li>
         <li>
            <Link href="#CV" onClick={handleScroll} className="flex items-center p-2 duration-300 transition-all text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span className="flex-1 ml-3 whitespace-nowrap">CV</span>
            </Link>
         </li>
         <li>
            <Link href="#projects" onClick={handleScroll} className="flex items-center p-2 duration-300 transition-all text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span className="flex-1 ml-3 whitespace-nowrap">Projects</span>
            </Link>
         </li>
      </ul>
   </div>
</aside>

  )
}
