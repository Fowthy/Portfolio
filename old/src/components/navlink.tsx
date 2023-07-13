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

export default function NavLink(props: any) {
  return (
        <li>
            <Link href="#home" onClick={handleScroll} className="flex items-center p-2 duration-300 transition-all text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span className="flex-1 ml-3 whitespace-nowrap">{props.title}</span>
            </Link>
         </li>


  )
}
